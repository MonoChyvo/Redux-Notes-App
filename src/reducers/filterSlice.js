import { createSlice } from '@reduxjs/toolkit'
import { getAll } from '../services/notes'

export const filterSlice = createSlice({
	name: 'filters',
	initialState: [],
	reducers: {
		init: (state, action) => {
			return [...state, action.payload]
		},
	},
})

//* Reducer
const { init } = filterSlice.actions

//* Action creators
export const initFilters = () => {
	return async (dispatch) => {
		const notes = await getAll()

		notes.forEach((note) => {
			console.log('nota important despachado a filters:\n',
				dispatch({
					type: init,
					payload: note.important,
				}).payload
			)
		})
	}
}

//* Reducer
export const filterReducer = filterSlice.reducer
