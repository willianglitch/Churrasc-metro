// quantos quilos de carne um adulto conseguer comer

// Para os homens, calcule 450 g por pessoa. Para as mulheres, 
// 300 g por pessoa. Já para as crianças, 225 g são suficientes.

// cerveja 1250ml por pessoa , passou da hora inicial 6 horas+ 2225ml
// refrigerante 1000ml/litro por pessoa  , + 6 horas 2225ml
//criança é o meio desse cálculo

const homenAdultos = document.getElementById("homens")
const mulherAdultas = document.getElementById("mulheres")
const inputCrianças = document.getElementById("criança")
const tempoDuração  = document.getElementById("duração")

let resultadoCálculo = document.getElementById("resultado")

function CÁLCULAR(){
    let homens = homenAdultos.value;
    let mulheres = mulherAdultas.value;
    let crianças = inputCrianças.value;
    let duração = tempoDuração.value;


    let calcH = carnePH(duração) * homens;
    let calcM = carnePM(duração) * mulheres;
    let calcC = 225 * crianças;

    let calcularBebida = bebidaPP(duração)  * homens + bebidaPP(duração) * mulheres;

    const carneTotal = calcH + calcM + calcC;
    const cervejaTotal = cervejaPP(duração) * homens + cervejaPP(duração) * mulheres;
    const bebidaTotal = calcularBebida - 500 + bebidaPP(duração) * crianças

    console.log(carneTotal, cervejaTotal , bebidaTotal)

    resultadoCálculo.innerHTML = `<p>${carneTotal/ 1000} kg de carne .</p>`
    resultadoCálculo.innerHTML += `<p>${Math.ceil(cervejaTotal/350)} latas de cerveja .</p>`
    resultadoCálculo.innerHTML += `<p>${Math.ceil(bebidaTotal/2000)} pet´s 2L de bebidas .</p>`

    homens = homenAdultos.value = '';
    mulheres = mulherAdultas.value = '';
    crianças = inputCrianças.value = '';
    duração = tempoDuração.value = '';


    
}

function carnePH(duração){
    if (duração >= 6 ){
        return 650
    }else{
        return 450
    }
}

function carnePM(duração){
    if (duração >= 6){
        return 550
    }else{
        return 300
    }

}

function cervejaPP(duração){
    if (duração >= 6){
        return 2225
    }else{
        return 1250
    }
}

function bebidaPP(duração){
    if (duração >= 6){
        return 2000
    }else{
        return 1000
    }   
}




