//--------------------------Variables--------------------------------//
var mongoose=require('mongoose');
var Schema= mongoose.Schema;
var pelicula = new Schema({
	//--------------------------Esquema--------------------------------//
	Nombre: String,
	DuracionMinutos:  Number,
	Genero:String,
	IdiomaAudio:String,
	IdiomaSubtitulos: String,
	Sinopsis:String,
	Clasificacion:String,
	Precio: Number,
	HoraInicio: Number,
	Fecha: Date,
	MinutoInicio: Number,
			//--------------------------Asientos--------------------------------//
	Asientos:{
		A1:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		A2:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		A3:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		A4:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		A5:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		A6:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},

		B1:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		B2:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		B3:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		B4:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		B5:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		B6:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},

		C1:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		C2:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		C3:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		C4:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		C5:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		C6:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},

		D1:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		D2:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		D3:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		D4:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		D5:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},

		E1:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		E2:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		E3:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		E4:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},

		F1:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		F2:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		F3:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		F4:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},

		G1:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		G2:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		G3:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		G4:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		
		H1:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		H2:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		H3:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},
		H4:{
			NombreEstudiante: String,
			Seccion: String,
			Carne: Number,
		},


	},
	Imagen: String,
	Estado: Number
});
module.exports= mongoose.model('Pelicula',pelicula);