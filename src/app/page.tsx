import Image from "next/image";
import Hero from "./sections/page";
import Projects from "./sections/projects/page";

export default function Home() {
  return (
    <>
      <div className=" sm:mt-40 2xl:mt-60 h-svh max-sm:mt-20">
        <Hero />
      </div>
      <div className="-mt-40 2xl:-mt-60 bg-gray-100 " id="p">
        <Projects />
      </div>
    </>
  );
}
