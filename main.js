//https://teachablemachine.withgoogle.com/models/19CDVeh-I/model.json

Prediction="";

Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90

});

camera= document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
     document.getElementById("result").innerHTML=
     '<img id="captured_image" src="'+ data_uri+'"/>';
    });
}

console.log(ml5.version);

classifier=ml5.imageClassifier
('https://teachablemachine.withgoogle.com/models/19CDVeh-I/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
    speak();
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data= " My Prediction is" + Prediction;
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}