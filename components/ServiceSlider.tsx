"use client";

import { useTranslations } from "next-intl";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";

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

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <section className="h-screen bg-[#252B42] pb-2" id="services">
      <h2 className="text-center font-bold text-xl pt-32 pb-2 lg:text-3xl text-orange-400">
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
        <Slider {...settings}>
          {sliders.map((slide) => {
            return (
              <ServiceCard
                src={slide.imgSrc}
                title={slide.title}
                description={slide.description}
                key={slide.id}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default ServiceSlider;
