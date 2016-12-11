<template>
<div id="markdown" v-html="mdContent">
	
</div>
</template>

<script>
import marked from 'marked'
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			mdContent:'',
		}
	},
	route: {
	},
	computed:{
		...mapGetters([
			'activeText'
		]),
	},
	methods:{
	},
	created(){
		this.mdContent =  marked(this.activeText);
	}
};
</script>
<style scoped>
	#markdown{
		padding:50px;
	}
</style>