import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addProduct } from '../redux/cartRedux';
import { CSSTransition } from 'react-transition-group';

export const Basket = ({
	product,
	showPopup,
	setShowPopup,
	article,
	setArticle,
	setActiveitem,
}) => {
	const cart = useSelector(state => state.cart);
	const location = useLocation();
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);

	const [curProd, setCurProd] = useState([]);

	const handleClickBtn = id => {
		setCurProd(id);
		if (id === curProd) {
			return null;
		} else {
			dispatch(addProduct({ ...product, quantity }));
			setArticle(true);
			setTimeout(() => {
				setArticle(false);
			}, 3500);
		}
	};

	return (
		<>
			{location.pathname.length > 1 ? (
				<div className='fixed right-7 bottom-3 sm:right-10 sm:bottom-14 z-5 bg-[#ececec] rounded-md w-[280px] sm:w-[330px] h-[72px] pl-2 sm:pl-6 flex items-center shadow-basket'>
					<button
						onClick={() => handleClickBtn(product.id)}
						className='bg-yellow text-white text-md uppercase rounded-3xl text-center px-2 py-3 mr-8 font-normal shadow-basket transition-all hover:bg-[#b7871e]'
					>
						Добавить в корзину
					</button>
					<div
						onClick={() => setShowPopup(!showPopup)}
						className='basket cursor-pointer w-[72px] h-[72px] rounded-[36px] bg-contain absolute right-[-15px] top-[-25px]'
					>
						<div className='relative'>
							{cart.quantity > 0 ? (
								<CSSTransition in={article} timeout={400} classNames='my-num'>
									<span className='animate-[shake_1s_ease] absolute right-0 top-0 w-[20px] h-[20px] bg-[#ff0000] text-xs rounded-xl text-center text-white leading-5'>
										{cart.quantity}
									</span>
								</CSSTransition>
							) : null}
						</div>
					</div>
				</div>
			) : (
				<div
					onClick={() => {
						setShowPopup(!showPopup);
						setActiveitem();
					}}
					className='basket w-[72px] h-[72px] cursor-pointer z-20 fixed right-7 bottom-3 sm:right-6 sm:bottom-14 z-5 rounded-[36px] bg-contain'
				>
					{cart.quantity > 0 ? (
						<CSSTransition in={article} timeout={400} classNames='my-num'>
							<span className=' absolute right-0 top-0 w-[20px] h-[20px] bg-[#ff0000] text-xs rounded-xl text-center text-white leading-5'>
								{cart.quantity}
							</span>
						</CSSTransition>
					) : null}
				</div>
			)}
		</>
	);
};
