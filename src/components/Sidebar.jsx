import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/wow-sale-lettering-pop-art.webp';

export const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/4 bg-white rounded-md shadow-small">
      <div className="p-5">
        <p className="uppercase font-bold text-base">
          БИЗНЕС МЕНЕДЖЕРЫ FACEBOOK| КАБИНЕТЫ ДЛЯ РЕКЛАМЫ TIK-TOK, PAYPAL, WISE,
          BINANCE, BITSA, ICARD, REVOLUT, VERSE
        </p>
        <span className="text-sm text-gray lowercase">OLYMP.SHOP.TT</span>
      </div>
      <figure className="clip -mt-4">
        <img className="w-full" src={img} alt="" />
      </figure>
      <ul className="max-w-[170px] ml-auto lg:max-w-full mr-auto mt-[8px] lg:mr-0 mb-[8px] lg:ml-[35px] max-w">
        <li className="relative pt-0 pr-0 pb-[10px] pl-[30px] text-sm text-[#787878] border-l-2 border-[#eee]  before:content-[''] before:block before:text-white before:rounded-[50px] before:bg-[#00b4d9] before:relative before:border-0 before:border-[#00b4d9] before:-mt-[30px] before:-ml-[51px] before:mb-[20px] before:w-10 before:h-10 before:py-3 before:px-4 before:shadow-tg after:content-[''] after:bg-no-repeat after:bg-glasses after:w-8 after:h-3 after:absolute after:top-0 after:left-0 after:my-4 after:-mx-4 after:bg-[length:27px_10px]"></li>
        <li className="pt-0 pr-0 pb-[23px] pl-[20px] text-[#787878] ml-[2px] -mt-[2px] before:content-[''] before:bg-transparent before:border-[#00b4d9] before:w-2 before:h-2 before:rounded-[50px] before:border-2 before:border-solid before:absolute before:mt-[2px] before:-ml-[25px] text-[14px]">
          <p className="translate-y-[-2px]">
            <span className="text-black">Telegram: </span>
            <Link
              target="_blank"
              to="https://t.me/Makoker"
              className="text-[#337ab7] hover:text-[#23527c]"
            >
              FbSaleBm
            </Link>
          </p>
        </li>
      </ul>
    </div>
  );
};
