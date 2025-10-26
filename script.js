// Inline fallback phrases (kept for backward compatibility).
const inlineFrases = [
`🐱 ** El gato curioso **  

El gato salta por el jardín.  
Persigue una hoja que vuela sin fin.  
Mueve su cola y sonríe feliz.`,

`🐶 ** Mi perro Firulais **  

Firulais corre tras la pelota.  
Ladra, brinca y se alborota.  
Después descansa con su gran hueso.`,

`☀️ ** El sol brillante **  

El sol asoma por la ventana.  
Despierta el día y calienta la cama.  
Los pajaritos cantan sin parar.`,

`🌙 **La luna soñadora**

La luna sale a mirar el mar.
Brilla y brilla sin descansar.
Cuenta estrellas en el cielo azul,
mientras el niño duerme con tul.`,

`🐠 ** El pez dorado **

Nada el pez en su pecera,
dando vueltas como en carrera.
Burbujea feliz en su rincón,
jugando solo con su emoción.`,

`🐸 ** La rana del charco **

Croa la rana en el pantano,
salta feliz con su hermano.
El agua brilla bajo la flor,
y todo huele a puro color.`,

`🦋 ** La mariposa azul **  

Vuelo suave, voy por el aire,  
llevo colores para el baile.  
Soy mariposa, amiga del sol.`,

`🐥 ** Pollito travieso **

El pollito sale a correr,
su mamá lo quiere esconder.
Pero él canta “pío, pío” sin fin,
y busca migas en el jardín.`,

`🌧️ ** Día de lluvia **

Cae la lluvia sobre mi casa,
salpica el suelo, moja la plaza.
Yo con mi capa salgo a saltar,
¡qué divertido es chapotear!`,

`🐢 ** La tortuga lenta ** 

Camina despacio, sin apuro,  
lleva su casa, todo seguro.  
Paso a paso, llega al muro.`,



`🌻 ** Flor del campo **

La flor despierta con el sol,
abre sus pétalos de color.
Una abeja viene a bailar,
y juntas se ponen a jugar.`,

`🐰 ** Conejito blanco **  

Salta el conejo en el prado verde,  
come zanahorias y nunca se pierde.  
Cuando anochece, feliz se duerme.`,

`** Mi bicicleta **

Tengo una bici color limón,
rueda rápido con emoción.
Subo la loma, bajo veloz,
¡qué divertido es ser veloz!`,

`🏠 ** En mi casita **

En mi casita hay un sillón,
un gato, un libro y un rincón.
Ahí me siento con mi mamá,
a leer cuentos sin parar.`,

`🎨 ** Pintando colores **

Pinto un cielo, pinto el mar,
pinto un barco que quiere andar.
Pinto mi casa, mi corazón,
todo lo lleno de ilusión.`,

`🌈 ** Arcoíris bonito **  

Después de la lluvia salió el sol,  
y el cielo pintó un gran color.  
Rojo, verde, azul y gris, ¡qué feliz!`,

`🧸 ** Mi osito de peluche **  

Mi osito duerme junto a mí,  
le doy abrazos y soy feliz.  
Me cuida siempre al dormir.`,

`🕊️ ** El pajarito cantor **

Canta el pajarito sobre la rama,
despierta la flor que estaba en cama.
Con su trino dulce y sonoro,
llena el bosque de amor y oro.`,

`🐘 ** El elefante gris **

El elefante mueve su trompa,
camina lento, nunca tropieza.
Con gran sonrisa y paso firme,
lleva alegría donde camine.`,

`🍎 ** Mi manzana roja **

Tengo una manzana roja y redonda,
parece una bola muy hermosa.
Le doy un mordisco y sabe a miel,
¡qué rica fruta tengo en mi piel!`,

`🧁 ** El pastel de cumpleaños **

Hoy hay globos, risas y canción,
porque llegó mi celebración.
Soplo las velas con ilusión,
¡feliz cumpleaños de corazón!`,

`🌊 ** En la playa **

El mar susurra con su voz,
me moja los pies con ilusión.
Construyo castillos en la arena,
y el sol me abraza sin pena.`,

`🚂 ** El tren viajero **

“Chucu chucu”, suena el tren,
lleva maletas y un cartel.
Pasa montañas y un gran río,
¡qué divertido viaje el mío!`,

`🍃 ** El viento del campo **

Sopla el viento por la colina,
mueve el árbol, juega con la espina.
Silba suave, canta feliz,
y me despeina la nariz.`,

`🦄 ** El unicornio brillante **

Tiene un cuerno lleno de luz,
brilla en el cielo color azul.
Corre en las nubes, deja estrellas,
y pinta el mundo de cosas bellas.`,

`🐿️ ** La ardilla veloz **

Corre la ardilla por el tronco,
salta ligera, come pronto.
Guarda nueces con emoción,
para el invierno y su rincón.`,

`🧚‍♀️ ** Hada del bosque **

Pequeña hada, luz brillante,
vuela ligera, siempre elegante.
Con su varita llena de amor,
cura las flores del dolor.`,

`🦢 ** Cisne blanco **

Nada el cisne sobre el lago,
su cuello largo, su paso mago.
Parece un sueño, parece un sol,
refleja el cielo con su color.`,

`🧙‍♂️ ** El mago del cuento **

El mago tiene un sombrero azul,
de él salen chispas y un tul.
Con una risa hace brillar,
todo lo que puede soñar.`,

`🧦 ** Calcetines perdidos **

Uno en la cama, otro en el sillón,
buscan juntos su reunión.
Cuando se encuentran saltan de emoción,
¡qué par tan lindo, qué diversión!`,

`🦜 ** El loro parlanchín **

Dice “hola” y dice “adiós”,
canta canciones con mi voz.
Es mi amigo, mi confidente,
¡qué loro más inteligente!`,

`🌼 ** La semilla nueva **

Cae la semilla sobre la tierra,
duerme tranquila, no se aterra.
Un día crece, nace una flor,
que llena el campo de color.`,

`🧙‍♀️ ** La brujita amable **

No hace hechizos de mal humor,
prepara sopas con mucho amor.
Su gato negro la acompaña,
volando juntas por la montaña.`,

`🪁 ** La cometa en el cielo **

Sube mi cometa con el viento,
gira, baila y va contento.
Tiene colores de corazón,
que alegran toda la ocasión.`,

`🐝 ** Abejita trabajadora **

La abejita va sin parar,
de flor en flor quiere volar.
Hace miel con gran dulzura,
¡qué linda es la naturaleza pura!`,

`🦦 ** La nutria del río **

Nada la nutria con su mamá,
juegan juntas sin descansar.
Se lanzan flores, se ríen las dos,
¡qué día tan lindo les dio Dios!`,

`🧃 ** Mi jugo favorito **

Tomo juguito de maracuyá,
refresca mi boca, me hace bailar.
Tiene sabor a sol y canción,
me llena el día de emoción.`,

`🧩 ** Armando el rompecabezas **

Pieza a pieza voy poniendo,
colores bellos voy descubriendo.
Al final miro y puedo ver,
¡una ballena y un amanecer!`,

`🕯️ ** Noche de cuentos **

Mamá me lee antes de dormir,  
un cuento dulce para reír.  
Sueño mundos por descubrir.`, 

`💫 ** Soñando despierto **

Cierro los ojos, pienso en volar,
a un mundo nuevo quiero llegar.
Con mis amigos voy a jugar,
¡qué lindo es siempre imaginar!`
];

// Loaded phrases will be objects: { id, title, text, emoji, image }
let frasesData = null;

async function generatePagePNG(obj) {
  // Create a printable canvas with title, text and optional image
  const width = 1200;
  const height = 1700;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // White background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // Title
  const titleText = (obj.emoji ? obj.emoji + ' ' : '') + (obj.title || '');
  ctx.fillStyle = '#333333';
  ctx.textAlign = 'center';
  ctx.font = '700 48px Fredoka, sans-serif';
  ctx.fillText(titleText, width / 2, 100);

  // Body text
  ctx.font = '400 28px Fredoka, sans-serif';
  const lines = obj.text ? obj.text.split('\n') : [];
  const lineHeight = 40;
  let y = 160;
  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], width / 2, y + i * lineHeight);
  }

  // Image area (if present) - draw centered below text
  const imageTop = y + lines.length * lineHeight + 30;
  if (obj.image) {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      const imgLoaded = new Promise((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Failed to load image'));
      });
      img.src = obj.image;
      await imgLoaded;

      const maxImgWidth = width - 160;
      let drawWidth = img.width;
      let drawHeight = img.height;
      if (drawWidth > maxImgWidth) {
        const ratio = maxImgWidth / drawWidth;
        drawWidth = Math.round(drawWidth * ratio);
        drawHeight = Math.round(drawHeight * ratio);
      }
      const drawX = Math.round((width - drawWidth) / 2);
      const drawY = imageTop;
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    } catch (e) {
      // If image load fails, ignore and continue
      console.warn('No se pudo cargar la imagen para descargar la página:', e);
    }
  }

  // Convert to blob and trigger download
  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const fname = (obj.id ? obj.id : (obj.title || 'frase')).replace(/[^a-z0-9_-]/gi, '_') + '.png';
  a.download = fname;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function renderFraseObject(obj) {
  // Render text content
  const container = document.getElementById('frase');
  const title = obj.title ? `<strong>${obj.title}</strong>` : '';
  const emoji = obj.emoji ? `${obj.emoji} ` : '';
  const paragraphs = obj.text ? obj.text.split('\n').map(p => `<div>${p}</div>`).join('') : '';
  container.innerHTML = `${emoji} ${title}<br/>${paragraphs}`;

  // Handle image and download button
  const imageContainer = document.getElementById('imagen-container');
  imageContainer.innerHTML = '';
  if (obj.image) {
    const img = document.createElement('img');
    img.src = obj.image;
    img.alt = obj.title || 'Ilustración';

    const btn = document.createElement('a');
    btn.href = '#';
    btn.textContent = '⬇️ Descargar página';
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      await generatePagePNG(obj);
    });

    imageContainer.appendChild(img);
    imageContainer.appendChild(btn);
    imageContainer.style.display = 'flex';
  } else {
    imageContainer.style.display = 'none';
  }
}function renderSimpleText(text) {
    document.getElementById('frase').innerHTML = text;
}

function pickRandomInline() {
    if (!inlineFrases || inlineFrases.length === 0) return '';
    return inlineFrases[Math.floor(Math.random() * inlineFrases.length)];
}

function pickRandomFromData() {
    if (!frasesData || frasesData.length === 0) return null;
    return frasesData[Math.floor(Math.random() * frasesData.length)];
}

// Attempt to fetch JSON; if it fails, we'll fall back to inlineFrases.
fetch('data/frases.json')
    .then(res => {
        if (!res.ok) throw new Error('No JSON');
        return res.json();
    })
    .then(json => {
        // Normalize: accept array of objects or transform legacy strings
        if (Array.isArray(json) && json.length > 0 && typeof json[0] === 'object') {
            frasesData = json;
        }
    })
    .catch(() => {
        // keep frasesData null to signal fallback
        frasesData = null;
    });

document.getElementById('btnLeer').addEventListener('click', () => {
    // Prefer structured JSON data if available
    const obj = pickRandomFromData();
    if (obj) {
        renderFraseObject(obj);
        return;
    }

    // Fallback to legacy inline phrases
    const texto = pickRandomInline();
    renderSimpleText(texto);
});
