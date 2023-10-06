import { configureStore } from '@reduxjs/toolkit'

import { reducers } from './rootReducer'

export const store = configureStore({
	reducer: reducers,
	devTools: true, // расширение в браузере
})

export type TypeRootState = ReturnType<typeof store.getState> // это встроено в тайп скрипт

// Базовая настройка закончена
