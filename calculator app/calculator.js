let num1=3;
let num2=4;
document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;
let sumEl= document.getElementById("sum-el");
function add(){
    let sum=num1+num2;
    sumEl.textContent=`sum :${sum}`;
}function sub(){
    let sum=num1-num2;
    sumEl.textContent=`difference :${sum}`;
}
function mul(){
    let sum=num1*num2;
    sumEl.textContent=`multiplication :${sum}`;}
function div(){
    let sum=num1/num2;
    sumEl.textContent=`divisoin :${sum}`;}
