Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("#earth");
function ice(){
Webcam.snap(function(data_uri){
document.getElementById("water").innerHTML = "<img src='"+data_uri+"' id='steel'>"
});
}
console.log("ml5 version:",ml5.version);
var loadedd =  ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-DCJ6Wzg9/model.json", loader);
function loader(){
    console.log("loading is done");
}
function light(){
    img = document.getElementById("steel");
    loadedd.classify(img, gotResult);

}
function gotResult(wrong, results){
if(wrong){
    console.log(wrong);
} else{
    console.log(results);
    document.getElementById("Dark").innerHTML= results[0].label;
    document.getElementById("grass").innerHTML= results[0].confidence.toFixed(3);
}
}
