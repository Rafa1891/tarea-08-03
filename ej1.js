let notas=[];
let numeroAlumnosMayor=0;
let numeroAlumnosMenor=0;

for(let i=0;i<10;i++){
    
    notas[i]=prompt("Introduzca nota "+(i+1));

    if(notas[i]>=7){
numeroAlumnosMayor++;
    }  else{
        numeroAlumnosMenor++;
    }

}

alert("El numero de alumnos con nota mayor a 7 es: "+numeroAlumnosMayor);
alert("El numero de alumnos con nota menor a 7 es: "+numeroAlumnosMenor);

