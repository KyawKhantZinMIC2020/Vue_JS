<!-- For UI -->
<template>
	<div>
		<h1 class="text-info">Exercise Components</h1>
		<p class="text-secondary" style="font-size: 17px;font-weight: bold;">This is exercise for child components.</p>

		<div class="row">
			<div class="col-md-3" v-for="(item,index) in items" :key="index">
			<ItemCard :item="item"></ItemCard>
			</div>
		</div>

	</div>
</template>

<!-- For data Operation -->
<!-- items array  -->
<script type="text/javascript">
	import ItemCard from '@/components/ItemCard.vue'
	import ItemService from '@/services/ItemService.js'

	export default{
		components:{
			ItemCard
		},
		data(){
			return{
				/*items: [
				{ id:1, text: 'Learn JavaScript' },
				{ id:2, text: 'Learn Vue' },
				{ id:3, text: 'Build something awesome' }
				]*/
				items: []
			}
		},
		mounted(){
			this.getItems();
		},
		methods:{
			getItems(){
				ItemService.getItems()
							.then(res => {
								this.items = res.data.items
							})
							.catch(err => {
								console.log('There was an error:',err.response)
							})
			}
		}
	}
</script>


<style type="text/css">

</style>