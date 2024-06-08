import Image from "next/image";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";
import Experiance from "./Component/Experiance";
import Skills from "./Component/Skills";
import BackToTopButton from "./Component/BackToTopButton";
export default function Home() {
  return (
    <>
      <About />
      <Projects />
      <Experiance />
      <Skills/>
      <Contact />
      <BackToTopButton/>
    </>
  );
}
