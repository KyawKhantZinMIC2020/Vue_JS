import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'http://osapi.thetpainghtut.com/api/v1',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-type': 'application/json'
	}
})

export default{
	getItems(){
		return apiClient.get('/items')//get all data (Exercise)
	},
	getItem(id){
		return apiClient.get('/items/'+id)//get data with id=1 or 2 or 3 (Detail)
	},
	createOrder(data){
		return apiClient.post('/orders',data)
	}
}