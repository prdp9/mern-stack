import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import bookReducer from "./slices/book";


export const store = configureStore({
	reducer: {
		auth: authReducer,
		book: bookReducer
	}
})