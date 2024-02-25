var timer = 60;
var score = 0;
var hitrn;


function increaseScore(){
     score += 10;
    document.querySelector("#scoreDiv").textContent = score;
}

function getNewHit(){
   hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function bubbleadd(){
    var bubble = "";
    for(i=1; i<145; i++){
       var rn= Math.floor(Math.random()*10);
        bubble += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".bbtm").innerHTML = bubble;
}

document.querySelector(".bbtm").addEventListener("click", function(dets){
    var clickedNum =(Number(dets.target.textContent));
    if(clickedNum === hitrn){
        increaseScore();
        bubbleadd();
        getNewHit();
    }
})


function runtimer(){
      var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent  = timer;
            
        }
        else{
            clearInterval(timer);
            document.querySelector(".bbtm").innerHTML = `<h1> Game Over!!!</h1>`;
        }

     },1000)
}

bubbleadd();
runtimer();
getNewHit();
increaseScore();