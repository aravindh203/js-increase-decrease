let button1=document.getElementById("btn1");
let button2=document.getElementById("btn2");
let inpt=document.getElementById("inpt");
inpt.value=0;

button1.addEventListener("click",function(){
  --inpt.value
})

button2.addEventListener("click",function(){
  ++inpt.value
})
