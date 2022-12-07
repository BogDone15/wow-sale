import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const Preloader = () => {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 2000);

  return (
    <CSSTransition in={show} timeout={300} classNames="my-node" unmountOnExit>
      <div className="fixed bg-white top-0 left-0 w-full h-full z-50 text-center overflow-hidden">
        <div>
          <div className="absolute left-1/2 top-1/2 -translate-y-2/4 -translate-x-2/4 inline-block ">
            <div className="absolute left-0 top-0 bottom-0 right-0 animate-[dyinglight_1s_ease_infinite] origin-[50%_50%_0]">
              <div className=" before:absolute before:w-[10px] before:h-[10px]  before:content-[''] before:-top-[4px] before:-left-[4px] before:border-l before:border-solid before:border-t after:absolute after:w-[10px] after:h-[10px]  after:content-[''] after:-right-[4px] after:-top-[4px] after:border-r after:border-solid after:border-t"></div>
              <div className="before:absolute before:w-[10px] before:h-[10px]  before:content-[''] before:-bottom-[4px] before:-left-[4px] before:border-l before:border-solid before:border-b after:absolute after:w-[10px] after:h-[10px]  after:content-[''] after:-right-[4px]  after:-bottom-[4px] after:border-r after:border-solid after:border-b"></div>
            </div>
            <div className="block w-[55px] h-[55px] bg-black"></div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
