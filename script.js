let canvas =document.getElementById('Heart');
ctx = canvas.getContext("2d");
/* Letter */
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,150);
ctx.lineTo(600,0);
ctx.closePath();
ctx.stroke();
/* Heart */
let heart = {

draw:function() {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(222,51,51)';
    ctx.moveTo(300,130);
    ctx.quadraticCurveTo(265,105,250,130);
    ctx.quadraticCurveTo(240,155,300,190);
    ctx.quadraticCurveTo(360,155,350,130);
    ctx.quadraticCurveTo(335,105,300,130);
    ctx.fill();
} }        
heart.draw();
function text() {
    ctx.textAlign ="left","right","center","start","end";
    ctx.font = "21px Marck Script";
    ctx.fillStyle ='black';
    ctx.fillText("HAPPY BIRTHDAY",200,20);
    ctx.fillText("Здарова Ань,хочу поздравить тебя с др,21 год нихуя себе mommy",10,50);
    ctx.fillText("P.S.ебать вы старые нахуй,когда за пенсионным?))",10,70);
    ctx.fillText("Я не знаю че даже желать,всего самого лучшего,надеюсь все, что ",10,90);
    ctx.fillText("ты сегодня пожелала сбудеться, да и вообще чтобы у тебя было ",10,110);
    ctx.fillText("все ахуенно.",10,135);
}
function girl() {
    let girl = new Image();
    girl.onload = function(){
        ctx.drawImage(girl,400,100,300,210);
    }
    girl.src = 'girl.png';
}
function pismo() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    girl();
    text();
}
canvas.addEventListener('click',function(e){
    let rect = canvas.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;

    let heartWidth = 75;
    let heartHeight = 85;
    let heartX = 265;
    let heartY = 105;
    if (mouseX >= heartX && mouseX <= heartX + heartWidth &&
        mouseY >= heartY && mouseY <= heartY + heartHeight){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            pismo();
            
        }
})