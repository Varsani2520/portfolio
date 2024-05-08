import Image from "next/image";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Portfolio from "./Component/Portfolio";
import Projects from "./Component/Projects";

export default function Home() {
  return (
    <>
      <About />
      <Projects />
      <Portfolio />
      <Contact />
    </>
  );
}
