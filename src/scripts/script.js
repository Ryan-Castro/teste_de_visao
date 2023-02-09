let rounds = 10
function calibrate(){
    $("main").innerHTML =`
        <h1>Ajuste para largura do seu cartão</h1>
        <div id="divImgCalib">
            <img src="src/imagens/debit-card.png" id="debitCard">
        </div>    
        <input type="range" id="inputCalibrate" oninput="calibrateWitdh()" min=0 max=1000 value=350>
        <button onclick="updateAndStart()">Calibrar e começar</button>
    `
}

function updateAndStart(){
    startTest()
}
function calibrateWitdh(){
    let value = $("#inputCalibrate").value
    $("#debitCard").style.width =   Number(value) + "px"
}
function startTest(){
    roundsPlayed = 0
    score.acuity = 0
    tutorial(rounds)
}
