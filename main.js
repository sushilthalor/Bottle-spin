//Var let  const 

// javacipt =>echmascript 

// es5 => let and const , ()=>{}


// var b= prompt("enter tehe number ")
// alert(b)
// console.log(b);

// let a= prompt("enter the no")
// let b= prompt("enter the no")

// let d=Number(a)
// let e=Number(b)
// let c = d+e
// alert(c)


// let a=Number(prompt("enter a"))
// let b=Number(prompt("enter b"))
// alert(a+b)

// let a= prompt("enter age")
// if(a<18){
//     alert("you can not drive")
// }
// else if(a>18 && a<100){
//     alert("you can drive")
// }
// else{
//     alert("you are not a human")
// }

// let a=prompt("enter age")
// if(a<18){
//     alert("you are not aligable to vote ")
// }
// else if(a>18 && a<100){
//     alert("you are aligable to vote")
// }
// else{
//     alert("you are not a human")
// }


// for(let i=1;i<=10;i++){
//     console.log(i*2)
// }

// var arar=[12,3,4,5,545,"mish","jkdjkad"]=

// // length 
// console.log(arar.length);
// arar.push(120120)
// arar.pop()
// arar.pop()
// console.log(arar);

// for(let i=0;i<arar.length;i++){
//     // for(let j=0;j<4;j++){

//     // }
// }

//Odd even 
// let a= prompt("enter no")
// if(a%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }
//vowel consonent
// let b = prompt("enter value")
// let a= b.slice(0,1)
// if(a=="a" || a=="e" || a=="i" || a=="o" || a=="u"){
//     console.log("vowel")
// }
// else{
//     console.log("consonent")
// }

// q1 C Program to Check Whether a Number is Positive, Negative, or Zero
// let a=prompt("enter value")
// if(a==0){
//     alert("number is zero")
// }
// else if(a>0){
//     alert("number is positive")
// }
// else{
//     alert("number is negative")
// }

// q5 JS Program to Calculate Sum of Natural Numbers
// let a=prompt("enter value")
// for(let i=0;i<=a;i++){
//     console.log(i=a*(a+1)/2)
// }

// Program to Check Leap Year
// let a=prompt("enter year")
// if(a%4==0){
//     alert("leap year")
// }
// else{
//     alert("not leap year")
// }

// Program to Generate Multiplication Table
// let a=prompt("enter number")
// for(let i=1;i<=10;i++){
//     console.log(a*i)
// }

// Program to Make a Simple Calculator
// let a=Number(prompt("enter first no"))
// let b=prompt("enter symbles(+,-,*,/)")
// let c=Number(prompt("enter second no"))
// if(b=="+"){
//     alert(a+c)
// }
// else if(b=="-"){
//     alert(a-c)
// }
// else if(b=="*"){
//     alert(a*c)
// }
// else if(b=="/"){
//     alert(a/c)
// }
// else{
//     alert("invalid")
// }


// console.log(a);
// let a=10

//Hoisting--------------------------------------------------------

// function add(a,b){
//     console.log(a+b);
// }
// add(10,12)

// let a=add(20,89)
// console.log(a);

// arrow function hositng not  allowed 
// let add=(a,b)=>{
//     console.log(a+b);
// }
// add(12,8)

// demo(8,3)
// function demo(a,b){
//     console.log(a+b)
// }

// let add=(a,b)=>{
//     console.log(a+b);
// }
// add(54,54)

// let a=10
// var a1=20

// var a=Math.random()*6+1
// var b=Math.floor(a)
// console.log(b);
// let const var 


// function randomno(){
//     var a=Math.random()*100
//     var b=Math.trunc(a)
//     console.log(b);
// }
// for(var i=0;i<=10;i++){
//     randomno()
// }


// dice game
// function check(){


//    var b=Math.random()*6+1
//    var a= Math.floor(b)
//    var loc1='img/img'+a+ '.jpg'
//    document.querySelectorAll("img")[0].src = loc1



//    var c=Math.random()*6+1
//    var d= Math.floor(c)
//       var loc2='img/img'+ d+ '.jpg'
//    document.querySelectorAll("img")[1].src = loc2

//    if(a>d){
//     document.querySelector("#h2").innerHTML = "a wins"
//    }
//    else if(a<d){
//     document.querySelector("#h2").innerHTML = "b wins"
//     }
//     else {
//         document.querySelector("#h2").innerHTML = "draw"
//     }

// }

function spin() {
    var a = Math.random() * 4 + 1
    var b = Math.floor(a)
    var loc1 = 'img/bottle' + b + '.png'
    document.querySelectorAll("#bottle")[0].src = loc1
    if(b==1){
        document.querySelector("#pwon").innerHTML = "Player 1 Wins"
        document.querySelector("#pwon2").innerHTML = "Player 1 Wins"
    }
    else if(b==2){
        document.querySelector("#pwon").innerHTML = "Player 2 Wins"
        document.querySelector("#pwon2").innerHTML = "Player 2 Wins"
    }
    else if(b==3){
        document.querySelector("#pwon").innerHTML = "Player 3 Wins"
        document.querySelector("#pwon2").innerHTML = "Player 3 Wins"
    }
    else if(b==4){
        document.querySelector("#pwon").innerHTML = "Player 4 Wins"
        document.querySelector("#pwon2").innerHTML = "Player 4 Wins"
    }
}