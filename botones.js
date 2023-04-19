
function suma()
{
    var suma1,suma2,result;
    suma1=prompt("escribe un numero","");
    suma2=prompt("escribe otro numero","");
    result=parseInt(suma1)+parseInt(suma2);
    alert("la suma es: "+result);
   
}
function resta()
{
    var resta1,resta2,result;
    resta1=prompt("escribe un numero","");
    resta2=prompt("escribe otro numero","");
    result=parseInt(resta1)-parseInt(resta2);
    alert("la resta es: "+result);
   
}
function multiplicacion()
{
    var mul1,mul2,result;
    mul1=prompt("escribe un numero","");
    mul2=prompt("escribe otro numero","");
    result=parseInt(mul1)+parseInt(mul2);
    alert("la multiplicaicon es: "+result);
   
}
function divicion()
{
    var div1,div2,result;
    div1=prompt("escribe un numero","");
    div2=prompt("escribe otro numero","");
    result=parseFloat(div1)+parseFloat(div2);
    alert("la divicion es: "+result);
   
}
function positivooNegativo()
{
    var num;
    num=prompt("escribe un numero","");
    if((num)>0)
    alert("Es numero positivo");
   else((num)<0)
   alert("Es numero Negativo");
}
