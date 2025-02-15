import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Button = ({ text, href, onClick, bgColor = "bg-[#d0ff14]", textColor = "text-black", hoverBg = "hover:bg-white", hoverText = "hover:text-black", icon = true }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`rounded-full py-3 px-6 inline-flex items-center transition duration-300 ${bgColor} ${textColor} ${hoverBg} ${hoverText}`}
    >
      {text}
      {icon && (
        <span className="ml-2 w-7 h-7 rounded-full bg-black inline-flex items-center justify-center">
          <FaArrowRight className="text-white w-5 h-5" />
        </span>
      )}
    </a>
  );
};

export default Button;
