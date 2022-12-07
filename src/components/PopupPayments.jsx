import React from 'react';
import { useSelector } from 'react-redux';
import { payments } from '../data';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import { useEffect } from 'react';

export const PopupPayments = ({ showPayments, setShowPayments }) => {
  const cart = useSelector((state) => state.cart);

  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('Емейл не может быть пустым');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный емейл');
    } else {
      setEmailError('');
    }
  };

  const blurHandler = (e) => {
    setEmailDirty(true);
  };

  return (
    <>
      <CSSTransition
        in={showPayments}
        timeout={1500}
        classNames="show-popup"
        unmountOnExit
      >
        <div
          className={`fixed w-full min-h-[450px] max-w-[600px] left-1/2 top-1/2 z-20 -translate-y-[200%] -translate-x-1/2 opacity-0 text-[#404751] bg-white p-2 sm:p-5 rounded-sm transition-all shadow-popup `}
        >
          <div className="absolute w-full h-[1px] bg-light left-0 top-[55px] sm:top-[90px]"></div>
          <div
            onClick={() => setShowPayments(false)}
            className="absolute right-5 top-2 text-[25px] uppercase text-[#99A1AA] cursor-pointer hover:text-black"
          >
            ×
          </div>
          <h2 className="text-center text-[20px] sm:text-[30px] text-black font-medium mb-8">
            Выберите способ оплаты
          </h2>
          <form action="">
            <div className="mb-1 flex justify-between items-center px-4">
              <div>Наименование</div>
              <div className="w-[60%] cursor-not-allowed text-sm">
                {cart.quantity > 1
                  ? 'Корзина товаров'
                  : cart.products[0]?.title}
              </div>
            </div>
            <div className="mb-1 flex justify-between items-center  px-4">
              <div className="text-[#454B55] text-[12px] sm:text-base">
                Ваш E-mail:
              </div>
              <div className="w-[60%]">
                {emailDirty && emailError && (
                  <div className="text-red-700 text-[12px]">{emailError}</div>
                )}
                <input
                  onChange={(e) => emailHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  value={email}
                  className="w-full h-[34px] px-[6px] py-3 text-sm text-[#555555] outline-none border border-solid border-[#cccccc] rounded focus:shadow-input focus:border-[rgba(0, 0, 0, 0.38)]"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className="flex justify-between items-center  px-4 mb-10">
              <div className="text-[#454B55] text-[12px] sm:text-base">
                Купон (если есть):
              </div>
              <div className="w-[60%]">
                <input
                  className="w-full h-[34px] px-[6px] py-3 text-sm text-[#555555] outline-none border border-solid border-[#cccccc] rounded focus:shadow-input focus:border-[rgba(0, 0, 0, 0.38)]"
                  type="text"
                  placeholder="Если у вас есть купон, введите его в это поле"
                />
              </div>
            </div>
            {payments.map((item) => (
              <button
                disabled={!formValid}
                type="submit"
                key={item.id}
                className={`bg-[#efefef] block w-full rounded-md mb-1 py-2 ${
                  !formValid ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <img
                  src={item.img}
                  alt=""
                  className="mx-auto h-[35px] sm:h-[45px]"
                />
              </button>
            ))}
          </form>
        </div>
      </CSSTransition>
      {showPayments ? (
        <div className="w-full h-full fixed left-0 top-0 z-10 bg-dark" />
      ) : null}
    </>
  );
};
