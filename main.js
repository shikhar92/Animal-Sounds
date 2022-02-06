function Start()
{

navigator.mediaDevices.getUserMedia({
audio:true
});
mymodel=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7jIIZ-pgT/model.json',modelReady);

}

function modelReady()
{

mymodel.classify(gotResults)

}

function gotResults(error,results)
{
if(error){
console.log(error);
}
else{
console.log(results);
document.getElementById("sn").innerHTML="I Can Hear "+results[0].label;
document.getElementById("ac").innerHTML="Accuracy "+(results[0].confidence*100).toFixed(2)+" % "

i1=document.getElementById("dog")
i2=document.getElementById("cat")
i3=document.getElementById("goat")
i4=document.getElementById("wall")

if(results[0].label=="Cat"){
i1.src="Dog.jpg";
i2.src="cat gif.gif";
i3.src="Goat.jpeg";
i4.src="wall.jpg";
}
else if(results[0].label=="Puppy"){
i1.src="dog gif.gif";
i2.src="Cat.jpg";
i3.src="Goat.jpeg";
i4.src="wall.jpg";
}
else if(results[0].label=="Goat"){
i1.src="Dog.jpg";
i2.src="Cat.jpg";
i3.src="goat.gif";
i4.src="wall.jpg";
}
else{
i1.src="Dog.jpg";
i2.src="Cat.jpg";
i3.src="Goat.jpeg";
i4.src="wall.gif";
}

}
}