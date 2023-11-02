"use client";
import React, { useRef, useState } from "react";
import Header from "./Header";
import Hero from "./Hero/Hero";
import Input from "../Input";
import GetStartedButton from "../buttons/GetStartedButton";
import Tips from "./Tips/Tips";
import Quiz from "../quiz/Quiz";
import CraftIntriguingQuestions from "./CraftIntriguingQuestions/CraftIntriguingQuestions";

const HomePage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [beginQuiz, setBeginQuiz] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true);

  const scrollIntoViewOnClick = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
      inputRef.current.focus();
    }
  };

  if (beginQuiz) {
    window.scrollTo(0, 0);
  }

  const handleInputChange = (name: string) => {
    setName(name);
  };

  const handleGetStartedClick = () => {
    setBeginQuiz(true);

    // TIMEOUT FOR ANIMATION
    setTimeout(() => {
      setShowLandingPage(false);
    }, 500);
  };

  return (
    <div className=" md:min-w-[728px] h-full">
      {showLandingPage && (
        <div
          className={`flex flex-col justify-center items-center ${
            beginQuiz ? "animate-ping " : ""
          }`}
        >
          <Header />
          <Hero scrollIntoViewOnClick={scrollIntoViewOnClick} />
          <div className="pt-4 w-full">
            <Input
              placeholder="What's your name?"
              inputRef={inputRef}
              handleInputChange={handleInputChange}
              maxLength={20}
            />
          </div>

          {name.length > 0 && (
            <div className="pt-4 w-full">
              <GetStartedButton handleClick={handleGetStartedClick} />
            </div>
          )}

          <div className="my-4">
            <Tips />
            <CraftIntriguingQuestions />
          </div>
        </div>
      )}
      {beginQuiz && <Quiz name={name} />}
    </div>
  );
};

export default HomePage;