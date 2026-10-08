let bubble1;
let bubble2;
let x1 = 30;
let y1 = 50;
let x2 = 0;
let y2 = 0;
let speedX1 = 3;
let speedY1 = 1;
let speedX2 = -1;
let speedY2 = -3;
let size = 200;
let popped = false;
window.addEventListener("load", ()=>{
    bubble1 = document.getElementById("bubble1");
    bubble2 = document.getElementById("bubble2");
    bubble1.addEventListener("click", ()=>{
        if (popped == false){
            popBubbles();
        }
    });

    // bubble poping
    bubble2.addEventListener("click", ()=>{
        if (popped == false) {
            popBubbles();

        }
    });

    resetBubbles ();
    setInterval(moveBubbles, 20);
});
//setInterval(warpBubbles, 800);
//let warped = false;
//function warpBubbles(){
       // bubble1.style.borderRadius = "60% 40% 45% 55";
       // bubble2.style.borderRadius = "40% 50% 60% 35%";
       // warped = true;
    //} else {
       // bubble1.style.borderRadius = "45% 50% 60% 40$";
        //bubble2.style.borderRadius = "55% 50% 45% 60%"; //random numbers check it again later
    //}
//}
function resetBubbles(){
    x1 = 50;
    y1 = 67;
    x2 = window.innerWidth - size;
    y2 = window.innerHeight - size;
    speedX1 = 3;
    speedY1 = 1;
    speedX2 = 2;
    bubble1.style.opacity = "1";
    bubble2.style.opacity = '1';
    updatePositions();
    popped = false;
}
function updatePositions() {
    bubble1.style.left = x1 + "px";
    bubble1.style.top = y1 + "px";
    bubble2.style.left = x2 + "px";
    bubble2.style.top = y2 + "px";
}
function moveBubbles(){
    if (popped == false){
        x1 = x1 + speedX1;
        y1 = y1 + speedY1;
        x2 = x2 + speedX2;
        y2 = y2 + speedY2;

        //bounce off the edge


        if (x1 <=0){
            speedX1 = 2;
        }
        if (x1 >= window.innerWidth - size){
            speedX1 = -2;
        }
        if(x2 <=0){
            speedX2 = 2;
        }
        if (x2 >= window.innerWidth - size){
            speedX2 = -2;
        }
        //top and bottom edge bounce


        if (y1 <=0 ){
            speedY1 = 1;
        }
        if (y1 >= window.innerHeight - size){
            speedY1 = -1;
        }
        if(y2 <=0){
            speedY2 = 1;
        }
        if (y2 >= window.innerHeight - size){
            speedY2 = -1;
        }
        updatePositions();

        //pop
        let distanceX = x1 - x2;
        let distanceY = y1 - y2;
        if (
            distanceX * distanceX + distanceY * distanceY
            <= size * size
        ){
            popBubbles();
        }
    }
}
function popBubbles() {
    popped = true;
    bubble1.style.opacity = "0";
    bubble2.style.opacity = "0";
    setTimeout(resetBubbles, 1000);
}