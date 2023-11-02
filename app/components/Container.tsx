"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        px-4
        flex 
        justify-center
        py-2
        h-full
      "
    >
      {children}
    </div>
  );
};

export default Container;
