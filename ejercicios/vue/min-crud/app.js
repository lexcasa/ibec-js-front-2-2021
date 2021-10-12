const copy = function (obj){
	return JSON.parse( JSON.stringify(obj) )
}
let lastItem = 3

const API = 'https://crudcrud.com/api/5730a986261f43fd90340d82e91d5966'

const app = new Vue({
	el: '#app',
	data: {
		titulo: "Mini CRUD Productos",
		productos: [],
		producto: {
			_id: 0,
			nombre: '',
			precio: ''
		}
	},
	methods: {
		selectProducto: function (producto){
			axios.get(API + '/productos/' + producto._id).then( (success) => {
				this.producto = success.data
			})
		},
		eliminarProducto: function(id){
			/*this.productos.map( (item, i) => {
				if(item._id == id){
					this.productos.splice(i,1)
				}
			})*/

			axios.delete(API + '/productos/' + id).then( (success) => {
				this.obtenerItems()
			})
		},
		guardaProducto: function (){
			lastItem++
			let prod = copy(this.producto)

			if(this.producto._id == 0){
				// prod._id = lastItem
				// this.productos.push(prod)
				
				delete prod._id

				axios.post(API + '/productos', prod).then( (success) => {
					console.log("success: ", success)
					this.obtenerItems()
				}).catch( (error) => {
					console.log("Error: ", error)
				})
			} else {
				/*this.productos.map( (item, i) => {
					if(item._id == prod._id){
						// this.productos[i] = prod
						this.$set(this.productos, i, prod)
					}
				})
				console.log("this.productos: ", this.productos)*/
				const id = copy(prod._id)
				delete prod._id

				axios.put(API + '/productos/' + id, prod).then( (success) => {
					console.log("success: ", success)
					this.obtenerItems()
				}).catch( (error) => {
					console.log("Error: ", error)
				})
			}
			this.producto = {
				_id: 0,
				nombre: '',
				precio: ''
			}
		},
		obtenerItems: function (){
			axios.get(API + '/productos').then( (success) => {
				this.productos = success.data
			}).catch( (error) => {
				console.log("error: ", error)
			})
		}
	},
	mounted: function (){
		console.log("ready :: ")
		this.obtenerItems()
	}
})