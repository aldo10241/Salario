let miSalarioMensual = 6186.84;
let pagoxHora = 22.91;

/*const var1 = document.getElementById("salario");
const salario = var1.value;*/

function calcularHoras(){
    const var1 = document.getElementById("dobles");
    const dobles = var1.value;
    const var2 = document.getElementById("triples");
    const triples = var2.value;
    const horasDobles = (pagoxHora * 2) * dobles;
    const horasTriples = (pagoxHora * 3) * triples;
    const totalHoras = horasDobles + horasTriples;
    console.log(horasDobles);


    function total(){
        const mostrarResultado=document.getElementById("resultado").innerHTML = totalHoras;
        console.log("El pago total de horas es: "+totalHoras);
    }

    if(triples>0){
        console.log(horasTriples);
        total();
    } else{
        const mostrarResultado=document.getElementById("resultado").innerHTML = totalHoras;
        console.log("No hay horas triples");
        total();
    }
}