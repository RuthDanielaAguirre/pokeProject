import { Link } from "react-router-dom";
import { BsLinkedin, BsEnvelope, BsGithub } from "react-icons/bs";
import pokeLogo from "../../assets/pokeLogo.png";

export function PokeFooter() {
  return (
    <footer className="bg-red-800 text-white px-4 py-8 position:fixed bottom-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center mt-2 md:items-start gap-4">
          <Link
            to="/">
            <img
              src={pokeLogo}
              alt="PokeProject"
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <div className="flex gap-6 text-sm font-bold mt-4 ">
            <Link
              to="/pokedex"
              className="hover:text-yellow-300 transition-colors hover:drop-shadow-lg"
            >
              POKEDEX
            </Link>
            <Link
              to="/objects"
              className="hover:text-yellow-300 transition-colors hover:drop-shadow-lg"
            >
              OBJECTS
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm">
            &copy; 2025 PokeProject™. All rights reserved.
          </p>
          <div className="flex gap-6 text-xl">
            <a
              href="https://www.linkedin.com/in/ruth-daniela-aguirre/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
            >
              <BsLinkedin />
            </a>
            <a
              href="mailto:ruthdanielaaguirre@gmail.com"
              className="hover:text-yellow-300 transition-colors"
            >
              <BsEnvelope />
            </a>
            <a
              href="https://github.com/RuthDanielaAguirre"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
            >
              <BsGithub />
            </a>
          </div>
        </div>
       
      </div>
    </footer>
  );
}
