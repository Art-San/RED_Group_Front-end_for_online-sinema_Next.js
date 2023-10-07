import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocal } from '@/utils/local-storage/localStorage'

import { checkAuth, login, logout, register } from './user.actions'
import { IUserInitialState } from './user.interface'

const initialState: IUserInitialState = {
	user: getStoreLocal('user'),
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {}, // extraReducers отвечают за асинхронные запросы
	extraReducers: (builder) => {
		builder
			//РЕГИСТРАЦИЯ
			.addCase(register.pending, (state) => {
				// pending отправили запрос и ожидаем
				state.isLoading = true // идет загрузка данных
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				// fulfilled все закончено
				state.isLoading = false // данные получены
				state.user = payload.user
			})
			.addCase(register.rejected, (state) => {
				// rejected получили ошибку
				state.isLoading = false
				state.user = null
			})
			// ЛОГИН
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
			// ЛОГ_АУТ
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user
			})
	},
})

export const { reducer } = userSlice
