import Vue from 'vue';
import Vuex from 'vuex';
const store = new Vuex.Store({
	state:{
		notes:[],
		count:1,
		activeNote:{}
	},
	mutations:{
		addNote(state){
			const newNote = {
				title:"简历"+state.count++;
				content:"简历内容"
			};
			state.notes.push(newNote);
			state.activeNote=newNote;
		},
		editNote(state,content){
			state.activeNote.content=content;
		},
		deleteNote(state){
			state.notes.$remove(state.activeNote)
			state.activeNote = state.notes[0]
		}
	}
});
export default store;