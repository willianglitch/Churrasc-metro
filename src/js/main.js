function createHeader(Icon){
  return `
  <img src="./src/assept/icon-${Icon}.svg" alt="">
    <div class="content">
      <p>
        Precisando fazer um churrasco mais não saber por onde começar ?  Deixe que  "Churrascometro" façar esse cálculo para você !!
      </p>
      <p>
        Feito para deixar a sua vida muito mais fácil!!! 😉
      </p>
    </div>
  `
}

function createAnimation(){
  return `<div class="bar"></div> `
}

function createText(text1, text2){
  return 
}

function createCard(title){
  return `
  <div class="card">
    <h1>${title}</h1>
    <input type="number" name="homens" id="homens" placeholder="Total homens">
    <input type="number" name="mulheres" id="mulheres" placeholder="Total mulheres">
    <input type="number" name="criança" id="criança" placeholder="Total crianças">
    <input type="number" name="duração" id="duração" placeholder=" Duração ">
    <input type="submit" value="CÁLCULAR" onclick="CÁLCULAR()">

    <div class="resultado" id="resultado"></div>
  </div>
  `
}

document.querySelector("#App").innerHTML = `
    <div class="header">
        ${createHeader("faceDeath")}
    </div>

    <div class="bar-content">
      ${createAnimation()}
    </div>

    <section class="container">
        ${createCard("Churrascômetro")}
    </section>
`