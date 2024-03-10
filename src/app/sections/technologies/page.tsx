export default function Technologies() {
  return (
    <section className="container mx-auto max-sm:text-center ">
      <h2 className=" sm:ms-28 text-5xl font-bold underline">Skills</h2>
      <ul className="flex max-sm:flex-col justify-between max-w-2xl gap-10 mx-auto mt-10">
        <li className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="mx-auto iconify  "
            width="39.6px"
            height="39.5px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 18.178l4.62-1.256l.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866l-2.52.667l-2.52-.667l-.158-1.844h-2.27l.329 3.544zM3 2h18l-1.623 18L12 22l-7.377-2z"
            ></path>
          </svg>
          <p className="">HTML 5</p>
        </li>
        <li className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="mx-auto"
            width="39.6px"
            height="39.5px"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M.132.162A.5.5 0 0 1 .5 0h14a.5.5 0 0 1 .498.542l-1 11.916a.5.5 0 0 1-.34.432l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1-.34-.432L.002.542a.5.5 0 0 1 .13-.38M11 3H4v1h6v2H6v1h4v2.14l-2.5.833L5 9.14V8H4v1.86l3.5 1.167L11 9.86z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p className="">CSS 3</p>
        </li>
        <p className="">JavaScript</p>
        <p className="">TypeScript</p>
        <p className="">Bootstrap</p>
        <p className="">Tailwind CSS</p>
        <p className="">React Js</p>
        <p className="">Vite</p>
        <p className="">Next Js</p>
      </ul>
    </section>
  );
}
