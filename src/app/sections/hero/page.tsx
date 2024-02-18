import Nombre from "@/app/components/name";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const ln = "Salazar";

  return (
    <div className="contaniner w-full px-2 sm:px-20  pt-2 h-svh area ">
      <ul className=" circles ">
        <li className=" hover:blur-0 "></li>
        <li className="  hover:blur-0"></li>
        <li className="  hover:blur-0"></li>
        <li className=" hover:blur-0"></li>
        <li className="  hover:blur-0"></li>
        <li className="  hover:blur-0"></li>
        <li className="  hover:blur-0"></li>
        <li className="  hover:blur-0"></li>
        <li className="  hover:blur-0"></li>
        <li className="  hover:blur-0"></li>
        <li className="  hover:blur-0"></li>
        <li className="  hover:blur-0"></li>
        <li className="  hover:blur-0"></li>
      </ul>
      <div className="mt-14 sm:w-11/12 gap-8 w-xs mx-2 sm:mx-auto sm:h-96 h-[90%]  flex max-sm:flex-col max-sm:gap-6 sm:mt-52 sm:border border-slate-900/40 bg-slate-600/30 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-100/10 p-6 pt-7 sm:p-7">
        <div className=" self-center  animate-fade-down   sm:mx-2  ">
          <Image
            src="/imgs/perfil.jpg"
            alt={"asd"}
            width={808}
            height={1080}
            priority={true}
            className="rounded-full w-52 mx-auto  mb-2"
          />

          <div className="flex justify-around mx-4 mt-6 sm:mt-10 h-9 max-sm:gap-3 max-sm:mx-7 ">
            <Link href="https://github.com/franvierdev">
              <Image
                src="/imgs/iconos/github2.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-slate-400/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="https://wa.link/70sm9h">
              <Image
                src="/imgs/iconos/whatsapp.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-slate-400/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="https://www.linkedin.com/in/francisco-salazar-7a91b6292">
              <Image
                src="/imgs/iconos/linkedin.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-slate-400/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="mailto:franccois.dev@gmail.com">
              <Image
                src="/imgs/iconos/email.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-slate-400/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
          </div>
        </div>
        <div className=" animate-fade-down text-blue-900 h-16  font-mono ">
          <p className="animate-jump-in font-bold text-3xl -mt-2 sm:text-5xl animate-duration-1000">
            I am...
          </p>
          <p className="sm:text-7xl text-5xl max-w-xs max-sm:-mt-4 text-[#9A9A9A] font-bold">
            <Nombre />
          </p>
          <p className="sm:text-8xl text-5xl max-sm:-mt-10 -mt-4 max-w-xs text-[#9A9A9A] font-bold">
            <Nombre nome={ln} />
          </p>
          <button className=" mt-24 sm:mt-[68px] inline-flex  bg-blue-600 rounded-xl text-slate-300 px-4 py-2">
            Download CV
          </button>
        </div>
        <div className="   animate-fade-down   sm:h-16  font-mono ">
          <p className="text-5xl text-[#9A9A9A]  font-bold">
            <Nombre nome="Desarrollador Web" />
          </p>
        </div>
      </div>
    </div>
  );
}
