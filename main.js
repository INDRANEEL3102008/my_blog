noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = (results[0].pose.nose.x) - 100;
    noseY = (results[0].pose.nose.y) - 100;
    console.log("noseX = " + noseX +" noseY = " + noseY);


    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
background('#969A97');
textSize(32);
text("Indraneel Mandal", 275, 275);
fill(0, 0, 200);
  document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
fill('#F90093');
stroke('#F90093');
square(noseX, noseY, difference);
}
