"use client";
import Input from "@/app/components/Input";
import React, { useState } from "react";

interface EnterNameToBeginProps {
  handleBeginClick: (name: string) => void;
}

const EnterNameToBegin: React.FC<EnterNameToBeginProps> = ({
  handleBeginClick,
}) => {
  const [name, setName] = useState("");

  const handleInputChange = (name: string) => {
    setName(name);
  };

  const handleBegin = () => {
    handleBeginClick(name);
  };

  return (
    <div className="text-center bg-[#202026] rounded-xl px-16 py-4 mt-4 shadow-lg ">
      <div>
        <Input
          handleInputChange={handleInputChange}
          maxLength={60}
          placeholder="Enter your name"
        />
      </div>
      <button
        onClick={handleBegin}
        className="px-8 h-10 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer mt-4 text-2xl"
      >
        Begin
      </button>
    </div>
  );
};

export default EnterNameToBegin;
