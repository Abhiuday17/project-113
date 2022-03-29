function preload(){

}

function setup(){
    canvas = createCanvas(400 , 380)
    canvas.center()
    webcam = createCapture(VIDEO)
    webcam.size(400 , 380)
    webcam.hide()
    tint_color = ""
}

function draw(){
    image( webcam , 0 , 0 , 400 , 380 )
    tint_color = document.getElementById("tint_color").value
    tint(tint_color) 
}

function take_snapshot(){ 
    save('Abhiuday.png')
}