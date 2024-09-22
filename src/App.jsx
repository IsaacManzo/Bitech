import { Carousel } from "flowbite-react";
import "./App.css";
("use client");

function App() {
  return (
    <div className="flex flex-col justify-start items-center w-full max-w-none h-screen pt-[20%] xl:pt-[4%] lg:pt-[0%] md:pt-[2%] sm:pt-[20%]">
      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center w-full">
        <div className="mb-2 ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Bitech
          </span>
        </div>
        <div className="pb-5 md:mb-20 lg:mb-20 xl:mb-20">PROXIMAMENTE</div>
      </h1>
      <div className="w-full text-center">
        <p className="text-sm p-2 md:text-[19px] lg:text-[20px] md:text-base lg:text-lg xl:text-xl  font-normal text-gray-500 dark:text-gray-400 w-full pl-5">
          Nos especializamos en diseñar y desarrollar sitios web modernos,
          rápidos y totalmente optimizados para todos los dispositivos. Impulsa
          las ventas de tu negocio con una presencia en línea profesional y
          atractiva que conecte con tus clientes y potencie tu marca. Ya sea que
          necesites una tienda virtual, un portafolio o una plataforma
          empresarial, estamos aquí para transformar tu visión en realidad.
          ¡Llevá tu proyecto digital al siguiente nivel!
        </p>
      </div>
      <div className="mt-[10%] lg:mt-[5%] xl:text-xl text-3xl font-extrabold text-gray-900 dark:text-white">
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-5xl lg:text-5xl text-center w-full">
          <a
            href="https://www.instagram.com/bitech01/?hl=es-la"
            target="_blank"
          >
            <div className="w-full text-center"></div>
            <i
              className="fab fa-instagram fa-3x"
              style={{
                background:
                  "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4, #3f729b)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            ></i>
          </a>
        </h1>
      </div>
    </div>
  );
}

export default App;
