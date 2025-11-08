#!/usr/bin/env python3
import sys

try:
    import PyPDF2
    
    pdf_path = "/Users/macqs/Documents/남대구초 교육과정 프로젝트/11월 7일(금)/민주적인 삶/민주적인 삶 II 교육과정 (최종).pdf"
    txt_path = "/Users/macqs/Documents/남대구초 교육과정 프로젝트/11월 7일(금)/민주적인 삶/민주적인_삶_II_교육과정_최종.txt"
    
    with open(pdf_path, 'rb') as pdf_file:
        pdf_reader = PyPDF2.PdfReader(pdf_file)
        text = ""
        
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            text += f"\n\n=== 페이지 {page_num + 1} ===\n\n"
            text += page.extract_text()
    
    with open(txt_path, 'w', encoding='utf-8') as txt_file:
        txt_file.write(text)
    
    print(f"PDF 변환 완료: {txt_path}")
    print(f"총 {len(pdf_reader.pages)} 페이지 변환됨")
    
except ImportError:
    print("PyPDF2 라이브러리가 설치되지 않았습니다.")
    print("설치 방법: pip3 install PyPDF2")
    sys.exit(1)
except Exception as e:
    print(f"오류 발생: {e}")
    sys.exit(1)
