// 민주적인 삶 II - 블록 수업 데이터
const blocksData = [
    {
        id: 1,
        number: "블록 1",
        title: "오프닝 - 세계시민과의 만남",
        hours: "1차시",
        category: "opening",
        area: "오프닝",
        achievement: "단원 도입",
        description: "세계시민의 개념을 탐색하고 32차시 교육과정에 대한 기대감을 형성한다.",
        objectives: [
            "세계시민의 개념을 설명할 수 있다",
            "교육과정 구성을 이해하고 학습 기대를 표현할 수 있다"
        ],
        thinkingRoutine: "Connect-Extend-Challenge",
        keywords: ["세계시민", "세계화", "상호의존성", "글로벌 관점"],
        lessonPlan: "./지도안/블록01_오프닝_세계시민과의만남.html",
        worksheet: "./학습지/블록01_학습지_세계시민과의만남.html"
    },
    {
        id: 2,
        number: "블록 2",
        title: "세계시민의 가치와 태도 I",
        hours: "2-3차시",
        category: "area1",
        area: "영역1-① 사회정의와 평등",
        achievement: "[6민주01-01]",
        description: "세계시민으로서 갖춰야 할 가치와 태도를 탐구하고, 세계화와 상호의존성을 이해한다.",
        objectives: [
            "세계시민 가치 3가지 이상 말할 수 있다",
            "세계화와 상호의존성을 글로벌 사례로 설명할 수 있다"
        ],
        thinkingRoutine: "See-Think-Wonder",
        keywords: ["공감", "책임감", "존중", "협력"],
        lessonPlan: "./지도안/블록02_세계시민의_가치와_태도I.html",
        worksheet: "./학습지/블록02_학습지_세계시민의_가치와_태도I.html"
    },
    {
        id: 3,
        number: "블록 3",
        title: "세계시민의 가치와 태도 II",
        hours: "4-5차시",
        category: "area1",
        area: "영역1-① 사회정의와 평등",
        achievement: "[6민주01-01]",
        description: "문화 정체성과 SDGs를 이해하고 세계시민으로서의 역할을 인식한다.",
        objectives: [
            "문화 정체성의 중요성을 설명할 수 있다",
            "SDGs 17개 목표와 세계시민 역할을 연결할 수 있다"
        ],
        thinkingRoutine: "Connect-Extend-Challenge",
        keywords: ["문화 정체성", "다양성", "SDGs"],
        lessonPlan: "./지도안/블록03_세계시민의_가치와_태도II.html",
        worksheet: "./학습지/블록03_학습지_세계시민의_가치와_태도II.html"
    },
    {
        id: 4,
        number: "블록 4",
        title: "갈등과 평화적 해결",
        hours: "6-7차시",
        category: "area1",
        area: "영역1-② 평화와 갈등",
        achievement: "[6민주01-01]",
        description: "갈등의 유형을 분석하고 평화적 해결 방법을 탐구한다.",
        objectives: [
            "갈등 유형을 분류할 수 있다",
            "평화적 해결 방법을 제시할 수 있다"
        ],
        thinkingRoutine: "Think-Pair-Share",
        keywords: ["갈등", "평화", "대화", "중재", "협상"],
        lessonPlan: "./지도안/블록04_갈등과_평화적_해결.html",
        worksheet: "./학습지/블록04_학습지_갈등과_평화적_해결.html"
    },
    {
        id: 5,
        number: "블록 5",
        title: "갈등 분석과 바람직한 사회",
        hours: "8-9차시",
        category: "area1",
        area: "영역1-② 평화와 갈등",
        achievement: "[6민주01-02]",
        description: "갈등 사례를 심층 분석하여 바람직한 사회의 필요조건을 추론한다.",
        objectives: [
            "갈등 사례를 분석할 수 있다",
            "바람직한 사회 조건을 추론할 수 있다"
        ],
        thinkingRoutine: "Claim-Support-Question",
        keywords: ["갈등 분석", "바람직한 사회", "협력", "공존"],
        lessonPlan: "./지도안/블록05_갈등_분석과_바람직한_사회.html",
        worksheet: "./학습지/블록05_학습지_갈등_분석과_바람직한_사회.html"
    },
    {
        id: 6,
        number: "블록 6",
        title: "공정사회의 이해",
        hours: "10-11차시",
        category: "area1",
        area: "영역1-③ 공정사회와 시민참여",
        achievement: "[6민주01-03]",
        description: "빈곤·불평등의 개념을 이해하고 개인 참여의 중요성을 인식한다.",
        objectives: [
            "빈곤·불평등을 글로벌 맥락에서 설명할 수 있다",
            "개인 참여의 중요성을 이해할 수 있다"
        ],
        thinkingRoutine: "See-Think-Wonder, Think-Pair-Share",
        keywords: ["빈곤", "불평등", "공정사회", "시민참여"],
        lessonPlan: "./지도안/블록06_공정사회의_이해.html",
        worksheet: "./학습지/블록06_학습지_공정사회의_이해.html"
    },
    {
        id: 7,
        number: "블록 7",
        title: "자유·평등·정의의 실천",
        hours: "12-13차시",
        category: "area1",
        area: "영역1-③ 공정사회와 시민참여",
        achievement: "[6민주01-03]",
        description: "자유·평등·정의의 개념을 탐구하고 실천 방안을 수립한다.",
        objectives: [
            "자유·평등·정의를 글로벌 맥락에서 이해할 수 있다",
            "실천 방안을 구체적으로 제시할 수 있다"
        ],
        thinkingRoutine: "Claim-Support-Question, I Used to Think...Now I Think",
        keywords: ["자유", "평등", "정의", "공정사회", "실천"],
        lessonPlan: "./지도안/블록07_자유평등정의의_실천.html",
        worksheet: "./학습지/블록07_학습지_자유평등정의의_실천.html"
    },
    {
        id: 8,
        number: "블록 8",
        title: "총괄평가 I",
        hours: "14-15차시",
        category: "evaluation",
        area: "영역1 종합",
        achievement: "영역1 전체 평가",
        description: "영역1 학습 내용을 종합하고 포트폴리오로 정리한다.",
        objectives: [
            "영역1 내용을 종합적으로 이해하고 있다",
            "세계시민으로서 실천 계획을 수립할 수 있다"
        ],
        thinkingRoutine: "Connect-Extend-Challenge, I Used to Think...Now I Think",
        keywords: ["성찰", "포트폴리오", "실천"],
        lessonPlan: "./지도안/블록08_총괄평가I.html",
        worksheet: "./학습지/블록08_학습지_총괄평가I.html"
    },
    {
        id: 9,
        number: "블록 9",
        title: "글로벌 인권의 이해 I",
        hours: "16-17차시",
        category: "area2",
        area: "영역2-① 글로벌 인권",
        achievement: "[6민주02-01]",
        description: "세계인권선언과 유엔아동권리협약을 이해하고 글로벌 인권 이슈를 탐구한다.",
        objectives: [
            "세계인권선언과 유엔아동권리협약을 설명할 수 있다",
            "글로벌 인권 이슈를 구체적으로 제시할 수 있다"
        ],
        thinkingRoutine: "See-Think-Wonder",
        keywords: ["세계인권선언", "유엔아동권리협약", "디지털 인권", "AI 윤리"],
        lessonPlan: "./지도안/블록09_글로벌_인권의_이해I.html",
        worksheet: "./학습지/블록09_학습지_글로벌_인권의_이해I.html"
    },
    {
        id: 10,
        number: "블록 10",
        title: "글로벌 인권의 이해 II",
        hours: "18-19차시",
        category: "area2",
        area: "영역2-① 글로벌 인권",
        achievement: "[6민주02-01]",
        description: "글로벌 인권 침해 사례를 심층 탐구하고 원인과 해결방안을 분석한다.",
        objectives: [
            "인권 침해 사례를 조사·분석할 수 있다",
            "원인과 결과를 파악하고 해결방안을 제시할 수 있다"
        ],
        thinkingRoutine: "Claim-Support-Question",
        keywords: ["난민", "아동노동", "디지털 인권 침해", "AI 차별"],
        lessonPlan: "./지도안/블록10_글로벌_인권의_이해II.html",
        worksheet: "./학습지/블록10_학습지_글로벌_인권의_이해II.html"
    },
    {
        id: 11,
        number: "블록 11",
        title: "인권 보호 행동 계획",
        hours: "20-21차시",
        category: "area2",
        area: "영역2-① 글로벌 인권",
        achievement: "[6민주02-01], [6민주02-02]",
        description: "국가·사회·개인 차원의 인권 보호 행동 계획을 수립하고 디지털 시민성을 실천한다.",
        objectives: [
            "3차원 행동 계획을 구체적으로 수립할 수 있다",
            "디지털 시민으로서 책임을 인식할 수 있다"
        ],
        thinkingRoutine: "Think-Pair-Share, I Used to Think...Now I Think",
        keywords: ["행동 계획", "디지털 시민성", "실천", "국제 협력"],
        lessonPlan: "./지도안/블록11_인권_보호_행동_계획.html",
        worksheet: "./학습지/블록11_학습지_인권_보호_행동_계획.html"
    },
    {
        id: 12,
        number: "블록 12",
        title: "문화다양성의 가치 I",
        hours: "22-23차시",
        category: "area2",
        area: "영역2-② 문화다양성",
        achievement: "[6민주02-03]",
        description: "문화다양성의 개념과 중요성을 이해하고 포용의 가치를 인식한다.",
        objectives: [
            "문화다양성을 글로벌 맥락에서 설명할 수 있다",
            "포용의 가치를 실천할 의지를 가질 수 있다"
        ],
        thinkingRoutine: "See-Think-Wonder",
        keywords: ["문화다양성", "포용", "지구촌 발전"],
        lessonPlan: "./지도안/블록12_문화다양성의_가치I.html",
        worksheet: "./학습지/블록12_학습지_문화다양성의_가치I.html"
    },
    {
        id: 13,
        number: "블록 13",
        title: "문화다양성의 가치 II",
        hours: "24-25차시",
        category: "area2",
        area: "영역2-② 문화다양성",
        achievement: "[6민주02-03]",
        description: "문화 정체성을 탐구하고 세계 문화를 체험하며 문화 상대주의를 이해한다.",
        objectives: [
            "문화 정체성 요소를 설명할 수 있다",
            "문화 상대주의를 이해하고 존중 태도를 가질 수 있다"
        ],
        thinkingRoutine: "Think-Pair-Share",
        keywords: ["문화 정체성", "언어·신념·가치관", "문화 상대주의"],
        lessonPlan: "./지도안/블록13_문화다양성의_가치II.html",
        worksheet: "./학습지/블록13_학습지_문화다양성의_가치II.html"
    },
    {
        id: 14,
        number: "블록 14",
        title: "편견과 차별 극복",
        hours: "26-27차시",
        category: "area2",
        area: "영역2-② 문화다양성",
        achievement: "[6민주02-03]",
        description: "지구적 차원의 편견과 차별을 분석하고 지구촌 발전에 미치는 영향을 추론한다.",
        objectives: [
            "편견과 차별 사례를 분석할 수 있다",
            "지구촌 발전 영향을 추론할 수 있다"
        ],
        thinkingRoutine: "See-Think-Wonder, Claim-Support-Question",
        keywords: ["편견", "차별", "지구촌 발전", "국제 대응"],
        lessonPlan: "./지도안/블록14_편견과_차별_극복.html",
        worksheet: "./학습지/블록14_학습지_편견과_차별_극복.html"
    },
    {
        id: 15,
        number: "블록 15",
        title: "문화다양성 존중 실천",
        hours: "28-29차시",
        category: "area2",
        area: "영역2-② 문화다양성",
        achievement: "[6민주02-03]",
        description: "문화다양성 존중 실천 방안을 수립하고 캠페인을 기획·실행한다.",
        objectives: [
            "실천 계획을 구체적으로 수립할 수 있다",
            "캠페인을 기획하고 준비할 수 있다"
        ],
        thinkingRoutine: "Connect-Extend-Challenge, I Used to Think...Now I Think",
        keywords: ["실천", "캠페인", "홍보", "UNESCO"],
        lessonPlan: "./지도안/블록15_문화다양성_존중_실천.html",
        worksheet: "./학습지/블록15_학습지_문화다양성_존중_실천.html"
    },
    {
        id: 16,
        number: "블록 16",
        title: "총괄평가 II",
        hours: "30-31차시",
        category: "evaluation",
        area: "영역2 종합",
        achievement: "영역2 전체 평가",
        description: "영역2 학습 내용을 종합하고 문화다양성 존중 캠페인을 발표한다.",
        objectives: [
            "영역2 내용을 종합적으로 이해하고 있다",
            "캠페인을 성공적으로 발표하고 실행할 수 있다"
        ],
        thinkingRoutine: "Connect-Extend-Challenge, I Used to Think...Now I Think",
        keywords: ["성찰", "포트폴리오", "캠페인 발표"],
        lessonPlan: "./지도안/블록16_총괄평가II.html",
        worksheet: "./학습지/블록16_학습지_총괄평가II.html"
    },
    {
        id: 17,
        number: "블록 17",
        title: "클로징 - 세계시민으로 살아가기",
        hours: "32차시",
        category: "closing",
        area: "클로징",
        achievement: "단원 마무리",
        description: "32차시 전체 과정을 성찰하고 세계시민 실천 선언문을 작성한다.",
        objectives: [
            "전체 학습 내용을 성찰할 수 있다",
            "세계시민으로서 지속적 실천을 다짐할 수 있다"
        ],
        thinkingRoutine: "Connect-Extend-Challenge, I Used to Think...Now I Think",
        keywords: ["성찰", "다짐", "세계시민 선언문", "SDGs"],
        lessonPlan: "./지도안/블록17_클로징_세계시민으로_살아가기.html",
        worksheet: "./학습지/블록17_학습지_클로징_세계시민으로_살아가기.html"
    }
];

// 블록 카테고리 정의
const blockCategories = {
    opening: { name: "오프닝", color: "#2196F3" },
    area1: { name: "영역1 - 사회정의·평등", color: "#4CAF50" },
    area2: { name: "영역2 - 평화·인권", color: "#FF9800" },
    evaluation: { name: "총괄평가", color: "#9C27B0" },
    closing: { name: "클로징", color: "#2196F3" }
};
