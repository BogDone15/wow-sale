import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <p className="text-[28px] text-center sm:w-10/12 m-auto leading-7 my-5">
      Если у вас неактивный аккаунт или проблемы с ними, обратитесь в поддержку
      по вопросам замены. <br />
      Контакты:{' '}
      <Link className="text-blue hover:underline" to="https://t.me/Makoker">
        https://t.me/Makoker
      </Link>
    </p>
  );
};
