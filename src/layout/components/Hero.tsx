import { memo } from "react";
import bgHero from "../assets/bg-hero.png";
import { Play } from "lucide-react";
const Hero = () => {
  return (
    <div>
      <div
        className="w-[1360px] h-[640px] m-auto bg-no-repeat bg-cover rounded-xl pt-[400px]"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="hero w-[1200px] h-[240px] mx-auto text-center font-medium pt-[60px]">
          <h2 className="text-white text-[32px]">Kung Fu Panda 4</h2>
          <p className="text-white mt-[16px] text-[16px]">
            2024 • Комедия • 1ч 34м • EN • 6+
          </p>
          <button className="flex w-[380px] mx-auto h-[52px] mt-[16px] bg-white justify-center items-center text-red-500 rounded-xl">
            <Play />
            Смотреть
          </button>
        </div>
      </div>
      <div className="w-[564px] h-[64px]  m-auto mt-[4px] flex justify-center gap-[4px] items-center">
        <button className="text-red-500  pl-[15px] pr-[14px] pt-[7px] pb-[10px]  mx-auto rounded-full bg-[#1D1D1D]">{`<`}</button>
        <img
          src={bgHero}
          className="w-[108px] rounded-xl bg-white h-[64px]"
          alt=""
        />
        <img
          src={bgHero}
          className="w-[108px] rounded-xl bg-white h-[64px] opacity-50"
          alt=""
        />
        <img
          src={bgHero}
          className="w-[108px] rounded-xl bg-white h-[64px] opacity-50"
          alt=""
        />
        <img
          src={bgHero}
          className="w-[108px] rounded-xl bg-white h-[64px] opacity-50"
          alt=""
        />
        <button className="text-red-500 pl-[15px] pr-[14px] pt-[7px] pb-[10px] mx-auto rounded-full bg-[#1D1D1D] text-center">{`>`}</button>
      </div>
    </div>
  );
};

export default memo(Hero);
