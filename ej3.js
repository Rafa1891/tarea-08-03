let sueldo=[];
let sueldoMenor=0;
let sueldoMayor=0;
let total=0;
let i=0;

while(sueldo !=null){
    i++;
    sueldo[i]=parseInt(prompt("Introduzca sueldo "+i));

    if(sueldo[i]>100 && sueldo[i]<500){
        if(sueldo[i]>100 && sueldo[i]<300){
            sueldoMenor++;
        }else{

            sueldoMayor++;
        }
    }else{
        break;
    }
    
    total=total+sueldo[i];
}


alert("El número de empleados que cobran menos de 300 y más de 100 es: "+sueldoMenor);  
alert("El número de empleados que cobran menos de 500 y más de 300 es: "+sueldoMayor); 
alert("El total es: "+total); 