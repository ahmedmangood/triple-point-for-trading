"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { PrimaryButton } from ".";
const Hero = () => {
  const t = useTranslations("Hompage");

  return (
    <section
      id="hero"
      className={`relative padding_container bg-gradient-to-r from-primary-color to-secondary-color border-b-2 border-black `}
    >
      <div className="relative z-[2] flex flex-col items-center justify-center lg:flex-row py-28">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-flex-start gap-3"
        >
          <h1 className="text-3xl font-bold lg:text-4xl leading-[1.2] rtl:leading-[1.4] capitalize bg-clip-text text-transparent bg-gradient-to-r from-white-color to-orange-color">
            {t("hero-title")}
          </h1>
          <p className="text-base lg:text-2xl font-normal text-gray-200">
            {t("hero-paragraph")}
          </p>
          <PrimaryButton title={t("contact-btn")} />
        </div>
        <Image
          data-aos="fade-down-left"
          src="/imgs/header.svg"
          alt="header image"
          width={800}
          height={400}
          loading="lazy"
          className="w-[600px] h-auto max-md:w-full max-sm:hidden imageBlur"
        />
      </div>
      <div className="heroBackground"></div>
    </section>
  );
};

export default Hero;
