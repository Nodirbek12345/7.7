import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/LOGOTYPE – BILETICK.svg";
import afisha from "../assets/afisha.svg";
import bileti from "../assets/bileti.svg";
import poisk from "../assets/poisk.svg";
import seansi from "../assets/seansi.svg";
const Header = () => {
  return (
    <div className="Header flex items-center px-[90px] w-[1360px] m-auto h-[80px] py-[12px] bg-black">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <div className="flex items-center pl-[319px] pr-[138px] ">
        <NavLink
          className="w-[80px] flex flex-col justify-center items-center h-[48px] text-red-500"
          to={"/"}
        >
          <img className="" src={afisha} alt="" />
          Афиша
        </NavLink>
        <NavLink
          className="w-[80px] flex flex-col justify-center items-center h-[48px] text-white"
          to={"/movies"}
        >
          <img src={seansi} alt="" />
          Сеансы
        </NavLink>
        <NavLink
          className="w-[80px] flex flex-col justify-end gap-1 items-center  h-[48px] text-white"
          to={"/bookmark"}
        >
          <img src={bileti} alt="" />
          Билеты
        </NavLink>
        <NavLink
          className="w-[80px] flex flex-col justify-end-safe gap-1 items-center h-[48px] text-white"
          to={"/bookmark"}
        >
          <img src={poisk} alt="" />
          Поиск
        </NavLink>
      </div>
      <div className="text-white flex gap-[20px]">
        <select className="p-2" name="" id="">
          <option className="bg-black" value="ru">ru</option>
          <option className="bg-black" value="uz">uz</option>
        </select>
        <button className="px-[67px] py-[14px] bg-red-500 text-[16px] rounded-2xl">Войти</button>
      </div>
    </div>
  );
};

export default memo(Header);
