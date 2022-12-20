import React, { ChangeEvent, MouseEventHandler } from "react";
import { Button } from "../../components";
import InputForm from "../../components/InputForm";
import { NavLink } from "react-router-dom";
import { path } from "../../ultils/constant";
import { apiLogin, apiRegister } from "../../services/auth";
import { useState } from "react";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    userName: "",
    phone: "",
    password: "",
  });
  // const onChangeLoginForm = (event: ChangeEvent<HTMLInputElement>) => {
  //   return setLoginForm({
  //     ...loginForm,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  const handleClickButton = async () => {
    try {
      const loginData = await apiLogin(loginForm);
      console.log(
        "🚀 ~ file: Login.tsx:24 ~ handleClickButton ~ loginData",
        loginData
      );
      setLoginForm({ userName: "", phone: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white w-[600px] max-w-600 p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold">Đăng nhập</h3>
      <div className="flex flex-col w-full gap-5">
        <InputForm
          label={"Số Điện Thoại"}
          typeInput={"text"}
          value={loginForm.phone}
          type={"phone"}
          setValue={setLoginForm}
        />
        <InputForm
          label={"Mật Khẩu"}
          typeInput={"password"}
          type={"password"}
          value={loginForm.password}
          setValue={setLoginForm}
        />
        <Button
          text="Đăng Nhập"
          textColor="text-white"
          bgColor="!bg-secondary1"
          fullWidth
          onClick={() => {
            handleClickButton();
          }}
        />
      </div>
      <div className="flex justify-between mt-7">
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Bạn Quên Mật Khẩu
        </small>
        <NavLink to={path.REGISTER}>
          <small className="text-[blue] hover:text-[red] cursor-pointer">
            Tạo Tài Khoản Mới
          </small>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
