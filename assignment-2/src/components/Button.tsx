import React from "react";

const Button = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) => {
  const styling =
    type == "secondary" ? "bg-very-light-orange border-[0.8px] border-orange text-orange" : "bg-orange text-white border-2 border-light-orange";
  return (
    <>
      <div
        className={`${styling} px-6 py-3 rounded-lg cursor-pointer w-full flex items-center justify-center`}
      >
        {children}
      </div>
    </>
  );
};

export default Button;
