import Nombre from "@/app/components/name";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="contaniner w-full px-2 sm:px-20  pt-2 h-svh area ">
      <ul className=" circles ">
        <li className=" hover:blur  "></li>
        <li className="  hover:blur"></li>
        <li className="  hover:blur"></li>
        <li className="  hover:blur"></li>
        <li className="  hover:blur"></li>
        <li className="  hover:blur"></li>
        <li className="  hover:blur"></li>
        <li className="  hover:blur"></li>
        <li className="  hover:blur"></li>
        <li className="  hover:blur"></li>
        <li className="  hover:blur"></li>
        <li className="  hover:blur"></li>
        <li className="  hover:blur"></li>
      </ul>
      <div className="mt-14 sm:mt-44 sm:w-11/12 max-w-5xl  gap-8 w-xs mx-2 sm:mx-auto sm:h-96 h-[90%]  flex max-sm:flex-col max-sm:gap-6 sm:border border-slate-900/40 bg-slate-800/70 backdrop-blur-md rounded-2xl shadow-lg shadow-slate-500/70 p-6 pt-7 sm:p-7">
        <div className=" self-center  animate-fade-down   sm:mx-2  ">
          <Image
            src="/imgs/perfil.jpg"
            alt={"asd"}
            width={808}
            height={1080}
            priority={true}
            className="rounded-2xl w-48 sm:w-52 mx-auto opacity-90 border-4 shadow-lg shadow-slate-800 border-slate-500 mb-2"
          />

          <div className="flex justify-around mx-4 mt-6 sm:mt-10 h-9 max-sm:gap-3 max-sm:mx-7 ">
            <Link href="https://github.com/franvierdev">
              <Image
                src="/imgs/iconos/github2.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-slate-400/70 hover:bg-slate-300/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="https://wa.link/70sm9h">
              <Image
                src="/imgs/iconos/whatsapp.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-slate-400/70 hover:bg-slate-300/70  backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="https://www.linkedin.com/in/francisco-salazar-7a91b6292">
              <Image
                src="/imgs/iconos/linkedin.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-slate-400/70  hover:bg-slate-300/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="mailto:franccois.dev@gmail.com">
              <Image
                src="/imgs/iconos/email.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-slate-400/70  hover:bg-slate-300/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
          </div>
        </div>
        <div className=" animate-fade-down sm:mt-8 h-16  ">
          <p className="sm:text-8xl text-5xl max-w-xs max-sm:-mt-4 text-[#9A9A9A] ">
            <Nombre />
          </p>
          <p className="sm:text-8xl text-5xl max-sm:-mt-10 -mt-8 max-w-xs text-[#9A9A9A]">
            <Nombre nome="Salazar" />
          </p>
          <div className=" animate-fade-down">
            <p className="text-7xl text-[#9A9A9A] sm:mt-4  font-bold">
              <Nombre nome="Web Developer" />
            </p>
            <div className="flex gap-4">
              <button className=" mt-12 sm:mt-9  inline-flex  bg-blue-700 shadow-inner shadow-blue-800 rounded-xl border border-blue-900 text-gray-200 font-bold px-4 py-2 hover:-translate-y-1 duration-200 hover:shadow-md hover:shadow-slate-500/70 hover:bg-blue-600 ">
                Download CV
              </button>
              <button className=" mt-12 sm:mt-9  inline-flex  bg-gray-300 shadow-inner shadow-gray-400 rounded-xl border border-gray-500 text-blue-700 font-bold px-4 py-2 hover:-translate-y-1 duration-200 hover:shadow-md hover:shadow-slate-500/70 hover:bg-white ">
                Explore More
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm max-sm:hidden text-gray-300 flex flex-col gap-4 justify-center ">
          <p className="text-4xl ">About me</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium tempore dolorem doloremque veniam dolore iusto eaque
            vero? Cumque eveniet ducimus quo, dolorem delectus minus minima
            inventore, consequatur perspiciatis ipsum nesciunt.
          </p>
        </div>
      </div>
    </div>
  );
}
