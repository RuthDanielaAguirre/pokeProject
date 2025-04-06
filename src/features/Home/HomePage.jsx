import pokeLogo from "../../assets/pokeLogo.png";
import pokeHome from "../../assets/pokeHome.png";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 h-full flex flex-wrap flex-col md:flex-row px-4 items-center  ">
      <div className="w-full flex flex-wrap justify-center mb-2">
        <img
          src={pokeLogo}
          className=" w-auto max-h-64 object-contain"
        />
      </div>
      <div className=" flex flex-wrap justify-around w-full items-center mb-10">
        <img src={pokeHome} className="w-auto max-h-100 object-contain  " />
        <p className="text-white w-[500px] ml-6 flex flex-wrap content-center sm:mt-10 font-bold">
          Atrévete a explorar un mundo donde cada criatura tiene su historia, su
          poder… y su magia. Desde los clásicos hasta los más desconocidos, esta
          Pokédex es tu guía para descubrir, escuchar y conectar con los Pokémon
          como nunca antes. Haz clic. Mira. Escucha. ¡Y prepárate para
          atraparlos a todos!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
