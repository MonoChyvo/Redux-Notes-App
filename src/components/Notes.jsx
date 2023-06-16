/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteSlice'
import { store } from '../app/store'

export const Notes = ({ filterSelected, handleDelete }) => {
	const notes = useSelector((state) => state.notes)

	const toggleImportant = (id) => {
		filterSelected(id)
		store.dispatch(toggleImportanceOf(id))
	}

	return (
		<ul className='ul_container'>
			{notes.map((note) => {
				return (
					<li key={note.id} className='note_card'>
						<p className='note_content'> {note.content} </p>
						<strong
							className='note_important'
							onClick={() => toggleImportant(note.id)}
						>
							{note.important ? ' important' : ' not important'}
						</strong>
						<button
							className='note_button'
							onClick={() => handleDelete(note.id)}
						>
							🗑️
						</button>
					</li>
				)
			})}
		</ul>
	)
}
