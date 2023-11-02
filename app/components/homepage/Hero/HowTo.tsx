import React from "react";

const HowTo = () => {
  return (
    <div className="bg-[#202026] rounded-xl w-full p-5 text-white hover:cursor-pointer">
      <ol className="space-y-2">
        <li className="flex items-center">
          <span className="mr-2 bg-[#00b9e6] px-3 py-2 rounded-full  text-xl font-bold">
            1
          </span>
          <p className="inline text-xl font-bold">Create your own quiz</p>
        </li>
        <li className="flex items-center">
          <span className="mr-2 bg-[#fe2591] px-3 py-2 rounded-full  text-xl font-bold">
            2
          </span>
          <p className="inline text-xl font-bold">Share it with your friends</p>
        </li>
        <li className="flex items-center">
          <span className="mr-2 bg-[#ffa202] px-3 py-2 rounded-full  text-xl font-bold">
            3
          </span>
          <p className="inline text-xl font-bold">
            See their results & discover your real best friends
          </p>
        </li>
      </ol>
    </div>
  );
};

export default HowTo;
