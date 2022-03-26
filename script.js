// quantos quilos de carne um adulto conseguer comer

// Para os homens, calcule 450 g por pessoa. Para as mulheres, 
// 300 g por pessoa. Já para as crianças, 200 g são suficientes.

// cerveja 1400ml por pessoa , passou da hora inicial 5 horas+ 2200ml
// refrigerante 1000ml/litro por pessoa  , + 5 horas 1500ml
//criança é o meio desse cálculo

const homenAdultos = document.getElementById("homens")
const mulherAdultas = document.getElementById("mulheres")
const inputCrianças = document.getElementById("criança")
const tempoDuração  = document.getElementById("duração")

let resultado = document.getElementById("resultado")

function CÁLCULAR(){
    let homens = homenAdultos.value;
    let mulheres = mulherAdultas.value;
    let crianças = inputCrianças.value;


    let calcH = 450 * homens;
    let calcM = 300 * mulheres;
    let calcC = 225 * crianças

    const carneTotal = calcH + calcM + calcC;


}





