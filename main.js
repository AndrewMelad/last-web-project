var flag = true;
var list = document.getElementById("list");
var card=document.getElementById("card");
var paper=document.getElementById("details");
var parent=document.getElementById("parent");
var image=document.getElementById("img");
 i=0;

var sound      = document.createElement('audio');
sound.id       = 'audio-player';
sound.type     = 'audio/mpeg';
sound.src      = 'happy.mp3';
sound.controls = 'controls';
sound.loop=true;

    setInterval(function()
    { 
        "use strict";
    list.classList.add("hidden");
    document.body.style.backgroundColor="transparent "; //default value  background color
    document.body.classList.add("newBackGround");
    card.style.opacity="1";
    card.addEventListener("click", playAudio);
function playAudio() {
    image.style.transform="rotateY(-135deg)";
    this.style.transform="translate(-50%,-50%) perspective(2000px) rotate(-10deg)";
    this.style.boxShadow="0px 20px 50px rgb(0, 0, 0,.5) inset,0px 10px 100px rgb(0, 0, 0,.5)";
    sound.play();
    if(flag){
      typeWritten();
    flag = false;
    }
    this.removeEventListener("click", playAudio);
    this.addEventListener("click", closeAudio);
  }

  function closeAudio(){
    image.style.transform="rotateY(0deg)";
    this.style.transform="translate(-50%,-50%) perspective(2000px) rotate(0deg)";
    this.style.boxShadow="0px 0px 0px rgb(0, 0, 0,0) inset,0px 0px 0px rgb(0, 0, 0,0)";
    sound.pause(); 

    this.removeEventListener("click", closeAudio);
    this.addEventListener("click", playAudio);
  }
  //card.addEventListener("click",typeWritten);

     }, 5000);

     function typeWritten() {$(function (){
      var typed =new Typed('.details', {
    
          strings: ['3o2bal el mellion ya sa7by 😎 agda3 future web developer','Kol sanaahhh wenty tayba ya Maria 😍🔥',
          
               
          ],
          typeSpeed: 200,
          loop:true,
          fadeOut: true,
          backDelay: 1000,
          startDelay: 300,
          showCursor: false,
      });
    })
    
    //this.removeEventListener("click",typeWritten);
    }