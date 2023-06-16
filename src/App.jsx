import { NewNote } from './components/NewNote'
import { Notes } from './components/Notes'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './app/store'
import { deleted, initNotes, toggleImportanceOf } from './reducers/noteSlice'
import { useEffect } from 'react'
import { initFilters } from './reducers/filterSlice'
import axios from 'axios'

export const App = () => {
	const storeStatus = useSelector((state) => state)
	const notes = useSelector((state) => state.notes)
	console.log('storeStatus: \n', storeStatus)

	const dispatch = useDispatch()

	useEffect(() => {
		const storeInit = store.dispatch(initNotes())
		console.log('payload enviado a estado notes:\n', storeInit)
		const filterInit = store.dispatch(initFilters())
		console.log('payload enviado a estado filter:\n', filterInit)
	}, [dispatch])

	const filterSelected = (value) => {
		console.log({ value })
	}

	const handleDelete = (id) => {
		const listNotes = notes.filter((note) => note.id !== id)

		axios
			.delete(`http://localhost:3001/notes/${id}`)
			.then((res) => res)
			.catch((err) => console.error(err))

		dispatch(deleted(listNotes))
	}

	return (
		<div className='App'>
			<NewNote />

			<div className='notes_container'>
				<span> all </span>
				<input
					type='radio'
					name='filter'
					onChange={() => filterSelected('ALL')}
				/>
				<br />

				<span> important </span>
				<input
					type='radio'
					name='filter'
					onChange={() => filterSelected('IMPORTANT')}
				/>
				<br />

				<span> no important </span>
				<input
					type='radio'
					name='filter'
					onChange={() => filterSelected('NOT IMPORTANT')}
				/>
				<br />
			</div>

			<Notes filterSelected={filterSelected} handleDelete={handleDelete} />
		</div>
	)
}
