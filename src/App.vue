<template>
	<div id="app">
		<sidebar></sidebar>
		<cvlist></cvlist>
		<editor></editor>
	</div>
</template>

<script>
import Sidebar from './components/Sidebar';
import Cvlist from './components/CvList';
import Editor from './components/editor';
export default {
  name: 'app',
  components: {
    Sidebar,
    Cvlist,
    Editor
  }
}
</script>
<style>
  @import url("//cdn.bootcss.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css");
  @import url("//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css");
  html, #app {
  height: 100%;
}
body {
	background-color: #fff;
	margin: 0;
	padding: 0;
	border: 0;
	height: 100%;
	max-height: 100%;
	position: relative;
}
li{
	list-style-type: none; 
}
</style>
