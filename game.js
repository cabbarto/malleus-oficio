(() => {
  const HUD = 52, VW = 960, VH = 540;
  const canvas = document.getElementById("c");
  const ctx = canvas.getContext("2d");
  let SCALE = 1;
  function fit(){
    SCALE = Math.max(0.7, Math.min(1.6, Math.min((innerWidth-24)/VW, (innerHeight-24)/(VH+HUD))));
    canvas.width = VW; canvas.height = VH+HUD;
    canvas.style.width = Math.floor(VW*SCALE)+"px";
    canvas.style.height = Math.floor((VH+HUD)*SCALE)+"px";
    const fr=document.getElementById("frame");
    fr.style.width=canvas.style.width; fr.style.height=canvas.style.height;
  }
  fit(); addEventListener("resize", fit);

  const files = {
    plaza:"assets/plaza.jpg", bosque:"assets/bosque.jpg",
    capilla:"assets/capilla.jpg", cripta:"assets/cripta.jpg",
    heroF0:"assets/hero_f0.png", heroF1:"assets/hero_f1.png",
    heroB0:"assets/hero_b0.png", heroB1:"assets/hero_b1.png",
    heroS0:"assets/hero_s0.png", heroS1:"assets/hero_s1.png",
    cult:"assets/cult.png", wolf:"assets/wolf.png", witch:"assets/witch.png",
    herb:"assets/herb.png", merc:"assets/merc.png",
    ovHouseN:"assets/ov_house_n.png", ovChapel:"assets/ov_chapel.png",
    ovHouseE:"assets/ov_house_e.png", ovWell:"assets/ov_well.png",
    ovHouseSW:"assets/ov_house_sw.png", ovPews:"assets/ov_pews.png"
  };
  const img = {};
  let loaded=0, need=Object.keys(files).length;
  function loadAll(done){
    Object.entries(files).forEach(([k,src])=>{
      const i=new Image();
      i.onload=()=>{ img[k]=i; if(++loaded===need) done(); };
      i.onerror=()=>{ console.warn("falto",src); if(++loaded===need) done(); };
      i.src=src;
    });
  }

  // rooms, combate, HUD: ver archivo completo en prototipo_rpg/game.js del proyecto
  console.warn("Usar el game.js local completo si este stub se subio incompleto");
})();
