import AboutMeSection from "@/components/pages/aboutMePage/aboutMeSection/AboutMeSection"
import GoalSection from "@/components/pages/aboutMePage/goalSection/GoalSection"
import FirstStepsSection from "@/components/pages/aboutMePage/firstStepsSection/FirstSteps"
import FirstProjectSection from "@/components/pages/aboutMePage/firstProjectSection/FirstProjectSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "O mnie",
  description: "Na tej stronie możesz się dowiedzieć wielu rzeczy o założycielu Frontnerdu."
}

const AboutMePage = () => {

  return (
    <main>
      <AboutMeSection />
      <GoalSection />
      <FirstStepsSection />
      <FirstProjectSection />
    </main>
  )
}

export default AboutMePage