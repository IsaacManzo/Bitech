import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa"; // Importamos el ícono de Instagram
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
      <div className="mt-[30%] pl-[5%] pr-[5%] xl:mt-[0%] lg:mt-[0%] md:mt-[5%] sm:mt-[10%]">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: 40 }}
          transition={{ duration: 3 }}
          className="text-white font-monospace text-center text-[80px]"
        >
          PROXIMAMENTE
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: 20 }}
          transition={{ duration: 2 }}
          className="flex justify-center mt-4"
        >
          <a
            href="https://www.instagram.com/bitech01/?hl=es-la" // Reemplaza con el link de tu cuenta de Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-[300px]"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
