function calcCalories(){
let w=document.getElementById("w")?.value;
let h=document.getElementById("h")?.value;
let a=document.getElementById("a")?.value;

if(!w || !h || !a){
if(document.getElementById("r"))
document.getElementById("r").innerText="أدخل كل البيانات";
return;
}

let c=10*w+6.25*h-5*a+5;

if(document.getElementById("r"))
document.getElementById("r").innerText="🔥 احتياجك اليومي: "+Math.round(c)+" سعرة";
}


// 📊 حساب BMI
function calcBMI(){
let w=document.getElementById("w")?.value;
let h=document.getElementById("h")?.value;

if(!w || !h){
document.getElementById("bmi").innerText="أدخل البيانات";
return;
}

h=h/100;
let bmi=w/(h*h);

let msg="";
if(bmi<18.5) msg="نحيف";
else if(bmi<25) msg="طبيعي";
else msg="زيادة وزن";

document.getElementById("bmi").innerText="📊 BMI: "+bmi.toFixed(1)+" ("+msg+")";
}


// 🤖 AI تحليل ذكي
function aiAdvice(){
let w=document.getElementById("w")?.value;
let h=document.getElementById("h")?.value;

if(!w || !h){
document.getElementById("ai").innerText="أدخل البيانات أولاً";
return;
}

h=h/100;
let bmi=w/(h*h);

let msg="";

if(bmi<18.5){
msg="🟡 تحتاج زيادة سعرات + بروتين + تمارين مقاومة";
}
else if(bmi<25){
msg="🟢 جسمك ممتاز 👌 استمر";
}
else{
msg="🔴 قلل الدهون والسكريات + مارس الرياضة";
}

document.getElementById("ai").innerText=msg;
}


// ⭐ تقييم الموقع
function rate(star){
localStorage.setItem("rating",star);
document.getElementById("rate-msg").innerText="شكراً لتقييمك ⭐";
}


// 💡 نصيحة يومية
function dailyTip(){
let tips=[
"اشرب 2 لتر ماء يومياً 💧",
"ابدأ يومك بفطور صحي 🍳",
"مارس المشي يومياً 🚶",
"قلل السكر 🍭",
"نم 7-8 ساعات 😴",
"كل خضروات أكثر 🥗",
"اشرب ماء قبل الأكل 🍶",
"ابتعد عن الوجبات السريعة 🍔",
"حافظ على التوازن ⚖️"
];

let random=tips[Math.floor(Math.random()*tips.length)];

if(document.getElementById("daily"))
document.getElementById("daily").innerText=random;
}


// 🤖 نظام غذائي حسب الوزن
function generatePlan(){
let w=document.getElementById("weight")?.value;

if(!w){
document.getElementById("planResult").innerText="أدخل وزنك";
return;
}

let plan="";

if(w < 60){
plan = "🍳 فطور: 4 بيض + شوفان\n🍗 غداء: دجاج + أرز\n🥤 سناك: موز + مكسرات\n💪 هدفك زيادة الوزن";
}
else if(w < 80){
plan = "🍳 فطور: 3 بيض + شوفان\n🍗 غداء: دجاج + أرز بني\n🥗 عشاء: سلطة + بروتين\n🔥 توازن ممتاز";
}
else{
plan = "🍳 فطور: 2 بيض + شوفان\n🍗 غداء: دجاج مشوي + خضار\n🥗 عشاء: زبادي + سلطة\n🔥 هدفك التنشيف";
}

document.getElementById("planResult").innerText=plan;
}


// 📊 حفظ الوزن
function saveWeight(){
let w=document.getElementById("newWeight")?.value;

if(!w){
document.getElementById("progress").innerText="أدخل الوزن";
return;
}

localStorage.setItem("weight",w);

document.getElementById("progress").innerText="📊 آخر وزن: "+w+" كجم";
}


// 🚀 عند فتح الصفحة
window.onload=function(){

// تحميل الوزن
let saved=localStorage.getItem("weight");
if(saved && document.getElementById("progress")){
document.getElementById("progress").innerText="📊 آخر وزن: "+saved+" كجم";
}

// تحميل نصيحة يومية
dailyTip();

};
