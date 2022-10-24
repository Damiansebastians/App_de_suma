
function sumar(){

//Tomamos los datos del formulario
    var valor1=parseInt(document.sumadora.dato1.value);
    var valor2=parseInt(document.sumadora.dato2.value);
    
//Definimos la suma
    var suma=valor1+valor2;
    
//Mostramos el resultado en el formulario
    document.sumadora.dato3.value=suma;
    
}


