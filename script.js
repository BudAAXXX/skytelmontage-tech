// ===== SAFE INTRO: always fade + remove (prevents black screen) =====
(function introSafe() {
  const intro = document.getElementById("intro");
  if (!intro) return;

  const fadeAt = 1200;
  const removeAt = 1900;

  setTimeout(() => intro.classList.add("hide"), fadeAt);
  setTimeout(() => intro.remove(), removeAt);

  // hard failsafe
  window.addEventListener("load", () => {
    setTimeout(() => {
      const i = document.getElementById("intro");
      if (i) i.remove();
    }, 3500);
  });
})();

// ===== YEAR =====
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

// ===== CURRENT FILES IN YOUR REPO (exact names from your screenshots) =====
const gearFiles = [
  "brzda.png",
  "grillon(1).png",
  "haky.png",
  "jummar.png",
  "karabina0.png",
  "karabina01.png",
  "karabina02.png",
  "karabina08.png",
  "karabina13.png",
  "karabina15.png",
  "karabina17.png",
  "karabina18.png",
  "karabina19.png",
  "karabina20.png",
  "karabina26.png",
  "karabina28.png",
  "karabina29.png",
  "kladka01.png",
  "kladka02.png",
  "kladka04.png",
  "kotvevnik.png",
  "obrtlik.png",
  "ocelka01.png",
  "ocelka02.png",
  "ocelka03.png",
  "oecelka04.png",
  "rig.png",
  "sada.png",
  "sedacka.png",
  "sedak.png",
  "smyce01.png",
  "vak.png",
  "vak03.png",
  "vak05.png"
];

// ===== HUD thumbs (small subset) =====
(function hudThumbs() {
  const target = document.getElementById("hudThumbs");
  if (!target) return;

  const picks = [
    "brzda.png",
    "rig.png",
    "jummar.png",
    "karabina01.png",
    "kladka01.png",
    "kotvevnik.png",
    "ocelka01.png",
    "smyce01.png"
  ];

  picks.forEach(f => {
    const img = document.createElement("img");
    img.src = f;
    img.alt = "";
    img.loading = "lazy";
    img.onerror = () => img.remove();
    target.appendChild(img);
  });
})();

// ===== LIGHTBOX =====
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCap = document.getElementById("lbCap");
const lbClose = document.getElementById("lbClose");

function openLightbox(file) {
  if (!lb) return;
  lb.classList.add("on");
  lb.setAttribute("aria-hidden", "false");
  lbImg.src = file;
  lbCap.textContent = file;
}
function closeLightbox() {
  if (!lb) return;
  lb.classList.remove("on");
  lb.setAttribute("aria-hidden", "true");
  lbImg.src = "";
  lbCap.textContent = "";
}
if (lbClose) lbClose.addEventListener("click", closeLightbox);
if (lb) lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

// ===== GEAR GRID + SEARCH =====
const grid = document.getElementById("gearGrid");
const search = document.getElementById("gearSearch");

function labelFromFile(file) {
  return file
    .replace(".png", "")
    .replace(/\(1\)/g, "")
    .replace(/[\-_]/g, " ")
    .trim();
}

function typeFromFile(file) {
  const f = file.toLowerCase();
  if (f.includes("karabina")) return "carabiner";
  if (f.includes("kladka")) return "pulley";
  if (f.includes("ocelka") || f.includes("oecelka")) return "lanyard";
  if (f.includes("sedacka")) return "work seat";
  if (f.includes("sedak")) return "harness";
  if (f.includes("smyce")) return "sling";
  if (f.includes("kotvevnik")) return "anchor";
  if (f.includes("rig") || f.includes("brzda")) return "descender";
  if (f.includes("jummar")) return "ascender";
  if (f.includes("haky")) return "hooks";
  if (f.includes("obrtlik")) return "swivel";
  if (f.includes("sada")) return "set";
  if (f.includes("vak")) return "bag";
  if (f.includes("grillon")) return "lanyard";
  return "gear";
}

function addCard(file) {
  if (!grid) return;

  const card = document.createElement("div");
  card.className = "gcard";
  card.dataset.file = file.toLowerCase();
  card.dataset.label = labelFromFile(file).toLowerCase();
  card.dataset.type = typeFromFile(file).toLowerCase();

  const img = document.createElement("img");
  img.src = file;
  img.alt = labelFromFile(file);
  img.loading = "lazy";
  img.onerror = () => card.remove(); // if file missing, remove silently

  const meta = document.createElement("div");
  meta.className = "meta";

  const left = document.createElement("div");
  const t = document.createElement("div");
  t.className = "t";
  t.textContent = labelFromFile(file);
  const s = document.createElement("div");
  s.className = "s";
  s.textContent = "ASSET";
  left.appendChild(t);
  left.appendChild(s);

  const tag = document.createElement("div");
  tag.className = "tag";
  tag.textContent = typeFromFile(file);

  meta.appendChild(left);
  meta.appendChild(tag);

  card.appendChild(img);
  card.appendChild(meta);

  card.addEventListener("click", () => openLightbox(file));
  grid.appendChild(card);
}

function buildGrid() {
  if (!grid) return;
  grid.innerHTML = "";
  gearFiles.forEach(addCard);
}

function applySearch() {
  if (!grid) return;
  const q = (search?.value || "").toLowerCase().trim();
  const cards = grid.querySelectorAll(".gcard");
  cards.forEach(c => {
    const ok =
      !q ||
      (c.dataset.label || "").includes(q) ||
      (c.dataset.type || "").includes(q) ||
      (c.dataset.file || "").includes(q);
    c.style.display = ok ? "" : "none";
  });
}

buildGrid();
if (search) search.addEventListener("input", applySearch);

// ===== VIDEO: autoplay assist + Play overlay fallback =====
(function videoAssist() {
  const v = document.getElementById("siteVideo");
  const btn = document.getElementById("playBtn");
  if (!v || !btn) return;

  function showPlay() { btn.classList.add("show"); }
  function hidePlay() { btn.classList.remove("show"); }

  const p = v.play();
  if (p && typeof p.catch === "function") {
    p.then(hidePlay).catch(showPlay);
  }

  btn.addEventListener("click", async () => {
    try {
      await v.play();
      hidePlay();
    } catch (_) {
      showPlay();
    }
  });
})();
