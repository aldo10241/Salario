let miSalarioMensual = 6186.84;
let pagoxHora = 22.91;

function total(){
    const var1 = document.getElementById("horasExtra");
    const horasExtra = var1.value;
    const horasDobles=9;
    const horasTriples=horasExtra-9;
    const ValorHoraDoble = (pagoxHora * 2);
    const ValorHoraTriple = (pagoxHora * 3);

    if(horasExtra<=9){
        const resultadoSoloDobles=horasExtra*ValorHoraDoble;
        const mostrarResultado=document.getElementById("resultado").innerHTML = "<i>El pago total aproximado de tiempo extra es: <i/>"+resultadoSoloDobles;
    } else {
        const resultadoSoloDobles=ValorHoraDoble*9;
        const resultadoSoloTriples=horasTriples*ValorHoraTriple;
        const resultadoFinal=resultadoSoloDobles+resultadoSoloTriples;
        const mostrarResultado=document.getElementById("resultado").innerHTML = "<P>El pago total aproximado de tiempo extra es: <P/>"+resultadoFinal;
    }
}