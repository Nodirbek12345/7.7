import { memo } from "react";
import emblem from "../assets/EMBLEM.svg";
import googlePlay from "../assets/google-play.svg";
import appStore from "../assets/app-store.svg";
const Footer = () => {
  return (
    <div className="bg-[#111111] w-[1180px] m-auto h-[240px] flex text-white p-[30px]">
      <div className="">
        <img src={emblem} alt="" />
        <img className="mt-[48px]" src={googlePlay} alt="" />
        <img className="mt-[8px]" src={appStore} alt="" />
      </div>
      <ul>
        <li>О нас</li>
        <li>Публичная оферта</li>
        <li>Реклама</li>
        <li>F.A.Q</li>
        <li>Контакты</li>
      </ul>
      <ul>
        <li>Категории</li>
        <li>Кино</li>
        <li>Театр</li>
        <li>Концерты</li>
        <li>Спорт</li>
      </ul>
    </div>
  );
};

export default memo(Footer);
