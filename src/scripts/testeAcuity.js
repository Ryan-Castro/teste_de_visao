let info = "A seta aparecerá cada vez menor e em posições diferentes a cada rodada. Identifique e clicke na seta com a mesma posição"
function tutorial(rounds){
    $("main").innerHTML =`
        <h2>${info}</h2>
        <button onclick="startAcuity(${rounds})">avaliar acuidade visual</button>
    `
}

function startAcuity(rounds){
    if(rounds > roundsPlayed){
        starRounds()
        roundsPlayed++
    } else {
        $("main").innerHTML =`
        <h1>Seu resultado foi de ${score.acuity}/${roundsPlayed}</h1>
        <button onclick="startTest()">Repetir</button>
    `
    }
}

function starRounds(){
    let drawn = Math.floor((Math.random()) * 8)
    let resTable = createTeble()
    $("main").innerHTML =`
        <h1>${score.acuity}/${roundsPlayed}</h1>
        <div id="question">
            <div id="divQuestion" class="${positions[drawn]} divArrow"></div>
        </div>
        <div id="divTable">${resTable}</div>
    `
    document.querySelectorAll(".btn").forEach(element=>{
        element.addEventListener("click", checkedAcuity)
    })
    $("#question").style.transform += `scale(${1 - (roundsPlayed / 10)})`
}

function checkedAcuity(e){
    let res = e.target.className
    if(res.includes($("#divQuestion").className)){
        score.acuity++
    }
    startAcuity(rounds)
}