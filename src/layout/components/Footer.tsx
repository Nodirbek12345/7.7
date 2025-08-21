import { memo } from "react";
import emblem from "../assets/EMBLEM.svg";
import googlePlay from "../assets/google-play.svg";
import appStore from "../assets/app-store.svg";
import {
  CircleQuestionMark,
  Clapperboard,
  Facebook,
  Instagram,
  Phone,
  ReceiptText,
  Sparkle,
  TvMinimalPlay,
  Volleyball,
  Youtube,
} from "lucide-react";
const Footer = () => {
  return (
    <div className="bg-[#111111] w-[1180px] rounded-xl m-auto mt-[100px] h-[240px] flex justify-between text-white p-[30px]">
      <div className="">
        <img src={emblem} alt="" />
        <img className="mt-[48px]" src={googlePlay} alt="" />
        <img className="mt-[8px]" src={appStore} alt="" />
      </div>
      <ul className="text-[16px] flex flex-col gap-[15px]">
        <li>О нас</li>
        <li className="flex gap-1">
          <ReceiptText className="text-red-500" />
          Публичная оферта
        </li>
        <li className="flex gap-1">
          <Sparkle className="text-red-500" />
          Реклама
        </li>
        <li className="flex gap-1">
          <CircleQuestionMark className="text-red-500" />
          F.A.Q
        </li>
        <li className="flex gap-1">
          <Phone className="text-red-500" />
          Контакты
        </li>
      </ul>
      <ul className="text-[16px] flex flex-col gap-[15px]">
        <li>Категории</li>
        <li className="flex gap-1">
          <TvMinimalPlay className="text-red-500" />
          Кино
        </li>
        <li className="flex gap-1">
          <Clapperboard className="text-red-500" />
          Театр
        </li>
        <li className="flex gap-1">
          <TvMinimalPlay className="text-red-500" />
          Концерты
        </li>
        <li className="flex gap-1">
          <Volleyball className="text-red-500" />
          Спорт
        </li>
      </ul>
      <ul className="pr-[50px] flex flex-col gap-[20px]">
        <li>Связаться с нами</li>
        <li className="text-red-500">+998 (95) 897-33-38</li>

        <li>Социальные сети</li>
        <ul className="flex justify-between px-2">
          <Instagram className="text-red-500" />
          <Facebook className="text-red-500" />
          <Youtube className="text-red-500" />
        </ul>
      </ul>
    </div>
  );
};

export default memo(Footer);
