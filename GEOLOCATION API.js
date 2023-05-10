navigator.geolocation.getCurrentPosition(function(posicion) {
    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;
    //con esta seccion se obtiene las coordenadas del usuario 
    
    var R = 6371; // Radio de la Tierra en km
    var dLat = (latitud - 22.131321519431125) * Math.PI / 180;
    var dLon = (longitud - -100.95429394020138) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(22.131321519431125 * Math.PI / 180) * Math.cos(latitud * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var distancia = R * c;
    // esta formula verifica la distancia entre el gimnasio y la ubicacion del usuario
    if (distancia < 1) // distancia permitida en kilometros{
      document.getElementById("mensaje").innerHTML = "Eres vecino tienes %50 de descuento en tu inscripcion";
    } else {
      document.getElementById("mensaje").innerHTML = "LO SIENTO NO ERES VECINO";
    }
  });