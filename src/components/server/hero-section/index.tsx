import "server-only";

import { HeroLines } from "@/assest/svgs/lines";
import Image from "next/image";
import { CallIcon } from "@/assest/svgs/call";
import { ToothIcon } from "@/assest/svgs/tooth";
import { LockIcon } from "@/assest/svgs/lock";
import { heroSectionTexts } from "@/constants/text";
import { PointIcon } from "@/assest/svgs/point";

export const HeroSection = () => {
  const { title1, title2, content, button, callText, number, drName, drTitle } =
    heroSectionTexts;

  const LeftComponents = () => {
    return (
      <div className="flex flex-col my-10">
        <p className="truncate whitespace-normal break-words text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold">
          {title1}
        </p>
        <p className="truncate whitespace-normal break-words text-2xl lg:text-2xl  2xl:text-6xl font-bold mt-1">
          {title2}
        </p>
        <p className=" mt-8 2xl:w-2/4 xl:w-4/5  font-med text-blue text-sm sm:text-base lg:text-lg w-full opacity-70">
          {content}
        </p>
        <div className="flex items-start xl:items-center mt-16 flex-col xl:flex-row">
          <button
            type="button"
            className="relative bg-indigo py-2  sm:py-3 px-4 sm:px-10  rounded-xl overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-20"></span>
            <span className="relative z-10 text-sm font-bold text-white-app">
              {button}
            </span>
          </button>
          <div className="mt-6 flex items-center xl:ml-12 xl:mt-0   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
            <div className=" hover:animate-ping">
              <CallIcon />
            </div>
            <div className=" ml-4">
              <p className=" text-xs text-indigo font-bold">{callText}</p>
              <p className=" text-sm text-blue font-bold mt-1">{number}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const DocConatainer = () => {
    return (
      <div className="flex self-center lg:self-end relative lg:absolute lg:bottom-12 lg:right-48 p-3 rounded-3xl bg-gray-light-100 items-center justify-start">
        <div className="w-[56px] h-[56px] bg-sky flex items-center justify-center rounded-2xl ">
          <Image
            alt="Doc"
            width={60}
            height={60}
            className="rounded-2xl"
            src="/was.png"
          />
          <span className="relative flex h-3 w-3 self-end">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
          </span>
        </div>
        <div className=" ml-5">
          <p className=" text-sm text-blue font-bold">{drName}</p>
          <p className=" text-xs text-blue font-med opacity-60 mt-1">
            {drTitle}
          </p>
        </div>
      </div>
    );
  };
  return (
    <section className="relative w-11/12 bg-sky   rounded-r-3xl overflow-hidden h-900">
      <div className="absolute top-8 right-0 left-0 bottom-0  items-center h-fit hidden lg:flex">
        <HeroLines />
      </div>

      <div className=" mx-10 relative flex flex-col justify-between items-center lg:flex-row  ">
        <LeftComponents />
        <div className="lg:self-end absolute bottom-8 lg:bottom-12 -left-14 lg:left-auto lg:-right-16 flex w-16 h-16 sm:w-32 sm:h-32 cursor-pointer hover:animate-pulse">
          <LockIcon />
        </div>
        <DocConatainer />
        <div className="flex self-end bottom-10 lg:bottom-0 -right-8 lg:self-start absolute lg:relative lg:top-12 2xl:right-30  w-12 h-12 sm:w-24 sm:h-24 hover:animate-spin  cursor-pointer">
          <ToothIcon />
        </div>
        <div className="hidden lg:flex cursor-pointer hover:animate-pulse">
          <PointIcon />
        </div>
        {/* <div className="lg:self-end absolute bottom-8 lg:bottom-24 -left-14 lg:left-auto lg:-right-16 flex w-16 h-16 sm:w-32 sm:h-32">
          <SkyPoint />
        </div> */}
        <Image
          quality={90}
          width={500}
          height={500}
          className=" w-[300px] h-full md:h-full md:w-[350px] lg:w-[450px] lg:h-full  xl:w-[350px] xl:h-[300]  2xl:w-[442px] 2xl:h-[650px]"
          style={{
            objectFit: "contain",
          }}
          alt="hero-image"
          src="/hero-image.png"
        />
      </div>
    </section>
  );
};
