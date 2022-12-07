import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Basket } from './Basket';
import { CardItem } from './CardItem';
import { CSSTransition } from 'react-transition-group';

export const PopupBasket = ({
  article,
  product,
  setShowPayments,
  setArticle,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const cart = useSelector((state) => state.cart);
  const nodeRef = useRef(null);

  const showPaymentsPopup = () => {
    setShowPopup(false);
    setShowPayments(true);
  };

  return (
    <>
      {showPopup ? (
        <>
          <CSSTransition
            in={showPopup}
            timeout={300}
            classNames="my-node"
            nodeRef={nodeRef}
            unmountOnExit
          >
            <div
              className={`fixed w-full min-h-[450px] max-w-[460px] left-1/2 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 text-[#404751] bg-white p-4 sm:p-8 rounded-sm transition-all shadow-popup `}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-[#404751] uppercase font-semibold">
                  Корзина
                </div>
                <div
                  onClick={() => setShowPopup(false)}
                  className="text-[25px] uppercase text-[#99A1AA] cursor-pointer hover:text-black"
                >
                  ×
                </div>
              </div>
              <CardItem cart={cart} />
              <div className="flex justify-between items-center text-[12px] mb-2 mt-6">
                <div>Всего позиций в корзине</div>
                <div>
                  <span className="font-bold">{cart.quantity}</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-[12px] mb-2">
                <div>Всего товара в корзине</div>
                <div>
                  <span className="font-bold">{cart.totalQuantity}</span> (шт)
                </div>
              </div>
              <div className="flex justify-between items-center text-[12px] mb-2">
                <div className="text-[#454B55]">
                  <strong>Сумма к оплате (без скидок)</strong>
                </div>
                <div>
                  <span className="font-bold text-sm">{cart.total}</span> Руб.
                </div>
              </div>
              <button
                onClick={showPaymentsPopup}
                className="bg-[#04b1f3] w-full text-center text-white uppercase py-3 text-[12px] font-semibold transition-all sha-btn mt-4 hover:bg-[#0385b7]"
              >
                Перейти к оплате
              </button>
            </div>
          </CSSTransition>
          <div className="w-full h-full fixed left-0 top-0 bg-dark" />
        </>
      ) : null}
      <Basket
        article={article}
        setArticle={setArticle}
        product={product}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </>
  );
};
