import React from "react";
import { Button } from "../../components";
import InputForm from "../../components/InputForm";

const Login = () => {
  return (
    <div className="bg-white w-[600px] max-w-600 p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold">Đăng nhập</h3>
      <div className="flex flex-col w-full gap-5">
        <InputForm label={"Số Điện Thoại"} typeInput={"text"} />
        <InputForm label={"Mật Khẩu"} typeInput={"password"} />
        <Button
          text="Đăng Nhập"
          textColor="text-white"
          bgColor="!bg-secondary1"
          fullWidth
          // onClick={}
        />
      </div>
      <div className="flex justify-between mt-7">
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Bạn Quên Mật Khẩu
        </small>
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Tạo Tài Khoản Mới
        </small>
      </div>
    </div>
  );
};

export default Login;
