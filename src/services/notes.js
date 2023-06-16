import axios from 'axios'

const baseURL = 'http://localhost:3001/notes'

export const getAll = async () => {
	const response = await axios.get(baseURL)
	console.log('notas recibidas de la base de datos:\n', response.data)
	return response.data
}

export const createNewNote = async (content) => {
	const note = {
		content,
		important: false,
		codigo: Math.floor(Math.random() * 100000) + 1,
	}
	const response = await axios.post(baseURL, note)
	console.log('nota posteada:\n', response.data)
	return response.data
}
