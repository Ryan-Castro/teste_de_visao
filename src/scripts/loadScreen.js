function loadScreen(id){
    didLoad = true
    $("main").innerHTML = `<h1>Vamos a isso!</h1>
    <div id="container">
        <div class="circle">
            <img src="./src/imagens/acuity-test.svg" alt="">
            <span class="material-symbols-outlined">
                done
            </span>
            <h3>Acuidade Visual</h3>
        </div>
        <div class="circle">
            <img src="./src/imagens/contrast-test.svg" alt="">
            <span class="material-symbols-outlined">
                done
            </span>
            <h3>Visão de contraste</h3>
        </div>
        <div class="circle">
            <img src="./src/imagens/color-test.svg" alt="">
            <span class="material-symbols-outlined">
                done
            </span>
            <h3>visão das cores</h3>
        </div>
        <div class="circle">
            <img src="./src/imagens/astigmatism-test.svg" alt="">
            <span class="material-symbols-outlined">
                done
            </span>
            <h3>astigmatism</h3>
        </div>
        <div class="circle">
            <img src="./src/imagens/amsler-test.svg" alt="">
            <span class="material-symbols-outlined">
                done
            </span>
            <h3>Campo de visão</h3>
        </div>
    </div>`
    document.querySelectorAll(".circle").forEach((element, i)=>{
        if(id == i){
            element.children[0].classList = 'selected'
        }
        if(id > i){
            element.children[1].classList += ' complet'
        }
    })
}
function brightnessAlert(test){
    didAlert = true
    $("main").innerHTML =`
        <h3 style="text-align: center;">Maximixe o brilho no ecrã para obter resultados exactos</h3>
        <img src="./src/imagens/brightness-desktop.svg">
        <button onclick="startTest('${test}')" id="startTesteInput">Concluido</button>
    `
}
