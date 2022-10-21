import { configureStore } from '@reduxjs/toolkit';
import mobilemenuReducer from './mobilemenu';
import shoppingbagReducer from './shoppingbag';

export default configureStore({
	reducer: {
		mobilemenu: mobilemenuReducer,
		shoppingbag: shoppingbagReducer,
	},
});
