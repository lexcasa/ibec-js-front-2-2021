let BuscadorCapital = Vue.component('busqueda-capital', {
	data: function (){
		return {
			capital: {},
			busqueda: ''
		}
	},
	methods: {
	  	verBusqueda: function (){
	  		console.log(this.busqueda)
	  		// Caso correcto
	  		let country = {
			    "country": this.busqueda
			}	

	  		axios.post(API + '/capital', country).then( (success) => {
	  			console.log("success: ", success)
	  			// Por axios el success.data 
	  			// Por documentacion de la API tenemos otro data mas
	  			let capital = success.data.data
	  			this.capital = capital

	  		}).catch( (error) => {
	  			console.log("error: ", error)
	  		})

	  		// Caso erroneo
	  	}
	},
	template: `
		<div>
			<form>
				<input type="text" v-model="busqueda">
				<button type="button" v-on:click="verBusqueda()">Buscar</button>
			</form>
			<ul>
				<li>La capital es: </li>
				<li>{{capital.capital}}</li>
			</ul>
		</div>
	`
})