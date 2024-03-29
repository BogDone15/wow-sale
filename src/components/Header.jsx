import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/home.png';

export const Header = () => {
	return (
		<>
			<div className='flex items-center mb-8 shadow-sm w-full h-16 bg-white rounded-md'>
				<Link
					to='/'
					className='bg-[#3e3a31] h-16 flex items-center justify-center px-4 rounded-l-md transition-all hover:bg-[#b7871e] sm:px-6'
				>
					<img src={icon} alt='home' className='w-[70px] h-auto sm:w-[42px] ' />
				</Link>
				<p className='px-1 sm:px-4 py-1 flex items-center justify-center text-black text-[10px] sm:text-sm font-bold leading-1 sm:leading-5'>
					TikTok, Facebook - Advertising Accounts Аккаунты FB, ТikТok с
					отлежкой/новые/все гео/PrePay/PostPay/агентские аккаунты (по запросу)
					На заказ фармим любые ГЕО и любое количество аккаунтов!
				</p>
			</div>
		</>
	);
};
