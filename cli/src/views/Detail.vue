<!-- <template>
	<div>
		<h1>{{item.item_name}}</h1>
	</div>
</template>
-->

<template>
	<div class="row">
		<div class="col-12 col-md-12 mb-md-5 mb-3 mt-md-3">
			<h1 class="text-center text-info font-weight-bold">Detail Information</h1>
		</div>
		<div class="col-12 col-md-6">
			<img :src="item.item_photo" class="card-img-top w-75 h-75">
		</div>
		<div class="col-12 col-md-6 text-left">

			<table class="table table-borderless">

				<tbody>
					<tr>
						<th >Item Name:</th>
						<td class="text-primary font-weight-bold">{{item.item_name}}</td>
					</tr>
					<tr>
						<th>Item Price:</th>
						<td class="text-warning font-weight-bold">{{item.item_price}} MMK</td>
					</tr>

     <!-- <tr>
      <th >Rating:</th>
      <td class="text-secondary" style="font-size: 25px;font-weight: 900">*****</td>
    </tr>
     <tr>
      <th >Contact:</th>
      <td class="text-success font-weight-bold">Myshop2020@gmail.com</td>
  </tr> -->
  <tr>
  	<th ></th>
  	<td></td>
  </tr>
  <tr>
  	<th ><button class="btn btn-outline-info mr-md-4 mr-2" @click="addToCart()"><i class='fa fa-shopping-cart'></i>Add to Cart</button></th>
  	<td><button @click="goBack()" class="btn btn-outline-secondary">Go Back</button></td>
  </tr>
</tbody>
</table>
			<!-- <div class="d-flex">
				<p class="text-secondary mr-3" style="font-size: 20px; ">Item Name:</p>
				<h4 class="text-info" style="font-weight: 700;">{{item.item_name}}</h4>
			</div>
			<p class="text-secondary mb-0" style="font-size: 14px;">Item Price:</p>
			<h4 class="text-danger" style="font-weight: 700;">:150$</h4>
			<p class="text-secondary mb-0" style="font-size: 14px;">Rating:</p>
			<h4 class="text-warning" style="font-weight: 800; letter-spacing: 5px; font-size: 30px;">*****</h4>
			<p class="text-secondary mb-0" style="font-size: 14px;">Contact:</p>
			<h4 class="text-info" style="font-weight: 700;">dkukn@gmail.com</h4>
			<div class="btn-group mt-4">
				<button class="btn btn-outline-info rounded rounded-3 mr-md-4 mr-2">Add to Cart</button>
				<button @click="goBack()" class="btn btn-warning">Go Back</button>
			</div> -->
		</div>
	</div>
</template>

<!-- <script type="text/javascript">
	import ItemService from '@/services/ItemService.js'
	export default{
		data (){
			return {
				/*title: 'Detail Page',*/
				item: Object
				/*id:null*/
			}
		},
		//if bind with UI,firstly do.
		mounted(){
			this.getDetail();
		},
		methods:{
			getDetail(){
				let id = this.$route.params.id;
				ItemService.getItem(id)
				.then(res => {
					this.item = res.data.item
				})
				.catch(err => {
					console.log('There was an error:',err.response)
				})  
			}
		}
	}
</script> -->
<script type="text/javascript">
	import ItemService from '@/services/ItemService.js'
	export default{
		data (){
			return{
				qty:1,
				item: {}
			}
		},
		mounted(){
			this.getDetail();
		},
		methods:{
			addToCart(){
				let item={id:this.item.item_id,name:this.item.item_name,price:this.item.item_price,qty:this.qty};
				this.$store.dispatch('addToCart',item)
			},
			getDetail(){
				let id=this.$route.params.id;
				ItemService.getItem(id)
				.then(res=>{
					this.item=res.data.item
				})
				.catch(err=>{
					console.log('There was an error:',err.response)
				})
			}
		}
	}
</script>


<style type="text/css">

</style>