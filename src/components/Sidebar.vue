<template>
	<div class="sidebar">
		<dropdown></dropdown>
	</div>
</template>
<script>
import Dropdown from './dropdown'
	export default{
	  	name:'sidebar',
	  	components:{
	  		Dropdown
	  	}
	}
</script>
<style scoped>
	.sidebar{
		float: left;
		width: 50px;
		height: 100%;
		background-color: #2a2a2a;
		left: 0;
		top: 0;
	}
</style>