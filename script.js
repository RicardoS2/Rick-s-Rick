function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('.profile img');
  const isLightMode = html.classList.contains('light');

  if (isLightMode) {
    img.setAttribute('src', './assets/avatar@2x.png');
    img.setAttribute('alt', 'Avatar de Ricardo Menezes no modo claro');
  } else {
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'Avatar de Ricardo Menezes no modo escuro');
  }
}
