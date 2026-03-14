function startExperience(){

const name=document.getElementById("nameInput").value;

if(name.trim()===""){
alert("Please enter name");
return;
}

/* Play Music */

document.getElementById("music").play();

/* Show Cake */

document.getElementById("cake").style.display="block";

/* Message Typing */

typeMessage("🎉 Happy Birthday " + name + " ❤️ May your day be full of happiness and joy!");

/* Start Animations */

hearts();
flowers();
fireworks();
}


/* Typing Effect */

function typeMessage(text){

let i=0;
const msg=document.getElementById("message");
msg.innerHTML="";

const typing=setInterval(()=>{

msg.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){
clearInterval(typing);
}

},50);

}


/* Hearts Animation */

function hearts(){

setInterval(()=>{

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="absolute";
h.style.left=Math.random()*100+"vw";
h.style.bottom="-20px";
h.style.fontSize=(20+Math.random()*20)+"px";
h.style.animation="floatUp 6s linear";

document.body.appendChild(h);

setTimeout(()=>h.remove(),6000);

},400);

}


/* Flowers */

function flowers(){

setInterval(()=>{

const f=document.createElement("div");

f.innerHTML="🌸";

f.style.position="absolute";
f.style.left=Math.random()*100+"vw";
f.style.top="-20px";
f.style.fontSize="22px";
f.style.animation="fall 8s linear";

document.body.appendChild(f);

setTimeout(()=>f.remove(),8000);

},500);

}


/* Fireworks */

function fireworks(){

setInterval(()=>{

const fw=document.createElement("div");

fw.style.position="absolute";
fw.style.width="6px";
fw.style.height="6px";
fw.style.background="white";
fw.style.borderRadius="50%";

fw.style.left=Math.random()*100+"vw";
fw.style.top=Math.random()*60+"vh";

fw.style.animation="explode 1s ease-out";

document.body.appendChild(fw);

setTimeout(()=>fw.remove(),1000);

},600);

}