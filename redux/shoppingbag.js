import { createSlice } from '@reduxjs/toolkit';

export const shoppingbagSlice = createSlice({
	name: 'shoppingbag',
	initialState: {
		shoppingbag: ['Hello'],
	},
	reducers: {},
});

// Action creators are generated for each case reducer function
export const { openMobileMenu, closeMobileMenu, switchMobileMenu } =
	shoppingbagSlice.actions;

export default shoppingbagSlice.reducer;
