let imagensTestColors = [
    'test-color42.jpg',
    'test-color74.jpg',
    'test-color3.jpg',
    'test-colorNAN.jpg',
]
let optionsTestColors = [
    [15, 10, 42],
    [74, 15, 66],
    [46, 3, 23],
    [36, 78, 45],
]
function startColor(test){
    if(!didTutorial){
        tutorial(test, 'colors')
        return
    }
    if(4 > roundsPlayed){
        starRoundColor(test)
        roundsPlayed++
    } else {
        $("#staticEye").innerHTML = ""
        isColors = true
        didTutorial = false
        idTeste = 3
        didLoad = false
        let leftEye = ""
        if(score.color >= 2){
            leftEye = "excellent"
        } else {
            leftEye = "reduced"
        }
        $("main").innerHTML =`
            <div class="containerResult">
                <div class="titleResult">
                    <img src="./src/imagens/color-test.svg">
                    <h2>Visão das cores</h2>
                </div>
                <div class="descriptionResult">
                    <h3>Esse é o resultado do seu teste</h3>
                </div>
                <div class="imgResult">
                    <img src="./src/imagens/${leftEye}.svg">
                    <img src="./src/imagens/${leftEye}.svg">
                </div>
            </div>
            <button onclick="startTest('${test}')" id="Resultbtn">Continuar para astigmatismo </button>
            `
    }
}

function starRoundColor(test){
    $("#staticEye").innerHTML = `
    <div class="static-eyes-container">
        <div class="eyes">
            <svg width="200" height="54" viewBox="0 0 200 54">
                <g transform="translate(-395 -315)">
                    <path d="M484.657 341.401a50.985 50.985 0 00-89.312 0l-.345.614.344.612A51.45 51.45 0 00439.996 369a51.455 51.455 0 0044.655-26.375l.344-.614zm-2.088.6c-8.209 14.931-25.289 24.948-42.571 24.948s-34.352-10.009-42.568-24.937c8.212-14.932 25.29-24.948 42.57-24.948s34.358 10.014 42.57 24.942z"></path>
                    <path d="M440 361.001a19 19 0 1119-19 19 19 0 01-19 19z"></path>
                    <circle fill="#fff" cx="17" cy="17" r="17" transform="translate(423 325)"></circle>
                </g>
                <g transform="translate(24 -1040)">
                    <path d="M175.657 1066.401a50.985 50.985 0 00-89.312 0l-.345.614.344.612A51.45 51.45 0 00130.996 1094a51.455 51.455 0 0044.655-26.375l.344-.614zm-2.088.6c-8.209 14.931-25.289 24.948-42.571 24.948s-34.352-10.009-42.568-24.937c8.212-14.932 25.29-24.948 42.57-24.948s34.358 10.014 42.57 24.942z"></path>
                    <path d="M131 1086.001a19 19 0 1119-19 19 19 0 01-19 19z"></path>
                    <circle fill="#fff" cx="17" cy="17" r="17" transform="translate(114 1050)"></circle>
                </g>
            </svg>
        </div>
    </div>
    `
    $("main").innerHTML =`
        <div id="question">
            <img src="./src/imagens/${imagensTestColors[roundsPlayed]}">
        </div>
        <p>Seleccione o número que vê no circulo<p>
        <div>
            <input type="button" id="btnColor-${optionsTestColors[roundsPlayed][0]}" class="aswer-btn" value="${optionsTestColors[roundsPlayed][0]}" onClick="checkColor(${optionsTestColors[roundsPlayed][0]}, '${imagensTestColors[roundsPlayed]}', '${test}')">
            <input type="button" id="btnColor-${optionsTestColors[roundsPlayed][1]}" class="aswer-btn" value="${optionsTestColors[roundsPlayed][1]}" onClick="checkColor(${optionsTestColors[roundsPlayed][1]}, '${imagensTestColors[roundsPlayed]}', '${test}')">
            <input type="button" id="btnColor-${optionsTestColors[roundsPlayed][2]}" class="aswer-btn" value="${optionsTestColors[roundsPlayed][2]}" onClick="checkColor(${optionsTestColors[roundsPlayed][2]}, '${imagensTestColors[roundsPlayed]}', '${test}')">
            <input type="button" id="btnColor-NAN" class="aswer-btn" value="Nada" onClick="checkColor('NAN', '${imagensTestColors[roundsPlayed]}', '${test}')">
        </div>
    `
}

function checkColor(testNumber, testImg, test){
    if(testNumber.toString().substring(0, 1) == testImg.substring(10, 11)){
        score.color++
        $(`#btnColor-${testNumber}`).style.backgroundColor = "green"
 
    } else {
        $(`#btnColor-${testNumber}`).style.backgroundColor = "red"
    }
    setTimeout(()=>{
        startColor(test)
    },1000)
}
