// INTRO AUTO HIDE
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
}, 2200);

// ALL GEAR FILES (exact names from your folder)
const gearFiles = [
  "brzda.png","grillon(1).png","jummar.png","haky.png","sedak.png","sedacka.png",
  "karabina0.png","karabina01.png","karabina02.png","karabina08.png","karabina13.png",
  "karabina15.png","karabina17.png","karabina18.png","karabina19.png","karabina20.png",
  "karabina26.png","karabina28.png","karabina29.png",
  "kladka01.png","kladka02.png","kladka04.png",
  "kotvenik.png","obrtlik.png",
  "ocelka01.png","ocelka02.png","ocelka03.png","ocelka04.png",
  "rig.png","sada.png","smyce01.png","sedacka.png"
];

const grid = document.getElementById("gearGrid");
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCap = document.getElementById("lbCap");

gearFiles.forEach(f=>{
  const img=document.createElement("img");
  img.src=f;
  img.alt=f;
  img.onclick=()=>{
    lb.style.display="flex";
    lbImg.src=f;
    lbCap.textContent=f;
  };
  grid.appendChild(img);
});

document.getElementById("close").onclick=()=>lb.style.display="none";
