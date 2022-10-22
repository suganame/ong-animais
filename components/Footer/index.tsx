import Image from "next/image";
import busco from "../../public/img/busco.jpg";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full flex-col bg-secondary absolute bottom-0 max-h-[6rem]">
      {/* <div className="self-end bg-primary p-2">
        <p className="text-center">Feito por</p>
      </div> */}
      <div className="flex justify-between w-full bg-secondary p-2 items-center py-4">
        <div className="w-full bg-secondary flex justify-center mt-4">
          <div className="max-h-[120px] max-w-[120px]">
            <Image src={busco} alt="" />
          </div>
        </div>
        <div className="w-full p-2 h-full flex-col float-left">
          <h2 className="mb-2 opacity-70 text-lg">Menu</h2>
          <ul className="flex gap-4">
            <div>
              <li>
                <a href="">Inicio</a>
              </li>
              <li>
                <a href="">Adote</a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
            </div>
            <div>
              <li>
                <a href="">Doação</a>
              </li>
              <li>
                <a href="">Apadrinhe</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex justify-between w-full bg-primary p-2">
        <p>2022 © APAP - Associação de Proteção dos Animais de Penápolis.</p>
        <div className=""></div>
        <a href="#">Voltar ao Topo</a>
      </div>
    </footer>
  );
};
