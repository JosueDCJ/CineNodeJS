var Item = require('./pelicula');
module.exports = class _Pelicula {
   constructor( ) {

   }
Guardar(req,res) {
	Item.create(
			{
    Nombre: req.body.Nombre,
    DuracionMinutos: req.body.DuracionMinutos,
    Genero: req.body.Genero,
    IdiomaAudio: req.body.IdiomaAudio,
    IdiomaSubtitulos: req.body.IdiomaSubtitulos,
    Sinopsis: req.body.Sinopsis,
    Clasificacion: req.body.Clasificacion,
    Precio: req.body.Precio,
    HoreInicio: req.body.HoreInicio,
    Fecha: req.body.Fecha,
    MinutoInicio: req.body.MinutoInicio,
    Asientos: req.body.Asientos,
    Imagen: req.body.Imagen,
    Estado: req.body.Estado
      }, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
    
 Modificar(req,res) {
		Item.update( {_id : req.body._id},
					{$set:
			{
    Nombre: req.body.Nombre,
    DuracionMinutos: req.body.DuracionMinutos,
    Genero: req.body.Genero,
    IdiomaAudio: req.body.IdiomaAudio,
    IdiomaSubtitulos: req.body.IdiomaSubtitulos,
    Sinopsis: req.body.Sinopsis,
    Clasificacion: req.body.Clasificacion,
    Precio: req.body.Precio,
    HoreInicio: req.body.HoreInicio,
    Fecha: req.body.Fecha,
    MinutoInicio: req.body.MinutoInicio,
    Asientos: req.body.Asientos,
    Imagen: req.body.Imagen,
    Estado: req.body.Estado
            }}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}   
    
    Eliminar(req,res) {
	Item.remove({_id : req.body.id}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
Seleccionartodos(req,res) {
		Item.find(
		function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
                
                
					res.json(item); // devuelve todas las Personas en JSON	
                    	 
                }
				}
			);
    
    }
    
    
    Seleccionarporfecha(req,res) {
	Item.find({Fecha:req.body.Fecha}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
    
    Seleccionarporid(req,res) {
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
}
    
    Seleccionarpornombre(req,res) {
	Item.find({Nombre:req.body.Nombre}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
    
}