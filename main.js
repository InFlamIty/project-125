function setup()
{
    video = createCapture(VIDEO)
    video.size(600 , 500)
    canvas = createCanvas(800 , 700)
    canvas.position(610 , 175)
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on("pose" , gotResults)
}
function modelLoaded()
{
    console.log("Model Loaded")
}
function gotResults(results)
{
    if (results.length > 0) {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX)
    }
}
function draw()
{
    background("#00ff62asa")
    document.getElementById("dif").innerHTML = "Text size = " + difference + "px"
    fill("chartreuse")
    stroke("blueviolet")
    strokeWeight(10)
    textSize(difference)
    input = document.getElementById("input1").value
    text(input , 10 , 350)
}
leftWristX = 0
rightWristX = 0
difference = 0
input = ""