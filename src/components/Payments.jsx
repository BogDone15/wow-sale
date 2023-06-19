import React from 'react';
import { Link } from 'react-router-dom';
import tgImage from '../assets/tg.svg';
import supportImg from '../assets/support.png';

export const Payments = () => {
	return (
		<>
			<Link
				to='https://t.me/Makoker'
				className=' text-[#d7aa47] text-center m-auto w-full inline-block font-bold text-[16px] sm:text-2xl mb-5'
			>
				<span className='bg-[#3e3a31] px-2 hidden lg:inline'>
					Принимаем платежи/We accept payments : WebMoney, Qiwi, USDT, BTC,
				</span>

				<span className='bg-[#3e3a31] px-2 lg:hidden'>
					Принимаем платежи/We accept
				</span>
				<br className='lg:hidden' />
				<span className='bg-[#3e3a31] px-2 lg:hidden'>
					payments : WebMoney, Qiwi, USDT, BTC,
				</span>
				<br />
				<span className='bg-[#3e3a31] px-2'>
					Укр. карта. Capitalist, PayPal, Binance
				</span>
				<br />
				<span className='bg-[#3e3a31] px-2'>https://t.me/Makoker</span>
			</Link>
			<div className='flex items-start justify-center gap-4 sm:gap-32'>
				<Link to='https://t.me/Makoker' className='w-48 h-48'>
					<img src={tgImage} alt='' className='w-full' />
				</Link>
				<Link to='https://t.me/Makoker' className='w-48 h-48'>
					<img src={supportImg} alt='' className='w-full' />
				</Link>
			</div>
		</>
	);
};
