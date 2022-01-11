noseX = 0;
noseY = 0;
function preload()
{
mustache = loadImage("https://i.postimg.cc/y6JBhrkM/mustache.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(results);
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        
    }
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function draw()
{
image(video, 0, 0, 300, 300);
image(mustache, noseX-22, noseY, 50, 25);
}

function take_snapshot()
{
    save('myFilterImage.png');
}