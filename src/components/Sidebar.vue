<template>
	<div class="sidebar">
		<div class="dropdown">
			<a href="javascript:void(0)" @click="addNote">
				<i class="fa fa-plus fa-2x" ></i>
			</a>
			<router-link to="/cv" @click="view">
				<i class="fa fa-eye fa-2x"></i>
			</router-link>
			<a href="javascript:void(0)" @click="genPdf">
				<i class="fa fa-download fa-2x"></i>
			</a>
			<a href="javascript:void(0)" @click="deleteNote">
				<i class="fa fa-trash fa-2x"></i>
			</a>
		</div>
	</div>
</template>
<script>
import { mapMutations } from 'vuex'
	export default{
	  	name:'sidebar',
	  	methods:{
	  		...mapMutations([
				'addNote',
				'deleteNote'
			]),
	  		genPdf(){
	  			 var pdf = new jsPDF();
			        var options = {
			             pagesplit: true
			        };
			        //$('.pdf-wrapper')
			        var CV = document.querySelector(".mdShow");

			        console.log(CV)
			        // pdf.addHTML(CV,options,function() {
			        //     pdf.save('CV.pdf');
			        // });
	  		},
	  		view(){
	  			console.log("123");
	  		}
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