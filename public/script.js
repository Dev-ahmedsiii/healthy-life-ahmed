function calcCalories(){
let w=document.getElementById("w").value;
let h=document.getElementById("h").value;
let a=document.getElementById("a").value;

let c=10*w+6.25*h-5*a+5;

document.getElementById("r").innerText="🔥 احتياجك اليومي: "+Math.round(c)+" سعرة";
}

function toggleDark(){
document.body.classList.toggle("dark");
}
