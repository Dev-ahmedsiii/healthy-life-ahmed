function calcCalories(){
let w=document.getElementById("w").value;
let h=document.getElementById("h").value;
let a=document.getElementById("a").value;

let c=10*w+6.25*h-5*a+5;

document.getElementById("r").innerText="🔥 "+Math.round(c)+" سعرة يومياً";
}

function aiAdvice(){
let w=document.getElementById("w").value;

if(!w){
document.getElementById("ai").innerText="أدخل البيانات أولاً";
return;
}

if(w < 60){
document.getElementById("ai").innerText="🟡 تحتاج زيادة أكل صحي";
}
else if(w < 80){
document.getElementById("ai").innerText="🟢 وزنك ممتاز";
}
else{
document.getElementById("ai").innerText="🔴 قلل الدهون وابدأ رياضة";
}
}
