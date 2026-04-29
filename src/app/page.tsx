import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
// import Education from "./components/home/education"
import Experience from "./components/home/experience"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import ProjectOverview from "./components/home/project-overview"

const page = () => {
  return (
    <main>
      {/* 상단 배너 */}
      <HeroSection/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      {/* 주요 작품 ADIS */}
      <FeaturedWork/>
      <Divider/>
      {/* 경험 > 경력으로 대체 */}
      <Experience/>
      <Divider/>
      {/* <Education/>  */}
      <Divider/>
      {/* 프로젝트 프리뷰  Cloud-control ticket-relay cc */}
      <ProjectOverview/>
      <Divider/>
    </main>
  )
}

export default page