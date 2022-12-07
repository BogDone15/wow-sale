import React from 'react';
import { Link } from 'react-router-dom';
import tgImage from '../assets/tg.jpeg';
import supportImg from '../assets/support.jpg';

export const Payments = () => {
  return (
    <>
      <Link
        to="https://t.me/Makoker"
        className=" text-[#00FFFF] text-center m-auto w-full inline-block font-bold text-base sm:text-2xl mb-5"
      >
        <span className="bg-[#4B0082]">
          Принимаем платежи/We accept payments : WebMoney, Qiwi, USDT, BTC,
        </span>
        <br />
        <span className="bg-[#4B0082]">
          Укр. карта. Capitalist, PayPal, Binance
        </span>
        <br />
        <span className="bg-[#000080]">https://t.me/Makoker</span>
      </Link>
      <div className="flex items-start justify-center sm:gap-32">
        <Link to="https://t.me/Makoker" className="w-48 h-48">
          <img src={tgImage} alt="" className="w-full" />
        </Link>
        <Link to="https://t.me/Makoker" className="w-48 h-48">
          <img src={supportImg} alt="" className="w-full" />
        </Link>
      </div>
    </>
  );
};
