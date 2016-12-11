<template>
	<div class="cv-container">
		<li v-for="item in items" @click="selected(item)" :class="{active:item==activeCV}">
			<div>
				<h5>{{item.title}}</h3>
			</div>
			<div>
				<p>
					{{item.content.trim().substring(0, 25)}}
				</p>
			</div>
		</li>
	</div>
</template>
<script>
	import { mapMutations ,mapGetters } from 'vuex'
	export default{
		name:"cvlist",
		data(){
			return {
				items:this.$store.state.notes,
			}
		},
		computed:{
			...mapGetters([
				'activeCV'
			])
		},
		vuex:{
			getters:{
				
			},
			actions:{
				
			}
		},
		methods:{
			...mapMutations([
				'toggleActive',
				'initActive'
			]),
			selected(item){
				this.toggleActive(item);
				this.activeCV = item;
			}
		},
		created(){
			console.log("123");
			this.initActive();
		}
	}
</script>
<style scoped>
	.active{
		background-color: #cccccc;
	}
	.cv-container{
		background-color:  #F5F5F5;
		height: 100%;
		width: 200px;
		float: left;
		overflow :auto
	}
	li{
		padding: 5px;	
		border-bottom: 1px solid #ccc;
		word-wrap : break-word ;
	}
	li:hover{
		background-color: #cccccc;
	}
</style>