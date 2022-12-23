import React, { memo, ChangeEvent } from 'react';
import { IInputFormProps } from '../interface/InputFormProps';

const InputForm = ({
  label, typeInput, value, setValue, type,
}: IInputFormProps) => (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type={typeInput}
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 rounded-md  w-full h-full"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setValue((prev) => ({
          ...prev,
          [type]: event.target.value,
        }))}
      />
    </div>
);

export default memo(InputForm);
