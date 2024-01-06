"use client";
import Image from "next/image";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { TbMailOpened } from "react-icons/tb";
import { useTranslations } from "next-intl";

function FooterMain() {
  return (
    <div className="flex items-center justify-evenly w-full flex-wrap">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/imgs/logo.png"}
          alt="logo"
          width={50}
          height={50}
          loading="lazy"
          className={"w-auto h-auto"}
        />
        <h2 className={"font-semibold text-xl"}>LOS Academy</h2>
      </div>
      <div>
        <h5 className="font-semibold text-base text-black-one-color mb-2">
          Academy
        </h5>
      </div>
      <div>
        <ul className="font-normal text-black-Two-color flex flex-col items-start gap-5">
          <li className="flex items-start gap-4">
            <GoLocation className="text-xl" /> Location
          </li>
          <li className="flex items-start gap-4">
            <BsTelephone className="text-xl" /> +020 1023456789
          </li>
          <li className="flex items-start gap-4">
            <TbMailOpened className="text-xl" /> Quran@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterMain;
