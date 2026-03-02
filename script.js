// intro then envelope
setTimeout(()=>{
 document.getElementById("intro").classList.add("hidden");
 document.getElementById("envelope-screen").classList.remove("hidden");
 startHearts();
},4000);

// music autoplay after click
let music=document.getElementById("bgMusic");
document.body.addEventListener("click",()=>music.play(),{once:true});

// open letter
function openLetter(){
 document.getElementById("envelope-screen").classList.add("hidden");
 document.getElementById("letter-screen").classList.remove("hidden");
 typeMessage();
 startConfetti();
}

// typing message (EDIT)
let msg="From our school days till today, you have been the most special part of my life. Growing up with you and creating so many beautiful memories together is the best feeling ever Thank you for always being with me, supporting me, and loving me. I’m truly lucky to have you in my lifeStay happy, keep smiling, and always stay mine Happy Birthday once again ❤️";





let i=0;
function typeMessage(){
 if(i<msg.length){
  document.getElementById("typedText").innerHTML+=msg.charAt(i);
  i++;
  setTimeout(typeMessage,40);
 }
}

// floating hearts
function startHearts(){
 setInterval(()=>{
  let h=document.createElement("div");
  h.className="heart";
  h.innerHTML="❤️";
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(Math.random()*20+15)+"px";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),6000);
 },300);
}

// timeline scroll animation
let memories=document.querySelectorAll(".memory");
window.addEventListener("scroll",()=>{
 memories.forEach(mem=>{
  let pos=mem.getBoundingClientRect().top;
  if(pos<window.innerHeight-100){
    mem.classList.add("show");
  }
 });
});

// confetti
let canvas=document.getElementById("confetti");
let ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let conf=[];
function startConfetti(){
 for(let i=0;i<150;i++){
  conf.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*6+2});
 }
 draw();
}

function draw(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 ctx.fillStyle="pink";
 conf.forEach(p=>{
  ctx.beginPath();
  ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
  ctx.fill();
  p.y+=2;
  if(p.y>canvas.height) p.y=0;
 });
 requestAnimationFrame(draw);
}

// final screen
function finalScreen(){
 document.getElementById("letter-screen").classList.add("hidden");
 document.getElementById("final-screen").classList.remove("hidden");
}

// // 💥 Reveal all images when screen is touched or clicked
// function revealAllMemories() {
//   let memories = document.querySelectorAll(".memory");
//   memories.forEach(mem => {
//     mem.classList.add("show");
//   });
// }

// // Works for both mobile touch & desktop click
// document.addEventListener("click", revealAllMemories);
// document.addEventListener("touchstart", revealAllMemories);