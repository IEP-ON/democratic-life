#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
학습모형 표기 제거 스크립트
"""

import re
from pathlib import Path

def remove_learning_model_row(file_path):
    """HTML 파일에서 학습모형 행 제거"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 학습모형 행 전체 제거 (tr 태그 포함)
    pattern = r'\s*<tr>\s*<th>학습모형</th>.*?</tr>\s*'
    new_content = re.sub(pattern, '\n', content, flags=re.DOTALL)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    """메인 실행 함수"""
    base_dir = Path(__file__).parent
    
    # 지도안 디렉터리들
    plan_dirs = [
        base_dir / "지도안",
        base_dir / "docs" / "지도안",
        base_dir / "report" / "지도안",
        base_dir / "자료모음" / "지도안"
    ]
    
    updated_count = 0
    
    for plan_dir in plan_dirs:
        if not plan_dir.exists():
            continue
            
        print(f"\n📁 {plan_dir.relative_to(base_dir)}")
        
        # 모든 HTML 파일 처리
        for file_path in plan_dir.glob("블록*.html"):
            if remove_learning_model_row(file_path):
                print(f"  ✅ {file_path.name}")
                updated_count += 1
            else:
                print(f"  ⏭️  {file_path.name} (변경 없음)")
    
    print(f"\n✨ 총 {updated_count}개 파일에서 학습모형 제거 완료")

if __name__ == "__main__":
    main()
