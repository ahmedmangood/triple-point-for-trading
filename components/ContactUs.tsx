"use client";

import { PrimaryButton } from ".";

function ContactUs() {
  return (
    <section
      id="contactus"
      className="bg-white-color px-5 py-16 flex justify-between max-md:flex-wrap max-md:justify-center max-md:gap-10"
    >
      <div className="px-10 max-md:px-3 flex flex-row justify-between w-full max-md:flex-wrap max-md:justify-center max-md:gap-10">
        <div>
          <h2 className="text-black-color-one text-3xl font-bold">{"test"}</h2>
          <span className="text-lg text-black-two-color font-normal">
            {"test"}
          </span>
        </div>
        <PrimaryButton title={"click"} />
      </div>
    </section>
  );
}

export default ContactUs;
