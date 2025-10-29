(() => {
  // i18n
  const I18N = {
    cs:{headline:"SkyTel Montage",subtitle:"Váš partner pro výškové a telekomunikační projekty v celé Evropě.",partners:"Partneři",certs:"Certifikace a školení",equipment:"Vybavení"},
    en:{headline:"SkyTel Montage",subtitle:"Your partner for telecom and rope-access projects across Europe.",partners:"Partners",certs:"Certifications & Training",equipment:"Equipment"},
    de:{headline:"SkyTel Montage",subtitle:"Ihr Partner für Telekommunikation und Höhenarbeit in ganz Europa.",partners:"Partner",certs:"Zertifikate & Schulungen",equipment:"Ausrüstung"},
    kli:{headline:"SkyTel Montage",subtitle:"batlh • HoS • yaj",partners:"Qochbe'",certs:"patlhmey",equipment:"maqtagh"}
  };
  const SEO = {
    cs:{title:"SkyTel Montage s.r.o. | Telekom a výškové práce v DE/EU",desc:"8 let praxe v Německu. Montáže a servis telekom sítí, práce ve výškách (PSAgA), elektro kvalifikace NV 194/2022 §7, lékařské prohlídky G25/G37/G41, Siemens SIMATIC S7/TIA. Dokumentace dle DE/CZ norem."},
    en:{title:"SkyTel Montage s.r.o. | Telecom & Rope Access in DE/EU",desc:"8 years in Germany. Telecom rollout and service, rope access (PSAgA), electrical qualification NV 194/2022 §7, medical G25/G37/G41, Siemens SIMATIC S7/TIA. Documentation compliant with DE/CZ standards."},
    de:{title:"SkyTel Montage s.r.o. | Telekom & Höhenarbeit in DE/EU",desc:"8 Jahre Erfahrung in Deutschland. Rollout und Service, Höhenarbeit (PSAgA), Elektro-Qualifikation NV 194/2022 §7, G25/G37/G41, Siemens SIMATIC S7/TIA. Dokumentation nach DE/CZ-Standards."}
  };
  function applySEO(l){const s=SEO[l]||SEO.cs;document.title=s.title;let md=document.querySelector('meta[name="description"]');if(!md){md=document.createElement('meta');md.setAttribute('name','description');document.head.appendChild(md);}md.setAttribute('content',s.desc);}

  function setLang(l){
    document.documentElement.lang = l;
    document.querySelectorAll("[data-i18n]").forEach(e=>{
      const k=e.dataset.i18n; if(I18N[l]&&I18N[l][k]) e.textContent=I18N[l][k];
    });
    document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===l?"true":"false"));
    applySEO(l);
    const url = new URL(location.href); url.searchParams.set('lang', l); history.replaceState(null,'',url.toString());
  }

  document.addEventListener("DOMContentLoaded", () => {
    // přepínač jazyků
    document.querySelectorAll(".lang button").forEach(btn=>btn.addEventListener("click",()=>setLang(btn.dataset.lang)));
    const l = new URL(location.href).searchParams.get('lang') || 'cs';
    setLang(l);

    // schovej rozbité logo partnera
    document.querySelectorAll("#partner-logos img").forEach(img=>{
      img.addEventListener('error',()=>img.style.display='none');
      img.loading = "lazy";
    });

    // === EQUIPMENT ROTATOR + GALLERY ===
    const EQUIP = [
      "Lano.png",
      "karabina0.png","karabina01.png","karabina02.png","karabina08.png","karabina13.png","karabina15.png","karabina17.png","karabina18.png","karabina19.png","karabina20.png","karabina26.png","karabina28.png","karabina29.png",
      "kladka01.png","kladka02.png","kladka04.png","kotevnik.png","obrtlik.png",
      "ocelka01.png","ocelka02.png","ocelka03.png","ocelka04.png",
      "sedak.png","sedacka.png","smyce01.png","vak.png","vak03.png","vak05.png",
      "rig.png","sada.png","brzda.png","jummar.png","haky.png","grillon(1).png"
    ];
    function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
    const list = shuffle([...new Set(EQUIP)]);
    list.forEach(src=>{const p=new Image();p.src=src;});

    // rotátor pro #moving-image
    (function(){
      const img=document.getElementById('moving-image'); if(!img) return;
      let i=0;
      function next(){ if(!list.length) return; const src=list[i%list.length]; i++; img.onerror=()=>next(); img.src=src; }
      next(); setInterval(next, 5000);
    })();

    // galerie
    (function(){
      const wrap=document.getElementById('equip'); if(!wrap) return;
      wrap.innerHTML=""; shuffle([...list]).forEach(src=>{const el=document.createElement('img'); el.loading="lazy"; el.alt=src; el.src=src; el.onerror=()=>el.remove(); wrap.appendChild(el);});
    })();

    // animace „pohyblivého“ boxu
    (function(){
      const box=document.getElementById('moving-box'); if(!box) return;
      let start=null; const speed=130, amp=70, period=4200;
      function loop(ts){ if(!start) start=ts; const t=ts-start; const x=(t/1000)*speed%(innerWidth+160)-160; const y=innerHeight*0.35+Math.sin((t%period)/period*Math.PI*2)*amp; box.style.transform=`translate(${x}px,${y}px)`; requestAnimationFrame(loop); }
      requestAnimationFrame(loop);
    })();
  });
})();
