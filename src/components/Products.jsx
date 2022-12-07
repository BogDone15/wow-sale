import React from 'react';
import { ProductItem } from './ProductItem';

export const Products = ({
  showPayments,
  setShowPayments,
  setArticle,
}) => {
  return (
    <>
      <div className="relative inline-block px-[3px] mt-14 mb-10">
        <span className="absolute left-0 bottom-[3px] bg-blue w-full h-[7px] opacity-40"></span>
        <h2 className="text-[18px] font-semibold">Товары</h2>
      </div>
      <div className="border-[1px] border-solid border-[#ddd]">
        <div className="flex items-end border-b-[1px] border-solid border-[#ddd] text-[12px] sm:text-base text-[#333] font-bold h-[69px]">
          <div className="py-2 pl-2 sm:w-[48%] w-[42%] text-left h-full flex items-end">
            Наименование продукта
          </div>
          <div className="border-r-[1px] border-l-[1px] border-solid border-[#ddd] py-2 w-[19%] sm:w-[13%] text-center h-full flex items-end justify-center">
            В
            <br />
            наличии
          </div>
          <div className="border-r-[1px] border-solid border-[#ddd] py-2 w-[19%] sm:w-[25%] text-center h-full flex items-end justify-center">
            Цена
          </div>
          <div className="py-2 sm:w-[16%] w-[22%] text-center h-full flex items-end justify-center">
            Купить
          </div>
        </div>
        <div className=" border-b-[1px] border-solid border-[#ddd] bg-blue text-white text-sm font-medium text-center py-2 transition-all hover:bg-[#0089d9]">
          Аккаунты для Рекламы Тик Ток/ TikTok Advertising Accounts
        </div>
        <ProductItem
          setArticle={setArticle}
          showPayments={showPayments}
          setShowPayments={setShowPayments}
        />
      </div>
    </>
  );
};
