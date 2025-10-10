(function(){
  document.addEventListener('DOMContentLoaded', function(){ try{ updatePlate(); }catch(e){} });
  const $ = id => document.getElementById(id);
  const setVar = (k,v)=> $('canvas').style.setProperty(k,v);

  // plate as single PATH with left arc (no circle)
  const platePath = $('platePath'), blurNode=$('blurNode'), g1=$('g1'), g2=$('g2');

  // text/icon nodes
  const texts = $('texts'), slugOut=$('slugOut'), titleOut=$('titleOut'), descOut=$('descOut'), brandOut=$('brandOut');
  const iconImg=$('iconImg');

  // inputs
  const round=$('round'), blur=$('blur'), plateOpacity=$('plateOpacity'), plateWidth=$('plateWidth');
  const titleIn=$('titleIn'), descIn=$('descIn'), slugIn=$('slugIn'), brandIn=$('brandIn');
  const txtScale=$('txtScale'), txtOpacity=$('txtOpacity'), txtX=$('txtX'), txtY=$('txtY');
  const bg1=$('bg1'), bg2=$('bg2'), bg3=$('bg3'), tcol=$('tcol'), mcol=$('mcol'), a1=$('a1'), a2=$('a2'), bcol=$('bcol');
  const iconIn=$('iconIn'), iconScale=$('iconScale'), iconOpacity=$('iconOpacity'), iconX=$('iconX'), iconY=$('iconY'), iconBlend=$('iconBlend');
  const preset=$('preset');

  const W=1200, H=630;
  
  function updatePlate(){
    const W=1200, H=630;
    const widthPct = (plateWidth && plateWidth.value!=null) ? 100 - (+plateWidth.value||0) : 35;  // left = wider, right = thinner
    const pw = W * widthPct/100;
    const right = W;
    const epsilon = Math.round((+blur.value||0)*4 + 20); // move edge out of view
    const rightPlus = right + epsilon;
    const left = right - pw;

    const rMax = Math.min(H/2, pw/2); // smooth max
    const r = Math.max(0, Math.min(rMax, (+round.value/100)*rMax));

    // Rounded-rectangle path: rounded TOP-LEFT and BOTTOM-LEFT only
    // Points:
    // P0 = (right, 0)                     // start top-right
    // down to (right, H)
    // left to (left + r, H)
    // arc to (left, H - r)  (bottom-left corner)
    // up to (left, r)
    // arc to (left + r, 0)  (top-left corner)
    // back to start
    const p0 = `${right} 0`;
    const p1 = `${right} ${H}`;
    const p2 = `${left + r} ${H}`;
    const p3 = `${left} ${H - r}`;
    const p4 = `${left} ${r}`;
    const p5 = `${left + r} 0`;
    const d = [
      `M ${p0}`,
      `L ${p1}`,
      `L ${p2}`,
      r>0 ? `A ${r} ${r} 0 0 1 ${p3}` : `L ${left} ${H}`,
      r>0 ? `L ${p4}` : `L ${left} 0`,
      r>0 ? `A ${r} ${r} 0 0 1 ${p5}` : `L ${left} 0`,
      `L ${p0}`,
      `Z`
    ].join(' ');

    document.getElementById('plateGlow').setAttribute('d', d);
    document.getElementById('plateMaskPath').setAttribute('d', d);
    (function(){
  document.addEventListener('DOMContentLoaded', function(){ try{ updatePlate(); }catch(e){} });
      const base = Math.max(0, +blur.value || 0);
      // widthPct defined above: widthPct = 100 - (+plateWidth.value||0)
      const w = Math.max(0, Math.min(100, widthPct)); // 0..100
      const thin = Math.max(0, (10 - w)) / 10;        // 0..1 for w<10%
      const factor = 1 + thin * 3.0;                  // up to ~4x
      const extraPx = thin * 8;
      const maskBlur = Math.round(base * factor + extraPx);
      const heavy    = Math.round(maskBlur * 1.9);
      document.getElementById('blurNode').setAttribute('stdDeviation', String(maskBlur));
      document.getElementById('blurNodeHeavy').setAttribute('stdDeviation', String(heavy));
    })();
    const op = Math.max(0, Math.min(1, +plateOpacity.value/100));
    document.getElementById('plateCore').setAttribute('opacity', String(op));
    document.getElementById('plateGlow').setAttribute('opacity', String(Math.min(1, op*0.75)));
  }

  function syncText(){
    var _needsWidthFix=true;
    titleOut.textContent = titleIn.value || 'Заголовок категории';
    descOut.textContent  = descIn.value  || 'Короткое описание: о чем эта категория и что пользователь найдет внутри';
    brandOut.textContent = brandIn.value || 'ваш-сайт.com • раздел / категория';
    slugOut.textContent  = (slugIn.value || 'category-slug').toLowerCase();
    const s=+txtScale.value/100;
    texts.style.transform = `translate(${+txtX.value}px, ${+txtY.value}px) scale(${s})`;
    texts.style.opacity   = String(Math.max(0,Math.min(1,+txtOpacity.value/100)));
  }

  function syncColors(){
    setVar('--bg1', bg1.value); setVar('--bg2', bg2.value); setVar('--bg3', bg3.value);
    setVar('--t', tcol.value); setVar('--m', mcol.value); setVar('--b', bcol.value);
    setVar('--a1', a1.value); setVar('--a2', a2.value);
    g1.setAttribute('stop-color', a1.value); g2.setAttribute('stop-color', a2.value);
    $('dot').style.background = a1.value;
  }

  function syncIcon(){
    const s=+iconScale.value/100;
    iconImg.style.transform = `translate(${+iconX.value}px, ${+iconY.value}px) scale(${s})`;
    iconImg.style.opacity   = String(Math.max(0,Math.min(1,+iconOpacity.value/100)));
    iconImg.style.mixBlendMode = iconBlend.value;
    document.getElementById('iconWrap').style.mixBlendMode = iconBlend.value;
  }

  iconIn.addEventListener('change',(e)=>{
    const f=e.target.files && e.target.files[0];
    if(!f){ iconImg.style.display='none'; return; }
    const r=new FileReader();
    r.onload=ev=>{ iconImg.src=ev.target.result; iconImg.style.display='block'; };
    r.readAsDataURL(f);
  });

  // Clear uploaded icon
  const iconClear = document.getElementById('iconClear');
  if (iconClear){
    iconClear.addEventListener('click', ()=>{
      try{
        iconImg.src = '';
        iconImg.style.display = 'none';
        iconIn.value = '';
        // keep sliders/state; just visually remove the icon
      }catch(e){}
    });
  }


  const PRESETS={
    ocean:['#233654','#2b4060','#0a121f','#e8eef8','#aab7c8','#62d2ff','#4864f0','#cfd7e6'],
    forest:['#15312a','#113a30','#0a1e1a','#e7f5ed','#a7c9be','#3fd1a7','#1fa37d','#cfe9df'],
    violet:['#2a2145','#2f2a57','#0f0c1e','#efe8ff','#b6a7d6','#a77dff','#5b6dff','#d6cff5'],
    midnight:['#0b121c','#0b1a2a','#051018','#e6edf5','#97a3b6','#56b0ff','#3d63ff','#c6d2e4'],
    sunset:['#362135','#5a2b3b','#121018','#ffeae3','#d6a7a7','#ff7a59','#ff3f81','#f0d0c6'],
    slate:['#1b2330','#2a2f39','#0f141b','#e9eef5','#a9b3bf','#8fb3ff','#6b7b8c','#d2dae4'],
    teal:['#0d2a2a','#124040','#0a1a1a','#e7faf7','#9fd4cc','#31d0c6','#2aa39a','#cfecea'],
    amber:['#2b1d0a','#3b2a12','#0f0b06','#fff0d6','#d6bda0','#ffb62b','#ff8a00','#f1dfc5'],
    candy:['#321a2c','#4a2338','#140b12','#ffe6f6','#c7a1c1','#ff93d2','#9b6bff','#edd3ea'],
    graphite:['#16181c','#1e232a','#0c0f13','#e7ebf0','#9aa3ad','#7aa0ff','#5d6b7a','#cfd5dc']
  };

  preset.addEventListener('change',()=>{
    const v=PRESETS[preset.value]||PRESETS.ocean;
    [bg1.value,bg2.value,bg3.value,tcol.value,mcol.value,a1.value,a2.value,bcol.value]=v;
    syncColors();
  });

  // binds
  [round,blur,plateOpacity,plateWidth].forEach(n=>n.addEventListener('input',updatePlate));
  [titleIn,descIn,slugIn,brandIn,txtScale,txtOpacity,txtX,txtY].forEach(n=>n.addEventListener('input',syncText));
  [bg1,bg2,bg3,tcol,mcol,a1,a2,bcol].forEach(n=>n.addEventListener('input',syncColors));
  [iconScale,iconOpacity,iconX,iconY].forEach(n=>n.addEventListener('input',syncIcon));
  iconBlend.addEventListener('change', syncIcon);
  iconBlend.addEventListener('input', syncIcon);

  // export
  


// Keep description ~15% narrower than title using ResizeObserver (stable, no jitter)




// === Width sync (revert): block width = rendered title width; desc = 85% of block ===
(function initTextWidths(){
  const block = document.querySelector('.textBlock');
  const title = document.getElementById('titleOut');
  const desc  = document.getElementById('descOut');
  if (!block || !title || !desc) return;

  function apply(){
    const tRect = title.getBoundingClientRect();
    if (!tRect.width) return;
    const bcs = getComputedStyle(block);
    const pad = (parseFloat(bcs.paddingLeft)||0) + (parseFloat(bcs.paddingRight)||0);
    // make block just wide enough to fit the current single-line title
    let w = Math.round(tRect.width + pad);
    const baseline = Math.max(parseFloat(title.style.maxWidth)||0, 480);
    if (!isFinite(w) || w < baseline) w = baseline; // анти-схлопывание даже при вводе 1 символа
    block.style.width = w + 'px';
    block.style.maxWidth = w + 'px';
    const inner = Math.max(0, w - pad);
    desc.style.width = Math.round(inner * 0.85) + 'px';
    desc.style.maxWidth = '';
  }

  try {
    const ro = new ResizeObserver(apply);
    ro.observe(title);
  } catch(e) {
    window.addEventListener('resize', apply);
  }
  window.addEventListener('load', apply);
  requestAnimationFrame(apply);

  if (typeof window.syncText === 'function'){
    const _orig = window.syncText;
    window.syncText = function(){ _orig.apply(this, arguments); apply(); };
  }
})();
// === helpers: рисуем иконку один-в-один как в превью ===
function drawIconMappedToOut(ctx, outCanvas, canvasEl, iconEl, opacity, blend) {
  const cRect = canvasEl.getBoundingClientRect();
  const iRect = iconEl.getBoundingClientRect();
  const scaleX = outCanvas.width  / cRect.width;
  const scaleY = outCanvas.height / cRect.height;
  const dx = (iRect.left - cRect.left) * scaleX;
  const dy = (iRect.top  - cRect.top ) * scaleY;
  const dw = iRect.width  * scaleX;
  const dh = iRect.height * scaleY;
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.globalCompositeOperation = blend || 'normal';
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(iconEl, dx, dy, dw, dh);
  ctx.restore();
}

// === экспорт 1× ===

function exportAs(mime) {
  const canvasEl = document.getElementById('canvas');
  const slug = (document.getElementById('slugIn') && document.getElementById('slugIn').value) || 'card';
  const mimeType = mime || 'image/png';

  document.body.classList.add('exporting');
  // PATCH: conditionally hide icon only if blend mode is not 'source-over'
  var _iconEl = document.getElementById('iconImg') || document.getElementById('icon') || (document.querySelector('#iconWrap img'));
  var _prevVisibility = _iconEl ? _iconEl.style.visibility : null;
  var _prevOpacity = _iconEl ? _iconEl.style.opacity : null;
  var _blendValPre = 'source-over';
  try {
    var _bsel = document.getElementById('iconBlend');
    _blendValPre = (_bsel && _bsel.value) ? _bsel.value : (_iconEl ? (getComputedStyle(_iconEl).mixBlendMode || 'source-over') : 'source-over');
    if (_blendValPre === 'normal') _blendValPre = 'source-over';
  } catch(e){ _blendValPre = 'source-over'; }
  // hide only when actual mixing is requested
  if (_iconEl && _blendValPre !== 'source-over'){ _iconEl.style.visibility = 'hidden'; }


  return html2canvas(canvasEl, { backgroundColor: null, scale: 2, useCORS: true })
    .then(function (baseCv) {
      try { document.body.classList.remove('exporting'); } catch (e) {}

      const out = document.createElement('canvas');
      out.width  = baseCv.width;
      out.height = baseCv.height;
      const ctx = out.getContext('2d');
      ctx.drawImage(baseCv, 0, 0);
      // PATCH: redraw icon with chosen blend mode (from UI) at export resolution
      try {
        var iconEl = document.getElementById('iconImg') || document.getElementById('icon') || (document.querySelector('#iconWrap img'));
        var canvasEl = document.getElementById('canvas');
        var iconOpacityVal = 1.0;
        try { iconOpacityVal = Math.max(0, Math.min(1, (+document.getElementById('iconOpacity').value||100)/100)); } catch(e){}
        var blendVal = 'source-over';
        try {
          var bsel = document.getElementById('iconBlend');
          blendVal = (bsel && bsel.value) ? bsel.value : (iconEl ? (getComputedStyle(iconEl).mixBlendMode || 'source-over') : 'source-over');
          if (blendVal === 'normal') blendVal = 'source-over';
        } catch(e){}
        // Only redraw when mixing is active; otherwise baseCv already has correct z-order
        if (iconEl && canvasEl && blendVal !== 'source-over'){
          drawIconMappedToOut(ctx, out, canvasEl, iconEl, iconOpacityVal, blendVal);
        }
      } catch(e){ console.warn('blend redraw failed', e); }
      // restore icon visibility (only matters if we hid earlier)
      if (_iconEl){ _iconEl.style.visibility = _prevVisibility || ''; _iconEl.style.opacity = _prevOpacity || ''; }


      var a = document.createElement('a');
      a.download = slug + (mimeType === 'image/webp' ? '.webp' : '.png');
      try { a.href = out.toDataURL(mimeType); } catch (e) { a.href = out.toDataURL('image/png'); }
      a.click();
    })
    .catch(function (e) {
      try { document.body.classList.remove('exporting'); } catch (_) {}
      console.warn('export error', e);
    });
}




// === экспорт X2 ===

function exportAsX(mime) {
  const canvasEl = document.getElementById('canvas');
  const slug = (document.getElementById('slugIn') && document.getElementById('slugIn').value) || 'card';
  const mimeType = mime || 'image/png';

  document.body.classList.add('exporting');
  // PATCH: conditionally hide icon only if blend mode is not 'source-over'
  var _iconEl = document.getElementById('iconImg') || document.getElementById('icon') || (document.querySelector('#iconWrap img'));
  var _prevVisibility = _iconEl ? _iconEl.style.visibility : null;
  var _prevOpacity = _iconEl ? _iconEl.style.opacity : null;
  var _blendValPre = 'source-over';
  try {
    var _bsel = document.getElementById('iconBlend');
    _blendValPre = (_bsel && _bsel.value) ? _bsel.value : (_iconEl ? (getComputedStyle(_iconEl).mixBlendMode || 'source-over') : 'source-over');
    if (_blendValPre === 'normal') _blendValPre = 'source-over';
  } catch(e){ _blendValPre = 'source-over'; }
  // hide only when actual mixing is requested
  if (_iconEl && _blendValPre !== 'source-over'){ _iconEl.style.visibility = 'hidden'; }


  return html2canvas(canvasEl, { backgroundColor: null, scale: 2, useCORS: true })
    .then(function (baseCv) {
      try { document.body.classList.remove('exporting'); } catch (e) {}

      const out = document.createElement('canvas');
      out.width  = baseCv.width * 2;
      out.height = baseCv.height * 2;
      const ctx = out.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(baseCv, 0, 0, out.width, out.height);
      // PATCH: redraw icon with chosen blend mode (from UI) at export resolution
      try {
        var iconEl = document.getElementById('iconImg') || document.getElementById('icon') || (document.querySelector('#iconWrap img'));
        var canvasEl = document.getElementById('canvas');
        var iconOpacityVal = 1.0;
        try { iconOpacityVal = Math.max(0, Math.min(1, (+document.getElementById('iconOpacity').value||100)/100)); } catch(e){}
        var blendVal = 'source-over';
        try {
          var bsel = document.getElementById('iconBlend');
          blendVal = (bsel && bsel.value) ? bsel.value : (iconEl ? (getComputedStyle(iconEl).mixBlendMode || 'source-over') : 'source-over');
          if (blendVal === 'normal') blendVal = 'source-over';
        } catch(e){}
        // Only redraw when mixing is active; otherwise baseCv already has correct z-order
        if (iconEl && canvasEl && blendVal !== 'source-over'){
          drawIconMappedToOut(ctx, out, canvasEl, iconEl, iconOpacityVal, blendVal);
        }
      } catch(e){ console.warn('blend redraw failed', e); }
      // restore icon visibility (only matters if we hid earlier)
      if (_iconEl){ _iconEl.style.visibility = _prevVisibility || ''; _iconEl.style.opacity = _prevOpacity || ''; }


      var a = document.createElement('a');
      a.download = slug + (mimeType === 'image/webp' ? '.webp' : '.png');
      try { a.href = out.toDataURL(mimeType); } catch (e) { a.href = out.toDataURL('image/png'); }
      a.click();
    })
    .catch(function (e) {
      try { document.body.classList.remove('exporting'); } catch (_) {}
      console.warn('export x2 error', e);
    });
}




// === wiring кнопок экспорта ===
(function wireExportButtons() {
  const pngBtn   = document.getElementById('pngBtn');
  const webpBtn  = document.getElementById('webpBtn');
  const png2Btn  = document.getElementById('png2Btn');
  const webp2Btn = document.getElementById('webp2Btn');

  if (pngBtn)   pngBtn.addEventListener('click',  () => exportAs('image/png'));
  if (webpBtn)  webpBtn.addEventListener('click', () => exportAs('image/webp'));
  if (png2Btn)  png2Btn.addEventListener('click', () => exportAsX('image/png',  2));
  if (webp2Btn) webp2Btn.addEventListener('click',() => exportAsX('image/webp', 2));
})();

// <<< ВАЖНО: это должен быть самый последний блок файла >>>
})();

window.addEventListener('load', function(){ try{ updatePlate(); }catch(e){} });


// === v6.3.9: Title width baseline ("Заголовок категории" + 2 symbols) ====
(function(){
  function copyTextStyles(src, dst){
    var cs = getComputedStyle(src);
    var props = [
      'font','fontFamily','fontWeight','fontSize','fontStretch','fontStyle','lineHeight',
      'letterSpacing','wordSpacing','textTransform','textRendering','textIndent'
    ];
    for (var i=0;i<props.length;i++){ try{ dst.style[props[i]] = cs[props[i]]; }catch(e){} }
  }
  function applyTitleBaseline(){
    var title = document.getElementById('titleOut');
    var tin   = document.getElementById('titleIn');
    var desc  = document.getElementById('descOut');
    if (!title) return;
    var sample = "Заголовок категории";
    var extra = "мм"; // 2 символа по умолчанию
    try{
      var val = (tin && tin.value) ? String(tin.value) : "";
      var idx = val.indexOf(sample);
      if (idx !== -1){
        var tail = val.slice(idx + sample.length).trim();
        if (tail) extra = tail.slice(0,2);
      }
    }catch(e){}
    var probe = document.createElement('span');
    probe.textContent = sample + ' ' + extra;
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.whiteSpace = 'nowrap';
    copyTextStyles(title, probe);
    document.body.appendChild(probe);
    var w = Math.round(probe.getBoundingClientRect().width);
    document.body.removeChild(probe);
    if (!isFinite(w) || w < 360) w = 480; // анти-схлопывание
    title.style.maxWidth = w + 'px';
    if (desc) desc.style.maxWidth = w + 'px'; // описание следует ширине заголовка
  }
  function schedule(){ try{ requestAnimationFrame(applyTitleBaseline); }catch(e){ applyTitleBaseline(); } }
  window.addEventListener('load', schedule);
  document.addEventListener('DOMContentLoaded', schedule);
  if (document.fonts && document.fonts.ready){ document.fonts.ready.then(schedule).catch(function(){}); }
  var tin = document.getElementById('titleIn');
  if (tin){ tin.addEventListener('input', schedule); }
  // делаем доступным для ручного вызова при необходимости
  window._applyTitleBaseline = applyTitleBaseline;
})();


;(function(){
  function disableBlend(){
    try{
      var sel = document.getElementById('iconBlend');
      if (sel){
        // Force normal (source-over) and hide controls
        try{ sel.value = 'normal'; }catch(e){}
        sel.disabled = true;
        sel.style.display = 'none';
        var lab = document.querySelector('label[for="iconBlend"]');
        if (lab) lab.style.display = 'none';
      }
      // Ensure runtime nodes are normal-blended
      try{
        var wrap = document.getElementById('iconWrap');
        if (wrap){ wrap.style.mixBlendMode = 'normal'; }
        var img = document.getElementById('iconImg');
        if (img){ img.style.mixBlendMode = 'normal'; }
      }catch(e){}
    }catch(e){}
  }
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', disableBlend);
  } else {
    disableBlend();
  }
})();

