function calcCalories(){
let w=document.getElementById("w").value;
let h=document.getElementById("h").value;
let a=document.getElementById("a").value;

let c=10*w+6.25*h-5*a+5;
document.getElementById("r").innerText="🔥 احتياجك اليومي: "+Math.round(c)+" سعرة";
}

// 📊 BMI
function calcBMI(){
let w=document.getElementById("w").value;
let h=document.getElementById("h").value/100;

let bmi=w/(h*h);
let msg="";

if(bmi<18.5) msg="نحيف";
else if(bmi<25) msg="طبيعي";
else msg="زيادة وزن";

document.getElementById("bmi").innerText="📊 BMI: "+bmi.toFixed(1)+" ("+msg+")";
}

// 🤖 AI مطور
function aiAdvice(){
let w=document.getElementById("w").value;
let h=document.getElementById("h").value/100;

if(!w||!h){
document.getElementById("ai").innerText="أدخل البيانات أولاً";
return;
}

let bmi=w/(h*h);
let msg="";

if(bmi<18.5){
msg="🟡 جسمك يحتاج سعرات أعلى + بروتين + تمارين مقاومة";
}
else if(bmi<25){
msg="🟢 ممتاز 👌 حافظ على نظامك الحالي";
}
else{
msg="🔴 قلل السكر والدهون + مارس رياضة يومية";
}

document.getElementById("ai").innerText=msg;
}

// ⭐ تقييم
function rate(star){
localStorage.setItem("rating",star);
document.getElementById("rate-msg").innerText="شكراً لتقييمك ⭐";
}

// 💡 نصيحة يومية
function dailyTip(){
let tips=[
"اشرب ماء كثير 💧",
"ابدأ يومك بفطور صحي 🍳",
"مارس المشي يومياً 🚶",
"قلل السكر 🍭",
"نم جيداً 😴",
"كل خضار أكثر 🥗"
];

let random=tips[Math.floor(Math.random()*tips.length)];
document.getElementById("daily").innerText=random;
}

window.onload=dailyTip;
