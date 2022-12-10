import React from "react";
import { InputForm } from "../../components";

const Register = () => {
  return (
    <div className="bg-white w-[600px] max-w-600 p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold">Đăng Ký</h3>
      <div className="flex flex-col w-full gap-5">
        <InputForm label={"Họ tên"} typeInput={"text"} />
        <InputForm label={"Số Điện Thoại"} typeInput={"number"} />
        <InputForm label={"Tạo Mật Khẩu"} typeInput={"password"} />
        <InputForm label={"Loại Tài Khoản"} typeInput={"radio"} />
      </div>
    </div>
  );
};

export default Register;
