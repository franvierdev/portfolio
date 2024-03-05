import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  return (
    <div
      className=" container pt-20 max-sm:mt-20
     mx-auto "
    >
      <h2 className="sm:ms-28 max-sm:text-center text-5xl text-gray-800 font-bold animate-fade-right underline">
        Projects
      </h2>
      <div className="border mt-10 grid grid-rows-3 max-w-screen-xl items-center w-11/12 sm:w-9/12 text-center mx-auto sm:grid-cols-2 gap-10  max-sm:gap-y-5  sm:px-4">
        <div className="border">
          <p className="text-3xl font-bold">Clima-App</p>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            explicabo aut blanditiis molestias, amet quam.
          </span>
        </div>

        <div
          className=" place-self-center border max-w-xs 
        "
        >
          <Link href={"https://clim-app-nu.vercel.app/"}>
            <Image
              src="/imgs/clima-app.png"
              alt=""
              width={1387}
              height={1018}
              className=" w-80  sm:max-w-sm hover:scale-150 duration-200 "
            />
          </Link>
        </div>
        <div className="max-sm:row-start-4 max-sm:row-end-5 place-self-center">
          <Link href={"https://franvierdev.github.io/Omnifood/"}>
            <Image
              src="/imgs/omnifood.png"
              alt=""
              width={2227}
              height={1237}
              className=" max-w-xs sm:max-w-sm hover:scale-150 duration-200"
            />
          </Link>
        </div>
        <div>
          <p className="text-3xl font-bold">Omnifood</p>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            explicabo aut blanditiis molestias, amet quam.
          </span>
        </div>
        <div>
          <p className="text-3xl font-bold">Task-Manager</p>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            explicabo aut blanditiis molestias, amet quam.
          </span>
        </div>
        <div className="place-self-center">
          <Link href={"https://franvierdev.github.io/Omnifood/"}>
            <Image
              src="/imgs/task-manager.png"
              alt=""
              width={2227}
              height={1237}
              className=" max-w-xs sm:max-w-sm hover:scale-150 duration-200 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
