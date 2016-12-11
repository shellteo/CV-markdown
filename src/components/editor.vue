<template>
<div class="editor">
	
	<div class="orginEditor">
		<textarea class="form-control" placeholder="请输入markdown语法" :value='activeText'
		v-on:input='genMd' ref="input"></textarea>
	</div>
	<div class="mdShow" v-html="mdContent">
		
	</div>
</div>
</template>
<script>
	import marked from 'marked'
	import { mapMutations ,mapGetters} from 'vuex'
	export default{
		name:"editor",
		data(){
			return {
				mdContent:'',
			}
		},
		methods:{
			...mapMutations([
				'editNote',
			]),
			genMd:function(){
				if(this.$refs.input.value){
					this.editNote(this.$refs.input.value);
				}
				this.mdContent = marked(this.activeText);
			},
		},
		updated () {
			this.genMd();
		},
		created(){
			this.mdContent = marked(this.activeText);
		},
		computed:{
			...mapGetters([
				'activeText'
			])
		}
	}
</script>
<style scoped>
	.blockquotes{
		font-style: italic;
	}
	.editor{
		margin-left: 250px;
		width: auto;
		height: 100%;
	}
	.orginEditor{
		height: 100%;
		width: 45%;
		float: left;
	}
	.mdShow{
		width: 55%;
		height: 100%;
		padding: 10px;
		float: left;
		background-color: #F5F5F5;
		word-wrap:break-word; 
		overflow :auto
	}
	.orginEditor textarea{
		width: 100%;
		padding: 10px;
		height: 100%;
		border:0;
		border-radius: 0;
		resize: none;
	}
	.mdShow iframe{
		
		width: 100%;
		background-color: #F5F5F5;
		padding: 10px;
		height: 100%;
		border:0;
		border-radius: 0;
	}
	.form-control {
	    display: block;
	    width: 100%;
	    height: 34px;
	    padding: 6px 12px;
	    color: #555;
	    background-color: #fff;
	    background-image: none;
	    border: 1px solid #ccc;
	    border-radius: 4px;
	    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
	    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
	    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
	    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	}
</style>
