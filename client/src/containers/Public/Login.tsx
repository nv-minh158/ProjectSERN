import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components';
import InputForm from '../../components/InputForm';
import path from '../../ultils/constant';
import { apiLogin } from '../../services/auth';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';
import { useNavigate } from 'react-router';
import { IUser } from './../../interface/User';

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    userName: '',
    phone: '',
    password: '',
  });
  const [invalidFields, setInvalidFields] = useState<Array<Object>>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validate = (loginForm: IUser) => {
    let invalid = 0;
    let fields = Object.entries(loginForm);
    fields.slice(1).forEach((field) => {
      if (field[1] === '')
        setInvalidFields((previous) => [
          ...previous,
          {
            name: field[0],
            message: 'Bạn không được bỏ trống trường này!',
          },
        ]);
      console.log(invalidFields);
      invalid++;
    });
    fields.slice(1).forEach((field) => {
      switch (field[0]) {
        case 'password':
          if (field[1].length < 6) {
            setInvalidFields((previous) => [
              ...previous,
              {
                name: field[0],
                message: 'Mật khẩu phải có tối thiểu 6 kí tự!',
              },
            ]);
            console.log(invalidFields);
            invalid++;
          }
          break;
        case 'phone':
          if (!+field[1]) {
            setInvalidFields((previous) => [
              ...previous,
              {
                name: field[0],
                message: 'Số điện thoại không hợp lệ!',
              },
            ]);
            invalid++;
          }
      }
    });

    return invalid;
  };
  const handleClickButton = async () => {
    try {
      let invalids = await validate(loginForm);
      console.log('🚀 ~ file: Login.tsx:67 ~ handleClickButton ~ invalids', invalids);
      console.log('🚀 ~ file: Login.tsx:19 ~ Login ~ invalidFields', invalidFields);

      // const loginData = await apiLogin(loginForm);
      // dispatch(actions.login(loginForm) as unknown as any);
      // if (loginData?.data.success === true) {
      //   alert('Chúc mừng bạn đã đăng nhập thành công');
      //   navigate('/');
      //   setLoginForm({ userName: '', phone: '', password: '' });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white w-[600px] max-w-600 p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold">Đăng nhập</h3>
      <div className="flex flex-col w-full gap-5">
        <InputForm
          label={'Số Điện Thoại'}
          typeInput={'text'}
          value={loginForm.phone}
          type={'phone'}
          setValue={setLoginForm}
          invalidFields={invalidFields}
        />
        <InputForm
          label={'Mật Khẩu'}
          typeInput={'password'}
          type={'password'}
          value={loginForm.password}
          setValue={setLoginForm}
          invalidFields={invalidFields}
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
