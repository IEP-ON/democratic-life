#!/usr/bin/env python3
"""
자료모음 폴더 내 모든 파일을 텍스트로 변환하는 스크립트

지원 파일 형식:
- HWPX (한글 문서)
- PDF

필요 패키지:
- PyPDF2 (PDF 처리)
- olefile (HWPX 처리)
"""

import os
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import List, Dict
import PyPDF2


class DocumentConverter:
    """문서를 텍스트로 변환하는 클래스"""
    
    def __init__(self, base_dir: str):
        self.base_dir = Path(base_dir)
        self.output_dir = self.base_dir / "txt_output"
        self.output_dir.mkdir(exist_ok=True)
        self.conversion_log = []
    
    def convert_hwpx_to_text(self, hwpx_path: Path) -> str:
        """HWPX 파일을 텍스트로 변환"""
        try:
            text_content = []
            
            # HWPX는 ZIP 형식
            with zipfile.ZipFile(hwpx_path, 'r') as zip_file:
                # Contents 폴더 내 section*.xml 파일들에서 텍스트 추출
                for file_name in zip_file.namelist():
                    if file_name.startswith('Contents/section') and file_name.endswith('.xml'):
                        with zip_file.open(file_name) as xml_file:
                            tree = ET.parse(xml_file)
                            root = tree.getroot()
                            
                            # 네임스페이스 정의
                            ns = {'hp': 'http://www.hancom.co.kr/hwpml/2011/paragraph'}
                            
                            # 모든 텍스트 요소 추출
                            for text_elem in root.iter():
                                # 태그 이름에서 네임스페이스 제거
                                tag = text_elem.tag.split('}')[-1] if '}' in text_elem.tag else text_elem.tag
                                
                                # t 태그가 실제 텍스트를 포함
                                if tag == 't' and text_elem.text:
                                    text_content.append(text_elem.text)
            
            return '\n'.join(text_content)
        
        except Exception as e:
            error_msg = f"HWPX 변환 오류 ({hwpx_path.name}): {str(e)}"
            self.conversion_log.append(error_msg)
            return f"[변환 실패: {error_msg}]"
    
    def convert_pdf_to_text(self, pdf_path: Path) -> str:
        """PDF 파일을 텍스트로 변환"""
        try:
            text_content = []
            
            with open(pdf_path, 'rb') as pdf_file:
                pdf_reader = PyPDF2.PdfReader(pdf_file)
                
                for page_num, page in enumerate(pdf_reader.pages, 1):
                    text = page.extract_text()
                    if text.strip():
                        text_content.append(f"--- 페이지 {page_num} ---\n{text}")
            
            return '\n\n'.join(text_content)
        
        except Exception as e:
            error_msg = f"PDF 변환 오류 ({pdf_path.name}): {str(e)}"
            self.conversion_log.append(error_msg)
            return f"[변환 실패: {error_msg}]"
    
    def convert_file(self, file_path: Path) -> Dict[str, str]:
        """파일을 텍스트로 변환하고 저장"""
        file_info = {
            'original': str(file_path),
            'name': file_path.name,
            'extension': file_path.suffix.lower(),
            'status': 'pending'
        }
        
        # 파일 확장자에 따라 변환
        if file_info['extension'] == '.hwpx':
            text_content = self.convert_hwpx_to_text(file_path)
            file_info['status'] = 'success'
        elif file_info['extension'] == '.pdf':
            text_content = self.convert_pdf_to_text(file_path)
            file_info['status'] = 'success'
        else:
            text_content = f"[지원하지 않는 파일 형식: {file_info['extension']}]"
            file_info['status'] = 'skipped'
        
        # 텍스트 파일로 저장
        output_filename = file_path.stem + '.txt'
        
        # 하위 폴더 구조 유지
        relative_path = file_path.relative_to(self.base_dir)
        output_path = self.output_dir / relative_path.parent / output_filename
        output_path.parent.mkdir(parents=True, exist_ok=True)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            # 메타데이터 헤더 추가
            f.write(f"=" * 80 + "\n")
            f.write(f"원본 파일: {file_path.name}\n")
            f.write(f"파일 경로: {relative_path}\n")
            f.write(f"파일 크기: {file_path.stat().st_size:,} bytes\n")
            f.write(f"=" * 80 + "\n\n")
            f.write(text_content)
        
        file_info['output'] = str(output_path)
        return file_info
    
    def convert_all(self) -> List[Dict[str, str]]:
        """폴더 내 모든 문서 파일을 변환"""
        results = []
        
        # 모든 HWPX와 PDF 파일 찾기
        for ext in ['*.hwpx', '*.pdf']:
            for file_path in self.base_dir.rglob(ext):
                print(f"변환 중: {file_path.name}")
                result = self.convert_file(file_path)
                results.append(result)
                print(f"  → 완료: {result['status']}")
        
        return results
    
    def generate_report(self, results: List[Dict[str, str]]):
        """변환 결과 보고서 생성"""
        report_path = self.output_dir / "conversion_report.txt"
        
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write("=" * 80 + "\n")
            f.write("문서 변환 보고서\n")
            f.write("=" * 80 + "\n\n")
            
            # 통계
            total = len(results)
            success = sum(1 for r in results if r['status'] == 'success')
            skipped = sum(1 for r in results if r['status'] == 'skipped')
            
            f.write(f"총 파일 수: {total}\n")
            f.write(f"성공: {success}\n")
            f.write(f"건너뜀: {skipped}\n\n")
            
            # 파일별 상세 정보
            f.write("=" * 80 + "\n")
            f.write("파일별 변환 결과\n")
            f.write("=" * 80 + "\n\n")
            
            for i, result in enumerate(results, 1):
                f.write(f"{i}. {result['name']}\n")
                f.write(f"   상태: {result['status']}\n")
                f.write(f"   원본: {result['original']}\n")
                if 'output' in result:
                    f.write(f"   출력: {result['output']}\n")
                f.write("\n")
            
            # 오류 로그
            if self.conversion_log:
                f.write("=" * 80 + "\n")
                f.write("변환 오류 로그\n")
                f.write("=" * 80 + "\n\n")
                for log in self.conversion_log:
                    f.write(f"- {log}\n")
        
        print(f"\n보고서 생성 완료: {report_path}")


def main():
    """메인 실행 함수"""
    base_dir = "/Users/macqs/Documents/남대구초 교육과정 프로젝트/11월 7일(금)/민주적인 삶/자료모음"
    
    print("=" * 80)
    print("문서 변환 시작")
    print("=" * 80)
    print(f"대상 폴더: {base_dir}\n")
    
    converter = DocumentConverter(base_dir)
    results = converter.convert_all()
    converter.generate_report(results)
    
    print("\n" + "=" * 80)
    print("변환 완료!")
    print("=" * 80)
    print(f"출력 폴더: {converter.output_dir}")
    print(f"총 {len(results)}개 파일 처리 완료")


if __name__ == "__main__":
    main()
