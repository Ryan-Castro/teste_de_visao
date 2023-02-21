let maxTranslate = 0
function tutorial(test, id){
    didTutorial = true
    $("main").innerHTML =`
    <div id="slideConteiner">
        <div class="glide__slides">
        </div>
    </div>
    <div id="tutorialInputs">
    </div>
    <input type="button" value="Seguinte" id="startTesteInput" onclick="nextSlide('${test}')">
    <input type="button" onclick="startTest('${test}')" id="skipTutorialInput" value="Saltar"/>
    `
    if(id == "acuity"){
        slideWearYourGlasses(0)
        slideImageAcuity(500)
        slideDistance(1000)
        slideEyes(1500, "left-hand motion-hand", 'Tape o seu olho esquerdo.')
        maxTranslate = 1500
    }
    if(id == "colors"){
        slideWearYourGlasses(0)
        slideDistance(500)
        slideEyes(1000, "none-hand", "Mantenha ambos os olhos abertos.")
        maxTranslate = 1000
    }
    if(id == "astigmatism"){
        slideWearYourGlasses(0)
        slideDistance(500)
        slideEyes(1000, "left-hand motion-hand", "Tape o seu olho esquerdo.")
        maxTranslate = 1000
    }
}


function slideWearYourGlasses(id){
    $(".glide__slides").innerHTML += `
        <div class="carousel-slide">
            <img src="./src/imagens/wear-your-glasses.svg" width="200" height="60" alt="Caso utilize óculos ou lentes de contacto, coloque-os">
            <div>
                Caso utilize óculos ou lentes de contacto, coloque-os.<br>
            </div>
        </div>
    ` 
    $("#tutorialInputs").innerHTML += `
        <input type="radio" name="slide" id="input-${id}" onclick="handleSlide(${id})" checked>
    `
}

function slideImageAcuity(id){
    $(".glide__slides").innerHTML += `
        <div class="carousel-slide">
            <img src="./src/imagens/tutorial.jpeg" alt=""  width="200" height="200">
            <div class="description">
                Observe o anel superior e assinale a abertura correspondente no anel inferior.
            </div>
        </div>
    ` 
    $("#tutorialInputs").innerHTML += `
        <input type="radio" name="slide" id="input-${id}" onclick="handleSlide(${id})">
    `
}
function slideDistance(id){
    $(".glide__slides").innerHTML += `
        <div class="carousel-slide">
            <div class="mobile">
                <img id="keepDistanceMobile" src="./src/imagens/keep-distance-mobile.svg" width="160" height="106" alt="Mantenha o dispositivo à distância de um braço durante a avaliação.">
            </div>
            <div class="desktop">
                <img id="keepDistanceDesktop" src="./src/imagens/keep-distance-desktop.svg" width="170" height="105" alt="Mantenha o dispositivo à distância de um braço durante a avaliação.">
            </div>
            <div class="description">
                Mantenha o dispositivo à distância de um braço durante a avaliação.
            </div>
        </div>
    ` 
    $("#tutorialInputs").innerHTML += `
        <input type="radio" name="slide" id="input-${id}" onclick="handleSlide(${id})">
    `
}

function slideEyes(id, side, text){
    $(".glide__slides").innerHTML += `
        <div class="carousel-slide">
            <div class="eyes-container">
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
                <div class="${side}">
                    <svg width="40" height="48">
                        <path d="M38.004 9.182a4.746 4.746 0 00-3.312-1.331 4.129 4.129 0 00-2.295.646V6.935a4.423 4.423 0 00-4.225-3.99 3.967 3.967 0 00-2.561.985 4.061 4.061 0 00-4-2.928 3.988 3.988 0 00-3.135 1.392 4.8 4.8 0 00-1.072 2.673 5.272 5.272 0 00-2.246-.634 4.365 4.365 0 00-4.523 4.187 4.06 4.06 0 00.017.614v15.033a13.084 13.084 0 00-2.328-2.172c-1.371-.686-2.958-1.721-4.351-1.1a4.871 4.871 0 00-2.679 2.86 5.033 5.033 0 00.476 4.358l9.951 13.6a14.331 14.331 0 005.648 3.966 21.723 21.723 0 007.741 1.422h.027a13.653 13.653 0 0014.01-13.909V11.863a3.684 3.684 0 00-1.143-2.681z" fill="#fff"></path>
                        <path d="M38.804 8.501a5 5 0 00-3.473-1.383 4.36 4.36 0 00-2.407.671V6.166a4.62 4.62 0 00-4.431-4.146 4.182 4.182 0 00-2.686 1.024 4.254 4.254 0 00-4.2-3.042 4.2 4.2 0 00-3.287 1.447 4.962 4.962 0 00-1.124 2.777 5.568 5.568 0 00-2.355-.658 4.56 4.56 0 00-4.743 4.35 4.18 4.18 0 00.018.638v14.58a13.67 13.67 0 00-2.441-2.257 5.356 5.356 0 00-4.563-.1A5.08 5.08 0 00.303 23.75a5.188 5.188 0 00.5 4.528l10.435 14.126a15.028 15.028 0 005.923 4.12 22.967 22.967 0 008.118 1.477h.028c8.375 0 14.691-6.212 14.691-14.451V11.287a3.811 3.811 0 00-1.194-2.786zm-20.6 12.632a.964.964 0 001.026-1.071l-.01-14.788a3.614 3.614 0 01.8-2.62 2.22 2.22 0 011.6-.6 2.191 2.191 0 011.608.531 3.668 3.668 0 01.793 2.692l.01 14.787a1.032 1.032 0 102.064 0V6.246a2.465 2.465 0 012.407-2.161 2.423 2.423 0 012.378 2.119v15.388a1.091 1.091 0 00.293.813 1.042 1.042 0 00.749.26.968.968 0 001.014-1.073V11.326a2.374 2.374 0 012.372-2.136c1.3-.012 2.652 1.051 2.652 2.1v22.266a12.446 12.446 0 01-3.56 8.9 12.288 12.288 0 01-9.076 3.52A21.727 21.727 0 0118 44.602a13.767 13.767 0 01-5.032-3.376L2.65 27.41a4.327 4.327 0 01-.556-2.162 3.036 3.036 0 011.348-2.3 4.124 4.124 0 012.028-.577 2.2 2.2 0 011.8.81l2.984 3.538a1.366 1.366 0 001.157.683c.756-.078.756-.632.756-.963l.029-17.876a3.088 3.088 0 01.744-2.277 2.582 2.582 0 011.845-.659h.091a2.333 2.333 0 012.3 1.951v12.5a.974.974 0 001.026 1.054z"></path>
                    </svg>
                </div>
            </div>
            <div class="description">
                ${text}
            </div>
        </div>
    ` 
    $("#tutorialInputs").innerHTML += `
        <input type="radio" name="slide" id="input-${id}" onclick="handleSlide(${id})">
    `
}


let slidenum = 0
function handleSlide(id){
    slidenum = id
    document.querySelector(".glide__slides").style.transform = `translateX(-${id}px)`
}
function nextSlide(test){
    if(maxTranslate == slidenum){
        startTest(test)
        return
    }
    slidenum += 500
    document.querySelector(`#input-${slidenum}`).checked = true
    document.querySelector(".glide__slides").style.transform = `translateX(-${slidenum}px)`
}



