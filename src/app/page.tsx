import Image from "next/image";
import Hero from "./sections/page";
import Projects from "./sections/projects/page";
import Technologies from "./sections/technologies/page";

export default function Home() {
  return (
    <>
      <main className=" sm:mt-40 2xl:mt-60 h-svh max-sm:mt-20">
        <Hero />
      </main>
      <section className="-mt-40 pb-20 2xl:-mt-60 bg-gray-100 " id="projects">
        <Projects />
      </section>
      <section className="py-10 bg-gray-900 text-gray-100">
        <Technologies />
      </section>
    </>
  );
}
