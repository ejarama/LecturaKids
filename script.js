const frases = [
`🐱 **El gato curioso**  
El gato salta por el jardín.  
Persigue una hoja que vuela sin fin.  
Mueve su cola y sonríe feliz.`,

`🐶 **Mi perro Firulais**  
Firulais corre tras la pelota.  
Ladra, brinca y se alborota.  
Después descansa con su gran hueso.`,

`☀️ **El sol brillante**  
El sol asoma por la ventana.  
Despierta el día y calienta la cama.  
Los pajaritos cantan sin parar.`,

`🌈 **Arcoíris bonito**  
Después de la lluvia salió el sol,  
y el cielo pintó un gran color.  
Rojo, verde, azul y gris, ¡qué feliz!`,

`🐢 **La tortuga lenta**  
Camina despacio, sin apuro,  
lleva su casa, todo seguro.  
Paso a paso, llega al muro.`,

`🦋 **La mariposa azul**  
Vuelo suave, voy por el aire,  
llevo colores para el baile.  
Soy mariposa, amiga del sol.`,

`🐰 **Conejito blanco**  
Salta el conejo en el prado verde,  
come zanahorias y nunca se pierde.  
Cuando anochece, feliz se duerme.`,

`🌧️ **Día de lluvia**  
Cae la lluvia sobre mi casa,  
salpica el suelo, moja la plaza.  
Yo con mi capa salgo a saltar.`,

`🧸 **Mi osito de peluche**  
Mi osito duerme junto a mí,  
le doy abrazos y soy feliz.  
Me cuida siempre al dormir.`,

`🕯️ **Noche de cuentos**  
Mamá me lee antes de dormir,  
un cuento dulce para reír.  
Sueño mundos por descubrir.`
];

document.getElementById('btnLeer').addEventListener('click', () => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('frase').innerHTML = fraseAleatoria;
});
