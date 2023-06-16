/* eslint-disable no-unused-expressions */
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteSlice'

export const NewNote = () => {
	const dispatch = useDispatch()

	const addNote = async (event) => {
		event.preventDefault()
		const { target } = event
		const content = target.note.value
		target.note.value = ''
		dispatch(createNote(content)).payload
	}

	return (
		<form className='form_container' onSubmit={addNote}>
			<input name='note' autoFocus />
			<button>Add</button>
		</form>
	)
}
