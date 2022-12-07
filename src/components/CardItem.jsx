import { useDispatch } from 'react-redux';
import {
  deleteProduct,
  addProductInfo,
  deleteProductInfo,
} from '../redux/cartRedux';

export const CardItem = ({ cart }) => {
  const dispatch = useDispatch();

  const handleDelete = (id, quantity, price) => {
    dispatch(deleteProduct({ id, quantity, price }));
  };

  const handleQuantity = (type, id, price) => {
    const cartItem = cart.products.find((item) => item.id === id);

    if (type === 'dec') {
      if (cartItem.quantity > 1) {
        dispatch(deleteProductInfo({ id, price }));
      }
    } else {
      if (cartItem.quantity === cartItem.inStock) {
        return null;
      }

      dispatch(addProductInfo({ id, price }));
    }
  };

  return (
    <ul>
      {cart.products.map((item, index) => (
        <li
          key={index}
          className="flex items-center justify-between border-b border-solid border-[#EAECED] py-3 first:border-t first:border-solid first:border-[#EAECED]"
        >
          <div className="w-[55%]">
            <div className="truncate text-[12px] text-[#404751] font-bold mb-1">
              {item.title}
            </div>
            <div className="text-[12px] text-[#99A1AA]">
              В наличии: {item.inStock} (шт)
            </div>
          </div>
          <div className="flex items-center flex-none">
            <div className="flex items-center">
              <button
                onClick={() => handleQuantity('dec', item.id, item.price)}
                className={`text-[#404751] text-[17px] transition-all hover:text-[#04b1f3] ${
                  item.quantity === 1
                    ? 'pointer-events-none'
                    : 'pointer-events-auto'
                }`}
              >
                -
              </button>
              <div className="text-[#404751] text-[11px] mx-2 border border-solid border-[#EAECED] rounded-sm font-semibold px-[6px] py=[1px]">
                {item.quantity}
              </div>
              <button
                onClick={() => handleQuantity('inc', item.id, item.price)}
                className="text-[#404751] text-[15px] transition-all hover:text-[#04b1f3]"
              >
                +
              </button>
            </div>
            <div className="text-[12px] font-bold ml-8"> {item.price}.00 </div>
          </div>
          <div
            onClick={() => handleDelete(item.id, item.quantity, item.price)}
            className="text-[20px] text-[#99A1AA] cursor-pointer pb-[2px] transition-all hover:text-red-600"
          >
            ×
          </div>
        </li>
      ))}
    </ul>
  );
};
