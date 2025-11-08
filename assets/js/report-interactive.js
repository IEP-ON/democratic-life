// 블록 상세 정보
const blockDetails = {
    1: {
        title: "블록 1: 오프닝 - 세계시민과의 만남",
        session: "1차시",
        standard: "- (단원 도입)",
        routine: "Connect-Extend-Challenge",
        objectives: [
            "세계시민의 의미를 설명할 수 있다",
            "세계시민교육의 필요성을 글로벌 사례를 통해 이해할 수 있다",
            "민주적인 삶 II 교육과정에 대한 기대감을 가질 수 있다"
        ],
        activities: [
            "UNESCO 세계시민교육 소개 영상 시청",
            "세계시민 개념 연결하기 (브레인스토밍)",
            "32차시 교육과정 소개",
            "마인드맵으로 도전 과제 그리기"
        ],
        materials: "세계시민-내지-학생용-0618.txt, 1-1_세계시민은_누구일까.txt",
        differentiation: "글로벌 맥락 강조, 도덕과 개인 도덕성과 구분",
        files: {
            plan: "지도안/블록01_오프닝_세계시민과의만남.html",
            worksheet: "학습지/블록01_학습지_세계시민과의만남.html"
        }
    },
    2: {
        title: "블록 2: 세계시민의 가치와 태도 I",
        session: "2-3차시",
        standard: "[6민주01-01]",
        routine: "See-Think-Wonder",
        objectives: [
            "세계시민으로서 갖춰야 할 가치를 3가지 이상 말할 수 있다 (공감, 책임감, 존중, 협력)",
            "세계화와 상호의존성을 글로벌 사례로 설명할 수 있다",
            "국제사회에서 세계시민으로서의 삶을 실천하기 위한 태도를 가질 수 있다"
        ],
        activities: [
            "[See] 글로벌 이슈 사진 10장 관찰 (난민, 국제원조, 기후변화, 무역)",
            "[Think] 세계시민 4가지 가치 생각하기",
            "[Wonder] UNESCO/NGO 영상 보고 궁금한 점 탐구",
            "세계시민 실천 약속 카드 작성"
        ],
        materials: "1-1_세계시민은_누구일까.txt, 세계시민-내지-학생용-0618.txt, UNESCO 영상",
        differentiation: "국제사회 맥락 강조, 도덕과 덕목(성실·효·우애)과 구분, 글로벌 이슈 중심",
        files: {
            plan: "지도안/블록02_세계시민의_가치와_태도I.html",
            worksheet: "학습지/블록02_학습지_세계시민의_가치와_태도I.html"
        }
    },
    3: {
        title: "블록 3: 세계시민의 가치와 태도 II",
        session: "4-5차시",
        standard: "[6민주01-01]",
        routine: "Think-Pair-Share, Connect-Extend-Challenge",
        objectives: [
            "문화 정체성에서 언어·신념·가치관의 중요성을 글로벌 맥락에서 설명할 수 있다",
            "다양성 존중의 필요성을 지구촌 발전과 연결하여 이해할 수 있다",
            "SDGs 17개 목표와 세계시민의 역할을 연결하여 행동 계획을 수립할 수 있다"
        ],
        activities: [
            "[Think-Pair-Share] 문화 정체성 탐구 (언어·신념·가치관)",
            "UNESCO 문화다양성 영상 시청",
            "[Connect-Extend-Challenge] SDGs 17개 목표 탐구",
            "실천 가능한 SDGs 행동 계획 수립"
        ],
        materials: "1-1_세계시민은_누구일까.txt (SDGs 부분), SDGs 포스터, UNESCO 영상",
        differentiation: "글로벌 문화다양성, SDGs(국제 목표), 유엔·국제 협력 강조",
        files: {
            plan: "지도안/블록03_세계시민의_가치와_태도II.html",
            worksheet: "예정"
        }
    }
};

// 모달 제어
function showBlockDetail(blockNum) {
    const block = blockDetails[blockNum];
    if (!block) {
        alert('블록 ' + blockNum + ' 정보는 준비 중입니다.');
        return;
    }
    
    const modal = document.getElementById('blockModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    let filesHtml = '';
    if (block.files.plan) {
        filesHtml += `<a href="#" onclick="openHtmlPreview('${block.files.plan}', '지도안'); return false;" class="file-link">📄 지도안 보기</a> `;
    }
    if (block.files.worksheet && block.files.worksheet !== '예정') {
        filesHtml += `<a href="#" onclick="openHtmlPreview('${block.files.worksheet}', '학습지'); return false;" class="file-link">📝 학습지 보기</a>`;
    }
    
    modalTitle.innerHTML = block.title;
    modalBody.innerHTML = `
        <div style="margin-bottom: 20px;">
            <h3 style="color: #1e3c72; margin-bottom: 10px;">기본 정보</h3>
            <p><strong>차시:</strong> ${block.session}</p>
            <p><strong>성취기준:</strong> ${block.standard}</p>
            <p><strong>사고루틴:</strong> ${block.routine}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="color: #1e3c72; margin-bottom: 10px;">학습목표</h3>
            <ul style="line-height: 2;">
                ${block.objectives.map(obj => `<li>${obj}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="color: #1e3c72; margin-bottom: 10px;">주요 활동</h3>
            <ul style="line-height: 2;">
                ${block.activities.map(act => `<li>${act}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="color: #1e3c72; margin-bottom: 10px;">활용 자료</h3>
            <p style="background: #f8f9fa; padding: 10px; border-radius: 5px;">${block.materials}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="color: #1e3c72; margin-bottom: 10px;">차별화 포인트</h3>
            <p style="background: #fff3e0; padding: 10px; border-radius: 5px; border-left: 4px solid #FF9800;">
                ${block.differentiation}
            </p>
        </div>
        
        <div style="margin-top: 25px; padding-top: 20px; border-top: 2px solid #e0e0e0; text-align: center;">
            <h3 style="color: #1e3c72; margin-bottom: 15px;">📥 산출물 다운로드</h3>
            ${filesHtml || '<p style="color: #999;">산출물 준비 중입니다</p>'}
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('blockModal').style.display = 'none';
}

// 스크롤 함수
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// 아코디언
function toggleAccordion(element) {
    const header = element;
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');
    
    // 모든 아코디언 닫기
    document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('active');
        h.nextElementSibling.classList.remove('active');
    });
    
    // 클릭한 아코디언 토글
    if (!isActive) {
        header.classList.add('active');
        content.classList.add('active');
    }
}

// 탭
function showTab(tabName) {
    // 모든 탭 콘텐츠 숨기기
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // 모든 탭 버튼 비활성화
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 선택한 탭 표시
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// 파일 열기 (마크다운/HTML 모두 웹에서 렌더링)
function openFile(filePath) {
    if (filePath.endsWith('.md')) {
        openMarkdownFile(filePath);
    } else if (filePath.endsWith('.html')) {
        openHtmlPreview(filePath, '문서');
    } else {
        window.open(filePath, '_blank');
    }
}

// 마크다운 파일 웹에서 렌더링
async function openMarkdownFile(filePath) {
    const modal = document.getElementById('mdModal');
    const title = document.getElementById('mdModalTitle');
    const content = document.getElementById('mdContent');
    
    // 파일명에서 제목 추출
    const fileName = filePath.split('/').pop().replace('.md', '');
    title.textContent = fileName;
    
    // 로딩 표시
    content.innerHTML = '<p style="text-align: center; padding: 40px; color: #666;">📄 문서를 불러오는 중...</p>';
    modal.style.display = 'block';
    
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error('파일을 찾을 수 없습니다.');
        }
        
        const markdown = await response.text();
        
        // marked.js로 마크다운을 HTML로 변환
        const html = marked.parse(markdown);
        
        // 스타일 적용된 HTML로 표시
        content.innerHTML = `
            <style>
                #mdContent { 
                    font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;
                    color: #333;
                }
                #mdContent h1 { 
                    font-size: 24pt; 
                    color: #1e3c72; 
                    border-bottom: 3px solid #1e3c72; 
                    padding-bottom: 10px; 
                    margin: 20px 0 15px 0;
                }
                #mdContent h2 { 
                    font-size: 20pt; 
                    color: #2a5298; 
                    border-bottom: 2px solid #ddd;
                    padding-bottom: 8px;
                    margin: 25px 0 12px 0;
                }
                #mdContent h3 { 
                    font-size: 16pt; 
                    color: #1e3c72; 
                    margin: 20px 0 10px 0;
                }
                #mdContent p { 
                    margin: 10px 0; 
                    line-height: 1.8;
                }
                #mdContent ul, #mdContent ol { 
                    margin: 10px 0; 
                    padding-left: 30px;
                    line-height: 1.8;
                }
                #mdContent li { 
                    margin: 6px 0;
                }
                #mdContent table { 
                    width: 100%; 
                    border-collapse: collapse; 
                    margin: 15px 0;
                    font-size: 10pt;
                }
                #mdContent th, #mdContent td { 
                    border: 1px solid #ddd; 
                    padding: 10px; 
                    text-align: left;
                }
                #mdContent th { 
                    background: #1e3c72; 
                    color: white; 
                    font-weight: 600;
                }
                #mdContent tr:nth-child(even) { 
                    background: #f8f9fa;
                }
                #mdContent code {
                    background: #f4f4f4;
                    padding: 2px 6px;
                    border-radius: 3px;
                    font-family: 'Courier New', monospace;
                    font-size: 10pt;
                }
                #mdContent pre {
                    background: #f4f4f4;
                    padding: 15px;
                    border-radius: 5px;
                    overflow-x: auto;
                    border-left: 4px solid #2196F3;
                }
                #mdContent pre code {
                    background: none;
                    padding: 0;
                }
                #mdContent blockquote {
                    border-left: 4px solid #2196F3;
                    padding-left: 15px;
                    margin: 15px 0;
                    color: #666;
                    font-style: italic;
                }
                #mdContent strong {
                    color: #1e3c72;
                    font-weight: 700;
                }
                #mdContent hr {
                    border: none;
                    border-top: 2px solid #ddd;
                    margin: 25px 0;
                }
            </style>
            ${html}
        `;
        
    } catch (error) {
        content.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <p style="font-size: 16pt; color: #f44336;">❌ 오류</p>
                <p style="color: #666; margin-top: 10px;">${error.message}</p>
                <p style="color: #999; font-size: 10pt; margin-top: 15px;">파일 경로: ${filePath}</p>
            </div>
        `;
    }
}

// 마크다운 모달 닫기
function closeMdModal() {
    document.getElementById('mdModal').style.display = 'none';
}

// HTML 미리보기 (지도안/학습지)
function openHtmlPreview(filePath, fileType) {
    const modal = document.getElementById('mdModal');
    const title = document.getElementById('mdModalTitle');
    const modalBody = document.getElementById('mdModalBody');
    
    title.textContent = fileType + ' 미리보기';
    
    modalBody.innerHTML = `
        <div style="margin-bottom: 15px; text-align: right;">
            <button onclick="window.open('${filePath}', '_blank')" 
                    style="background: #2196F3; color: white; border: none; padding: 10px 20px; 
                           border-radius: 5px; cursor: pointer; font-weight: 600;">
                🔗 새 탭에서 열기
            </button>
        </div>
        <iframe src="${filePath}" 
                style="width: 100%; height: 60vh; border: 1px solid #ddd; border-radius: 5px;"
                frameborder="0">
        </iframe>
    `;
    
    modal.style.display = 'block';
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
    const blockModal = document.getElementById('blockModal');
    const mdModal = document.getElementById('mdModal');
    
    if (event.target == blockModal) {
        blockModal.style.display = 'none';
    }
    if (event.target == mdModal) {
        mdModal.style.display = 'none';
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log('프로젝트 보고서 로드 완료');
});
