import React, { memo } from "react";
import { IInputFormProps } from "../interface/InputFormProps";

const InputForm = ({ label, typeInput }: IInputFormProps) => {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type={typeInput}
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 rounded-md  w-full h-full"
      />
    </div>
  );
};

export default memo(InputForm);
