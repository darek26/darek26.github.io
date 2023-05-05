
function RFC() {
    var nombre = document.getElementsByName("nombre")[0].value;
    var apellidoPaterno = document.getElementsByName("apellidoPaterno")[0].value;
    var apellidoMaterno = document.getElementsByName("apellidoMaterno")[0].value;
    var año = document.getElementsByName("año")[0].value;
    var mes = document.getElementsByName("mes")[0].value;
    var dia = document.getElementsByName("dia")[0].value;
  
    var rfc = nombre.charAt(0) + apellidoPaterno.charAt(0) + apellidoMaterno.charAt(0) + año.slice(-2) + mes + dia;
  
    document.getElementById("resultado").innerHTML=rfc;
  }