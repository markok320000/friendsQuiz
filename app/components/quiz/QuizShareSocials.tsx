import React from "react";
import toast from "react-hot-toast";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

interface QuizShareSocialsProps {
  quizId: string;
}

const QuizShareSocials: React.FC<QuizShareSocialsProps> = ({ quizId }) => {
  const shareUrl = new URL(`playQuiz/${quizId}`, window.location.href).href;

  const handleCopyLinkClick = () => {
    toast.success("Link copied to clipboard");
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div className="bg-[#202026] rounded-xl w-full px-5 py-9 text-white text-center ">
      <h1 className="text-xl md:text-3xl font-bold">
        Your quiz link is: <br />
        <a href={shareUrl} className="underline text-sm md:text-3xl">
          {shareUrl}
        </a>
      </h1>

      <button
        className="px-8 text-xl py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 cursor-pointer mt-4 w-full md:w-1/2 mx-auto"
        onClick={() => handleCopyLinkClick()}
      >
        Copy Link to Clipboard
      </button>

      <div className="mt-8">
        <h2>Share your quiz on: </h2>
        <div className="flex justify-center gap-10 ">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon xHeight={40} round={false} className="rounded-xl" />
          </FacebookShareButton>
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon xHeight={40} round={false} className="rounded-xl" />
          </WhatsappShareButton>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon xHeight={40} round={false} className="rounded-xl" />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default QuizShareSocials;
