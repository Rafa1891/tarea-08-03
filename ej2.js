
let media=0;
let suma=0;
let i=0;
let altura=0;

while(altura !=null){
    i++;
    altura=parseInt(prompt("Introduzca altura "+i));
    if(altura==null) break;
    suma=suma+altura;
    alert(suma); 
    media=suma/i;
    alert("La media de alturas es: "+media);   
}

