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
    "topLeft",
    "top",
    "topRight",
    "left",
    "right",
    "botLeft",
    "bot",
    "botRight"
]

roundsPlayed = 0
function $(element){
    return document.querySelector(element)
}

let score = {
    acuity: 0
}

function createTeble(){
    textTable = ""
    table.forEach(element => {
        if(element == "center"){
            textTable += `<div class="${element} divArrow"></div>` 
        } else {
            textTable += `<div class="btn ${element} divArrow"></div>`
        }
    });
    return textTable
}
