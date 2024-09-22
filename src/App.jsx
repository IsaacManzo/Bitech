import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-start items-center w-full max-w-full h-screen p-0">
    <h1 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center w-full">
      <div className="mb-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Bitech
        </span>
      </div>
      <div className="pb-5 md:pb-20 lg:pb-20 xl:pb-20"> PROXIMAMENTE</div>
    </h1>
    <div className="w-full text-center">
      <p className="text-sm md:text-base lg:text-lg xl:text-xl font-normal text-gray-500 dark:text-gray-400 w-full">
        Nos especializamos en diseñar y desarrollar sitios web modernos,
        rápidos y totalmente optimizados para todos los dispositivos. Impulsa
        las ventas de tu negocio con una presencia en línea profesional y
        atractiva que conecte con tus clientes y potencie tu marca. Ya sea que
        necesites una tienda virtual, un portafolio o una plataforma
        empresarial, estamos aquí para transformar tu visión en realidad.
        ¡Llevá tu proyecto digital al siguiente nivel!
      </p>
    </div>
  </div>
  
  );
}

export default App;
