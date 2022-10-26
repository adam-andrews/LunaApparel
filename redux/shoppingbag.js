import { createSlice } from '@reduxjs/toolkit';

export const shoppingbagSlice = createSlice({
	name: 'shoppingbag',
	initialState: {
		shoppingbag: [],
	},
	reducers: {
		addToBag: (state, action) => {
			console.log(state, action.payload);
			const itemInBag = state.shoppingbag.find(
				(item) => item.id === action.payload.id
			);
			if (itemInBag) {
				itemInBag.quantity++;
			} else {
				state.shoppingbag.push({ ...action.payload, quantity: 1 });
			}
		},
		incrementQuantity: (state, action) => {
			const item = state.shoppingbag.find((item) => item.id === action.payload);
			item.quantity++;
		},
		decrementQuantity: (state, action) => {
			const item = state.shoppingbag.find((item) => item.id === action.payload);
			if (item.quantity === 1) {
				item.quantity = 1;
			} else {
				item.quantity--;
			}
		},
		removeItem: (state, action) => {
			const removeItem = state.shoppingbag.filter((item) => {
				return item.id !== action.payload.id;
			});
			console.log('remove item', removeItem);
			state.shoppingbag = removeItem;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToBag, incrementQuantity, decrementQuantity, removeItem } =
	shoppingbagSlice.actions;

export default shoppingbagSlice.reducer;
