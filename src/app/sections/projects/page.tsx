import Image from "next/image";
export default function Projects() {
  return (
    <div
      className=" container pt-20 max-sm:mt-20
     mx-auto "
    >
      <h2 className="sm:ms-20 max-sm:text-center text-5xl text-gray-800 font-bold animate-fade-right underline">
        Projects
      </h2>
      <div className="border mt-20 grid grid-rows-3 max-w-screen-xl items-center w-9/12 text-center mx-auto sm:grid-cols-2 gap-x-10 max-sm:gap-y-10 px-4">
        <div>
          <p className="text-3xl font-bold">Omnifood</p>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            explicabo aut blanditiis molestias, amet quam.
          </span>
        </div>
        <div>
          <Image
            src="/imgs/omnifood.png"
            alt=""
            width={2227}
            height={1237}
            className="sm:max-w-sm"
          />
        </div>
      </div>
    </div>
  );
}
