<template>
	<div class="dropdown">
		<a href="">
			<i class="fa fa-plus fa-2x"></i>
		</a>
		<a href="">
			<i class="fa fa-eye fa-2x"></i>
		</a>
		<a href="">
			<i class="fa fa-download fa-2x"></i>
		</a>
		<a href="">
			<i class="fa fa-trash fa-2x"></i>
		</a>
	</div>
</template>
<script>
	export default{
		name:"dropdown"
	}
</script>
<style scoped>
	.dropdown a{
		color:#ccc;
		display: block;
		padding:10px;
		text-align: center;
	}
	.dropdown a:hover{
		background-color: #8B8378;
	}
</style>