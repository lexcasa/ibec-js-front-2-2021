// Instanciamos el componente
let HolaMundo = Vue.component('hola-mundo', {
	data: function (){
		return {
			mensaje: 'Hola Mundo!'
		}
	},
	template: `
		<h1>{{mensaje}}</h1>
	`
})