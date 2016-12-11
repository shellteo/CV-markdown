import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'
import {mdModel} from './data'

Vue.use(Vuex)

const STORAGE_KEY = 'cvMd';
var arr = JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]');
const arr2 = mdModel.concat(arr);
window.localStorage.setItem(STORAGE_KEY,JSON.stringify(mdModel));

const state = {
	notes:JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]'),
	count:1,
	activeNote:{}
}

const mutations= {
	addNote(state){
		console.log("addNote");
		const newNote = {
			title:"简历"+state.count++,
			content:"",
		};
		state.notes.push(newNote);
		state.activeNote=newNote;
	},
	editNote(state,content){
		state.activeNote.content=content;
	},
	deleteNote(state,note){
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
	},
	initActive(state){
		if(state.notes.length!=0){
			state.activeNote = state.notes[0];
		}
	}
}

const getters = {
	activeCV: (state) => {
	  	return state.activeNote
	},
	activeText:() => {
		return state.activeNote.content
	}
}
export default new Vuex.Store({
	state,
	mutations,
	getters,
	plugins
});