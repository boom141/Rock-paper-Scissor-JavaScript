// script for the background animation
var strokeSize = [4,8,1,9]
var colorStoke = ["#ffffff21","#ffffff21","#ffffff75","#ffffff4d"]
var bgColor = ["#f2cc0b","#65c9cf"]
var k = -1, j = -1;
var div, divArray;

setInterval(()=>{
div = document.createElement("div");
   k = k<strokeSize.length ? ++k:0;
        div.classList.add("circle");
        div.style.borderWidth = strokeSize[k] + "px";
        div.style.borderColor = colorStoke[k];
        document.body.appendChild(div);
},3500)

