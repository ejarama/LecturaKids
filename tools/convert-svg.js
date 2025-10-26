// Script to convert SVGs to PNGs
async function convertSvgToPng(svgPath, pngName) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 512;

    // Load SVG as an image
    const img = new Image();
    const imgLoadPromise = new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
    });

    img.src = svgPath;
    await imgLoadPromise;

    // Draw and convert
    ctx.drawImage(img, 0, 0);
    
    // Convert to blob
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    
    // Save using fetch
    const formData = new FormData();
    formData.append('image', blob, pngName);
    
    // Note: You'll need a server endpoint to handle the upload
    await fetch('/save-png', {
        method: 'POST',
        body: formData
    });
}

// Convert our sample SVGs
const svgs = [
    'images/gato-curioso.svg',
    'images/perro-firulais.svg',
    'images/sol-brillante.svg'
];

async function convertAll() {
    for (const svg of svgs) {
        const pngName = svg.replace('.svg', '.png');
        await convertSvgToPng(svg, pngName);
    }
}

// Run conversion when page loads
window.addEventListener('load', convertAll);