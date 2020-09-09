<template>
	
	<div>
		
		<div class="row">
			<div v-for="currency in info" :key="currency.order_id" class="col-md-4">
				<table class="table table-bordered bg-light">
					<thead>
						<tr>
							<th>Order List</th>
							<th>Voucher No</th>
							<th>Total</th>
							<th>User Name</th>
							<th>Detail</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>{{currency.order_voucherno}}</td>
							<td>{{currency.order_total}}</td>
							<td>{{currency.order_user.user_name}}</td>
							<td></td>
							<td></td>
						</tr>
					</tbody>

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
			});
		}
	}
	
</script>