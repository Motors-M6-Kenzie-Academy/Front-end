import { ButtonSmallBlack } from "./styles";

interface ButtonProps {
  title: string;
  color: string;
  size: string;
}

export default function Button({ title, color, size }: ButtonProps) {
  return (
    <>
      {size === "small" && color === "black" && (
        <ButtonSmallBlack>{title}</ButtonSmallBlack>
      )}
    </>
  );
}
