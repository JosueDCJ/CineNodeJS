    
 

class _Pelicula {
   constructor(_id, 
    Nombre,
    DuracionMinutos,
    Genero,
    IdiomaAudio,
    IdiomaSubtitulos,
    Sinopsis,
    Clasificacion,
    Precio,
    HoraInicio,
    Fecha,
    MinutoInicio,
    Asientos,
    Imagen,
    Estado
            ) {
       this._id=_id;
    this.Nombre =Nombre;
    this.DuracionMinutos=DuracionMinutos;
    this.Genero=Genero;
    this.IdiomaAudio=IdiomaAudio;
    this.IdiomaSubtitulos=IdiomaSubtitulos;
    this.Sinopsis=Sinopsis;
    this.Clasificacion=Clasificacion;
    this.Precio=Precio;
    this.HoraInicio=HoraInicio;
    this.Fecha=Fecha;
    this.MinutoInicio=MinutoInicio;
    this.Asientos=Asientos;
    this.Imagen=Imagen;
    this.Estado=Estado;
   }

Guardar() {
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Nuevapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
}
    
 Modificar() {
    
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Modificapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}   
    
    Eliminar() {

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Eliminapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}

peliculapormesyanno(mes,anno) {
    
       var objetoaenviar = this;
       var vectordepeliculasfiltradas=[];
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        var peliculas =JSON.parse(xhr.responseText);
        for(var elemento in peliculas) {
            var fechadelapelicula= new Date(peliculas[elemento].Fecha);
            if((fechadelapelicula.getMonth()+1 == mes) && (fechadelapelicula.getFullYear() == anno)){
                vectordepeliculasfiltradas.push(peliculas[elemento]);
            }
        }
        resolve(vectordepeliculasfiltradas);
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
                  
}
catch(err) {
     reject(err.message);

}
    });    
}   

Seleccionartodos() {
    
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionartodos');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
}
    
    
    
    Seleccionarporfecha() {

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarporfecha');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
    
    Seleccionarporid() {
    
      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarpeliculaporid');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
}
    
    Seleccionarpornombre() {

    
    
      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarpornombre');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
}
}

            
             let imagenenbase64 = "";
      $("#imgpeli").change(function(){
       readURL(this);
 });
    
        function readURL(input) {

                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {

                            imagenenbase64=e.target.result;

                        
                          
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }
    
    
            
            
           var asientos = new Object();
           var asientoA1 = new Object();
            asientoA1.NombreEstudiante = null;
            asientoA1.Seccion=null;
            asientoA1.Carne=null;
            asientos.A1= asientoA1;    
            
            
            var asientoA2 = new Object();
            asientoA2.NombreEstudiante = null;
            asientoA2.Seccion=null;
            asientoA2.Carne=null;
            asientos.A2= asientoA2;

            var asientoA3 = new Object();
            asientoA3.NombreEstudiante = null;
            asientoA3.Seccion=null;
            asientoA3.Carne=null;
            asientos.A3= asientoA3;

            var asientoA4 = new Object();
            asientoA4.NombreEstudiante = null;
            asientoA4.Seccion=null;
            asientoA4.Carne=null;
            asientos.A4= asientoA4;

            var asientoA5 = new Object();
            asientoA5.NombreEstudiante = null;
            asientoA5.Seccion=null;
            asientoA5.Carne=null;
            asientos.A5= asientoA5;

            var asientoA6 = new Object();
            asientoA6.NombreEstudiante = null;
            asientoA6.Seccion=null;
            asientoA6.Carne=null;
            asientos.A6= asientoA6;

            var asientoB1 = new Object();
            asientoB1.NombreEstudiante = null;
            asientoB1.Seccion=null;
            asientoB1.Carne=null;
            asientos.B1= asientoB1;

            var asientoB2 = new Object();
            asientoB2.NombreEstudiante = null;
            asientoB2.Seccion=null;
            asientoB2.Carne=null;
            asientos.B2= asientoB2;

            var asientoB3 = new Object();
            asientoB3.NombreEstudiante = null;
            asientoB3.Seccion=null;
            asientoB3.Carne=null;
            asientos.B3= asientoB3;

            var asientoB4 = new Object();
            asientoB4.NombreEstudiante = null;
            asientoB4.Seccion=null;
            asientoB4.Carne=null;
            asientos.B4= asientoB4;

            var asientoB5 = new Object();
            asientoB5.NombreEstudiante = null;
            asientoB5.Seccion=null;
            asientoB5.Carne=null;
            asientos.B5= asientoB5;

            var asientoB6 = new Object();
            asientoB6.NombreEstudiante = null;
            asientoB6.Seccion=null;
            asientoB6.Carne=null;
            asientos.B6= asientoB6;

            var asientoC1 = new Object();
            asientoC1.NombreEstudiante = null;
            asientoC1.Seccion=null;
            asientoC1.Carne=null;
            asientos.C1= asientoC1;

            var asientoC2 = new Object();
            asientoC2.NombreEstudiante = null;
            asientoC2.Seccion=null;
            asientoC2.Carne=null;
            asientos.C2= asientoC2;

            var asientoC3 = new Object();
            asientoC3.NombreEstudiante = null;
            asientoC3.Seccion=null;
            asientoC3.Carne=null;
            asientos.C3= asientoC3;

            var asientoC4 = new Object();
            asientoC4.NombreEstudiante = null;
            asientoC4.Seccion=null;
            asientoC4.Carne=null;
            asientos.C4= asientoC4;

            var asientoC5 = new Object();
            asientoC5.NombreEstudiante = null;
            asientoC5.Seccion=null;
            asientoC5.Carne=null;
            asientos.C5= asientoC5;

            var asientoC6 = new Object();
            asientoC6.NombreEstudiante = null;
            asientoC6.Seccion=null;
            asientoC6.Carne=null;
            asientos.C6= asientoC6;

            var asientoD1 = new Object();
            asientoD1.NombreEstudiante = null;
            asientoD1.Seccion=null;
            asientoD1.Carne=null;
            asientos.D1= asientoD1;

            var asientoD2 = new Object();
            asientoD2.NombreEstudiante = null;
            asientoD2.Seccion=null;
            asientoD2.Carne=null;
            asientos.D2= asientoD2;

            var asientoD3 = new Object();
            asientoD3.NombreEstudiante = null;
            asientoD3.Seccion=null;
            asientoD3.Carne=null;
            asientos.D3= asientoD3;

            var asientoD4 = new Object();
            asientoD4.NombreEstudiante = null;
            asientoD4.Seccion=null;
            asientoD4.Carne=null;
            asientos.D4= asientoD4;

            var asientoD5 = new Object();
            asientoD5.NombreEstudiante = null;
            asientoD5.Seccion=null;
            asientoD5.Carne=null;
            asientos.D5= asientoD5;

            var asientoE1 = new Object();
            asientoE1.NombreEstudiante = null;
            asientoE1.Seccion=null;
            asientoE1.Carne=null;
            asientos.E1= asientoE1;

            var asientoE2 = new Object();
            asientoE2.NombreEstudiante = null;
            asientoE2.Seccion=null;
            asientoE2.Carne=null;
            asientos.E2= asientoE2;

            var asientoE3 = new Object();
            asientoE3.NombreEstudiante = null;
            asientoE3.Seccion=null;
            asientoE3.Carne=null;
            asientos.E3= asientoE3;

            var asientoE4 = new Object();
            asientoE4.NombreEstudiante = null;
            asientoE4.Seccion=null;
            asientoE4.Carne=null;
            asientos.E4= asientoE4;

            var asientoF1 = new Object();
            asientoF1.NombreEstudiante = null;
            asientoF1.Seccion=null;
            asientoF1.Carne=null;
            asientos.F1= asientoF1;

            var asientoF2 = new Object();
            asientoF2.NombreEstudiante = null;
            asientoF2.Seccion=null;
            asientoF2.Carne=null;
            asientos.F2= asientoF2;

            var asientoF3 = new Object();
            asientoF3.NombreEstudiante = null;
            asientoF3.Seccion=null;
            asientoF3.Carne=null;
            asientos.F3= asientoF3;

            var asientoF4 = new Object();
            asientoF4.NombreEstudiante = null;
            asientoF4.Seccion=null;
            asientoF4.Carne=null;
            asientos.F4= asientoF4;

            var asientoG1 = new Object();
            asientoG1.NombreEstudiante = null;
            asientoG1.Seccion=null;
            asientoG1.Carne=null;
            asientos.G1= asientoG1;

            var asientoG2 = new Object();
            asientoG2.NombreEstudiante = null;
            asientoG2.Seccion=null;
            asientoG2.Carne=null;
            asientos.G2= asientoG2;

            var asientoG3 = new Object();
            asientoG3.NombreEstudiante = null;
            asientoG3.Seccion=null;
            asientoG3.Carne=null;
            asientos.G3= asientoG3;

            var asientoG4 = new Object();
            asientoG4.NombreEstudiante = null;
            asientoG4.Seccion=null;
            asientoG4.Carne=null;
            asientos.G4= asientoG4;

            var asientoH1 = new Object();
            asientoH1.NombreEstudiante = null;
            asientoH1.Seccion=null;
            asientoH1.Carne=null;
            asientos.H1= asientoH1;

            var asientoH2 = new Object();
            asientoH2.NombreEstudiante = null;
            asientoH2.Seccion=null;
            asientoH2.Carne=null;
            asientos.H2= asientoH2;

            var asientoH3 = new Object();
            asientoH3.NombreEstudiante = null;
            asientoH3.Seccion=null;
            asientoH3.Carne=null;
            asientos.H3= asientoH3;

            var asientoH4 = new Object();
            asientoH4.NombreEstudiante = null;
            asientoH4.Seccion=null;
            asientoH4.Carne=null;
            asientos.H4= asientoH4;

    
        function botonguardarclick()
            {
                 var peliculainstanciada = new _Pelicula(0,
                    document.getElementById("Nombre").value,
                 document.getElementById("Duracion").value,
                document.getElementById("Genero").value,
               document.getElementById("IdiomaAudio").value,
                document.getElementById("IdiomaSubtitulos").value,
              document.getElementById("Sinopsis").value,
              document.getElementById("Clasificacion").value,
              document.getElementById("Precio").value,
            document.getElementById("Hora").value,
            document.getElementById("Fecha").value,
           document.getElementById("MinutoInicio").value,
         asientos,
          imagenenbase64,
         document.getElementById("Estado").value
                );
                                                        
                peliculainstanciada.Guardar().then(function(response) {
  console.log("Success!", response);
            alert("Guardado con exito");
              
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
           
});                                       
                                                        
            }



