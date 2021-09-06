noseX = 0;
noseY = 0;
leftWrist = 0;
rightWrist = 0;
difference = 0;
CurrentText = "This is your text"

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
    canvas.position(560, 250);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("poseNet in initialised");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
        console.log("LeftWristX = " + leftWrist + ", RightWristX = " + rightWrist + ", the difference = " + difference);
    }
}

function UpdateText(){
    if (document.getElementById("TextInput").value == ""){
        console.log("No text");
    }
    else{
        CurrentText = document.getElementById("TextInput").value;
    }
}

function draw(){
    background(0,0,0)
    document.getElementById("font-size").innerHTML = "font-size will be = " + difference + "px";
    textSize(difference);
    
    fill(255,0,0);
    text(CurrentText, 50, 400);
}
