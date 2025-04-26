import React from "react";

const Button = ({ title, style }: { title?: string; style?: string }) => {
  return (
    <button
      className={`${style} cursor-pointer w-[90.07px] h-[36.7px] rounded-[3.34px] text-white text-[11.6px] font-bold`}
    >
      {title}
    </button>
  );
};

export default Button;
