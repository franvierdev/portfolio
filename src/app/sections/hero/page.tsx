import Image from "next/image";

export default function Hero() {
  return (
    <div className=" w-screen h-screen area ">
      <ul className="  circles ">
        <li className="blur-sm hover:blur-0"></li>
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
      <div className="flex mt-20 gap-5">
        <div className=" backdrop-blur-sm  animate-fade-down max-w-xs mx-2 p-5 rounded-3xl min-h-80 border border-slate-100/10  bg-black/10 shadow-xl shadow-slate-500/20  mt-8 flex flex-col items-center gap-2 font-mono ">
          <Image
            src="/imgs/perfil.jpg"
            alt={"asd"}
            width={808}
            height={1080}
            className="rounded-full w-28    mb-2"
          />
          <p className="text-lg">Francisco Salazar</p>
          <p className="text-blue-600 font-bold">Desarrollador Web</p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            alias ex tenetur nemo sit, dignissimos tempora quos velit quo
            architecto, quaerat odio. Maxime error dolores cum ad, provident
            magnam molestias.
          </p>
        </div>
        <div className="  animate-fade-down  mx-2 p-5   mt-8 flex flex-col items-start gap-2 font-mono ">
          <p className="animate-jump-in animate-duration-1000">I am...</p>
          <p className="text-4xl text-blue-900/90 font-bold">
            Francisco Salazar.
          </p>
        </div>
      </div>
    </div>
  );
}
