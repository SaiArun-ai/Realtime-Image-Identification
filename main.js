function preset(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LRPJPbhq7/model.json",ML);
}
function ML(){
    console.log("Model Loaded");
}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results[0].label);
        document.getElementById("UON").innerHTML = results[0].label;
        document.getElementById("UOA").innerHTML = results[0].confidence.toFixed(5);
    }
}