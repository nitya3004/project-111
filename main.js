Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function photo(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
});
}
console.log('ml5.version',ml5.version);
classifier=ml5.imageClassifier('',model_loaded);
function model_loaded(){
    console.log("model loaded");
}
Prediction1="";
Prediction2="";
function speak(){
    var synth=window.speechSynthesis;
    speak1="Prediction 1"+Prediction1;
    speak2="Prediction 2"+Prediction2;
    var utterthis=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterthis);
}