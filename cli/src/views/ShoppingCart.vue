<template>
	<div class="container">
		<section v-if="orderDone" class="my-3"><h2>Order Completed Successfully!</h2></section>
		<section v-else>
		<div class="row">
			<div class="col-md-12 my-3"><h2 class="text-info font-weight-bold">Your Shopping Cart</h2></div>
		</div>
		<div class="row">
			<div class="col-md-8">
				<table class="table table-bordered">
					<thead class="bg-info">
						<tr>
							<th class="font-weight-bold">No</th>
							<th class="font-weight-bold">Name</th>
							<th class="font-weight-bold">Price</th>
							<th class="font-weight-bold">Qty</th>
							<th class="font-weight-bold">Subtotal</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="(item,index) in cart" :key="index">
							<td>{{++index}}</td>
							<td>{{item.name}}</td>
							<td>{{formattingNumber(item.price)}}</td>
							<td>
								<button class="btn btn-sm px-2 btn-info" @click="addCart(item.id)"> +</button> <input type="number" :value=item.qty class="form-control d-inline-block" style="width: 65px;"> <button class="btn btn-sm px-2 btn-danger" @click="reduceCart(item.id)">-</button>

								<button @click="removeFromCart(item.id)" class="btn btn-sm btn-outline-secondary ml-3">Remove</button>
								</td>
								<td class="font-weight-bold text-secondary">
									{{formattingNumber(item.price*item.qty)}} MMK
								</td>
							
						</tr>
					</tbody>
					
				</table>

				<div class="form-group">
					<textarea class="form-control" placeholder="Your Message Here!" v-model="notes"></textarea>
				</div>
			</div>
			 <div class="col-md-4">
				<ul class="list-group">
					<li class="list-group-item">
						<span class="float-left font-weight-bold"><strong>{{cartItemsCount}}</strong> items</span>

						<span class="float-right">{{ formattingNumber(itemsSubtotal) }} MMK</span>
					</li>
					<li class="list-group-item">
						<span class="float-left font-weight-bold">Shipping:</span>
						<select v-model="selectedShippingOption" class="float-right bg-info">
							<option disabled value="">Please select an option</option>
							<option v-for="option in shippingOptionsArray" :key="option.text" :value="option.rate">{{option.text}} (${{option.rate}})</option>
						</select>
					</li>
					<li class="list-group-item">
						<span class="float-left font-weight-bold">Subtotal</span>
						<span class="float-right"> {{formattingNumber(subtotal)}} MMK</span>
						
					</li>
					<li class="list-group-item">
						<span class="float-left font-weight-bold">Tax ({{salesTax *100}}%)</span>
						<span class="float-right">{{ formattingNumber(salesTaxApplied | currencydecimal) }} MMK</span>
						
					</li>
					<li class="list-group-item">
						<span class="float-left font-weight-bold">Total</span>
						<span class="float-right">{{ formattingNumber(total | currencydecimal) }} MMK </span>
						
					</li>
				</ul>
				<button  class="btn btn-sm btn-outline-info mt-2" @click="order()">Check out</button>
			</div> 
		</div>
	</section>	
</div>
</template>

<script type="text/javascript">
	import ItemService from '@/services/ItemService.js'
	export default{
		data(){
			      return{
        totalAmount: 0,
        notes: '',
        orderDone: 0,
        selectedShippingOption: '',
        shippingOptionsArray: [
          {
            text: 'One day',
            rate: 20,
          },
          {
            text: 'Two days',
            rate: 15,
          },
          {
            text: 'Three to five days',
            rate: 10,
          },
          {
            text: 'One week or more',
            rate: 5,
          },
        ],
        salesTax: 0.05,
      }
		},
		computed:{
			cart(){
				return this.$store.state.cart;
			},
		
		      cartItemsCount() {
        return this.cart.length;
      },
      itemsSubtotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.qty), 0);
      },
      subtotal() {
        if (this.selectedShippingOption) {
          return Number(this.itemsSubtotal) + Number(this.selectedShippingOption);
        }
        return '---';
      },
      salesTaxPercentage() {
        return `${this.salesTax * 100}%`;
      },
      salesTaxApplied() {
        if (this.selectedShippingOption) {
          return (this.subtotal * this.salesTax).toFixed(2);
        }
        return '---';
      },
      total() {
        if (this.selectedShippingOption) {
          return Number(this.subtotal)
                 + Number(this.salesTaxApplied);
        }
        return '---';
      },
    },
		methods:{
			removeFromCart(itemId){
				this.$store.dispatch('removeFromCart',itemId)
			},
			addCart(itemId){
				this.$store.dispatch('addCart',itemId)
			},
			reduceCart(itemId){
				this.$store.dispatch('reduceCart',itemId)
			},
			order(){
				let data={shop_data:JSON.stringify(this.$store.state.cart),
					notes:this.notes};
					ItemService.createOrder(data)
					.then(response=>{
						console.log(response)
						localStorage.clear();
						this.orderDone=1;
						this.$store.dispatch('getData')
					})
					.catch(error=>{
						console.log('There was an error:',error.response)
					})
			},
			formattingNumber(number) {
				return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
			}
		},
		filters: {
			currencydecimal (value) {
        // return value.toFixed(0)
        return Math.ceil(value)
    }
}
}
	
</script>