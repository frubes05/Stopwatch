
let pocni=document.querySelector(".pocni");

let stani=document.querySelector(".stani");

let resetiraj=document.querySelector(".resetiraj");


let para=document.querySelector("#vrijeme");

let milliSeconds=document.querySelector("#milli");

let seconds=document.querySelector("#seconds");

let minutes=document.querySelector("#minutes");

let milli=0;

let sec=0;

let min=0;

let vrijeme;

//pocni
pocni.addEventListener('click',startTime);


function startTime(){

  milli++;

  if(milli<=9){

    milliSeconds.innerHTML="0"+ milli;
 }if(milli>9 && milli<=99){
    milliSeconds.innerHTML=milli;
 }if(milli>99){
      milli=-1;
      sec++;



   if (sec<=9){
     seconds.innerHTML="0"+ sec;
  }if(sec>9 && sec<60){
     seconds.innerHTML=sec;
  }if(sec>59){
      sec=0;
      min++;
      seconds.innerHTML="0"+sec;


    if(min<=9){
      minutes.innerHTML="0"+min;
    }if(min>9){
      minutes.innerHTML=min;
      }
    }
  }

 }

//pocni

pocni.onclick=function(){

  vrijeme=setInterval(startTime,10);
}

//stani

stani.onclick=function(){
  clearInterval(vrijeme);
}


// resetiraj

resetiraj.onclick=function(){
  window.location.reload();
}
