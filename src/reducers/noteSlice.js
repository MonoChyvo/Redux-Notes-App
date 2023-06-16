import { createSlice } from '@reduxjs/toolkit'
import { createNewNote, getAll } from '../services/notes'

export const notesSlice = createSlice({
	name: 'notes',
	initialState: [],
	reducers: {
		created: (state, action) => {
			return [...state, action.payload]
		},

		deleted: (state, action) => action.payload,

		toggleImportant: (state, action) => {
			const { id } = action.payload

			return state.map((note) => {
				if (note.id === id) {
					return {
						...note,
						important: !note.important,
					}
				}

				return note
			})
		},

		init: (state, action) => {
			return [...state, action.payload]
		},

	},
})

//* Reducers
export const { toggleImportant, created, init, deleted } = notesSlice.actions

//* Action creators
export const createNote = (content) => {
	console.log('se recibe el content:\n', content)
	return async (dispatch) => {
		const newNote = await createNewNote(content)

		console.log('nueva nota creada:\n',
			dispatch({
				type: created,
				payload: {
					...newNote,
				},
			}).payload
		)
	}
}

export const initNotes = () => {
	return async (dispatch) => {
		const notes = await getAll()

		notes.forEach((note) => {
			console.log('payload despachado a notes:\n',
				dispatch({
					type: init,
					payload: note,
				}).payload
			)
		})
	}
}

export const toggleImportanceOf = (id) => {
	return {
		type: toggleImportant,
		payload: {
			id,
		},
	}
}

//* Reducer
export const noteReducer = notesSlice.reducer
