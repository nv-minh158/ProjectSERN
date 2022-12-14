import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, InputForm } from '../../components';
import path from '../../ultils/constant';
import { apiRegister } from '../../services/auth';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';
import { useNavigate } from 'react-router';
import { IUser } from '../../interface/User';
const Register = () => {
  const [registerForm, setRegisterForm] = useState<IUser>({
    userName: '',
    phone: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickButton = async () => {
    try {
      const registerData = await apiRegister(registerForm);
      dispatch(actions.register(registerForm) as unknown as any);
      if (registerData?.data.success === true) {
        setRegisterForm({ userName: '', phone: '', password: '' });
        alert('Chúc mừng bạn đã đăng ký thành công');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white w-[600px] max-w-600 p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold">Đăng Ký Tài Khoản</h3>
      {/* <div className="flex flex-col w-full gap-5">
        <InputForm
          label={'Họ tên'}
          typeInput={'text'}
          type={'userName'}
          value={registerForm.userName}
          setValue={setRegisterForm}
        />
        <InputForm
          label={'Số Điện Thoại'}
          typeInput={'number'}
          type={'phone'}
          value={registerForm.phone}
          setValue={setRegisterForm}
        />
        <InputForm
          label={'Tạo Mật Khẩu'}
          typeInput={'password'}
          type={'password'}
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
          Bấm vào nút đăng ký tức là bạn đã đồng ý với quy định sử dụng của chúng tôi
        </small>
        <small className="flex hover:text-[red] cursor-pointer mt-5">
          Bạn đã có tài khoản ?{' '}
          <NavLink to={path.LOGIN}>
            <p className="text-[blue] ml-1"> Đăng nhập ngay</p>
          </NavLink>
        </small>
      </div> */}
    </div>
  );
};
export default Register;
