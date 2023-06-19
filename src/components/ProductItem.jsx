import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { info } from '../data';
import { addProduct } from '../redux/cartRedux';

export const ProductItem = ({
	showPayments,
	setShowPayments,
	setArticle,
	activeitem,
	setActiveitem,
}) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);

	const showDropDown = id => {
		setActiveitem(id);
	};

	const hideDropdown = id => {
		const product = info.find(item => item.id === id);

		setShowPayments(!showPayments);

		dispatch(addProduct({ ...product, quantity }));

		setActiveitem();
	};

	const handleClickBtn = id => {
		const product = info.find(item => item.id === id);
		setActiveitem();

		dispatch(addProduct({ ...product, quantity }));
		setArticle(true);
		setTimeout(() => {
			setArticle(false);
		}, 3500);
	};

	return (
		<>
			{info.map(item => (
				<div
					key={item.id}
					className='flex border-b-[1px] border-solid border-[#ddd] text-[11px] sm:text-base text-black font-normal odd:bg-[#f9f9f9] last:border-0'
				>
					<Link
						to={`/${item.pageName}`}
						className='border-r-[1px] border-solid border-[#ddd] p-1 sm:p-2 sm:w-[48%] w-[42%] leading-[1.3]'
					>
						<div className='flex items-center'>
							<img src={item.img} alt='' className='max-w-[35px] mr-3' />
							<span>{item.title}</span>
						</div>
						{item.text}
					</Link>
					<div className='border-r-[1px] border-solid border-[#ddd] p-1 sm:p-2 w-[19%] sm:w-[13%] text-center'>
						{item.inStock}
					</div>
					<div className='border-r-[1px] border-solid border-[#ddd] p-1 sm:p-2 w-[19%] sm:w-[25%] text-center'>
						{item.price} Руб. / 1 шт
					</div>
					<div className='border-solid border-[#ddd] p-1 sm:p-2 sm:w-[16%] w-[22%] text-center'>
						<div className='relative inline-block'>
							<button
								onClick={() => showDropDown(item.id)}
								className='bg-yellow py-[4px] px-1 sm:px-2 rounded-md transition-all hover:bg-[#b7871e] group'
								type='button'
							>
								<span
									className={`text-[10px] sm:text-sm text-white transition-all`}
								>
									Купить
								</span>
								<span className='inline-block w-0 h-0 border-t-4 border-dashed border-x-4 border-x-transparent text-white align-middle ml-1 transition-all'></span>
							</button>
							<ul
								className={`absolute top-[107%] -left-[25px] 2xl:left-0 z-10 min-w-[105px] sm:min-w-[160px] bg-white text-left py-1  border-[1px] border-solid border-[#ddd] rounded-[4px] ${
									item.id === activeitem ? 'block' : 'hidden'
								}`}
							>
								<li
									onClick={() => hideDropdown(item.id)}
									className={`text-sm mb-1 hover:bg-[#f5f5f5] cursor-pointer pl-5`}
								>
									Купить
								</li>
								<li
									onClick={() => handleClickBtn(item.id)}
									className='text-sm hover:bg-[#f5f5f5] cursor-pointer pl-5'
								>
									В корзину
								</li>
							</ul>
						</div>
					</div>
				</div>
			))}
		</>
	);
};
