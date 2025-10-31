
// === I18N (RU / UK / EN) ===
(function(){
  const LS_KEY = 'cg_lang';

  const T = {
    ru: {
      h_colors: "Цвета",
      h_text_title_desc: "Текст — заголовок и описание",
      h_text_slug_brand: "Текст — slug и бренд",
      h_text_params: "Параметры текста",
      h_icon: "Иконка",
      h_plate: "Плашка",
      h_presets_export: "Пресеты и экспорт",

      lbl_title: "Заголовок",
      lbl_desc: "Описание",
      lbl_slug: "Slug",
      lbl_brand: "Надпись (бренд)",
      lbl_txt_scale: "Масштаб",
      lbl_txt_opacity: "Непрозрачность",
      lbl_txt_x: "Смещение X",
      lbl_txt_y: "Смещение Y",

      lbl_icon_upload: "Загрузить иконку",
      lbl_icon_scale: "Масштаб",
      lbl_icon_opacity: "Непрозрачность",
      lbl_icon_x: "Смещение X",
      lbl_icon_y: "Смещение Y",

      lbl_plate_width: "Ширина",
      lbl_plate_round: "Скругление",
      lbl_plate_blur: "Размытие",
      lbl_plate_opacity: "Непрозрачность",

      color_bg1: "Фон 1",
      color_bg2: "Фон 2",
      color_bg3: "Фон 3",
      color_text: "Текст",
      color_secondary: "Вторичный",
      color_a1: "Акцент 1",
      color_a2: "Акцент 2",
      color_brand: "Бренд",

      btn_png: "Скачать PNG",
      btn_webp: "Скачать WEBP",
      btn_png2: "Скачать PNG x2",
      btn_webp2: "Скачать WEBP x2",
      btn_icon_clear: "Удалить файл",

      default_title: "Заголовок категории",
      default_desc: "Короткое описание: о чем эта категория и что пользователь найдет внутри",
      default_slug: "category-slug",
      default_brand: "ваш-сайт.com • раздел / категория",
      pill_slug: "category-slug"
    },
    uk: {
      h_colors: "Кольори",
      h_text_title_desc: "Текст — заголовок і опис",
      h_text_slug_brand: "Текст — slug і бренд",
      h_text_params: "Параметри тексту",
      h_icon: "Іконка",
      h_plate: "Плашка",
      h_presets_export: "Пресети та експорт",

      lbl_title: "Заголовок",
      lbl_desc: "Опис",
      lbl_slug: "Slug",
      lbl_brand: "Напис (бренд)",
      lbl_txt_scale: "Масштаб",
      lbl_txt_opacity: "Непрозорість",
      lbl_txt_x: "Зміщення X",
      lbl_txt_y: "Зміщення Y",

      lbl_icon_upload: "Завантажити іконку",
      lbl_icon_scale: "Масштаб",
      lbl_icon_opacity: "Непрозорість",
      lbl_icon_x: "Зміщення X",
      lbl_icon_y: "Зміщення Y",

      lbl_plate_width: "Ширина",
      lbl_plate_round: "Скруглення",
      lbl_plate_blur: "Розмиття",
      lbl_plate_opacity: "Непрозорість",

      color_bg1: "Фон 1",
      color_bg2: "Фон 2",
      color_bg3: "Фон 3",
      color_text: "Текст",
      color_secondary: "Вторинний",
      color_a1: "Акцент 1",
      color_a2: "Акцент 2",
      color_brand: "Бренд",

      btn_png: "Завантажити PNG",
      btn_webp: "Завантажити WEBP",
      btn_png2: "Завантажити PNG x2",
      btn_webp2: "Завантажити WEBP x2",
      btn_icon_clear: "Видалити файл",

      default_title: "Заголовок категорії",
      default_desc: "Короткий опис: про що ця категорія і що користувач знайде всередині",
      default_slug: "category-slug",
      default_brand: "ваш-сайт.com • розділ / категорія",
      pill_slug: "category-slug"
    },
    en: {
      h_colors: "Colors",
      h_text_title_desc: "Text — title and description",
      h_text_slug_brand: "Text — slug and brand",
      h_text_params: "Text settings",
      h_icon: "Icon",
      h_plate: "Plate",
      h_presets_export: "Presets & export",

      lbl_title: "Title",
      lbl_desc: "Description",
      lbl_slug: "Slug",
      lbl_brand: "Brand text",
      lbl_txt_scale: "Scale",
      lbl_txt_opacity: "Opacity",
      lbl_txt_x: "Offset X",
      lbl_txt_y: "Offset Y",

      lbl_icon_upload: "Upload icon",
      lbl_icon_scale: "Scale",
      lbl_icon_opacity: "Opacity",
      lbl_icon_x: "Offset X",
      lbl_icon_y: "Offset Y",

      lbl_plate_width: "Width",
      lbl_plate_round: "Corner radius",
      lbl_plate_blur: "Blur",
      lbl_plate_opacity: "Opacity",

      color_bg1: "BG 1",
      color_bg2: "BG 2",
      color_bg3: "BG 3",
      color_text: "Text",
      color_secondary: "Secondary",
      color_a1: "Accent 1",
      color_a2: "Accent 2",
      color_brand: "Brand",

      btn_png: "Download PNG",
      btn_webp: "Download WEBP",
      btn_png2: "Download PNG x2",
      btn_webp2: "Download WEBP x2",
      btn_icon_clear: "Remove file",

      default_title: "Category title",
      default_desc: "Short description: what this category is about and what the user will find inside",
      default_slug: "category-slug",
      default_brand: "your-site.com • section / category",
      pill_slug: "category-slug"
    }
  };

  
  function collectDomDefaults(){
    var vals = [];
    ['titleIn','descIn','slugIn','brandIn','titleOut','descOut','brandOut','slugOut'].forEach(function(id){
      var el = document.getElementById(id);
      if (!el) return;
      ['data-default-ru','data-default-uk','data-default-en'].forEach(function(attr){
        var v = el.getAttribute && el.getAttribute(attr);
        if (v && v.trim()) vals.push(v.trim());
      });
    });
    // RU 
    vals.push('Короткое описание: о чем эта категория и что пользователь найдет внутри');
    vals.push('Короткое описание: о чём эта категория и что пользователь найдёт внутри');
    return new Set(vals);
  }

  function getSavedLang(){
    try{ return localStorage.getItem(LS_KEY) || ''; }catch(e){ return ''; }
  }
  function saveLang(lang){
    try{ localStorage.setItem(LS_KEY, lang); }catch(e){}
  }
  function detectLang(){
    var s = (navigator.language || navigator.userLanguage || 'ru').toLowerCase();
    if (s.startsWith('en')) return 'en';
    if (s.startsWith('uk') || s.startsWith('ua')) return 'uk';
    return 'ru';
  }

  function setText(node, key, lang){
    if (!node || !key) return;
    var dict = T[lang] || T.ru;
    var v = dict[key] || key;
    node.textContent = v;
  }

  function applyI18N(lang){
    var dict = T[lang] || T.ru;
    // h3 
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      setText(el, key, lang);
    });

    // Default values 
    var titleIn = document.getElementById('titleIn');
    var descIn  = document.getElementById('descIn');
    var slugIn  = document.getElementById('slugIn');
    var brandIn = document.getElementById('brandIn');

    var knownDefaults = collectDomDefaults();
    ; (function(){ var _tmp = new Set([
      T.ru.default_title, T.uk.default_title, T.en.default_title,
      T.ru.default_desc,  T.uk.default_desc,  T.en.default_desc,
      T.ru.default_slug,  T.uk.default_slug,  T.en.default_slug,
      T.ru.default_brand, T.uk.default_brand, T.en.default_brand
    ]); _tmp.forEach(function(v){ knownDefaults.add(v); }); })();

    function maybeSet(el, newVal){
      if (!el) return;
      var cur = (el.value || '').trim();
      if (!cur || knownDefaults.has(cur)){ el.value = newVal; }
    }

    maybeSet(titleIn, dict.default_title);
    maybeSet(descIn,  dict.default_desc);
    maybeSet(slugIn,  dict.default_slug);
    maybeSet(brandIn, dict.default_brand);

    function maybeSetOut(id, newVal){
      var out = document.getElementById(id);
      if (!out) return;
      var t = (out.textContent || '').trim();
      if (!t || knownDefaults.has(t)){ out.textContent = newVal; }
    }
    maybeSetOut('titleOut', dict.default_title);
    maybeSetOut('descOut',  dict.default_desc);
    maybeSetOut('brandOut', dict.default_brand);
    maybeSetOut('slugOut',  dict.pill_slug);
  }

  function initLang(){
    var sel = document.getElementById('langSelect');
    var lang = getSavedLang() || detectLang();
    if (sel){
      sel.value = (lang in T) ? lang : 'ru';
      sel.addEventListener('change', function(){
        var v = sel.value;
        applyI18N(v);
        saveLang(v);
        try{ if (typeof window.syncText === 'function') window.syncText(); }catch(e){}
      });
    }
    applyI18N(sel ? sel.value : lang);
    try{ if (typeof window.syncText === 'function') window.syncText(); }catch(e){}
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  window.addEventListener('load', function(){
    var sel = document.getElementById('langSelect');
    var v = sel ? sel.value : (getSavedLang() || detectLang());
    applyI18N(v);
    try{ if (typeof window.syncText === 'function') window.syncText(); }catch(e){}
    setTimeout(function(){
      var sel2 = document.getElementById('langSelect');
      var v2 = sel2 ? sel2.value : (getSavedLang() || detectLang());
      applyI18N(v2);
      try{ if (typeof window.syncText === 'function') window.syncText(); }catch(e){}
    }, 0);
  });

  }
})();
// === END I18N ===


(function(){
  document.addEventListener('DOMContentLoaded', function(){ try{ updatePlate(); }catch(e){} });
  const $ = id => document.getElementById(id);
  const setVar = (k,v)=> $('canvas').style.setProperty(k,v);

  const platePath = $('platePath'), blurNode=$('blurNode'), g1=$('g1'), g2=$('g2');

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
    const widthPct = (plateWidth && plateWidth.value!=null) ? 100 - (+plateWidth.value||0) : 35;
    const pw = W * widthPct/100;
    const right = W;
    const epsilon = Math.round((+blur.value||0)*4 + 20);
    const rightPlus = right + epsilon;
    const left = right - pw;

    const rMax = Math.min(H/2, pw/2);
    const r = Math.max(0, Math.min(rMax, (+round.value/100)*rMax));

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
      const w = Math.max(0, Math.min(100, widthPct));
      const thin = Math.max(0, (10 - w)) / 10;
      const factor = 1 + thin * 3.0;
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
    let w = Math.round(tRect.width + pad);
    const baseline = Math.max(parseFloat(title.style.maxWidth)||0, 480);
    if (!isFinite(w) || w < baseline) w = baseline; // анти-схлопывание (костыль)
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
//рисуем иконку, в рот ей ноги
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
  var _iconEl = document.getElementById('iconImg') || document.getElementById('icon') || (document.querySelector('#iconWrap img'));
  var _prevVisibility = _iconEl ? _iconEl.style.visibility : null;
  var _prevOpacity = _iconEl ? _iconEl.style.opacity : null;
  var _blendValPre = 'source-over';
  try {
    var _bsel = document.getElementById('iconBlend');
    _blendValPre = (_bsel && _bsel.value) ? _bsel.value : (_iconEl ? (getComputedStyle(_iconEl).mixBlendMode || 'source-over') : 'source-over');
    if (_blendValPre === 'normal') _blendValPre = 'source-over';
  } catch(e){ _blendValPre = 'source-over'; }
  if (_iconEl && _blendValPre !== 'source-over'){ _iconEl.style.visibility = 'hidden'; }


  return html2canvas(canvasEl, { backgroundColor: null, scale: 2, useCORS: true })
    .then(function (baseCv) {
      try { document.body.classList.remove('exporting'); } catch (e) {}

      const out = document.createElement('canvas');
      out.width  = baseCv.width;
      out.height = baseCv.height;
      const ctx = out.getContext('2d');
      ctx.drawImage(baseCv, 0, 0);
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
        if (iconEl && canvasEl && blendVal !== 'source-over'){
          drawIconMappedToOut(ctx, out, canvasEl, iconEl, iconOpacityVal, blendVal);
        }
      } catch(e){ console.warn('blend redraw failed', e); }
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
  var _iconEl = document.getElementById('iconImg') || document.getElementById('icon') || (document.querySelector('#iconWrap img'));
  var _prevVisibility = _iconEl ? _iconEl.style.visibility : null;
  var _prevOpacity = _iconEl ? _iconEl.style.opacity : null;
  var _blendValPre = 'source-over';
  try {
    var _bsel = document.getElementById('iconBlend');
    _blendValPre = (_bsel && _bsel.value) ? _bsel.value : (_iconEl ? (getComputedStyle(_iconEl).mixBlendMode || 'source-over') : 'source-over');
    if (_blendValPre === 'normal') _blendValPre = 'source-over';
  } catch(e){ _blendValPre = 'source-over'; }
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
        if (iconEl && canvasEl && blendVal !== 'source-over'){
          drawIconMappedToOut(ctx, out, canvasEl, iconEl, iconOpacityVal, blendVal);
        }
      } catch(e){ console.warn('blend redraw failed', e); }
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




// === кнопок экспорта ===
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

})();

window.addEventListener('load', function(){ try{ updatePlate(); }catch(e){} });


// Заголовок категории + 2 (снова костыль, но работает)
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
    var extra = "мм"; // можно добавить, для увеличения длины заголовка
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
    if (!isFinite(w) || w < 360) w = 480; // анти-схлопывание (костыль)
    title.style.maxWidth = w + 'px';
    if (desc) desc.style.maxWidth = w + 'px';
  }
  function schedule(){ try{ requestAnimationFrame(applyTitleBaseline); }catch(e){ applyTitleBaseline(); } }
  window.addEventListener('load', schedule);
  document.addEventListener('DOMContentLoaded', schedule);
  if (document.fonts && document.fonts.ready){ document.fonts.ready.then(schedule).catch(function(){}); }
  var tin = document.getElementById('titleIn');
  if (tin){ tin.addEventListener('input', schedule); }
  window._applyTitleBaseline = applyTitleBaseline;
})();


;(function(){
  function disableBlend(){
    try{
      var sel = document.getElementById('iconBlend');
      if (sel){
        try{ sel.value = 'normal'; }catch(e){}
        sel.disabled = true;
        sel.style.display = 'none';
        var lab = document.querySelector('label[for="iconBlend"]');
        if (lab) lab.style.display = 'none';
      }
      // в душе не ебу как правильно
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

