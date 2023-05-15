navigator.geolocation.getCurrentPosition(function(posicion) {
    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;
    
    
    var R = 6371; 
    var dLat = (latitud - 22.131321519431125) * Math.PI / 180;
    var dLon = (longitud - -100.95429394020138) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(22.131321519431125 * Math.PI / 180) * Math.cos(latitud * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var distancia = R * c;
    if (distancia < 1) {
      document.getElementById("vecino").innerHTML = "ERES VECINO FELICIDADES";
    } else {
      document.getElementById("vecino").innerHTML = "Estás fuera del perímetro";
    }
  });