import pokeLogo from "../../assets/pokeLogo.png";
import pokeHome from "../../assets/pokeHome.png";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center px-4 py-10 gap-y-8">

      <div className="w-full flex justify-center">
        <img
          src={pokeLogo}
          className="w-auto max-h-[13rem] object-contain"
          alt="Pokédex Logo"
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        <img
          src={pokeHome}
          className="w-auto max-h-96 object-contain"
          alt="Hero Pokémon"
        />
        <p className="text-white text-lg font-semibold max-w-md text-center md:text-left">
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
