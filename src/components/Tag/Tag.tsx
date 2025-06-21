import { type FC } from "react";

interface TagProps {
  text: string;
}

export const Tag: FC<TagProps> = ({ text }) => {
  return (
    <div className="flex gap-2 bg-white px-5 py-3.5 w-fit rounded-full">
      <img src="/check_circle.svg" alt="check_svg" />
      <p className="text-lg font-semibold">{text}</p>
    </div>
  );
};
