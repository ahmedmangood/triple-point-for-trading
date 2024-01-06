"use client";

import { useTranslations } from "next-intl";
import PrimaryButton from "./PrimaryButton";

function TrySection() {
  const t = useTranslations("Hompage");
  return (
    <section className="bg-blue-500 px-5 py-16 flex justify-between max-md:flex-wrap max-md:justify-center max-md:gap-10">
      <div className="px-10 max-md:px-3 flex flex-row justify-between w-full max-md:flex-wrap max-md:justify-center max-md:gap-10">
        <div>
          <h2 className="text-black-color-one text-3xl font-bold">click</h2>
          <span className="text-lg text-black-two-color font-normal">
            click
          </span>
        </div>
        <PrimaryButton
          text={"click"}
          ourStyle="bg-secondary-color hover:bg-secondary-hover text-sm font-semibold transition-colors text-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] w-52 h-12 my-auto px-16 shadow rounded-full"
        />
      </div>
    </section>
  );
}

export default TrySection;
