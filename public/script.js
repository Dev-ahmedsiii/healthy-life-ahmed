function calcCalories(){
let w=document.getElementById("w").value;
let h=document.getElementById("h").value;
let a=document.getElementById("a").value;

let c=10*w+6.25*h-5*a+5;
document.getElementById("r").innerText="🔥 "+Math.round(c);
}

function calcBMI(){
let w=document.getElementById("w").value;
let h=document.getElementById("h").value/100;
let bmi=w/(h*h);
document.getElementById("bmi").innerText="BMI: "+bmi.toFixed(1);
}

function aiAdvice(){
let w=document.getElementById("w").value;
if(w<60) document.getElementById("ai").innerText="زد الأكل";
else if(w<80) document.getElementById("ai").innerText="ممتاز";
else document.getElementById("ai").innerText="قلل الدهون";
}

function rate(s){
localStorage.setItem("rate",s);
document.getElementById("rate-msg").innerText="شكراً ⭐";
}

function dailyTip(){
let tips=["اشرب ماء","كل خضار","مارس الرياضة","نم جيداً"];
document.getElementById("daily").innerText=tips[Math.floor(Math.random()*tips.length)];
}
window.onload=dailyTip;
