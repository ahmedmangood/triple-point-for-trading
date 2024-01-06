"use client";

import { useTranslations } from "next-intl";
import PrimaryButton from "./PrimaryButton";
import { Carousel } from "flowbite-react";
import Image from "next/image";

function ServiceSlider() {
  const t = useTranslations("Hompage");
  const t2 = useTranslations("Services");
  const sliders = [
    {
      id: 1,
      title: t2("SmartHome-title"),
      imgSrc: "/imgs/slide3.jpg",
      description: t2("SmartHome-desc"),
    },
    {
      id: 2,
      title: t2("DataRoom-title"),
      imgSrc: "/imgs/slide1.jpg",
      description: t2("DataRoom-desc"),
    },
    {
      id: 3,
      title: t2("SystemNumbering-title"),
      imgSrc: "/imgs/slide3.jpg",
      description: t2("SystemNumbering-desc"),
    },
    {
      id: 4,
      title: t2("AccessControl-title"),
      imgSrc: "/imgs/slide3.jpg",
      description: t2("AccessControl-desc"),
    },
    {
      id: 5,
      title: t2("CCTVSystem-title"),
      imgSrc: "/imgs/slide3.jpg",
      description: t2("CCTVSystem-desc"),
    },
    {
      id: 6,
      title: t2("CCTVSystem-title"),
      imgSrc: "/imgs/slide3.jpg",
      description: t2("CCTVSystem-desc"),
    },
    {
      id: 7,
      title: t2("IntercomeSystem-title"),
      imgSrc: "/imgs/slide3.jpg",
      description: t2("IntercomeSystem-desc"),
    },
    {
      id: 8,
      title: t2("SystemSecurity-title"),
      imgSrc: "/imgs/slide3.jpg",
      description: t2("SystemSecurity-desc"),
    },
    {
      id: 9,
      title: t2("CenteralModern-title"),
      imgSrc: "/imgs/slide3.jpg",
      description: t2("CenteralModern-desc"),
    },
    {
      id: 10,
      title: t2("ElectricalWorks-title"),
      imgSrc: "/imgs/slide3.jpg",
      description: t2("ElectricalWorks-desc"),
    },
    {
      id: 11,
      title: t2("VideoDisplayWalls-title"),
      imgSrc: "/imgs/slide3.jpg",
      description: t2("VideoDisplayWalls-desc"),
    },
    {
      id: 12,
      title: t2("WebsitesAndMobileApps-title"),
      imgSrc: "/imgs/slide3.jpg",
      description: t2("WebsitesAndMobileApps-desc"),
    },
    {
      id: 13,
      title: t2("AdvertismentAndMarketing-title"),
      imgSrc: "/imgs/slide3.jpg",
      description: t2("AdvertismentAndMarketing-desc"),
    },
  ];

  return (
    <section className="h-screen bg-[#252B42] pb-2">
      <h2 className="text-center font-bold text-xl pt-10 pb-2 lg:text-3xl text-orange-400">
        {t2("services-title")}
      </h2>
      <div className="flex items-center justify-center pb-8">
        <svg
          className="flex justify-center items-center"
          xmlns="http://www.w3.org/2000/svg"
          width="359"
          height="22"
          viewBox="0 0 359 22"
          fill="none"
        >
          <path
            d="M2 2C19.7562 2 19.7562 20 37.5125 20C55.2687 20 55.2687 2 73.025 2C90.7812 2 90.7812 20 108.496 20C126.253 20 126.253 2 143.967 2C161.723 2 161.723 20 179.438 20C197.194 20 197.194 2 214.949 2C232.706 2 232.706 20 250.463 20C268.218 20 268.218 2 285.975 2C303.731 2 303.731 20 321.488 20C339.243 20 339.243 2 357 2"
            stroke="#4F4F4F"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="h-80 border-y-2 border-gray-300 mx-1">
        <Carousel indicators={false} slideInterval={3000}>
          {sliders.map((slide) => {
            return (
              <div
                key={slide.id}
                className="flex flex-col lg:flex-row h-full items-center justify-around"
              >
                <div className="lg:w-[350px] lg:h-[200px] w-[150px] h-[100px] border-1 p-1 lg:p-2 rounded bg-clip-border border-transparent bg-gradient-to-r from-gray-500 to-orange-400">
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
                <div className="flex flex-row items-start max-sm:justify-center max-sm:items-center max-sm:flex-col lg:flex-col gap-2 ">
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
