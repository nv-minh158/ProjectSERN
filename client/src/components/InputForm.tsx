import React, { memo } from "react";
import { IInputFormProps } from "../interface/InputFormProps";
import { ChangeEvent } from "react";

const InputForm = ({
  label,
  typeInput,
  value,
  setValue,
  type,
}: IInputFormProps) => {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type={typeInput}
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 rounded-md  w-full h-full"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          return setValue((prev) => ({
            ...prev,
            [type]: event.target.value,
          }));
        }}
      />
    </div>
  );
};

export default memo(InputForm);
