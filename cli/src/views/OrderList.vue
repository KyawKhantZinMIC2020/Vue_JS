<template>
	
	<div>
		
		<div class="row">
			<div v-for="currency in info" :key="currency.order_id" class="col-md-4">
				<table class="table table-bordered bg-light">
					<tr><td colspan="2" class="bg-danger text-warning font-weight-bold">Order List</td></tr>
					<tr><td class="font-weight-bold text-success">Voucher No:</td><td>{{currency.order_voucherno}}</td></tr>
					<tr><td class="font-weight-bold text-success">Total:</td><td>{{currency.order_total}}</td></tr>
					<tr><td class="font-weight-bold text-success">User Name:</td><td>{{currency.order_user.user_name}}</td></tr>
					<tr><td></td><td><button class="btn btn-sm btn-outline-secondary">Detail</button></td></tr>

				</table>
			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	export default{
		data (){
			return{
				info: Object
			}
		},
		mounted(){
			axios.get('http://osapi.thetpainghtut.com/api/v1/orders')
			.then(res=>{
				this.info=res.data.orders;
			})
		}
	}
	
</script>