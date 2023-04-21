function saludo(){
    var nom=document.getElementById("nombre").value;
    document.getElementById("resultado").innerHTML=nom;
    
    
    }
    function suma(){
        var num1,num2,respuesta;
            var num1=document.getElementById("numero1").value;
            var num2=document.getElementById("numero2").value;
            respuesta=parseInt(num1)+ parseInt(num2);
            document.getElementById("resultado").innerHTML=respuesta;
        
        }
    
    function resta(){
        var num1,num2,respuesta;
        var num1=document.getElementById("numero1").value;
        var num2=document.getElementById("numero2").value;
        respuesta=parseInt(num1)- parseInt(num2);
        document.getElementById("resultado").innerHTML=respuesta;
    }
    
    function multiplicacion(){
        var num1,num2,respuesta;
            var num1=document.getElementById("numero1").value;
            var num2=document.getElementById("numero2").value;
            respuesta=parseInt(num1)*parseInt(num2);
            document.getElementById("resultado").innerHTML=respuesta;
    }
    function divicion(){
        var num1,num2,respuesta;
        var num1=document.getElementById("numero1").value;
        var num2=document.getElementById("numero2").value;
        respuesta=parseFloat(num1)/parseFloat(num2);
        document.getElementById("resultado").innerHTML=respuesta;
    }