
  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 550);
   video.position(80,130);
  canvas = createCanvas(540, 540);
  canvas.position(700,130);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('ModelLoaded Successfully!...');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
  }
}

function draw() {
background('#fcba03');
}
