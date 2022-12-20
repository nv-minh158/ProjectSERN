import { ChangeEvent, Dispatch, SetStateAction } from "react";
export interface IInputFormProps {
  label: string;
  typeInput: string;
  value: string;
  setValue: React.Dispatch<
    React.SetStateAction<{
      userName: string;
      phone: string;
      password: string;
    }>
  >;
  type: string;
}
