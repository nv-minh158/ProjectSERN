import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../assets/logowithoutbg.png';
import { Button } from '../../components';
import icons from '../../ultils/icons';
import path from '../../ultils/constant';

const { FaPlusCircle } = icons;
const Header = () => {
  const navigate = useNavigate();
  const goLogin = useCallback((flag: string) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  const goRegister = useCallback((flag: string) => {
    navigate(path.REGISTER, { state: { flag } });
  }, []);
  return (
    <div className="w-full">
      <div className="flex items-center justify-around w-full">
        <Link to={path.HOME}>
          <img src={logo} alt="logo" className="w-[240px] h-[70px] object-contain" />
        </Link>
        <div className="flex gap-1">
          <small>Phongtro123.com xin chào!</small>
          <Button
            text="Đăng Nhập"
            textColor="text-white"
            bgColor="!bg-[#3961fb]"
            onClick={() => goLogin('login')}
          />
          <Button
            text="Đăng Ký"
            textColor="text-white"
            bgColor="!bg-[#3961fb]"
            onClick={() => goRegister('register')}
          />
          <Button
            text="Đăng Tin Mới"
            textColor="text-white"
            bgColor="!bg-secondary2"
            IcAfter={FaPlusCircle}
            // onClick={goLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
