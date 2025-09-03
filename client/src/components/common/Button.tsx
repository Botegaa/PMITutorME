import { InlineIcon } from "@iconify/react";

import "@/styles/components/Button.css";

type BtnProps = {
  variant: "primary" | "neutral" | "subtle";
  type?: "submit" | "reset" | "button" | undefined;
  customClass?: string;
  content?: React.ReactNode | string;
  icon?: string;
  iconClass?: string;
  clickFn?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Btn({
  variant,
  type,
  customClass,
  content,
  icon,
  iconClass,
  clickFn
}: BtnProps) {
  return (
    <button className={`btn btn-${variant} ${customClass}`} type={type} onClick={clickFn}>
      {content}
      {icon ? <InlineIcon icon={icon} className={iconClass} /> : null}
    </button>
  );
}
