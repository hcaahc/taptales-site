/* Taptales Studio website — content lives in /content (edit via Pages CMS). */
(() => {
'use strict';
/* ---------- artwork (SVG, theme-aware via classes) ---------- */
const ART = {
  frog:`<svg viewBox="0 0 200 200"><ellipse cx="100" cy="172" rx="78" ry="16" class="f-sun"/><ellipse cx="100" cy="118" rx="62" ry="52" class="f-mint"/><circle cx="70" cy="70" r="24" class="f-mint"/><circle cx="130" cy="70" r="24" class="f-mint"/><circle cx="70" cy="68" r="15" class="f-white"/><circle cx="130" cy="68" r="15" class="f-white"/><circle cx="73" cy="70" r="7" fill="#1D1842"/><circle cx="127" cy="70" r="7" fill="#1D1842"/><path d="M72 120q28 22 56 0" fill="none" stroke="#1D1842" stroke-width="6" stroke-linecap="round"/><circle cx="62" cy="112" r="7" class="f-pink" opacity=".8"/><circle cx="138" cy="112" r="7" class="f-pink" opacity=".8"/><path d="M60 46 100 22 140 46z" class="f-tomato"/><rect x="56" y="44" width="88" height="10" rx="5" class="f-tomato"/></svg>`,
  cake:`<svg viewBox="0 0 200 200"><rect x="30" y="130" width="140" height="44" rx="10" class="f-sky"/><rect x="46" y="92" width="108" height="44" rx="10" class="f-sun"/><rect x="62" y="56" width="76" height="40" rx="10" class="f-mint"/><path d="M62 70q12 10 19 0t19 0 19 0 19 0" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/><circle cx="100" cy="42" r="14" class="f-tomato"/><path d="M100 28q6-12 16-12" fill="none" stroke="#1D1842" stroke-width="4" stroke-linecap="round"/><circle cx="84" cy="150" r="5" fill="#1D1842"/><circle cx="116" cy="150" r="5" fill="#1D1842"/><path d="M90 160q10 8 20 0" fill="none" stroke="#1D1842" stroke-width="4" stroke-linecap="round"/></svg>`,
  ship:`<svg viewBox="0 0 200 200"><path d="M96 30v100" stroke="#1D1842" stroke-width="7" stroke-linecap="round"/><path d="M102 38q46 30 4 76z" class="f-white"/><path d="M90 52q-34 26-4 58z" class="f-sun"/><path d="M96 30l26 8-26 8z" class="f-pink"/><path d="M36 128h128l-18 34H54z" fill="#1D1842"/><circle cx="76" cy="143" r="6" class="f-sun"/><circle cx="100" cy="143" r="6" class="f-sun"/><circle cx="124" cy="143" r="6" class="f-sun"/><path d="M10 170q22-14 45 0t45 0 45 0 45 0v22H10z" class="f-sky"/></svg>`,
  book:`<svg viewBox="0 0 200 200"><path d="M100 70q-34-18-74-10v100q40-8 74 10z" class="f-white"/><path d="M100 70q34-18 74-10v100q-40-8-74 10z" class="f-pink"/><path d="M100 70v100" stroke="#1D1842" stroke-width="5"/><path d="M40 86q22-4 46 4M40 104q22-4 46 4M40 122q22-4 46 4" stroke="#1D1842" stroke-width="4" stroke-linecap="round" opacity=".35" fill="none"/><circle cx="140" cy="38" r="24" class="f-sun"/><circle cx="128" cy="32" r="22" fill="var(--accent-bg,#FFC22E)" class="moon-cut"/><path d="M58 26l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" class="f-white"/><path d="M176 98l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" class="f-white"/><circle cx="138" cy="118" r="16" class="f-sky"/><path d="M128 118h20M138 102q8 16 0 32M138 102q-8 16 0 32" stroke="#fff" stroke-width="3" fill="none"/></svg>`,
  plant:`<svg viewBox="0 0 200 200"><path d="M58 120h84l-10 58H68z" class="f-tomato"/><rect x="50" y="110" width="100" height="18" rx="8" class="f-tomato"/><path d="M100 112V60" stroke="#1D1842" stroke-width="6" stroke-linecap="round"/><path d="M100 84q-44 2-48-34 40-4 48 34z" class="f-sun"/><path d="M100 70q40-6 50-42-44 0-50 42z" class="f-white"/><circle cx="100" cy="46" r="14" class="f-pink"/><circle cx="86" cy="150" r="5" fill="#1D1842"/><circle cx="114" cy="150" r="5" fill="#1D1842"/><path d="M92 160q8 7 16 0" fill="none" stroke="#1D1842" stroke-width="4" stroke-linecap="round"/></svg>`,
  star:`<svg viewBox="0 0 200 200"><path d="M100 18l22 50 54 5-41 36 12 53-47-28-47 28 12-53-41-36 54-5z" class="f-sun" stroke="#1D1842" stroke-width="6" stroke-linejoin="round"/><circle cx="84" cy="96" r="7" fill="#1D1842"/><circle cx="116" cy="96" r="7" fill="#1D1842"/><path d="M86 114q14 12 28 0" fill="none" stroke="#1D1842" stroke-width="5" stroke-linecap="round"/><circle cx="72" cy="110" r="6" class="f-pink"/><circle cx="128" cy="110" r="6" class="f-pink"/><rect x="18" y="168" width="164" height="22" rx="6" fill="#1D1842"/><g class="f-white"><rect x="28" y="174" width="12" height="10" rx="2"/><rect x="52" y="174" width="12" height="10" rx="2"/><rect x="76" y="174" width="12" height="10" rx="2"/><rect x="100" y="174" width="12" height="10" rx="2"/><rect x="124" y="174" width="12" height="10" rx="2"/><rect x="148" y="174" width="12" height="10" rx="2"/></g></svg>`
};
const bgShapes = seed => {
  const r = n => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280 * n; };
  let s = '';
  for (let i = 0; i < 9; i++) {
    const x = r(100), y = r(100), z = 3 + r(8), o = .18 + r(.22);
    s += i % 3 === 0 ? `<circle cx="${x}" cy="${y}" r="${z}" fill="#fff" opacity="${o}"/>`
       : i % 3 === 1 ? `<rect x="${x}" y="${y}" width="${z*1.6}" height="${z*1.6}" rx="2" fill="#fff" opacity="${o}" transform="rotate(${r(90)} ${x} ${y})"/>`
       : `<path d="M${x} ${y-z}l${z*.9} ${z*1.6}h-${z*1.8}z" fill="#fff" opacity="${o}"/>`;
  }
  return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">${s}</svg>`;
};
/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const getJSON = url => fetch(url, {cache: 'no-cache'}).then(r => { if (!r.ok) throw new Error(url + ' ' + r.status); return r.json(); });
const TYPES = {game: 'Game', app: 'App', media: 'Media'};
const ACCENT_MAP = {purple: 'purple', violet: 'violet', magenta: 'magenta', yellow: 'yellow', sky: 'purple', pink: 'violet', tomato: 'magenta', sun: 'yellow', mint: 'violet'};
const accentName = (p, i = 0) => ACCENT_MAP[p.accent] || ['purple', 'magenta', 'yellow', 'violet'][i % 4];
const accentVar = p => '--' + accentName(p);
const strip = svg => svg.replace(/^<svg[^>]*>|<\/svg>$/g, '');
const artFor = p => ART[p.illustration] || ART.star;

/* ---------- platform buttons ---------- */
const PLATFORM = {
  'app-store':   {pre: 'Download on the', label: 'App Store',   color: '--sky',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 3v12m0 0-5-5m5 5 5-5M5 20h14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'},
  'google-play': {pre: 'Get it on', label: 'Google Play', color: '--mint',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M6 3.5v17l14-8.5z" fill="currentColor"/></svg>'},
  'steam':       {pre: 'Get it on', label: 'Steam', color: '--sky',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="15" cy="10" r="2.5" fill="currentColor"/><path d="M5 15l6 3" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>'},
  'youtube':     {pre: 'Watch on', label: 'YouTube', color: '--tomato',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/><path d="M10 9v6l5-3z" fill="var(--ink)"/></svg>'},
  'tiktok':      {pre: 'Watch on', label: 'TikTok', color: '--pink',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 21a4 4 0 1 1 0-8v3a1 1 0 1 0 1 1V3h3a4 4 0 0 0 4 4v3a7 7 0 0 1-4-1.2V17a4 4 0 0 1-4 4z" fill="currentColor"/></svg>'},
  'facebook':    {pre: 'Follow on', label: 'Facebook', color: '--sun',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M14 8h3V4.5h-3a4 4 0 0 0-4 4V11H7.5v3.5H10V21h3.5v-6.5H16l.7-3.5h-3.2V9a1 1 0 0 1 .5-1z" fill="currentColor"/></svg>'},
  'instagram':   {pre: 'Follow on', label: 'Instagram', color: '--sky',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="16.8" cy="7.3" r="1.2" fill="currentColor"/></svg>'},
  'website':     {pre: 'Visit', label: 'Website', color: '--mint',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" fill="none" stroke="currentColor" stroke-width="2"/></svg>'}
};
const plat = k => PLATFORM[k] || PLATFORM.website;

/* ---------- generated placeholder art (used when no image is uploaded) ---------- */
const iconSvg = p => `<svg viewBox="0 0 100 100"><rect width="100" height="100" style="fill:var(${accentVar(p)})"/><g transform="translate(10 10) scale(.4)">${strip(artFor(p))}</g></svg>`;
const shotSvg = (p, i) => {
  const inner = strip(artFor(p)), acc = accentVar(p);
  if (p.shape === 'landscape') {
    return `<svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice"><rect width="160" height="100" style="fill:var(${['--sky','--pink','--mint','--sun'][i%4]})"/><g transform="translate(50 8) scale(.36)">${inner}</g><circle cx="80" cy="46" r="13" fill="#1D1842" opacity=".75"/><path d="M76 39v14l11-7z" fill="#fff"/><rect x="8" y="88" width="144" height="3" rx="1.5" fill="#fff" opacity=".5"/><rect x="8" y="88" width="${40+i*25}" height="3" rx="1.5" fill="#fff"/></svg>`;
  }
  const layouts = [
    `<rect width="90" height="180" style="fill:var(${acc})"/><g transform="translate(15 52) scale(.3)">${inner}</g><rect x="8" y="12" width="30" height="8" rx="4" fill="#fff" opacity=".8"/><rect x="62" y="12" width="20" height="8" rx="4" fill="#1D1842" opacity=".7"/>`,
    `<rect width="90" height="180" style="fill:var(--surface)"/><rect width="90" height="46" style="fill:var(${acc})"/>${[0,1,2,3,4,5].map(k=>`<rect x="${10+(k%2)*38}" y="${56+Math.floor(k/2)*38}" width="32" height="32" rx="8" style="fill:var(${['--sun','--pink','--mint','--sky','--tomato','--sun'][k]})"/>`).join('')}`,
    `<rect width="90" height="180" style="fill:var(--surface)"/><g transform="translate(25 14) scale(.2)">${inner}</g>${[0,1,2,3].map(k=>`<rect x="10" y="${68+k*24}" width="70" height="16" rx="6" style="fill:var(--bg)"/><rect x="14" y="${72+k*24}" width="8" height="8" rx="3" style="fill:var(${acc})"/><rect x="26" y="${74+k*24}" width="${24+k*8}" height="4" rx="2" style="fill:var(--muted)" opacity=".6"/>`).join('')}`,
    `<rect width="90" height="180" style="fill:var(--ink)"/><g transform="translate(20 30) scale(.25)">${inner}</g><rect x="14" y="100" width="62" height="14" rx="7" style="fill:var(${acc})"/><rect x="22" y="122" width="46" height="6" rx="3" fill="#fff" opacity=".5"/>`
  ];
  return `<svg viewBox="0 0 90 180" preserveAspectRatio="xMidYMid slice">${layouts[i%4]}</svg>`;
};

/* ---------- games: icon-led cards (key art optional) ---------- */
const track = $('gTrack');
function renderProducts(list) {
  const items = (Array.isArray(list) ? list : []).filter(p => p && p.name);
  const count = $('gamesCount');
  if (!items.length) { $('productsLoading').textContent = 'Our first games are on the way.'; return; }
  if (count) count.textContent = items.length === 1 ? 'Our first game, with more on the way.' : `${items.length} games so far, with more on the way.`;
  track.dataset.count = items.length;
  track.innerHTML = items.map((p, i) => {
    const acc = accentName(p, i);
    const links = (p.links || []).filter(l => l && l.url);
    const text = p.description || p.tagline || '';
    return `<article class="gcard t-${acc}">
      ${p.cover ? `<div class="gcard-cover"><img src="${esc(p.cover)}" alt="" loading="lazy"></div>` : ''}
      <span class="gcard-icon">${p.icon ? `<img src="${esc(p.icon)}" alt="${esc(p.name)} icon" loading="lazy">` : iconSvg({...p, accent: acc})}</span>
      <div class="gcard-body">
        ${TYPES[p.type] ? `<span class="gcard-kind">${TYPES[p.type]}</span>` : ''}
        <h3>${esc(p.name)}</h3>
        ${text ? `<p>${esc(text)}</p>` : ''}
      </div>
      ${links.length ? `<div class="gcard-links">${links.map(l => { const k = plat(l.platform); return `<a href="${esc(l.url)}" target="_blank" rel="noopener">${k.icon}<span><small>${k.pre}</small>${k.label}</span></a>`; }).join('')}</div>` : ''}
    </article>`;
  }).join('') + `<a class="feat-soon" href="#follow"><span class="soon-dots" aria-hidden="true"><i></i><i></i><i></i></span><span><b>Next game in the works</b><small>Follow us to hear about it first</small></span></a>`;
}

/* ---------- site settings (email, social links) ---------- */
function renderSite(site) {
  if (site.email) $('email').textContent = site.email;
  const socials = (site.socials || []).filter(s => s && s.url);
  $('socials').innerHTML = socials.map(s => { const k = plat(s.platform); return `<a class="social" href="${esc(s.url)}" target="_blank" rel="noopener"><span class="si" style="background:var(${k.color})">${k.icon}</span><span><b>${esc(s.label || k.label)}</b>${s.subtitle ? `<small>${esc(s.subtitle)}</small>` : ''}</span></a>`; }).join('');
}

/* ---------- tiny markdown renderer for legal pages ---------- */
function inline(t) {
  return esc(t)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+|#[\w-]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\[([^\]]+)\](?!\()/g, '<mark class="ph">[$1]</mark>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}
function markdown(md) {
  const lines = String(md || '').replace(/\r/g, '').split('\n');
  let html = '', para = [], list = null;
  const flushP = () => { if (para.length) { html += `<p>${inline(para.join(' '))}</p>`; para = []; } };
  const flushL = () => { if (list) { html += `<${list.tag}>${list.items.map(x => `<li>${inline(x)}</li>`).join('')}</${list.tag}>`; list = null; } };
  for (const raw of lines) {
    const line = raw.trim();
    let m;
    if (!line) { flushP(); flushL(); continue; }
    if ((m = line.match(/^(#{1,4})\s+(.*)$/))) { flushP(); flushL(); const n = Math.max(2, m[1].length); html += `<h${n}>${inline(m[2])}</h${n}>`; continue; }
    if ((m = line.match(/^[-*+]\s+(.*)$/)) || (m = line.match(/^\d+[.)]\s+(.*)$/))) {
      flushP(); const tag = /^\d/.test(line) ? 'ol' : 'ul';
      if (!list || list.tag !== tag) { flushL(); list = {tag, items: []}; }
      list.items.push(m[1]); continue;
    }
    flushL(); para.push(line);
  }
  flushP(); flushL();
  return html;
}
function renderLegal(id, doc) {
  const page = $(id), body = page.querySelector('[data-f="body"]'), toc = page.querySelector('.toc');
  if (doc.title) page.querySelector('[data-f="title"]').textContent = doc.title;
  if (doc.updated) {
    const d = new Date(doc.updated + 'T00:00:00');
    page.querySelector('[data-f="updated"]').textContent = 'Last updated: ' + (isNaN(d) ? doc.updated : d.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}));
  }
  const paras = String(doc.intro || '').split(/\n\s*\n/).filter(x => x.trim());
  page.querySelector('[data-f="intro"]').innerHTML = paras.map((t, k) => `<p class="lead"${k ? ' style="margin-top:12px;font-size:17px;color:var(--muted)"' : ''}>${inline(t.trim())}</p>`).join('');
  // group each h2 and what follows into a numbered section
  const tmp = document.createElement('div'); tmp.innerHTML = markdown(doc.body);
  body.innerHTML = ''; let sec = null, n = 0;
  [...tmp.childNodes].forEach(node => {
    if (node.tagName === 'H2') {
      sec = document.createElement('section'); n++;
      node.insertAdjacentHTML('afterbegin', `<span class="no">${String(n).padStart(2,'0')}</span>`);
      body.appendChild(sec);
    } else if (!sec) { sec = document.createElement('section'); body.appendChild(sec); }
    sec.appendChild(node);
  });
  toc.querySelectorAll('button').forEach(b => b.remove());
  body.querySelectorAll('section').forEach(s => {
    const h = s.querySelector('h2'); if (!h) return;
    const b = document.createElement('button'); b.type = 'button';
    b.textContent = h.textContent.replace(/^(\d+)/, '$1 · ');
    b.addEventListener('click', () => s.scrollIntoView({behavior: reduce ? 'auto' : 'smooth'}));
    toc.appendChild(b);
  });
}
/* ---------- bouncy headline ---------- */
const headline = $('headline');
let li = 0;
headline.querySelectorAll('.w').forEach(w => {
  const text = w.textContent;
  w.setAttribute('aria-hidden', 'true');
  w.innerHTML = [...text].map(c => `<span class="ch" style="--i:${li++}">${esc(c)}</span>`).join('');
});
headline.querySelectorAll('.ch').forEach(ch => ch.addEventListener('animationend', e => {
  if (e.animationName === 'pop' || e.animationName === 'jump') ch.classList.add('done');
}));
function jump() {
  if (reduce) return;
  headline.querySelectorAll('.ch').forEach(ch => { ch.classList.remove('done', 'again'); void ch.offsetWidth; ch.classList.add('again'); });
}
headline.addEventListener('click', jump);
headline.closest('.hero').classList.add('ready');
// gentle parallax: sharp (near) shapes move more than blurred (far) ones
if (!reduce && matchMedia('(hover:hover)').matches) {
  const hero = $('hero'), decos = [...hero.querySelectorAll('.deco')], depth = [28, 18, 8, 22];
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    decos.forEach((d, k) => { d.style.setProperty('--px', `${(-x * depth[k]).toFixed(1)}px`); d.style.setProperty('--py', `${(-y * depth[k]).toFixed(1)}px`); });
  });
  hero.addEventListener('pointerleave', () => decos.forEach(d => { d.style.removeProperty('--px'); d.style.removeProperty('--py'); }));
}

/* ---------- copy email ---------- */
const copyBtn = $('copyBtn'), email = $('email');
copyBtn.addEventListener('click', () => {
  const done = () => { copyBtn.textContent = 'Copied'; setTimeout(() => copyBtn.textContent = 'Copy email', 1800); };
  const sel = () => { const s = getSelection(), r = document.createRange(); r.selectNodeContents(email); s.removeAllRanges(); s.addRange(r); copyBtn.textContent = 'Selected, press Ctrl/⌘+C'; };
  try { navigator.clipboard.writeText(email.textContent).then(done, sel); } catch { sel(); }
});
$('year').textContent = new Date().getFullYear();

/* ---------- legal pages router (links for apps: https://taptales.net/#terms, #privacy, #policy) ---------- */
const LEGAL = ['terms', 'privacy', 'policy'];
const TITLES = {terms: 'Terms & Conditions', privacy: 'Privacy Policy', policy: 'Product & Service Policy'};
const loaded = {};
const mainEl = $('top');
let lastView = 'home';
function loadLegal(id) {
  if (loaded[id]) return;
  loaded[id] = getJSON(`/${id}.json`)
    .then(doc => renderLegal(id, doc))
    .catch(() => { $(id).querySelector('[data-f="body"]').innerHTML = `<p>This page couldn't be loaded. Please try again, or email ${esc(email.textContent)}.</p>`; loaded[id] = null; });
}
function route() {
  const h = location.hash.slice(1);
  const view = LEGAL.includes(h) ? h : 'home';
  LEGAL.forEach(id => $(id).hidden = id !== view);
  mainEl.hidden = view !== 'home';
  if (view !== 'home') {
    loadLegal(view);
    if (lastView !== view) scrollTo(0, 0);
    document.title = TITLES[view] + ' · Taptales Studio';
  } else {
    document.title = 'Taptales Studio';
    if (lastView !== 'home') { const t = h && document.getElementById(h); t ? t.scrollIntoView() : scrollTo(0, 0); }
  }
  lastView = view;
}
addEventListener('hashchange', route);
route();

/* ---------- load content ---------- */
getJSON('/products.json').then(renderProducts)
  .catch(() => { const l = $('productsLoading'); if (l) l.textContent = "Games couldn't be loaded. Please refresh the page."; });
getJSON('/site.json').then(renderSite).catch(() => {});
})();
