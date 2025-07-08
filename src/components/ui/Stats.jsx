import Card from "./Card";

import puntodigital from "../../assets/images/puntodigital.webp";
import hospital from "../../assets/images/hospital.jpg";
import municipalidadalberti from "../../assets/images/municipalidadalberti.jpg";

import {
  totalesJunio2025,
  totalesPorPlantaJunio2025,
} from "../../data/junio2025";

const Stats = () => {
  const { generacion, ingresos, capacidad } = totalesJunio2025;

  const Plantations = [
    {
      image: puntodigital.src,
      place: "Punto Digital",
      title: `${totalesPorPlantaJunio2025["Punto Digital"].generacion.toFixed(
        1
      )} kWh generados`,
      paragraph: `Ingresos: $${totalesPorPlantaJunio2025[
        "Punto Digital"
      ].ingresos.toLocaleString("es-AR", {
        minimumFractionDigits: 2,
      })}`,
    },
    {
      image: hospital.src,
      place: "Hospital Municipal",
      title: `${totalesPorPlantaJunio2025[
        "Hospital Municipal"
      ].generacion.toFixed(1)} kWh generados`,
      paragraph: `Ingresos: $${totalesPorPlantaJunio2025[
        "Hospital Municipal"
      ].ingresos.toLocaleString("es-AR", {
        minimumFractionDigits: 2,
      })}`,
    },
    {
      image: municipalidadalberti.src,
      place: "Palacio Municipal",
      title: `${totalesPorPlantaJunio2025[
        "Palacio Municipal"
      ].generacion.toFixed(1)} kWh generados`,
      paragraph: `Ingresos: $${totalesPorPlantaJunio2025[
        "Palacio Municipal"
      ].ingresos.toLocaleString("es-AR", {
        minimumFractionDigits: 2,
      })}`,
    },
  ];

  return (
    <div class="lg:mx-[2.6875rem] overflow-hidden py-24 border-x border-[#555555CC]">
      <div class="flex flex-col items-center">
        <div class="w-full flex flex-col items-center px-[0.75rem] smMd:px-[1.5rem] lg:px-0">
          <div class="w-full text-center text-balance">
            <h2 class="uppercase font-neuton font-bold text-[1.75rem] smMd:text-[3.25rem] tracking-[0.125rem] smMd:tracking-[0.13rem] pt-12 smMd:pt-20">
              Plantas Energéticas
            </h2>
            <p class="pt-0.5 smMd:pt-2 pb-4 smMd:pb-8 lg:pb-12 text-sm smMd:text-[1.375rem] leading-[1.125rem] smMd:leading-6 font-neuton font-normal">
              Estas son nuestras herramientas para crear un cambio en la
              industria energética
            </p>
          </div>
          <div class="flex smMd:flex-row flex-wrap gap-4 justify-center smMd:justify-between items-center w-full justify-self-end lg:flex-nowrap pt-10 pb-12 smMd:pb-20 px-[0.75rem] smMd:px-[1.5rem] lg:px-[8rem]">
            <label class="flex-1 flex justify-center items-center w-full h-[40px] smMd:h-[56px] aspect-[140/40] smMd:max-w-none lg:min-w-[203px] duration-300 ease-in-out border-[1px] border-[#555555CC] hover:bg-[#f8dc95] hover:text-[#253366] transition-transform hover:scale-110">
              <p class="flex-1 px-4 text-[#253366] bg-[#FFDC8A] smMd:bg-transparent smMd:text-inherit text-center h-full grid place-items-center font-neuton font-bold w-full aspect-square lg:text-[1.375rem] lg:leading-[1.5625rem]">
                <strong>Ingresos totales: </strong> $
                {ingresos.toLocaleString("es-AR", { minimumFractionDigits: 2 })}
              </p>
            </label>
            <label class="flex-1 flex justify-center items-center w-full h-[40px] smMd:h-[56px] aspect-[140/40] smMd:max-w-none lg:min-w-[203px] duration-300 ease-in-out border-[1px] border-[#555555CC] hover:bg-[#f8dc95] hover:text-[#253366] transition-transform hover:scale-110">
              <p class="flex-1 px-4 text-[#253366] bg-[#FFDC8A] smMd:bg-transparent smMd:text-inherit text-center h-full grid place-items-center font-neuton font-bold w-full aspect-square lg:text-[1.375rem] lg:leading-[1.5625rem]">
                <strong>Generación total: </strong> {generacion.toFixed(1)} kWh
              </p>
            </label>
            <label class="flex-1 flex justify-center items-center w-full h-[40px] smMd:h-[56px] aspect-[140/40] smMd:max-w-none lg:min-w-[203px] duration-300 ease-in-out border-[1px] border-[#555555CC] hover:bg-[#f8dc95] hover:text-[#253366] transition-transform hover:scale-110">
              <p class="flex-1 px-4 text-[#253366] bg-[#FFDC8A] smMd:bg-transparent smMd:text-inherit text-center h-full grid place-items-center font-neuton font-bold w-full aspect-square lg:text-[1.375rem] lg:leading-[1.5625rem]">
                <strong>Capacidad instalada: </strong> {capacidad} kW
              </p>
            </label>
          </div>
          <div class="w-full flex flex-col justify-center -mt-[1px]">
            <div class="w-full grid grid-cols-4 smMd:flex smMd:flex-wrap smMd:justify-center px-0 smMd:px-4 gap-[0.6875rem] smMd:gap-4 pb-6 smMd:pb-12 lg:pb-20 border-x border-[#555555CC]">
              {Plantations.map((plant, i) => (
                <Card
                  key={i}
                  image={plant.image}
                  title={plant.title}
                  place={plant.place}
                  paragraph={plant.paragraph}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
