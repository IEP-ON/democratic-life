#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
LLM 흔적 기호(#, **) 제거 스크립트
"""

import re
from pathlib import Path

def remove_markdown_symbols(content):
    """마크다운 기호 제거 또는 변환"""
    
    # ** 기호 제거 (볼드체 표기)
    # **텍스트** → 텍스트 (단순 제거)
    content = re.sub(r'\*\*([^*]+)\*\*', r'\1', content)
    
    # ### 제목 → 제목 (HTML에서는 불필요)
    content = re.sub(r'^###\s+(.+)$', r'\1', content, flags=re.MULTILINE)
    content = re.sub(r'^##\s+(.+)$', r'\1', content, flags=re.MULTILINE)
    content = re.sub(r'^#\s+(.+)$', r'\1', content, flags=re.MULTILINE)
    
    return content

def process_html_file(file_path):
    """HTML 파일 처리"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    content = remove_markdown_symbols(content)
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    """메인 실행 함수"""
    base_dir = Path(__file__).parent
    
    # 모든 HTML 파일 처리
    dirs_to_process = [
        base_dir / "지도안",
        base_dir / "학습지",
        base_dir / "docs" / "지도안",
        base_dir / "docs" / "학습지",
        base_dir / "report" / "지도안",
        base_dir / "report" / "학습지",
        base_dir / "자료모음" / "지도안",
        base_dir / "자료모음" / "학습지"
    ]
    
    updated_count = 0
    
    for dir_path in dirs_to_process:
        if not dir_path.exists():
            continue
            
        print(f"\n📁 {dir_path.relative_to(base_dir)}")
        
        for file_path in dir_path.glob("*.html"):
            if process_html_file(file_path):
                print(f"  ✅ {file_path.name}")
                updated_count += 1
            else:
                print(f"  ⏭️  {file_path.name} (변경 없음)")
    
    print(f"\n✨ 총 {updated_count}개 파일에서 마크다운 기호 제거 완료")

if __name__ == "__main__":
    main()
