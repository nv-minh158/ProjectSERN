import { ChangeEvent, MouseEventHandler } from "react";
import { IconType } from "react-icons/lib";

export interface IButtonProps {
  text: string;
  textColor: string;
  bgColor: string;
  IcAfter?: IconType;
  onClick?: () => void;
  fullWidth?: boolean;
}
