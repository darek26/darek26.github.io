<?php
if(isset($_POST['submit']))
{
$para = "178015@upslp.edu.mx";
$asunto = "Enviando informacion";
$nombre=$_POST['nombre'];
$correo=$_POST['email '];
$mensaje=$_POST['mensaje'];
$sheaders="MIME-Version:1.0\r\n";
$sheaders.="Content-type:text/html:charset=utf8\r\n";
$cuerpo="Enviado por: $nombre\n E-mail:$correo\n Mensaje:$mensaje\n";
$bool=mail ($para,$asunto,$cuerpo,$sheaders);
}
else{
    echo "Algo ocurrio mal..."
}
?>