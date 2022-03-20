let miSalarioMensual = 6186.84;
let pagoxHora = 22.91;

/*const var1 = document.getElementById("salario");
const salario = var1.value;*/

function total(){
    const var1 = document.getElementById("dobles");
    const dobles = var1.value;
    const var2 = document.getElementById("triples");
    const triples = var2.value;
    const horasDobles = (pagoxHora * 2) * dobles;
    const horasTriples = (pagoxHora * 3) * triples;
    const totalHoras = horasDobles + horasTriples;

    const mostrarResultado=document.getElementById("resultado").innerHTML = "<P>El pago total de horas es: <P/>"+totalHoras;
     if(triples==0){
            
         console.log(totalHoras);
     } else if(triples>0){
     const mostrarResultado=document.getElementById("resultado").innerHTML = "<P>El pago total de horas es: <P/>"+totalHoras;
    }
}