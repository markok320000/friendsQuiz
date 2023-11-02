"use client";
import PlayQuizHeader from "./PlayQuizHeader";
import EnterNameToBegin from "./EnterNameToBegin";

interface StartScreenProps {
  handleBeginClick: (name: string) => void;
  creatorName: String;
}

const StartScreen: React.FC<StartScreenProps> = ({
  handleBeginClick,
  creatorName,
}) => {
  return (
    <div className="md:min-w-[728px]">
      <PlayQuizHeader creatorName={creatorName} />
      <EnterNameToBegin handleBeginClick={handleBeginClick} />
    </div>
  );
};

export default StartScreen;
