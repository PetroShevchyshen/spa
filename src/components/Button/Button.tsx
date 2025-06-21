import type { FC } from "react";

interface ButtonProps {
  text: string;
}

export const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <div className="flex w-fit gap-16 bg-yellow rounded-full px-12 py-5 active:bg-yellow/50 cursor-pointer">
      <p className="text-lg font-bold">{text}</p>
      <img src="/arrow.svg" alt="arrow" />
    </div>
  );
};
