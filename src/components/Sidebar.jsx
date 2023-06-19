import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/logo.png';

export const Sidebar = () => {
	return (
		<div className='w-full lg:w-1/4 bg-white rounded-md shadow-small'>
			<div className='p-5'>
				<p className='uppercase font-bold text-base'>
					FACEBOOK АККАУНТЫ | РЕКЛАМНЫЕ КАБИНЕТЫ TIK-TOK
				</p>
				<span className='text-sm text-gray lowercase'>OLYMP.SHOP.TT</span>
			</div>
			<figure className='clip -mt-4'>
				<img className='w-full' src={img} alt='' />
			</figure>
			<p className='translate-y-[-2px] p-5'>
				<span className='text-black'>Telegram: </span>
				<Link
					target='_blank'
					to='https://t.me/Makoker'
					className='text-[#337ab7] hover:text-[#23527c]'
				>
					Makoker
				</Link>
			</p>
		</div>
	);
};
