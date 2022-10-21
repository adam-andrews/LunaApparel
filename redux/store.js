import { configureStore } from '@reduxjs/toolkit';
import mobilemenuReducer from './mobilemenu';

export default configureStore({
	reducer: {
		mobilemenu: mobilemenuReducer,
	},
});
