
export const initializeVanta = (element, effectType) => {
  const threeScript = document.createElement('script');
  const vantaScript = document.createElement('script');

  // Load the Three.js library
  threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';

  // Load the selected Vanta.js effect based on the effectType argument
  let vantaEffectSrc = '';
  if (effectType === 'net') {
    vantaEffectSrc = 'https://cdn.jsdelivr.net/gh/tengbao/vanta@latest/dist/vanta.net.min.js';
  } else if (effectType === 'birds') {
    vantaEffectSrc = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js';
  } else if (effectType === 'halo') {
    vantaEffectSrc = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js';
  } else if (effectType === 'fog') {
    vantaEffectSrc = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js";
  } else if (effectType === 'cells') {
    vantaEffectSrc = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js';
  }

  if (!vantaEffectSrc) {
    console.error('Invalid effectType specified.');
    return;
  }

  vantaScript.src = vantaEffectSrc;

  threeScript.onload = () => {
    vantaScript.onload = () => {
      if (element) {
        window.VANTA[effectType.toUpperCase()]({
          el: element,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
        });
      }
    };
    document.head.appendChild(vantaScript);
  };

  document.head.appendChild(threeScript);

  // Return cleanup function
  return () => {
    const head = document.head;
    if (head.contains(threeScript)) {
      head.removeChild(threeScript);
    }
    if (head.contains(vantaScript)) {
      head.removeChild(vantaScript);
    }
  };
};
