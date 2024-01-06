"use client";

import { useTranslations } from "next-intl";
import PrimaryButton from "./PrimaryButton";
import { Carousel } from "flowbite-react";
import Image from "next/image";

function ServiceSlider() {
  const t = useTranslations("Hompage");

  const sliders = [
    {
      id: 1,
      title: "Data Rooms",
      imgSrc: "/imgs/slide1.jpg",
      description:
        "This is the special room for collecting all the data inside The cabin",
    },
    {
      id: 2,
      title: "Networking",
      imgSrc: "/imgs/netwroking.png",
      description:
        "It is the linking of the various devices and systems in the home together so that You can control them all from anywhere, ..",
    },
    {
      id: 3,
      title: "Smart Home",
      imgSrc: "/imgs/slide3.jpg",
      description:
        "It is a system that monitors entry and exit through The card or the ﬁngerprint through the ﬁnger or the face .",
    },
  ];

  return (
    <section className=" bg-[#252B42] pb-2">
      <h2 className="text-center font-bold text-xl py-10 lg:text-3xl text-orange-400">
        Services and Products we provide
      </h2>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 border-2 border-gray-300 rounded-xl mx-1">
        <Carousel indicators={false} slide={false}>
          {sliders.map((slide) => {
            return (
              <div
                key={slide.id}
                className="flex flex-col lg:flex-row h-full items-center justify-around"
              >
                <div className="lg:w-[350px] lg:h-[200px] w-[150px] h-[100px] border-1 p-2 rounded bg-clip-border border-transparent bg-gradient-to-r from-gray-500 to-orange-400">
                  <Image
                    src={slide.imgSrc}
                    alt={`${slide.title}`}
                    width={200}
                    height={200}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="flex flex-row items-start max-sm:flex-col lg:flex-col gap-2 ">
                  <h5 className="text-white font-bold text-sm md:text-xl underline">
                    {slide.title}
                  </h5>
                  <p className="w-[260px] pt-2 lg:pt-0 max-sm:pt-0 text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-orange-400">
                    {slide.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default ServiceSlider;
