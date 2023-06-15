import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/home.png';

export const Header = () => {
	return (
		<>
			<div className='flex items-center mb-8 shadow-sm w-full h-16 bg-white rounded-md'>
				<Link
					to='/'
					className='bg-blue h-16 flex items-center justify-center px-6 rounded-l-md transition-all hover:bg-[#0089d9]'
				>
					<img src={icon} alt='home' className='w-[60px] h-auto sm:w-full ' />
				</Link>
				<p className='px-1 sm:px-4 py-1 flex items-center justify-center text-black text-[10px] sm:text-sm font-bold leading-1 sm:leading-5'>
					TikTok Advertising Accounts. Акки ТТ с отлежкой/новые/все
					гео/PrePay/PostPay/агентские аккаунты (по запросу) На заказ фармим
					любые ГЕО и любое количество аккаунтов!
				</p>
			</div>
		</>
	);
};
