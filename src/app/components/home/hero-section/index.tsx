'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HeroSection = () => {
  const socialIcon = [
    {
      img: "/images/icon/github-icon.svg",
      href: "https://github.com/bookmole511",
      icon: "github-icon",
    },
  ];
  const email = "wotjr511@gmail.com";
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true); 
      setTimeout(() => {  setIsCopied(false); }, 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  }

  return (
    <section>
      <div className="container">
        <div className="">
          <div className="w-full h-72">
            <Image
              src={"/images/hero-sec/banner-bg-img2.png"}
              alt="banner-img"
              width={1080}
              height={267}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-x border-border">
            <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
              <div className="absolute top-0 transform -translate-y-1/2">
                <div className="relative rounded-full border-4 border-white bg-white">
                  <Image
                    src={"/images/hero-sec/bookmole.png"}
                    alt="user-img"
                    width={145}
                    height={145}
                  
                  />
                </div>
                <span className="absolute bottom-2.5 right-6 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                <h1>Park JaeSeok</h1>
                <p className="text-violet-700 font-normal">
                  Full Stack Developer
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/icon/map-icon.svg"}
                    alt="map-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-primary">Suwon, Korea</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-2">
                  {socialIcon?.map((value, index) => {
                    return (
                      <Link
                        href={value?.href}
                        key={index}
                        className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-border rounded-full"
                      >
                        <Image
                          src={value?.img}
                          alt={value?.icon}
                          width={18}
                          height={18}
                        />
                      </Link>
                    );
                  })}
                </div>
                <Button 
                  className="h-auto rounded-full p-0"
                  onClick={copyToClipboard}
                  onMouseEnter={()=>setIsHovered(true)}
                  onMouseLeave={()=>setIsHovered(false)}
                >
                  <div className="group inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,#9282F8_12.17%,#F3CA4D_90.71%)]">
                    <span className="flex items-center gap-3 bg-primary group-hover:bg-transparent py-2.5 px-6 rounded-full min-w-45 justify-center group">
                      <div className="relative w-5 h-5 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="52 42 88 66"
                          width="20"
                          height="20"
                          className="absolute inset-0"
                        >
                          {/* 1. 컬러 아이콘 (아래층) */}
                          <g>
                            <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
                            <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
                            <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
                            <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
                            <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
                          </g>

                          {/* 2. White 오버레이 (위층) - hover 시 오른쪽부터 사라지면서 color가 왼쪽부터 채워짐 */}
                          <g className="group-hover:animate-sweep-to-color">
                            <path fill="#ffffff" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
                            <path fill="#ffffff" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
                            <path fill="#ffffff" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
                            <path fill="#ffffff" d="M72 74V48l24 18 24-18v26L96 92"/>
                            <path fill="#ffffff" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
                          </g>
                        </svg>
                      </div>

                      {/* 텍스트 */}
                      <span className="text-sm sm:text-base font-semibold text-white transition-all text-center flex-1">
                        {isCopied ? "Copied!" : isHovered ? "Copy Email" : "Get in touch"}
                      </span>
                    </span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
