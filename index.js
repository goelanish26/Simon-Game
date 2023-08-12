    let gamePattern = [];
    let userClickedPattern =[];
    var level = 0;


let arr=["blue","green","yellow","red"];
let started = false;
document.querySelector("body").addEventListener("keypress",function(){
     
        started = true;
document.querySelector("h1").innerHTML = "Level " + level;
gameSequence();
    
})
var n=document.querySelectorAll(".btn").length;
for(var i=0;i<n;i++){
document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    console.log(this);
    let userChoosenColor = this.getAttribute("id");
    userClickedPattern.push(userChoosenColor)
    console.log(userChoosenColor);
    playSound(userChoosenColor);
    playAnimation(userChoosenColor);
    checkanswer(userClickedPattern.length-1);

})


};


function gameSequence() {
    userClickedPattern = [];
    level++;
    document.querySelector("h1").innerHTML = "Level " + level;
    var randomNo = Math.floor(Math.random() * 4);
    var choosenColor = arr[randomNo];
    gamePattern.push(choosenColor) 
    playSound(choosenColor);
    $("."+choosenColor).fadeIn(5).fadeOut(5).fadeIn(5);
}


function playSound(color) {
    var audio=new Audio('sounds/'+color+".mp3");
                audio.play();
}


function checkanswer(currentLevel) {
    console.log("user" , userClickedPattern);
    console.log("game" , gamePattern);
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length)
        setTimeout(function () {
            gameSequence()} , 1000);
    } else {
        console.log("failed");
        playSound("wrong");
        document.querySelector("h1").innerHTML = "Game Over,Press Any Key to Restart";
        startOver();
    }
}

function startOver() {
    level = 0;
    started = false;
    userClickedPattern = [];
    gamePattern = [];
}
function playAnimation (color) {
    console.log(color);
    console.log(document.getElementById(color));
    document.getElementById(color).classList.add("pressed");
    console.log(document.getElementById(color).classList)
    setTimeout (function () {
        document.getElementById(color).classList.remove("pressed")} , 100);
   
}
