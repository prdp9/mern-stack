

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	user: {
		name: 'John Doe',
		email: 'john@mail.com',
		address: "Baker Street"
	},
	bookList: [
		"Sherlock", "Hamlet"
	]
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, actions) => {
			state.isAuthenticated = true
		},
		logout: (state, actions) => {
			state.isAuthenticated = false
		},
	}
})


export const { login, logout } = authSlice.actions

export default authSlice.reducer