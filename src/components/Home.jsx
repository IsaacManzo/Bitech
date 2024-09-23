import React from "react";

import { motion } from "framer-motion";

import homeImage from "../assets/home.jpg";

const Home = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full max-w-none h-screen bg-black pt-[35%] xl:pt-[4%] lg:pt-[0%] md:pt-[2%] sm:pt-[10%]">
      <div>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: 40 }}
          transition={{ duration: 1.5 }}
          src={homeImage}
          alt=""
        />
      </div>
      <div className="mt-[50%] pl-[5%] pr-[5%] xl:mt-[15%] lg:mt-[15%] md:mt-[20%] sm:mt-[10%]">
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: 40 }}
          transition={{ duration: 3 }}
          className="text-white font-monospace text-center text-[20px]"
        >
          Nos especializamos en diseñar y desarrollar sitios web modernos,
          rápidos y totalmente optimizados para todos los dispositivos. Impulsa
          las ventas de tu negocio con una presencia en línea profesional y
          atractiva que conecte con tus clientes y potencie tu marca. Ya sea que
          necesites una tienda virtual, un portafolio o una plataforma
          empresarial, estamos aquí para transformar tu visión en realidad.
          ¡Llevá tu proyecto digital al siguiente nivel!
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
