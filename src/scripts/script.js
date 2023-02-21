
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
            <input type="range" id="inputCalibrateMobile" oninput="calibrateWitdh('mobile')" min=0 max=300 value=250>
            <button onclick="updateAndStart('${test}', 'mobile')"  id="startTesteInput">Calibrar e começar</button>
        </div>
    `
}

function updateAndStart(test, system){
    if(system == "desktop"){
        widthCard = ((100 + Number($("#inputCalibrateDesktop").value)) / 3)
    }
    if(system == "mobile"){
        widthCard = (100 + Number($("#inputCalibrateMobile").value) / 4)
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
    $("#staticEye").innerHTML = ""
    if(test == "full"){    
        roundsPlayed = 0
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
                testEye = 0
                startAcuity(test)
                return
            }
            if(!isContrast){
                testEye = 0
                startContrast(test)
                return
            }
            if(!isColors){
                testEye = 0
                startColor(test)
                return
            } 
            if(!isAstigmatism){
                testEye = 0
                startAstigmatism(test)
                return
            }
            if(!isVisualField){
                testEye = 0
                startVisualField(test)
                return
            }
            endTest()
        },2000)
    }
    if(test == "acuity"){
        roundsPlayed = 0
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
        endTest()
    }
    if(test == "contrast"){
        roundsPlayed = 0
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
        endTest()
    }
    if(test == "colors"){
        roundsPlayed = 0
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
        endTest()
    }
    if(test == "astigmatism"){
        roundsPlayed = 0
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
        endTest()
    }
    if(test == "visual-field"){
        roundsPlayed = 0
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
        endTest()
    }

}

function endTest(){
    $("main").innerHTML =`
    <div class="containerResult">
        <div class="descriptionResult">
            <h2>Ir para a loja da (xxxx)</h2>
        </div>
        <div class="imgResult">
            <a href="#">Click aqui</a>
        </div>
    </div>
    `   
}