const imgSVGVisualField = `<svg viewBox="0 0 282 282" style="width: 300px;">
                            <g transform="translate(-14.598 -14.645)" stroke="#000">
                                <path d="M14.598 296.644V14.598" stroke-width=".85"></path>
                                <path d="M296.645 296.644H14.598" stroke-width=".85"></path>
                                <path d="M296.645 14.598v282.046" stroke-width=".85"></path>
                                <path d="M14.598 14.598h282.047" stroke-width=".85"></path>
                                <path d="M14.598 28.709l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 42.809l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 56.913l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 71.013l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 85.112l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 99.209l282.047-.002" stroke-width=".85"></path>
                                <path d="M14.598 113.31l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 127.414l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 141.518l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 155.622l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 169.726l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 183.824l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 197.925l282.047-.002" stroke-width=".85"></path>
                                <path d="M14.598 212.033l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 226.134l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 240.232l282.047-.002" stroke-width=".85"></path>
                                <path d="M14.598 254.339l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 268.439l282.047-.003" stroke-width=".85"></path>
                                <path d="M14.598 282.536l282.047-.003" stroke-width=".85"></path>
                                <path d="M28.709 296.641l-.003-282.043" stroke-width=".85"></path>
                                <path d="M42.806 296.641l-.002-282.043" stroke-width=".85"></path>
                                <path d="M56.906 296.641l-.003-282.043" stroke-width=".85"></path>
                                <path d="M71.013 296.641L71.01 14.598" stroke-width=".85"></path>
                                <path d="M85.112 296.641L85.11 14.598" stroke-width=".85"></path>
                                <path d="M99.213 296.641L99.21 14.598" stroke-width=".85"></path>
                                <path d="M113.321 296.641l-.003-282.043" stroke-width=".85"></path>
                                <path d="M127.423 296.641l-.003-282.043" stroke-width=".85"></path>
                                <path d="M141.521 296.641l-.002-282.043" stroke-width=".85"></path>
                                <path d="M155.625 296.641l-.003-282.043" stroke-width=".85"></path>
                                <path d="M169.73 296.641l-.003-282.043" stroke-width=".85"></path>
                                <path d="M183.833 296.641l-.003-282.043" stroke-width=".85"></path>
                                <path d="M197.935 296.641l-.002-282.043" stroke-width=".85"></path>
                                <path d="M212.038 296.641l-.003-282.043" stroke-width=".85"></path>
                                <path d="M226.135 296.641l-.003-282.043" stroke-width=".85"></path>
                                <path d="M240.238 296.641l-.003-282.043" stroke-width=".85"></path>
                                <path d="M254.335 296.641l-.003-282.043" stroke-width=".85"></path>
                                <path d="M268.437 296.641l-.003-282.043" stroke-width=".85"></path>
                                <path d="M282.54 296.641l-.003-282.043" stroke-width=".85"></path>
                                <circle cx="155.624" cy="155.621" stroke-width="2.18" r="6.707"></circle>
                            </g>
                        </svg>`

const questionsVisualField = ['Pergunta 1<br> todas as linhas e quadrados parecem ser iguais e regulares', 'Pergunta 2<br> Não tem parte da grelha em falta, distorcida ou mais escura?']
function startVisualField(test){
    if(!didTutorial){
        tutorial(test, "astigmatism")
        return
    }
    if(2 > roundsPlayed){
        starRoundsVisualField(test)
        roundsPlayed++
    } else {
        if(testEye == 0){
            $("#staticEye").innerHTML = ""
            $("main").innerHTML =`
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
                    <div class="right-hand motion-hand">
                        <svg width="40" height="48">
                            <path d="M38.004 9.182a4.746 4.746 0 00-3.312-1.331 4.129 4.129 0 00-2.295.646V6.935a4.423 4.423 0 00-4.225-3.99 3.967 3.967 0 00-2.561.985 4.061 4.061 0 00-4-2.928 3.988 3.988 0 00-3.135 1.392 4.8 4.8 0 00-1.072 2.673 5.272 5.272 0 00-2.246-.634 4.365 4.365 0 00-4.523 4.187 4.06 4.06 0 00.017.614v15.033a13.084 13.084 0 00-2.328-2.172c-1.371-.686-2.958-1.721-4.351-1.1a4.871 4.871 0 00-2.679 2.86 5.033 5.033 0 00.476 4.358l9.951 13.6a14.331 14.331 0 005.648 3.966 21.723 21.723 0 007.741 1.422h.027a13.653 13.653 0 0014.01-13.909V11.863a3.684 3.684 0 00-1.143-2.681z" fill="#fff"></path>
                            <path d="M38.804 8.501a5 5 0 00-3.473-1.383 4.36 4.36 0 00-2.407.671V6.166a4.62 4.62 0 00-4.431-4.146 4.182 4.182 0 00-2.686 1.024 4.254 4.254 0 00-4.2-3.042 4.2 4.2 0 00-3.287 1.447 4.962 4.962 0 00-1.124 2.777 5.568 5.568 0 00-2.355-.658 4.56 4.56 0 00-4.743 4.35 4.18 4.18 0 00.018.638v14.58a13.67 13.67 0 00-2.441-2.257 5.356 5.356 0 00-4.563-.1A5.08 5.08 0 00.303 23.75a5.188 5.188 0 00.5 4.528l10.435 14.126a15.028 15.028 0 005.923 4.12 22.967 22.967 0 008.118 1.477h.028c8.375 0 14.691-6.212 14.691-14.451V11.287a3.811 3.811 0 00-1.194-2.786zm-20.6 12.632a.964.964 0 001.026-1.071l-.01-14.788a3.614 3.614 0 01.8-2.62 2.22 2.22 0 011.6-.6 2.191 2.191 0 011.608.531 3.668 3.668 0 01.793 2.692l.01 14.787a1.032 1.032 0 102.064 0V6.246a2.465 2.465 0 012.407-2.161 2.423 2.423 0 012.378 2.119v15.388a1.091 1.091 0 00.293.813 1.042 1.042 0 00.749.26.968.968 0 001.014-1.073V11.326a2.374 2.374 0 012.372-2.136c1.3-.012 2.652 1.051 2.652 2.1v22.266a12.446 12.446 0 01-3.56 8.9 12.288 12.288 0 01-9.076 3.52A21.727 21.727 0 0118 44.602a13.767 13.767 0 01-5.032-3.376L2.65 27.41a4.327 4.327 0 01-.556-2.162 3.036 3.036 0 011.348-2.3 4.124 4.124 0 012.028-.577 2.2 2.2 0 011.8.81l2.984 3.538a1.366 1.366 0 001.157.683c.756-.078.756-.632.756-.963l.029-17.876a3.088 3.088 0 01.744-2.277 2.582 2.582 0 011.845-.659h.091a2.333 2.333 0 012.3 1.951v12.5a.974.974 0 001.026 1.054z"></path>
                        </svg>
                    </div>
                </div>
                <div class="description">
                    <p>Bom trabalho!<br>Vamos agora passar ao outro olho.<br>Tape o seu olho direito.</p>
                </div>
            </div>
            <button id="startTesteInput" onclick="testNexeEyeVisualField('${test}')">Seguinte</button>`
        } else {
            isVisualField = true
            didTutorial = false
            idTeste = 5
            didLoad = false
            if(score.visualField[0] > 1){
                rightEye = "excellent"
            } else {
                rightEye = "reduced"
            }
            if(score.visualField[1] > 1){
                leftEye = "excellent"
            } else {
                leftEye = "reduced"
            }
            $("main").innerHTML =`
                <div class="containerResult">
                    <div class="titleResult">
                        <img src="./src/imagens/amsler-test.svg">
                        <h2>Campo visual</h2>
                    </div>
                    <div class="descriptionResult">
                        <h3>Esse é o resultado do seu teste</h3>
                    </div>
                    <div class="imgResult">
                        <img src="./src/imagens/${leftEye}.svg">
                        <img src="./src/imagens/${rightEye}.svg">
                    </div>
                </div>
                <button onclick="startTest('${test}')" id="Resultbtn">Continuar</button>
            `
       
       
        }
    }
}
function testNexeEyeVisualField(test){
    testEye = 1
    roundsPlayed = 0
    startVisualField(test)
}
function starRoundsVisualField(test){
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
        <div class="${staticSide[testEye]}">
            <svg width="40" height="48">
                <path d="M38.004 9.182a4.746 4.746 0 00-3.312-1.331 4.129 4.129 0 00-2.295.646V6.935a4.423 4.423 0 00-4.225-3.99 3.967 3.967 0 00-2.561.985 4.061 4.061 0 00-4-2.928 3.988 3.988 0 00-3.135 1.392 4.8 4.8 0 00-1.072 2.673 5.272 5.272 0 00-2.246-.634 4.365 4.365 0 00-4.523 4.187 4.06 4.06 0 00.017.614v15.033a13.084 13.084 0 00-2.328-2.172c-1.371-.686-2.958-1.721-4.351-1.1a4.871 4.871 0 00-2.679 2.86 5.033 5.033 0 00.476 4.358l9.951 13.6a14.331 14.331 0 005.648 3.966 21.723 21.723 0 007.741 1.422h.027a13.653 13.653 0 0014.01-13.909V11.863a3.684 3.684 0 00-1.143-2.681z" fill="#fff"></path>
                <path d="M38.804 8.501a5 5 0 00-3.473-1.383 4.36 4.36 0 00-2.407.671V6.166a4.62 4.62 0 00-4.431-4.146 4.182 4.182 0 00-2.686 1.024 4.254 4.254 0 00-4.2-3.042 4.2 4.2 0 00-3.287 1.447 4.962 4.962 0 00-1.124 2.777 5.568 5.568 0 00-2.355-.658 4.56 4.56 0 00-4.743 4.35 4.18 4.18 0 00.018.638v14.58a13.67 13.67 0 00-2.441-2.257 5.356 5.356 0 00-4.563-.1A5.08 5.08 0 00.303 23.75a5.188 5.188 0 00.5 4.528l10.435 14.126a15.028 15.028 0 005.923 4.12 22.967 22.967 0 008.118 1.477h.028c8.375 0 14.691-6.212 14.691-14.451V11.287a3.811 3.811 0 00-1.194-2.786zm-20.6 12.632a.964.964 0 001.026-1.071l-.01-14.788a3.614 3.614 0 01.8-2.62 2.22 2.22 0 011.6-.6 2.191 2.191 0 011.608.531 3.668 3.668 0 01.793 2.692l.01 14.787a1.032 1.032 0 102.064 0V6.246a2.465 2.465 0 012.407-2.161 2.423 2.423 0 012.378 2.119v15.388a1.091 1.091 0 00.293.813 1.042 1.042 0 00.749.26.968.968 0 001.014-1.073V11.326a2.374 2.374 0 012.372-2.136c1.3-.012 2.652 1.051 2.652 2.1v22.266a12.446 12.446 0 01-3.56 8.9 12.288 12.288 0 01-9.076 3.52A21.727 21.727 0 0118 44.602a13.767 13.767 0 01-5.032-3.376L2.65 27.41a4.327 4.327 0 01-.556-2.162 3.036 3.036 0 011.348-2.3 4.124 4.124 0 012.028-.577 2.2 2.2 0 011.8.81l2.984 3.538a1.366 1.366 0 001.157.683c.756-.078.756-.632.756-.963l.029-17.876a3.088 3.088 0 01.744-2.277 2.582 2.582 0 011.845-.659h.091a2.333 2.333 0 012.3 1.951v12.5a.974.974 0 001.026 1.054z"></path>
            </svg>
        </div>
    </div>
`
    $("main").innerHTML =`
    <div id="question">
    ${imgSVGVisualField}
    </div>
    <div id="divAstigmatism">
        <p>Concentre-se no ponto preto ai centro.</p>
        <h2>${questionsVisualField[roundsPlayed]}<h2>            
    </div>
        <div id="inputs">
            <input type="button" class="aswer-btn" value="Sim">
            <input type="button" class="aswer-btn" value="Não">
        </div>
    `
    
    document.querySelectorAll("#inputs").forEach(element=>{
        element.addEventListener('click', (e)=>{
            if(e.target.value == "Sim"){
                score.visualField[testEye]++
            }
            setTimeout(()=>{
                startVisualField(test)
            },500)
        })
    }) 
}
