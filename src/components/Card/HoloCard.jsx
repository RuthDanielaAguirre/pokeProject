import { useState, useEffect } from "react";

export default function HoloCard({ pokemon }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  useEffect(() => {
    if (flipped) {
      const url = pokemon.cries?.latest;
      if (url) {
        const audio = new Audio(url);
        audio.play();
      }
    }
  }, [flipped]);

  const image = pokemon.sprites.other["home"].front_default;

  return (
    <div className="perspective w-60 h-80">
      <div
        onClick={handleClick}
        className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d group cursor-pointer ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Cara frontal */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-xl p-[2px] shadow-[0_0_25px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition duration-300">
          <div className="bg-black w-full h-full rounded-xl box-border flex flex-col items-center justify-center">
            <img
              src={image}
              alt={pokemon.name}
              className="w-32 h-32 object-contain z-10 drop-shadow-xl "
            />
            <p className="text-white font-bold uppercase mt-2 z-10 tracking-wide text-center">
              {pokemon.name}
            </p>
            {/* Capa de brillo en hover */}
            <div
              className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, white, transparent 40%)",
              }}
            />
          </div>
        </div>

        {/* Cara trasera */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-xl p-[2px] shadow-[0_0_25px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
          <div className="bg-gradient-to-bl from-black via-gray-900 to-slate-800 w-full h-full rounded-xl box-border flex flex-col items-center justify-center px-4 py-4 text-purple-100">
            <p className="font-bold text-center mb-2 text-purple-200 uppercase tracking-wide">Abilities</p>
            <ul className="text-center space-y-1 text-sm">
              {pokemon.abilities?.map((value, key) => (
                <li key={key}>• {value.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
