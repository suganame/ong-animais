import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <section className="flex items-center justify-center py-[5rem] bg-primary-content">
        <div className="p-4 lg:max-w-[90%] xl:max-w-[1200px] flex flex-row items-top gap-6">
          <div className="flex flex-col w-full">
            <h2 className="text-secondary font-bold text-5xl mb-4">
              Sobre a APAP
            </h2>
            <div className="font-normal">
              <p className="text-[#000]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                optio sequi quisquam placeat autem. Ex necessitatibus earum vero
                voluptates in libero alias? Cum a atque vel, vero rem reiciendis
                obcaecati. Vero dicta quo, ut laboriosam magnam consectetur
                soluta, sapiente, repellat quam maxime iste reiciendis
                temporibus animi totam voluptatibus! Ex maiores dicta unde ipsa
                sunt ipsum, odio sapiente saepe nam possimus!
              </p>
              <p className="text-[#000] mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                tempore facilis explicabo enim, laboriosam non eligendi
                voluptates pariatur nemo perspiciatis quia cum nesciunt illo
                voluptate, hic, fugiat repudiandae quibusdam minima!
              </p>
            </div>
          </div>
          <div className="w-full h-[100] bg-primary"></div>
        </div>
      </section>

      <section className="flex items-center justify-center py-[5rem] bg-secondary-content">
        <div className="p-4 lg:max-w-[90%] xl:max-w-[1200px] flex flex-row items-top gap-6">
          <div className="flex flex-col w-full">
            <h2 className="text-secondary font-bold text-5xl mb-8 text-center">
              Processo de Adoção
            </h2>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center py-[5rem] bg-secondary-content">
        <div className="p-4 lg:max-w-[90%] xl:max-w-[1200px] flex flex-row items-top gap-6">
          <div className="flex flex-col w-full">
            <h2 className="text-secondary font-bold text-5xl mb-8 text-center">
              Nossos Parceiros
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
