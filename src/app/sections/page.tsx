import Image from "next/image";
import Link from "next/link";
import Projects from "./projects/page";
export default function Hero() {
  return (
    <div className="">
      <div className="contaniner w-full px-2 sm:px-20  pt-2 h-svh area ">
        <ul className=" circles ">
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
        </ul>
      </div>
      <div className="max-sm:mt-6 lg:mt-16 xl:mt-28  sm:w-11/12 max-w-5xl  gap-8 w-xs mx-7 sm:mx-auto sm:h-96 h-[590px] flex max-sm:flex-col max-sm:gap-6 sm:border border-slate-900/40 bg-slate-800/70 backdrop-blur-md rounded-2xl shadow-lg shadow-slate-500/70 px-6 pt-7 sm:p-7">
        <div className=" self-center  animate-fade-down   sm:mx-2  ">
          <Image
            src="/imgs/perfil.jpg"
            alt={"asd"}
            width={808}
            height={1080}
            priority={true}
            className="rounded-2xl w-48 sm:w-52 mx-auto opacity-90 border-4 shadow-lg shadow-slate-800 border-slate-500 mb-2"
          />

          <div className="flex max-lg:flex-col max-sm:flex-row justify-around mx-4 mt-6 sm:mt-10 h-9 max-sm:gap-3 max-sm:mx-7 ">
            <Link href="https://github.com/franvierdev">
              <Image
                src="/imgs/iconos/github2.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-gray-400/90 hover:bg-slate-300/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="https://wa.link/70sm9h">
              <Image
                src="/imgs/iconos/whatsapp.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-gray-400/90 hover:bg-slate-300/70  backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="https://www.linkedin.com/in/francisco-salazar-7a91b6292">
              <Image
                src="/imgs/iconos/linkedin.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-gray-400/90  hover:bg-slate-300/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="mailto:franccois.dev@gmail.com">
              <Image
                src="/imgs/iconos/email.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-gray-400/90  hover:bg-slate-300/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
          </div>
        </div>
        <div className=" animate-fade-down sm:mt-8 mt-2 h-16  ">
          <p className="sm:text-6xl font-semibold text-4xl text-blue-500/80 max-w-xs max-sm:-mt-3  ">
            Francisco <br />
            Salazar
          </p>

          <div className=" animate-fade-down ">
            <p className="text-4xl max-sm:text-4xl text-gray-900/80  sm:mt-4  font-bold">
              Web Developer
            </p>
            <div className="flex gap-4 max-sm:mt-6">
              <button className="  sm:mt-9  inline-flex  bg-blue-600 shadow-inner shadow-blue-800 rounded-xl border border-blue-900 text-gray-200 hover:text-white font-bold px-4 py-2 hover:scale-105 duration-200   hover:shadow-blue-700 hover:shadow-inner hover:bg-blue-500 ">
                Download CV
              </button>
              <button className="  sm:mt-9  inline-flex  bg-gray-300 shadow-inner shadow-gray-400 rounded-xl border border-gray-500 text-blue-700 font-bold px-4 py-2 hover:scale-105 duration-200 hover:shadow-md hover:shadow-slate-500/70 hover:bg-white ">
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
      <Link
        href="#p"
        className="sm:absolute max-sm:hidden bottom-1 left-1/2  animate-bounce text-blue-700 text-4xl "
      >
        ▼
      </Link>
    </div>
  );
}
