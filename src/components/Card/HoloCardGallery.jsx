import { useEffect, useState } from "react";
import getFirstPokemon from "../../api/firstpokeapi";

const CardBase = ({ title, children }) => (
  <div className="flex flex-col items-center m-4">
    <h2 className="text-white font-semibold mb-2 text-center">{title}</h2>
    {children}
  </div>
);

export default function HoloCardGallery() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getFirstPokemon();
      setPokemon(data);
    };
    fetch();
  }, []);

  if (!pokemon) return null;

  const image = pokemon.sprites.other["home"].front_shiny;

  return (
    <div className="min-h-screen bg-gray-900 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">

      {/* A) Brillo de fondo */}
      <CardBase title="A) Brillo de fondo">
        <div className="relative w-60 h-80 bg-black rounded-xl overflow-hidden p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          <div className="w-full h-full bg-black rounded-xl flex flex-col items-center justify-center">
            <div
              className="absolute inset-0 opacity-20 rounded-xl"
              style={{
                background: "radial-gradient(circle at 30% 30%, white, transparent 40%)",
              }}
            />
            <img src={image} alt={pokemon.name} className="w-32 h-32 object-contain z-10" />
            <p className="text-white font-bold uppercase mt-2 z-10">{pokemon.name}</p>
          </div>
        </div>
      </CardBase>

      {/* B) Brillo encima */}
      <CardBase title="B) Brillo encima">
        <div className="relative w-60 h-80 bg-black rounded-xl overflow-hidden p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 group">
          <div className="w-full h-full bg-black rounded-xl flex flex-col items-center justify-center relative">
            <img src={image} alt={pokemon.name} className="w-32 h-32 object-contain z-10" />
            <p className="text-white font-bold uppercase mt-2 z-10">{pokemon.name}</p>
            <div
              className="absolute inset-0 rounded-xl pointer-events-none opacity-20 z-20"
              style={{
                background: "radial-gradient(circle at 30% 30%, white, transparent 40%)",
              }}
            />
          </div>
        </div>
      </CardBase>

      {/* C) Brillo solo en hover */}
      <CardBase title="C) Brillo en hover">
        <div className="relative w-60 h-80 bg-black rounded-xl overflow-hidden p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 group">
          <div className="w-full h-full bg-black rounded-xl flex flex-col items-center justify-center relative">
            <img src={image} alt={pokemon.name} className="w-32 h-32 object-contain z-10" />
            <p className="text-white font-bold uppercase mt-2 z-10">{pokemon.name}</p>
            <div
              className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-20"
              style={{
                background: "radial-gradient(circle at 30% 30%, white, transparent 40%)",
              }}
            />
          </div>
        </div>
      </CardBase>

      {/* D) Brillo constante y suave */}
      <CardBase title="D) Brillo suave constante">
        <div className="relative w-60 h-80 bg-black rounded-xl overflow-hidden p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          <div className="w-full h-full bg-black rounded-xl flex flex-col items-center justify-center relative">
            <img src={image} alt={pokemon.name} className="w-32 h-32 object-contain z-10" />
            <p className="text-white font-bold uppercase mt-2 z-10">{pokemon.name}</p>
            <div
              className="absolute inset-0 rounded-xl pointer-events-none opacity-10 animate-pulse z-0"
              style={{
                background: "radial-gradient(circle at 30% 30%, white, transparent 40%)",
              }}
            />
          </div>
        </div>
      </CardBase>

    </div>
  );
}
