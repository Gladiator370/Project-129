song1="";
song2="";
rightWristX="";
rightWristY="";
leftWristX="";
leftWristY="";
leftWristScore=0;
rightWristScore=0;
song_1_Status="";
song_2_Status="";
noseX="";
noseY="";

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    song =  peter_pan.isPlaying();

     if(scoreleftwrist > 0.2)
     {
         circle(leftWristX, leftWristY, 20);
         console.log("HANJI AFM/anjm';af");
         harry_porter.stop();
         if(status == false)
            peter_pan.play();
            document.getElementById("song_name").innerHTML = "Peter Pan";
     }
   
}

function modelLoaded(){
    console.log("Model Is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
       
        scoreleftwrist = results[0].pose.keypoints[9].score;

       
        console.log("scorelLeftWrist = " + scoreleftwrist );
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}


