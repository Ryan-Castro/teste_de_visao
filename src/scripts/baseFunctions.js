table = [
    "topLeft",
    "top",
    "topRight",
    "left",
    "center",
    "right",
    "botLeft",
    "bot",
    "botRight"
]
positions = [
    "TOP",
    "TOPRIGHT",
    "RIGHT",
    "BOTTOMRIGHT",
    "BOTTOM",
    "BOTTOMLEFT",
    "LEFT",
    "TOPLEFT"
]

roundsPlayed = 0
function $(element){
    return document.querySelector(element)
}
let didTutorial = false
let didAlert = false
let didLoad = false
let rounds = 10
let isCalibrated = false
let isAcuity = false
let isContrast = false
let isColors = false
let isAstigmatism = false
let isVisualField = false
let testEye = 0
let idTeste = 0
let widthCard = 0
let staticSide = ["static-left-hand", "static-right-hand"]
let score = {
    acuity: [0, 0],
    contrast: [0, 0],
    color: 0,
    astigmatism: [0, 0],
    visualField: [0, 0]
}


function createTeble(){
    textTable = `
    <svg width="260" height="260" class="controls">
    <path id="TOP" d="M158.934 57.545a77.47 77.47 0 00-13.211-3.957 78.642 78.642 0 00-31.437 0 77.47 77.47 0 00-13.211 3.957l-19.9-48.059a130.162 130.162 0 0197.674 0z"></path>
    <path id="TOPRIGHT" d="M201.693 99.226a78.216 78.216 0 00-40.914-40.914l19.906-48.059a130.414 130.414 0 0169.066 69.066l-48.059 19.907z"></path>
    <path id="RIGHT" d="M202.459 158.933a77.41 77.41 0 003.959-13.213 78.785 78.785 0 000-31.437 77.477 77.477 0 00-3.957-13.209l48.057-19.9a129.319 129.319 0 016.844 22.635 130.2 130.2 0 01-6.844 75.036z"></path>
    <path id="BOTTOMRIGHT" d="M160.779 201.692a78.193 78.193 0 0024.379-16.535 78.8 78.8 0 009.525-11.545 77.993 77.993 0 007.008-12.833l48.061 19.907a130.393 130.393 0 01-69.068 69.064z"></path>
    <path id="BOTTOM" d="M130 260.001a130.826 130.826 0 01-26.2-2.641 129.332 129.332 0 01-22.639-6.846l19.906-48.058a77.615 77.615 0 0013.213 3.957 78.642 78.642 0 0031.438 0 77.47 77.47 0 0013.211-3.957l19.906 48.058a129.181 129.181 0 01-22.639 6.846A130.778 130.778 0 01130 260.001z"></path>
    <path id="BOTTOMLEFT" d="M79.316 249.75a130.42 130.42 0 01-69.066-69.063l48.057-19.9a78.285 78.285 0 0028.084 33.9 77.645 77.645 0 0012.836 7.015z"></path>
    <path id="LEFT" d="M9.486 178.84a130.148 130.148 0 010-97.673l48.055 19.9a78.1 78.1 0 000 57.865z"></path>
    <path id="TOPLEFT" d="M10.252 79.316a130.414 130.414 0 0169.064-69.064l19.908 48.059a77.664 77.664 0 00-12.834 7.014 78.166 78.166 0 00-28.084 33.9z"></path>
        </svg>
    `
    return textTable
}

function openMenu(){
    $('#modal').style.display = 'flex'
    setTimeout(()=>{
        $('#modal').style.opacity = 1
        $('#menu').style.transform = 'translateX(0px)'
    },50)
}
function closeMenu(){
    $('#modal').style.opacity = 0
    $('#menu').style.transform = 'translateX(400px)'
    setTimeout(()=>{
        $('#modal').style.display = 'none'
    },500)
}
$('#modal').addEventListener('click', (e)=>{
    if(e.target.id == "modal"){
        closeMenu()
    }
})
function reloadPade(){
    window.location.reload()
}
