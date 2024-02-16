import Image from "next/image";

export default function Hero() {
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
      <div className="mt-20 sm:w-7/12 mx-auto flex max-sm:flex-col max-sm:gap-10 sm:mt-72 ">
        <div className=" self-center animate-fade-down w-60  sm:mx-2  ">
          <Image
            src="/imgs/perfil.jpg"
            alt={"asd"}
            width={808 / 2}
            height={1080 / 2}
            className="rounded-full w-60  mb-2"
          />
          <div className="flex justify-around mt-6 sm:mt-10 mx-8">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
        </div>
        <div className=" mb-10 animate-fade-down  h-16  font-mono ">
          <p className="animate-jump-in animate-duration-1000">I am...</p>
          <p className="text-4xl text-[#9A9A9A] font-bold">
            Francisco Salazar.
          </p>
        </div>
        <div className="  mb-10 animate-fade-down   h-16  font-mono ">
          <p className="text-4xl text-[#9A9A9A] font-bold">Desarrollador Web</p>
        </div>
      </div>
    </div>
  );
}
