// html elemets local variable
var handSign = document.getElementsByClassName("Bet")
var Bet = document.getElementsByClassName("nullBet")
var Sign = document.getElementsByClassName("bet");
var Timelim = document.querySelector(".TimeLimit");
var PickHand = document.querySelector(".readyp1");
var buttonSht = document.querySelector(".Shoot");
var lifeBar1 = document.querySelector(".life1");
var lifeBar2 = document.querySelector(".life2");
var Winner = document.querySelector(".Winner");
var Icon = document.createElement("img");

// variables
var HandSymbol = ["Rock-hand.png","Paper-hand.png","Scissor-hand.png"];
var NumberSymbol = ["3.png","2.png","1.png"];
var index, timer, shoot, rand, res1, re2, p1health, p2health;
var Timer = 10, i = -1, indexBet = 0, DamagePoints = 30;
var toggle = false, click = false;

// function to open the placing of hand
$(".betContainer div").click(function(){
    index = $(this).index();
      indexBet = index;
         handSign[index].style.animationName = "ClickAnimate";
           click = true;
});

// function to place a hand
function Choose(){
    $(".timer").css("opacity", 1);
    $(".timer").css("pointer-events", "all");
    timer = setInterval(()=>{
        Timelim.innerText = `PLACE A HAND IN : ${Timer--}` ;
            if(Timer < 0){
                clearInterval(timer);
                 $(".timer").css("opacity", 0);
                 $(".timer").css("pointer-events", "none"); 
                   Icon.setAttribute("src", `asset/${HandSymbol[Math.floor(Math.random() * 
                    HandSymbol.length)]}`);
                        PickHand.style.paddingRight = "30px";
                          PickHand.innerText = "READY : ";
                           Icon.classList.add("IconSize");
                     PickHand.appendChild(Icon);
                     document.querySelector(".TimeLimit").innerText = "PLACE A HAND IN : 10"
                     Timer = 10;
                     index = undefined;

                         $(buttonSht).css("pointer-events", "all");
                             buttonSht.style.borderColor = "black";
                             buttonSht.style.color = "black";
                             buttonSht.style.animationName = "ButtonAnimate";
                             buttonSht.style.marginLeft = "-90px";  
        }
            if(index != undefined){
                clearInterval(timer);
                 $(".timer").css("opacity", 0);
                 $(".timer").css("pointer-events", "none"); 
                        Icon.setAttribute("src", `asset/${HandSymbol[index]}`);
                        PickHand.style.paddingRight = "30px";
                        PickHand.innerText = "READY : ";
                        Icon.classList.add("IconSize");
                        PickHand.appendChild(Icon);
                    document.querySelector(".TimeLimit").innerText = "PLACE A HAND IN : 10"
                    Timer = 10;
                    index = undefined;
                    
                        $(buttonSht).css("pointer-events", "all");
                            buttonSht.style.borderColor = "black";
                            buttonSht.style.color = "black";
                            buttonSht.style.animationName = "ButtonAnimate";
                            buttonSht.style.marginLeft = "-90px";               
            }
    },1000)
}

// time interval before reavealing the hand symbols
var img1 = document.createElement("img");
var img2 = document.createElement("img");

function Null(){
      img1.classList.add("nullBet1");
      img2.classList.add("nullBet2");
        img1.setAttribute("src", "asset/qM.png");
        img2.setAttribute("src", "asset/qM.png");
            document.body.appendChild(img1);
            document.body.appendChild(img2);
}
    Null();

// function to start the game 
function Shoot(){
    shoot = setInterval(()=>{
    i++;
    buttonSht.style.animationName = "Boom";
    buttonSht.style.marginLeft = "0px";
    buttonSht.style.borderColor = "grey";
    buttonSht.style.color = "grey";   
      rand = Math.floor(Math.random() * HandSymbol.length);
        img1.classList.add("nullBet1");
        img2.classList.add("nullBet2");
            img1.setAttribute("src", `asset/${NumberSymbol[i]}`);
            img2.setAttribute("src", `asset/${NumberSymbol[i]}`);
                document.body.appendChild(img1);
                document.body.appendChild(img2);

    if(i === NumberSymbol.length){
      clearInterval(shoot);
        img1.setAttribute("src", `asset/${HandSymbol[indexBet]}`);
         img2.setAttribute("src", `asset/${HandSymbol[rand]}`);
            WinnerPlayer1(indexBet, rand);
             WinnerPlayer2(indexBet, rand);
              i = -1;
             }        
    },1000)
}

// function if player 1 wins
function WinnerPlayer1(num1, num2){  
  p2health = parseInt(window.getComputedStyle(lifeBar2).getPropertyValue("width"));
        if(HandSymbol[num1] == "Rock-hand.png" &&
            HandSymbol[num2] == "Scissor-hand.png"){
                lifeBar2.style.width = p2health - DamagePoints + "px";
      }
        if(HandSymbol[num1] == "Paper-hand.png" &&
            HandSymbol[num2] == "Rock-hand.png"){
                lifeBar2.style.width = p2health - DamagePoints + "px";
      }
        if(HandSymbol[num1] == "Scissor-hand.png" &&
            HandSymbol[num2] == "Paper-hand.png"){
                lifeBar2.style.width = p2health - DamagePoints + "px";
      }
     res1 = setInterval(()=>{
                reset();
    },2000)
}

// function if player 2 wins
function WinnerPlayer2(num1, num2){
  p1health = parseInt(window.getComputedStyle(lifeBar1).getPropertyValue("width"));
        if(HandSymbol[num1] == "Scissor-hand.png" &&
            HandSymbol[num2] == "Rock-hand.png"){
                lifeBar1.style.width = p1health - DamagePoints + "px";
      }
        if(HandSymbol[num1] == "Rock-hand.png" &&
            HandSymbol[num2] == "paper-hand.png"){
                lifeBar1.style.width = p1health - DamagePoints + "px";
      }
        if(HandSymbol[num1] == "Paper-hand.png" &&
            HandSymbol[num2] == "Scissor-hand.png"){
                lifeBar1.style.width = p1health - DamagePoints + "px";
      }
      res2 = setInterval(()=>{
                reset();
    },2000)
}

//function to reset the game
function reset(){
 p1 = parseInt(window.getComputedStyle(lifeBar1).getPropertyValue("width"));
 p2 = parseInt(window.getComputedStyle(lifeBar2).getPropertyValue("width"));
    PickHand.style.paddingRight = "0px";
    PickHand.innerText = "PLACE A HAND";
      Null();
       clearInterval(res1);
       clearInterval(res2);
    if(p1 === 0){
        Winner.innerText = "PLAYER 2 WINS!"
         Winner.style.opacity = "1";
          $(Winner).css("pointer-events", "all");
    }
    if(p2 === 0){
        Winner.innerText = "PLAYER 1 WINS!"
         Winner.style.opacity = "1";
          $(Winner).css("pointer-events", "all");
    }
    
}