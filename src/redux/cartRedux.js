import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
		totalQuantity: 0,
	},

	reducers: {
		addProduct: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.products.find(item => item.id === newItem.id);
			if (!existingItem) {
				state.quantity += 1;
				state.products.push(action.payload);
				state.total += action.payload.price * action.payload.quantity;
				state.totalQuantity += 1;
			}
		},
		addProductInfo: (state, action) => {
			const todo = state.products.find(todo => todo.id === action.payload.id);
			if (todo) {
				todo.quantity += 1;
				state.total += action.payload.price;
				state.totalQuantity += 1;
			}
		},
		deleteProductInfo: (state, action) => {
			const todo = state.products.find(todo => todo.id === action.payload.id);
			if (todo) {
				todo.quantity -= 1;
				state.total -= action.payload.price;
				state.totalQuantity -= 1;
			}
		},
		deleteProduct: (state, action) => {
			const todo = state.products.find(todo => todo.id === action.payload.id);
			if (todo) {
				state.totalQuantity -= todo.quantity;
			}
			state.quantity -= 1;
			state.products = state.products.filter(
				item => item.id !== action.payload.id
			);
			state.total -= action.payload.price * action.payload.quantity;
		},
	},
});

export const { addProduct, deleteProduct, addProductInfo, deleteProductInfo } =
	cartSlice.actions;
export default cartSlice.reducer;
