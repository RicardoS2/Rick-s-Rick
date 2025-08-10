(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const bg = document.querySelector('.background');
    if (bg) {
      bg.addEventListener('animationend', (e) => {
        if (e.animationName === 'backgroundHide') bg.remove();
      });
    }
    toggleMode(false); // Inicializa no modo escuro
  });

  window.toggleMode = (toggle = true) => {
    const html = document.documentElement;
    if (toggle) html.classList.toggle('light');

    const isLight = html.classList.contains('light');
    const img = document.querySelector('.profile img');

    img.src = isLight ? './assets/avatar-3.png' : './assets/avatar@2x.png';
    img.alt = isLight ? 'Avatar de Ricardo Menezes in light mode' : 'Avatar de Ricardo Menezes in dark mode';

    // Atualiza atributo aria-checked para switch
    const switchElem = document.querySelector('.switch');
    if (switchElem) switchElem.setAttribute('aria-checked', isLight);
  };
})();
