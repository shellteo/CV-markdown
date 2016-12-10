import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'

Vue.use(Vuex)

const STORAGE_KEY = 'cvMd'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

const state = {
	notes:JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
	count:1,
	activeNote:{}
}

const mutations= {
	addNote(state){
		console.log(state.notes);
		console.log("addNote");
		const newNote = {
			title:"简历"+state.count++,
			content:"",
			htmlContent:''
		};
		state.notes.push(newNote);
		state.activeNote=newNote;
	},
	editNote(state,content,htmlContent){
		state.activeNote.content=content;
		state.activeNote.htmlContent=htmlContent;
	},
	deleteNote(state,note){
		console.log(state.notes);
		console.log("deleteNote");
		var curIndex = state.notes.indexOf(state.activeNote);
		state.notes.splice(state.notes.indexOf(state.activeNote), 1);
		if(curIndex==state.notes.length){
			state.activeNote = state.notes[curIndex-1];
		}else{
			state.activeNote = state.notes[curIndex];
		}
    		
	},
	toggleActive(state,note){
		console.log("toggleActive");
		state.activeNote = note;
	}
}

export default new Vuex.Store({
	state,
	mutations,
	plugins
});