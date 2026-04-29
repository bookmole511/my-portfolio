import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Active Directory Information Synchronization System",
        description: "Active Directory 인사정보 연동 시스템 (ADIS)은 MariaDB의 부서 및 직원 정보를 기준으로 Active Directory를 자동으로 구축하고 동기화하는 시스템입니다.",
        roles: ["Full-stack Developer"],
        image: "/images/feature-work/adis-main-image.png"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};