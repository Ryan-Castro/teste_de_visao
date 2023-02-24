
function calibrate(test){
    $("main").innerHTML =`
        <div class="desktop divCalibrate">
            <p>Use o cursor deslizando para redimensionar a imagem até ficar do tamanho do seu cartão</p>
            <div id="divImgCalib">
                <img src="src/imagens/debit-card.png" class="debitCard">
            </div>
            <input type="range" id="inputCalibrateDesktop" oninput="calibrateWitdh('desktop')" min=100 max=400 value=250>
            <button onclick="updateAndStart('${test}', 'desktop')"  id="startTesteInput">Calibrar e começar</button>
        </div>
        <div class="mobile divCalibrate">
            <p>Use o cursor deslizando para redimensionar a imagem até ficar do tamanho da tira magnética do seu cartão</p>
            <div id="divImgCalib">
                <img src="src/imagens/card-mobile.jpeg" class="debitCard">
            </div>
            <input type="range" id="inputCalibrateMobile" oninput="calibrateWitdh('mobile')" min=50 max=350 value=200>
            <button onclick="updateAndStart('${test}', 'mobile')"  id="startTesteInput">Calibrar e começar</button>
        </div>
    `
}

function updateAndStart(test, system){
    if(system == "desktop"){
        widthCard = ((100 + Number($("#inputCalibrateDesktop").value)) / 3)
    }
    if(system == "mobile"){
        widthCard = (Number($("#inputCalibrateMobile").value) / 3)
    }
    isCalibrated = true
    startTest(`${test}`)
}
function calibrateWitdh(system){
    let value = 0
    if(system == "desktop"){
        value = $("#inputCalibrateDesktop").value
    }
    if(system == "mobile"){
        value = $("#inputCalibrateMobile").value
    }
    document.querySelectorAll(".debitCard").forEach(element=>{
        element.style.width =  (100 + Number(value)) + "px"
    })
}
function startTest(test){  
    closeMenu()
    slidenum = 0
    testEye = 0
    roundsPlayed = 0
    $("#staticEye").innerHTML = ""
    if(test == "full"){    
        if(!didLoad){
            loadScreen(idTeste)
        }
        setTimeout(()=>{
            if(!didAlert){
                brightnessAlert(test)
                return
            }
            if(!isCalibrated){
                calibrate(test)
                return
            }  
            if(!isAcuity){
                score.acuity = [0, 0]
                startAcuity(test)
                return
            }
            if(!isContrast){
                score.contrast = [0, 0],
                startContrast(test)
                return
            }
            if(!isColors){
                score.color = 0,
                startColor(test)
                return
            } 
            if(!isAstigmatism){
                score.astigmatism = [0, 0],
                startAstigmatism(test)
                return
            }
            if(!isVisualField){
                score.visualField = [0, 0]
                startVisualField(test)
                return
            }
            endTest(test)
        },2000)
    }
    if(test == "acuity"){
        if(!didAlert){
            brightnessAlert(test)
            return
        }
        if(!isCalibrated){
            calibrate(test)
            return
        }
        if(!isAcuity){
            startAcuity(test)
            return
        }
        endTest(test)
    }
    if(test == "contrast"){
        if(!didAlert){
            brightnessAlert(test)
            return
        }
        if(!isCalibrated){
            calibrate(test)
            return
        }
        if(!isContrast){
            startContrast(test)
            return
        } 
        endTest(test)
    }
    if(test == "colors"){
        if(!didAlert){
            brightnessAlert(test)
            return
        }
        if(!isCalibrated){
            calibrate(test)
            return
        }
        if(!isColors){
            startColor(test)
            return
        }
        endTest(test)
    }
    if(test == "astigmatism"){
        if(!didAlert){
            brightnessAlert(test)
            return
        }
        if(!isCalibrated){
            calibrate(test)
            return
        }
        if(!isAstigmatism){
            startAstigmatism(test)
            return
        } 
        endTest(test)
    }
    if(test == "visual-field"){
        if(!didAlert){
            brightnessAlert(test)
            return
        }
        if(!isCalibrated){
            calibrate(test)
            return
        }
        if(!isVisualField){
            startVisualField(test)
            return
        }
        endTest(test)
    }
}

function startInMenu(test){
    didAlert = false
    didTutorial = false
    score = {}
    if(test == "acuity"){
        score.acuity = [0, 0]
        isAcuity = false
        startTest(test)
        return
    }
    if(test == "contrast"){
        score.contrast = [0, 0]
        isContrast = false
        startTest(test)
        return
    }
    if(test == "colors"){
        score.color = 0,
        isColors = false
        startTest(test)
        return
    }
    if(test == "astigmatism"){
        score.astigmatism = [0, 0],
        isAstigmatism = false
        startTest(test)
        return
    }
    if(test == "visual-field"){
        score.visualField = [0, 0]
        isVisualField == false
        startTest(test)
        return
    }
}

function endTest(test){
    console.log(test)
    $("main").innerHTML =`
    <div class="containerResult">
        <div class="descriptionResult">
            <h2>Receba seu resultado por E-mail</h2>
        </div>
        <form action="https://formsubmit.co/ryandasilva1008@gmail.com" method="POST">
            <input type="text" name="name" id="name" placeholder="Nome">
            <input type="email" name="email" id="email" placeholder="Email">
            <input type="hidden" name="_autoresponse" value="Esse é o seu ressultado">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_next" value="https://ryan-castro.github.io/teste_de_visao/confirm.html">
            <button type="submit">Enviar</button>
        </form>
    </div>
    `   
    if(test == "full"){    
    $("form").innerHTML += `
        <input type="hidden" name="acuidade do lado direito" value="${endScore.acuity[0]}">
        <input type="hidden" name="acuidade do lado esquerdo" value="${endScore.acuity[1]}">
        <input type="hidden" name="contraste do lado direito" value="${endScore.contrast[0]}">
        <input type="hidden" name="contraste do lado esquerdo" value="${endScore.contrast[1]}">
        <input type="hidden" name="visão das cores" value="${endScore.color}">
        <input type="hidden" name="astigmatismo do olho direito" value="${endScore.astigmatism[0]}">
        <input type="hidden" name="astigmatismo do olho esquerdo" value="${endScore.astigmatism[1]}">
        <input type="hidden" name="Campo de visão do olho direito" value="${endScore.visualField[0]}">
        <input type="hidden" name="Campo de visão do olho esquerdo" value="${endScore.visualField[1]}">
    `
    }
    if(test == "acuity"){
        $("form").innerHTML += `
            <input type="hidden" name="acuidade do lado direito" value="${endScore.acuity[0]}">
            <input type="hidden" name="acuidade do lado esquerdo" value="${endScore.acuity[1]}">
        `
    }
    if(test == "contrast"){
        $("form").innerHTML += `
            <input type="hidden" name="contraste do lado direito" value="${endScore.contrast[0]}">
            <input type="hidden" name="contraste do lado esquerdo" value="${endScore.contrast[1]}">
        `
    }
    if(test == "colors"){
        $("form").innerHTML += `
            <input type="hidden" name="visão das cores" value="${endScore.color}">
        `
    }
    if(test == "astigmatism"){
        $("form").innerHTML += `
            <input type="hidden" name="astigmatismo do olho direito" value="${endScore.astigmatism[0]}">
            <input type="hidden" name="astigmatismo do olho esquerdo" value="${endScore.astigmatism[1]}">
        `
    }
    if(test == "visual-field"){
        $("form").innerHTML += `
            <input type="hidden" name="Campo de visão do olho direito" value="${endScore.visualField[0]}">
            <input type="hidden" name="Campo de visão do olho esquerdo" value="${endScore.visualField[1]}">
        `
    }
}