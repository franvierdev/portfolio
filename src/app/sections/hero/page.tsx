import Nombre from "@/app/components/name";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const ln = "Salazar";

  return (
    <div className="contaniner w-full px-10 sm:px-20 h-svh area ">
      <ul className=" circles ">
        <li className="blur-sm hover:blur-0 "></li>
        <li className="blur-sm  hover:blur-0"></li>
        <li className="blur-sm  hover:blur-0"></li>
        <li className="blur-sm hover:blur-0"></li>
        <li className="blur-sm  hover:blur-0"></li>
        <li className="blur-sm  hover:blur-0"></li>
        <li className="blur-sm  hover:blur-0"></li>
        <li className="blur-sm  hover:blur-0"></li>
        <li className="blur-sm  hover:blur-0"></li>
        <li className="blur-sm  hover:blur-0"></li>
        <li className="blur-sm  hover:blur-0"></li>
        <li className="blur-sm  hover:blur-0"></li>
        <li className="blur-sm  hover:blur-0"></li>
      </ul>
      <div className="mt-20 sm:w-11/12 gap-8 mx-auto flex max-sm:flex-col max-sm:gap-10 sm:mt-72 ">
        <div className=" self-center animate-fade-down w-60  sm:mx-2  ">
          <Image
            src="/imgs/perfil.jpg"
            alt={"asd"}
            width={808}
            height={1080}
            className="rounded-full w-52 mx-auto  mb-2"
          />

          <div className="flex justify-around mt-6 sm:mt-10 max-sm:gap-3 max-sm:mx-7">
            <Link href="https://github.com/franvierdev">
              <Image
                src="/imgs/iconos/github2.png"
                alt="e-mail"
                width={32}
                height={32}
                className="p-1 max-sm:w-9 bg-slate-400/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="https://wa.link/70sm9h">
              <Image
                src="/imgs/iconos/whatsapp.png"
                alt="e-mail"
                width={32}
                height={32}
                className="p-1 max-sm:w-9 bg-slate-400/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="https://www.linkedin.com/in/francisco-salazar-7a91b6292">
              <Image
                src="/imgs/iconos/linkedin.png"
                alt="e-mail"
                width={32}
                height={32}
                className="p-1 max-sm:w-9 bg-slate-400/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="mailto:franccois.dev@gmail.com">
              <Image
                src="/imgs/iconos/email.png"
                alt="e-mail"
                width={32}
                height={32}
                className="p-1 max-sm:w-9 bg-slate-400/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
          </div>
        </div>
        <div className=" mb-10 animate-fade-down  h-16  font-mono ">
          <p className="animate-jump-in animate-duration-1000">I am...</p>
          <p className="sm:text-8xl text-6xl max-w-xs text-[#9A9A9A] font-bold">
            <Nombre />
          </p>
          <p className="sm:text-8xl text-6xl max-w-xs text-[#9A9A9A] font-bold">
            <Nombre nome={ln} />
          </p>
        </div>
        <div className="  mb-10 animate-fade-down   h-16  font-mono ">
          <p className="text-6xl text-[#9A9A9A]  font-bold">
            <Nombre nome="Desarrollador Web" />
          </p>
        </div>
      </div>
    </div>
  );
}
