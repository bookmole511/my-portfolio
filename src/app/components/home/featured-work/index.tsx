"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DownloadButton from "@/components/ui/downloadButton";

const FeaturedWork = () => {
  const [featureWork, setFeatureWork] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/featured-work");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFeatureWork(data?.featureWork);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="border-x border-border">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                Featured work
              </p>
              <DownloadButton
                variant={"outline"}
                className="h-auto py-3 px-5"
                fileName="2026_ParkJaeseok_Portfolio.pdf"
                label="Download Portfolio"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 border-t border-border">
            {featureWork?.map((value: any, index: number) => (
              <div key={index}>
                <div className="group flex flex-col lg:flex-row gap-8 sm:gap-10 p-6 sm:p-10 lg:p-8 relative">
                  <Link 
                    href="/" 
                    className="overflow-hidden relative w-full lg:w-[68%] xl:w-[68%] 
                              aspect-16/10 lg:aspect-5/3 shrink-0 rounded-3xl shadow-lg"
                  >
                    <Image
                      src={value?.image}
                      alt={value?.title || "Project Image"}
                      fill
                      className="object-contain group-hover:scale-102 transition-all duration-700 ease-out p-4"
                    />
                  </Link>
                  <div className="flex flex-col justify-center flex-1 py-6 lg:py-10 lg:pl-4 relative z-10">
                    <Link href="/">
                      <h4 className="text-3xl font-semibold leading-tight mb-5 group-hover:text-primary transition-colors">
                        {value?.title}
                      </h4>
                    </Link>
                    <p className="text-muted-foreground text-lg sm:text-xl">
                      {value?.roles?.join(" • ")}
                    </p>
                    <br/>
                    <p className=" text-primary text-lg sm:text-xl break-keep">
                      {value?.description}
                    </p>
                  </div>
                </div>
                {index !== featureWork.length - 1 && (
                  <div className="border-b border-border mx-6 sm:mx-10 lg:mx-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
