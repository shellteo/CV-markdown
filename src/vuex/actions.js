export const addNote = ({ dispatch }) => {
  dispatch('addNote')
}

export const editNote = ({ dispatch }, e) => {
  dispatch('editNote', e.target.value)
}

export const deleteNote = ({ dispatch }) => {
  dispatch('deleteNote')
}
export const toggleActive = ({dispatch},note)=>{
	dispatch('toggleActive',note);
}