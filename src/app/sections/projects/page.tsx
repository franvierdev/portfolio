import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  return (
    <div
      className=" container pt-20 max-sm:mt-20
     mx-auto "
    >
      <h2 className="sm:text-center max-sm:text-center text-5xl text-gray-800 font-semibold animate-fade-right underline">
        Projects
      </h2>
      <div className=" mt-10 grid grid-rows-3  max-w-screen-lg items-center w-11/12 sm:w-11/12 text-center mx-auto sm:grid-cols-2 gap-20 gap-x-0  max-sm:gap-y-1  sm:px-4">
        <div className="border max-w-sm sm:place-self-end place-self-center self-center ">
          <p className="text-3xl font-bold leading-10">Clima-App</p>
          <span>
            Proporciona información actualizada sobre las condiciones climáticas
            de diferentes ubicaciones geográficas.
          </span>
          <div className="flex justify-around leading-10">
            <p>ReactJs</p>
            <p>TailwindCss</p>
            <p>Vercel</p>
          </div>
        </div>
        <div
          className=" place-self-center max-w-xs max-sm:-mt-2 max-sm:pb-2 overflow-hidden
        "
        >
          <Link href={"https://clim-app-nu.vercel.app/"}>
            <Image
              src="/imgs/clima-app.png"
              alt=""
              width={1387}
              height={1018}
              className=" max-sm:max-w-xs  sm:w-72 hover:scale-110 duration-200 "
            />
          </Link>
        </div>
        <div className="max-sm:row-start-4 max-sm:row-end-5 sm:place-self-end place-self-center max-sm:-mt-4 max-sm:overflow-x-hidden max-sm:pb-10">
          <Link href={"https://franvierdev.github.io/Omnifood/"}>
            <Image
              src="/imgs/omnifood.png"
              alt=""
              width={2227}
              height={1237}
              className=" max-sm:max-w-xm sm:w-96 hover:scale-110 duration-200"
            />
          </Link>
        </div>
        <div className="border max-w-sm place-self-center self-center">
          <p className="text-3xl font-bold leading-10">Omnifood</p>
          <span>
            servicio de suscripción de comida que ofrece la entrega diaria de
            comidas saludables a domicilio.
          </span>
          <div className="flex justify-around leading-10">
            <p>HTML</p>
            <p>Css</p>
            <p>GitHub</p>
          </div>
        </div>
        <div className="border max-w-sm sm:place-self-end place-self-center self-center">
          <p className="text-3xl font-bold">Task-Manager</p>
          <span>
            Permite a los usuarios crear, editar y eliminar tareas. tecnologías
            Vite y React. lanzado en Vercel.
          </span>
          <div className="flex justify-around leading-10">
            <p>ReactJs</p>
            <p>Vite</p>
            <p>Vercel</p>
          </div>
        </div>
        <div className="place-self-center max-sm:mt-5 max-sm:overflow-hidden">
          <Link href={"https://react-task-mngr.vercel.app/"}>
            <Image
              src="/imgs/task-manager.png"
              alt=""
              width={2227}
              height={1237}
              className=" max-sm:max-w-xs sm:w-96 hover:scale-110 duration-200 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
