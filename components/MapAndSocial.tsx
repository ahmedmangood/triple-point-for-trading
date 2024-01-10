import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

function MapAndSocial() {
  return (
    <section className="flex flex-col  gap-20 pt-5 items-center m-auto justify-center text-gray-300">
      <div className="relative w-full flex items-center justify-center px-5">
        <Image
          src={"/imgs/map.svg"}
          alt="map"
          width={200}
          height={200}
          loading="lazy"
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 lg:flex-row m-auto px-5">
        <div className="flex flex-col items-center lg:flex-row gap-3">
          <div className="flex flex-col items-center justify-start gap-3">
            <h6 className="font-bold">Follow us</h6>
            <div className="flex items-center justify-center gap-5">
              <FaFacebook style={{ fontSize: "20px" }} />
              <FaLinkedin style={{ fontSize: "20px" }} />
            </div>
          </div>
          <span className="hidden w-[1px] h-[102.005px] bg-gray-400 lg:block mx-5"></span>
          <span className="w-[200px] h-[2px] bg-slate-300 lg:hidden"></span>
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-3">
          <FaPhoneAlt style={{ fontSize: "20px" }} />
          <span className="text-slate-300">0541301200 - 0547341541</span>
          <span className="hidden w-[1px] h-[102.005px] bg-gray-400 lg:block mx-5"></span>
          <span className="w-[200px] h-[2px] bg-slate-300 lg:hidden"></span>
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-3">
          <MdEmail style={{ fontSize: "20px" }} />
          <span className="text-slate-300">info@triplepointsa.com</span>
          <span className="hidden w-[1px] h-[102.005px] bg-gray-400 lg:block mx-5"></span>
          <span className="w-[200px] h-[2px] bg-slate-300 lg:hidden"></span>
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-3 ">
          <HiLocationMarker style={{ fontSize: "20px" }} />
          <span className="text-slate-300 text-center">
            Riyadh-Olayaa street - Al Rosis Building - Showroom 14
          </span>
        </div>
      </div>
    </section>
  );
}

export default MapAndSocial;
