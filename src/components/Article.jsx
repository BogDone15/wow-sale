import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useSelector } from 'react-redux';

export const Article = ({ article }) => {
  const cart = useSelector((state) => state.cart);
  const cartTitle = cart.products[cart.products.length - 1]?.title;
  const cartText = cart.products[cart.products.length - 1]?.text;
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={article}
      timeout={300}
      classNames="my-node"
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div ref={nodeRef} className="fixed left-2 top-2 bg-green-900 p-3 w-60">
        <h2 className="text-white mb-2">Добавлено</h2>
        <div className="text-sm">
          Позиция {cartTitle}. {cartText}
        </div>
      </div>
    </CSSTransition>
  );
};
