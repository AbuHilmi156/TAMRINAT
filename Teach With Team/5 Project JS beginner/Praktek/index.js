const body = document.getElementsByTagName("body")[0]
// body.style.backgroundColor = "red";

function setColor(nama){
    body.style.backgroundColor = nama;
}

function randomColor(){
    const red = Math.round(Math. random()*255)
    const green = Math.round(Math. random()*255)
    const blue = Math.round(Math. random()*255)


    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}
