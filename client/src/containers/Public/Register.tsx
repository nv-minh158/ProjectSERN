import React, { useCallback, useEffect, useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { Button, InputForm } from "../../components";
import { path } from "../../ultils/constant";
import { useNavigate } from "react-router";
import { createBrowserHistory } from "@remix-run/router";

const Register = () => {
  return (
    <div className="bg-white w-[600px] max-w-600 p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold">Đăng Ký Tài Khoản</h3>
      <div className="flex flex-col w-full gap-5">
        <InputForm label={"Họ tên"} typeInput={"text"} />
        <InputForm label={"Số Điện Thoại"} typeInput={"number"} />
        <InputForm label={"Tạo Mật Khẩu"} typeInput={"password"} />
        <Button
          text="Tạo Tài Khoản"
          textColor="text-white"
          bgColor="!bg-secondary1"
          fullWidth
          // onClick={}
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
