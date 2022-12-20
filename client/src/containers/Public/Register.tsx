import React from "react";
import { NavLink } from "react-router-dom";
import { Button, InputForm } from "../../components";
import { path } from "../../ultils/constant";
import { useState } from "react";
import { apiRegister } from "../../services/auth";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    userName: "",
    phone: "",
    password: "",
  });
  const handleClickButton = async () => {
    try {
      const loginData = await apiRegister(registerForm);
      console.log(
        "🚀 ~ file: Login.tsx:24 ~ handleClickButton ~ loginData",
        loginData
      );
      setRegisterForm({ userName: "", phone: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white w-[600px] max-w-600 p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold">Đăng Ký Tài Khoản</h3>
      <div className="flex flex-col w-full gap-5">
        <InputForm
          label={"Họ tên"}
          typeInput={"text"}
          type={"userName"}
          value={registerForm.userName}
          setValue={setRegisterForm}
        />
        <InputForm
          label={"Số Điện Thoại"}
          typeInput={"number"}
          type={"phone"}
          value={registerForm.phone}
          setValue={setRegisterForm}
        />
        <InputForm
          label={"Tạo Mật Khẩu"}
          typeInput={"password"}
          type={"password"}
          value={registerForm.password}
          setValue={setRegisterForm}
        />
        <Button
          text="Tạo Tài Khoản"
          textColor="text-white"
          bgColor="!bg-secondary1"
          fullWidth
          onClick={handleClickButton}
        />
      </div>
      <div className="flex flex-col mt-7">
        <small className=" hover:text-[red] cursor-pointer">
          Bấm vào nút đăng ký tức là bạn đã đồng ý với quy định sử dụng của
          chúng tôi
        </small>
        <small className="flex hover:text-[red] cursor-pointer mt-5">
          Bạn đã có tài khoản ?{" "}
          <NavLink to={path.LOGIN}>
            <p className="text-[blue] ml-1"> Đăng nhập ngay</p>
          </NavLink>
        </small>
      </div>
    </div>
  );
};

export default Register;
