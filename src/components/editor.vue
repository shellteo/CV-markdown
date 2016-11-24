<template>
<div class="editor">
	<div class="orginEditor">
		<textarea class="form-control" placeholder="请输入markdown语法">456</textarea>
	</div>
	<div class="mdShow">
		<textarea readonly class="form-control" placeholder="转换为对应样式" value="123"></textarea>
	</div>	
</div>
</template>
<script>
	export default{
		name:"editor"
	}
</script>
<style scoped>
	.editor{
		margin-left: 250px;
		width: auto;
		height: 100%;
	}
	.orginEditor{
		height: 100%;
		width: 50%;
		float: left;
	}
	.mdShow{
		width: 50%;
		height: 100%;
		float: left;
		background-color: #F5F5F5;
	}
	.orginEditor textarea{
		width: 100%;
		padding: 10px;
		height: 100%;
		border:0;
		border-radius: 0;
		resize: none;
	}
	.mdShow textarea{
		resize: none;
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
