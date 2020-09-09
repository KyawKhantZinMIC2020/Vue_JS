import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		cart: []
	},
	mutations: {
		addToCart(state,payload){
			let item=state.cart.find(item=>item.id==payload.id);
			if(item){
				item.qty+=Number(payload.qty);
			}else{
				state.cart.push(payload);
			}

		},
		removeFromCart(state,payload){
			let indexToDelete=state.cart.find(item=>item.id==payload)
			state.cart.splice(indexToDelete,1);
		},
		saveCart(state){
			localStorage.setItem('cart',JSON.stringify(state.cart));

		},
		addCart(state,payload){
			let indexToAdd=state.cart.find(item=>item.id==payload)
			if(indexToAdd){
				indexToAdd.qty+=1;
			}
		},
		reduceCart(state,payload){
			let indexToReduce=state.cart.find(item=>item.id==payload)
			
			if(indexToReduce.qty==1){
				state.cart.splice(indexToReduce,1);
			}else{
				indexToReduce.qty-=1;
			}
		},

		getData(state){
			if(localStorage.getItem('cart')){
				state.cart=JSON.parse(localStorage.getItem('cart'));
			}else{
				state.cart=[];
			}

		}
		
	},
	actions:{
		addToCart({commit},payload){
			commit('addToCart',payload)
			commit('saveCart')

		},
		removeFromCart({commit},payload){
			commit('removeFromCart',payload)
			commit('saveCart')
		},
		addCart({commit},payload){
			commit('addCart',payload)
			commit('saveCart')
		},
		reduceCart({commit},payload){
			commit('reduceCart',payload)
			commit('saveCart')
		},

		getData({commit}){
			commit('getData')

		}

	},
	getters:{

	}
})

export default store