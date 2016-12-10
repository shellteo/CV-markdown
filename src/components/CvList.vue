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
	import { mapMutations } from 'vuex'
	export default{
		name:"cvlist",
		data(){
			return {
				items:this.$store.state.notes,
				activeCV:{}
			}
		},
		computed:{

		},
		vuex:{
			getters:{
				//items:state=>state.notes,
			},
			actions:{
				
			}
		},
		methods:{
			...mapMutations([
				'toggleActive'
			]),
			selected(item){
				this.toggleActive(item);
				this.activeCV = item;
			}
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