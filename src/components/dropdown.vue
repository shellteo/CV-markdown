<template>
	
</template>
<script>
import { mapMutations } from 'vuex'

export default {
	name:'dropdown',
	method:{
		...mapMutations([
			'addNote'
		]),
		addOne:function(){
			console.log("====")
		}
	}
}
</script>
<style scoped>

</style>