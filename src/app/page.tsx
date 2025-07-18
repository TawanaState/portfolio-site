import { MotionConfig } from "motion/react"

import AboutSection from "./components/about/main";
import Main from "./components/hero/main";
import Skills from "./components/skills/main";
import Projects from "./components/projects/main";
import Contact from "./components/contact/main";
import Footer from "./components/footer/main";


export default function Home() {
  return (
    <>
    <MotionConfig transition={{ duration: 0.8 }}>
      <Main />
      <AboutSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </MotionConfig>
    </>
  );
}
