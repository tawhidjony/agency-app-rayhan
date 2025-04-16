import { cn } from "@/uikit/cn";
import React, { InputHTMLAttributes } from "react";

type RadioButtonProps = {
  options?: { label: string; value: string }[];
  className?: string;
  isFlex?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const RadioButton: React.FC<RadioButtonProps> = ({
  options = [],
  className,
  isFlex = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "items-center",
        isFlex ? "flex gap-4" : "flex-col space-y-4"
      )}
    >
      {options?.map((option, index) => (
        <label
          htmlFor={`radio-${index}`}
          key={index}
          className="flex gap-2 items-center cursor-pointer"
        >
          <input
            type="radio"
            id={`radio-${index}`}
            className={cn(
              "w-6 h-6 rounded-full border-2 flex items-center justify-center border-gray-400",
              className
            )}
            value={option?.value}
            {...props}
          />
          <span className="text-gray-700">{option?.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
