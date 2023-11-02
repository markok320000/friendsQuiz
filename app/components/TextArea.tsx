import React, { useEffect, useState } from "react";

interface TextAreaProps {
  placeholder: string;
  handleInputChange: (name: string) => void;
  maxLength: number;
  className?: string;
  text?: string;
  style?: any;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  handleInputChange,
  maxLength,
  className,
  text,
  style,
}) => {
  const [characterCount, setCharacterCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (text === undefined) return;
    setCharacterCount(text.length);
  }, [text]);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const value = event.target.value;
    setCharacterCount(value.length);
    handleInputChange(value);
  };

  const handleFocus: React.FocusEventHandler<HTMLTextAreaElement> = () => {
    setIsFocused(true);
  };

  const handleBlur: React.FocusEventHandler<HTMLTextAreaElement> = () => {
    setIsFocused(false);
  };

  const handleMouseEnter: React.MouseEventHandler<HTMLTextAreaElement> = () => {
    setIsHovered(true);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLTextAreaElement> = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <textarea
        placeholder={placeholder}
        className={`
        block
        w-full 
        px-4
        py-1
        border-2 
        border-xl 
        rounded-lg 
        bg-transparent 
        text-[#c1c1d6] 
        border-[#3c3c47] 
        focus:outline-none 
        focus:border-[#00b9e6] 
        focus:bg-black
        text-xl
        font-bold  
        ${className}
        `}
        onChange={handleChange}
        maxLength={maxLength}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        value={text}
        style={style}
      />
      {(isFocused || isHovered) && (
        <div className="absolute bottom-2 right-2 text-sm text-white font-semibold hover:block focus:block">
          {characterCount} / {maxLength}
        </div>
      )}
    </div>
  );
};

export default TextArea;
