noseX = 0;
noseY = 0;
leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(350,300);

    canvas = createCanvas(350,300);
    canvas.position(549, 140);

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

function draw(){
    document.getElementById("font-size").innerHTML = "font-size will be = " + difference;
    textSize(difference);
    
    fill(255,0,0);
    text("This is your text", 50, 30);
}