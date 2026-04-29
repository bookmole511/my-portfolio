import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  const skills = [
    "Full Stack Development",
    "Backend Architecture",
    "Django REST Framework",
    "PHP & Laravel",
    "RESTful API Development",
    "Database Design & Optimization",
    "Docker & Containerization",
    "Clean Architecture",
    "Next.js & React",
    "TypeScript",
    "AI-Augmented Development",
  ];

  return (
    <section>
      <div className="container">
        <div className="border-x border-border bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                About Me
              </p>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-tight">
                Hey there. I'm Park JaeSeok — a Full Stack Developer based in Suwon, Korea.
              </h2>

              <h3 className="text-lg sm:text-xl text-secondary font-medium">
                논리적이고 견고한 시스템을 설계하고 구현하는 것을 좋아합니다.
              </h3>

              <h5 className="text-secondary font-normal leading-relaxed">
                전체적인 시스템 아키텍처를 설계하는 데 강점을 두고 있으며, 
                프론트엔드부터 백엔드까지 균형 있게 다루는 풀스택 개발자입니다.
                <br /><br />
                Django REST Framework, Spring Boot, PHP와 Laravel 등을 이용한 안정적이고 확장 가능한 
                백엔드 시스템 구축까지 다양한 프로젝트를 수행해왔으며,
                Next.js와 TypeScript를 활용한 현대적인 웹 애플리케이션 개발에도 능숙합니다. 
              </h5>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">
                Main Skills
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    variant="outline"
                    key={index}
                    className="py-1.5 px-3 rounded-lg h-full border-primary/30 hover:border-primary transition-colors"
                  >
                    <p className="text-xs sm:text-sm font-medium text-primary">
                      {skill}
                    </p>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;