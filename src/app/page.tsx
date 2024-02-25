import Image from "next/image";
import Hero from "./sections/page";
import Projects from "./sections/projects/page";

export default function Home() {
  return (
    <>
      <div className="mb-96">
        <Hero />
      </div>
      <div className="" id="p">
        <Projects />
      </div>
    </>
  );
}
