"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = ({ phoneNumber }) => {
  const firstwhatsapp = (
    <a
    href={`https://wa.me/${phoneNumber}?text=hey theres this product i want do you deliver?`}
    className="fixed bottom-10 right-10 bg-green-500 text-white p- rounded-full shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className=" p-5 flex gap-2">
        <FaWhatsapp color="white" className="w-10 h-10 md:w-10 md:h-5" />
        Chat on WhatsApp
      </div>
    </a>
  );

  return <>{firstwhatsapp}</>;
};

export default WhatsAppButton;
