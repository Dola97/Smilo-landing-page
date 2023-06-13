import { Iteem } from "@/components/client/animation-item";
import { Services } from "@/constants/services";

export const ServicesSecttion = () => {
  return (
    <section className="">
      <div className=" mx-10 lg:mx-20">
        <p className=" font-bold text-indigo text-xs pb-4">SERVICES</p>
        <p className=" text-blue font-bold text-2xl lg:text-5xl  lg:w-[525px]">
          Feel amazing about your oral health
        </p>
      </div>

      <div className="grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1  place-items-center xl:gap-0  gap-x-6 lg:gap-0">
        {Services.map((service, key) => {
          return (
            <Iteem key={`ser${service.Icon}`}>
              <div
                id={service.bg}
                key={`ser_${service}${key}`}
                className=" p-4 rounded-[32px] bg-gray-light-100 flex flex-col  justify-start items-center  w-[290px] h-[360px] lg:w-[200px] lg:h-[300px] xl:w-[250px] xl:h-[300px] 2xl:w-[350px] 2xl:h-[460px]"
              >
                <div
                  className={`flex justify-center items-center ${service.bg} rounded-[32px] w-[258px] h-[200px] xl:w-[200px] xl:h-[150px] lg:w-[150px] lg:h-[250px] 2xl:w-[300px] 2xl:h-[250px]`}
                >
                  <service.Icon />
                </div>
                <p className=" text-blue text-xl font-bold pt-6 pb-2">
                  {service.name}
                </p>
                <p className=" text-blue text-base font-med opacity-50 text-center">
                  {service.decription}
                </p>
              </div>
            </Iteem>
          );
        })}
      </div>
    </section>
  );
};
