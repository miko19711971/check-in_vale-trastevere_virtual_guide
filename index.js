// Check-in — Viale Trastevere 108 (multilingual static guide)
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // serve le immagini dalla root del repo

// -------- TRANSLATIONS --------
const T = {
  en: {
    langName: 'English',
    title: 'Check-in Guide — Viale Trastevere 108',
    addressLine: 'Address: Viale Trastevere 108, Rome • Intercom: B-9 “Chiani”',
    navHelp: 'Need help?',
    call: 'Call or WhatsApp',
    phone: '+39 335 524 5756',

    s1_t: 'Arriving at the Building',
    s1_p: 'When you arrive at the entrance shown below, you’ve reached your destination.',
    s1_cap: 'Building entrance / passageway to the courtyard.',

    s2_t: 'Using the Intercom',
    s2_p1: 'Press B-9 (Chiani) on the intercom panel, then call me at',
    s2_p2: 'Wait for the click to unlock the gate.',
    s2_cap: 'Intercom panel — press B-9 (Chiani).',

    s3_t: 'Go Through the Passage',
    s3_p: 'Walk straight through the passage to the inner gate.',
    s3_cap: 'Walk straight to the inner gate.',

    s4_t: 'Reaching the Apartment',
    s4_p_top: 'Take the stairs/elevator to the 4th floor.',
    s4_p_call: 'Call me when you are in front of the door and I will open it for you:',
    s4_cap: 'Apartment door.',

    footer: 'niceflatinrome.com • Quick visual check-in guide'
  },

  es: {
    langName: 'Español',
    title: 'Guía de Check-in — Viale Trastevere 108',
    addressLine: 'Dirección: Viale Trastevere 108, Roma • Portero: B-9 “Chiani”',
    navHelp: '¿Necesitas ayuda?',
    call: 'Llamar o WhatsApp',
    phone: '+39 335 524 5756',

    s1_t: 'Llegada al edificio',
    s1_p: 'Cuando veas la entrada de abajo, has llegado a tu destino.',
    s1_cap: 'Entrada del edificio / pasillo hacia el patio.',

    s2_t: 'Uso del portero',
    s2_p1: 'Pulsa B-9 (Chiani) en el panel y luego llámame al',
    s2_p2: 'Espera el “clic” para abrir la puerta.',
    s2_cap: 'Portero — pulsa B-9 (Chiani).',

    s3_t: 'Cruza el pasillo',
    s3_p: 'Camina recto por el pasillo hasta la reja interior.',
    s3_cap: 'Recto hasta la reja interior.',

    s4_t: 'Llegar al apartamento',
    s4_p_top: 'Sube por las escaleras/ascensor hasta el 4º piso.',
    s4_p_call: 'Llámame cuando estés frente a la puerta y la abriré por ti:',
    s4_cap: 'Puerta del apartamento.',

    footer: 'niceflatinrome.com • Guía visual de check-in'
  },

  fr: {
    langName: 'Français',
    title: 'Guide d’arrivée — Viale Trastevere 108',
    addressLine: 'Adresse : Viale Trastevere 108, Rome • Interphone : B-9 « Chiani »',
    navHelp: 'Besoin d’aide ?',
    call: 'Appeler ou WhatsApp',
    phone: '+39 335 524 5756',

    s1_t: 'Arriver à l’immeuble',
    s1_p: 'Lorsque vous voyez l’entrée ci-dessous, vous êtes arrivé.',
    s1_cap: 'Entrée de l’immeuble / passage vers la cour.',

    s2_t: 'Utiliser l’interphone',
    s2_p1: 'Appuyez sur B-9 (Chiani), puis appelez-moi au',
    s2_p2: 'Attendez le déclic d’ouverture.',
    s2_cap: 'Interphone — bouton B-9 (Chiani).',

    s3_t: 'Traverser le passage',
    s3_p: 'Allez tout droit jusqu’au portail intérieur.',
    s3_cap: 'Tout droit vers le portail intérieur.',

    s4_t: 'Accéder à l’appartement',
    s4_p_top: 'Prenez l’escalier / l’ascenseur jusqu’au 4e étage.',
    s4_p_call: 'Appelez-moi devant la porte, je vous l’ouvrirai :',
    s4_cap: 'Porte de l’appartement.',

    footer: 'niceflatinrome.com • Guide visuel de check-in'
  },

  de: {
    langName: 'Deutsch',
    title: 'Check-in-Anleitung — Viale Trastevere 108',
    addressLine: 'Adresse: Viale Trastevere 108, Rom • Gegensprechanlage: B-9 „Chiani“',
    navHelp: 'Brauchen Sie Hilfe?',
    call: 'Anrufen oder WhatsApp',
    phone: '+39 335 524 5756',

    s1_t: 'Ankunft am Gebäude',
    s1_p: 'Wenn Sie den Eingang unten sehen, sind Sie am Ziel.',
    s1_cap: 'Gebäudeeingang / Durchgang zum Hof.',

    s2_t: 'Sprechanlage benutzen',
    s2_p1: 'Drücken Sie B-9 (Chiani) und rufen Sie mich dann an unter',
    s2_p2: 'Warten Sie auf das Klick-Geräusch zum Entriegeln.',
    s2_cap: 'Sprechanlage — Taste B-9 (Chiani).',

    s3_t: 'Durch den Durchgang',
    s3_p: 'Gehen Sie geradeaus bis zum inneren Tor.',
    s3_cap: 'Geradeaus bis zum inneren Tor.',

    s4_t: 'Zur Wohnung',
    s4_p_top: 'Nehmen Sie Treppe/Aufzug in den 4. Stock.',
    s4_p_call: 'Rufen Sie mich vor der Tür an, ich öffne für Sie:',
    s4_cap: 'Wohnungstür.',

    footer: 'niceflatinrome.com • Visuelle Check-in-Anleitung'
  },

  it: {
    langName: 'Italiano',
    title: 'Guida Check-in — Viale Trastevere 108',
    addressLine: 'Indirizzo: Viale Trastevere 108, Roma • Citofono: B-9 “Chiani”',
    navHelp: 'Serve aiuto?',
    call: 'Chiama o WhatsApp',
    phone: '+39 335 524 5756',

    s1_t: "Arrivo all'edificio",
    s1_p: 'Quando vedi l’ingresso qui sotto, sei arrivato a destinazione.',
    s1_cap: 'Ingresso / passaggio verso il cortile.',

    s2_t: 'Uso del citofono',
    s2_p1: 'Premi B-9 (Chiani) sul pannello, poi chiamami al',
    s2_p2: 'Attendi lo “scatto” di sblocco del cancello.',
    s2_cap: 'Pannello citofono — premi B-9 (Chiani).',

    s3_t: 'Attraversa il passaggio',
    s3_p: 'Prosegui dritto nel passaggio fino al cancello interno.',
    s3_cap: 'Vai dritto fino al cancello interno.',

    s4_t: "Raggiungere l'appartamento",
    s4_p_top: 'Prendi scale/ascensore fino al 4° piano.',
    s4_p_call: 'Chiamami quando sei davanti alla porta e la apro io:',
    s4_cap: "Porta dell'appartamento.",

    footer: 'niceflatinrome.com • Guida rapida di check-in'
  }
};

const fallback = 'en';

// -------- PAGE ROUTE --------
app.get('/', (req, res) => {
  const lang = (req.query.lang || '').toLowerCase();
  const L = T[lang] || T[fallback];

  const buttons = Object.entries(T)
    .map(([code, v]) => {
      const isActive = (L === T[code]);
      return `<a href="?lang=${code}"${isActive ? ' class="active"' : ''}>${v.langName}</a>`;
    }).join(' · ');

  const html = `<!doctype html>
<html lang="${lang || fallback}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${L.title}</title>
<link rel="icon" href="building-entrance.jpg">
<style>
  :root { --brand:#2b2118; --ink:#1f2937; --muted:#6b7280; --bg:#f7f7f7; --card:#ffffff; --line:#e5e7eb; }
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink)}
  .wrap{max-width:860px;margin:0 auto;padding:16px}
  header{position:sticky;top:0;background:var(--card);border-bottom:1px solid var(--line);padding:12px 14px;z-index:5}
  h1{font-size:20px;margin:0}
  .addr{font-size:14px;color:var(--muted)}
  .lang{font-size:15px;font-weight:800;margin-top:8px}
  .lang a{color:var(--ink);text-decoration:none}
  .lang a.active{text-decoration:underline}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px;margin:14px 0}
  .step{display:flex;gap:12px;align-items:flex-start}
  .num{flex:0 0 36px;height:36px;border-radius:50%;background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}
  h2{margin:6px 0 8px 0;font-size:18px}
  p{margin:6px 0;line-height:1.45}
  figure{margin:10px 0}
  img{max-width:100%;height:auto;border-radius:10px;border:1px solid var(--line);display:block}
  figure img{width:90%;margin:0 auto}
  figcaption{font-size:12px;color:var(--muted);margin-top:6px;text-align:center}
  .cta{display:inline-block;margin-top:6px;padding:8px 12px;border-radius:10px;background:var(--brand);color:#fff;text-decoration:none}
  footer{color:var(--muted);text-align:center;font-size:12px;margin:18px 0}
</style>
</head>
<body>
<header class="wrap">
  <h1>${L.title}</h1>
  <div class="addr">${L.addressLine}</div>
  <div class="lang">Language / Idioma / Langue / Sprache / Lingua: ${buttons}</div>
</header>

<main class="wrap">
  <!-- Step 1 -->
  <section class="card">
    <div class="step">
      <div class="num">1</div>
      <div>
        <h2>${L.s1_t}</h2>
        <p>${L.s1_p}</p>
        <figure>
          <img src="building-entrance.jpg" alt="Building entrance">
          <figcaption>${L.s1_cap}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 2 -->
  <section class="card">
    <div class="step">
      <div class="num">2</div>
      <div>
        <h2>${L.s2_t}</h2>
        <p>${L.s2_p1} <a class="cta" href="tel:+393355245756">${L.phone}</a>. ${L.s2_p2}</p>
        <figure>
          <img src="intercom-b9.jpg" alt="Intercom — press B-9 Chiani">
          <figcaption>${L.s2_cap}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 3 -->
  <section class="card">
    <div class="step">
      <div class="num">3</div>
      <div>
        <h2>${L.s3_t}</h2>
        <p>${L.s3_p}</p>
        <figure>
          <img src="corridor-gate.jpg" alt="Corridor leading to the inner gate">
          <figcaption>${L.s3_cap}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 4 -->
  <section class="card">
    <div class="step">
      <div class="num">4</div>
      <div>
        <h2>${L.s4_t}</h2>
        <p>${L.s4_p_top}</p>
        <figure>
          <img src="apartment-door.jpg" alt="Apartment door">
          <figcaption>${L.s4_cap}</figcaption>
        </figure>
        <p>${L.s4_p_call} <a class="cta" href="tel:+393355245756">${L.phone}</a></p>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>${L.navHelp}</h2>
    <p>${L.call}: <a class="cta" href="tel:+393355245756">${L.phone}</a></p>
  </section>

  <footer>${L.footer}</footer>
</main>
</body>
</html>`;
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.end(html);
});

const port = process.env.PORT || 8787;
app.listen(port, () =>
  console.log('Check-in guide running on http://localhost:' + port)
);
