"use client";

import { useState } from "react";
import { PrimaryButton } from ".";
import { InputText } from "primereact/inputtext";
import { Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaRegUser, FaUser } from "react-icons/fa";

function ContactUs() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendFormData = () => {
    const formData = {
      name,
      email,
      message,
    };
    console.log(formData);
  };

  return (
    <section
      id="contact-us"
      className="h-screen bg-gradient-to-r from-primary-color to-slate-500 border-t-2 border-white"
    >
      <div className="pt-10 pb-5">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-400 text-center text-3xl md:text-6xl font-bold">
          Contact With Us
        </h3>
        <hr
          style={{
            width: "150px",
            borderTopWidth: "3px",
            textAlign: "center",
            margin: "auto",
          }}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-3 border-2 border-white rounded-xl mx-5 p-3 lg:p-6">
        <h5 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 to-neutral-300 text-center py-6 text-lg md:text-xl">
          Send Message For Us
        </h5>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" className="text-white" />
            </div>
            <TextInput
              id="name"
              type="text"
              icon={FaUser}
              rightIcon={FaUser}
              placeholder="name@example.com"
              required
              style={{
                backgroundColor: "transparent !important",
              }}
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label
                htmlFor="email4"
                value="Your email"
                className="text-white"
              />
            </div>
            <TextInput
              id="email4"
              type="email"
              icon={HiMail}
              rightIcon={HiMail}
              placeholder="name@example.com"
              required
              style={{
                backgroundColor: "transparent !important",
              }}
            />
          </div>
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label
              htmlFor="comment"
              value="Your message"
              className="text-white"
            />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a message..."
            required
            rows={4}
            cols={100}
            style={{
              backgroundColor: "transparent !important",
            }}
          />
        </div>{" "}
        <PrimaryButton
          title="Send"
          ourStyle="border-2 border-white hover:bg-white hover:text-gray-700"
        />
      </div>
    </section>
  );
}

export default ContactUs;
