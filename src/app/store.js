import { configureStore } from '@reduxjs/toolkit'
import { noteReducer } from '../reducers/noteSlice'
import { filterReducer } from '../reducers/filterSlice'

export const store = configureStore({
	reducer: {
		notes: noteReducer,
		filter: filterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

store.getState()
