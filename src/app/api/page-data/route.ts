import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/modoosone-mini-logo.svg",
        role: "Full-Stack Developer",
        location: "Paju, South Korea",
        startYear: "2021",
        endYear: "2025",
        bulletPoints: [
            "대용량 로그 조회 API 성능 최적화로, 기존 타임아웃 이슈를 해결하고 10초 이내 응답하도록 시스템 안정화",
            "인원 부족으로 위험에 처한 대형 프로젝트를 리딩하여, 예정 기한 내 안정적인 납품을 이끌어냄",
            "팀 내 다양한 기술 스택(DRF, Svelte, Docker 등) 도입을 적극 리드하고, 팀원 교육 및 지식 공유를 통해 개발 생산성 향상",
            "AI 기반 개발 프로세스 구축 및 정보 공유를 주도, 팀의 개발 효율성을 높임",
            "다수의 프로젝트에서 핵심 개발자로 참여하며 백엔드 아키텍처 설계 및 안정적인 서비스 운영에 기여"
        ]
    },
]

const educationData = [
    {
        date: "Sep 2025 - May 2026",
        title: "default",
        subtitle: "default"
    },
];


const projectOverview = {
    caseStudies: [
        { name: "Ticket-Relay", url: "https://github.com/bookmole511/ticket-relay" },
        { name: "Multi-Cloud-Control", url: "https://github.com/bookmole511/Cloud-Control" },
    ],
    sideProjects: [
        { name: "default", url: "#" },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};