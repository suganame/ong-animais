import { useState } from "react";

export const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="w-full bg-primary fixed flex-column box-border min-h-[4rem] items-center p-[0.5rem]">
      <div className="flex justify-end">
        <div className="md:hidden block flex-none self-end">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden w-full items-center justify-center flex overflow-hidden transition-all duration-500 h-[calc(100vh-4rem)] ${
          showNavbar ? "opacity-100" : "opacity-0 h-0"
        }`}
      >
        <ul>
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Adote</a>
          </li>
          <li>
            <a>Doação</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-end w-full self-end">
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="hover:text-secondary">Inicio</a>
            </li>
            <li>
              <a className="hover:text-secondary">Adote</a>
            </li>
            <li>
              <a className="hover:text-secondary">Doação</a>
            </li>
            <li>
              <a className="hover:text-secondary">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
