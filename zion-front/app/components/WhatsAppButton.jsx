"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import Center from "./Center";

const WhatsAppButton = ({ phoneNumber }) => {
  const firstwhatsapp = (
    <Center>

      <a
        href={`https://wa.me/${phoneNumber}?text='hello,where,you,located?`}
        className="fixed bottom-20 right-10 bg-green-500 text-white rounded-full shadow-lg "
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="md:p-5 p-3 flex gap-2 md:gap-3">
          {/* <FaWhatsapp color="white" className="w-10 h-10" /> */}
          <FaWhatsapp color="white" className="w-5 h-5 md:w-10 md:h-8" />
          <div className=" font-bold md:text-[15px] text-[13px]">Chat on WhatsApp</div>
        </div>
      </a>
    </Center>
    
  );

  return <>{firstwhatsapp}</>;
};

export default WhatsAppButton;
