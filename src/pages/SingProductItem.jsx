import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Article } from '../components/Article';
import { Header } from '../components/Header';
import { PopupBasket } from '../components/PopupBasket';
import { PopupPayments } from '../components/PopupPayments';
import { Preloader } from '../components/Preloader';
import { Sidebar } from '../components/Sidebar';
import { info } from '../data';

export const SingProductItem = ({ showPayments, setShowPayments }) => {
  const location = useLocation();
  const [product, setProduct] = useState({});
  const [article, setArticle] = useState(false);

  useEffect(() => {
    const currProduct = info.find(
      (item) => item.pageName === location.pathname.split('/')[1]
    );
    setProduct(currProduct);
  }, [location.pathname]);

  return (
    <div className="bg-main-bg bg-fixed bg-no-repeat bg-cover p-2 sm:p-10 min-h-screen">
      <div className="max-w-7xl w-full m-auto">
        <div className="flex-col lg:flex-row flex items-start gap-10">
          <Sidebar />
          <div className="w-full lg:w-3/4">
            <Header />
            <div className="bg-white shadow-sm p-4 rounded-md">
              <h2 className="sm:text-[25px] text-[18px] mb-3 font-bold sm:leading-8 leading-6">
                Купить {product.title} {product.text}
              </h2>
              <div className="flex items-center flex-col sm:flex-row sm:pr-3 mb-2">
                <div className="w-full sm:w-[250px] sm:mr-4">
                  <div className="border border-solid border-[#eee] p-1 relative">
                    <img src={product.img} alt={product.pageName} />
                    <div className="absolute left-0 bottom-0 font-bold bg-[#337ab7] py-[2px] px-[3px] text-[12px] text-white">
                      В наличии {product.inStock} шт.
                    </div>
                    <div className="absolute capitalize right-0 top-0 font-bold bg-[#5cb85c] py-[2px] px-[3px] text-[12px] text-white">
                      {product.price} Руб.
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPayments(!showPayments)}
                    className="bg-[#5cb85c] text-center text-white py-2 w-full mt-4 rounded-md border border-[#4cae4c] text-[18px] transition-all hover:bg-[#449d44]"
                  >
                    Купить
                  </button>
                </div>
                <div>
                  <h2 className="text-[32px] font-medium">Описание</h2>
                  <p className="text-[#4c4c4c] text-sm mb-2">
                    Аккаунт ТикТок для рекламы. Подтверждены для рекламы. После
                    покупки можно сразу же запускать рекламу
                  </p>
                  <p className="text-[#4c4c4c] text-sm mb-2">C НДС</p>
                  <p className="text-[#4c4c4c] text-sm mb-2">
                    Гео {product.geo}
                  </p>
                  <p className="text-black text-sm  mb-2">
                    Можно подвязывать PayPal как способ оплаты
                  </p>
                  <p className="text-[#4c4c4c] text-sm">Доступные ГЕО:</p>
                </div>
              </div>
              {product.countries?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
        <PopupPayments
          showPayments={showPayments}
          setShowPayments={setShowPayments}
        />
      <PopupBasket
        product={product}
        article={article}
        setArticle={setArticle}
        showPayments={showPayments}
        setShowPayments={setShowPayments}
      />
       <Article article={article} />
       <Preloader />
    </div>
  );
};
