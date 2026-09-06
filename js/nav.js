(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  var isEs = (document.documentElement.lang || '').toLowerCase().indexOf('es') === 0;
  var labelOpen = isEs ? 'Abrir menú' : 'Open menu';
  var labelClose = isEs ? 'Cerrar menú' : 'Close menu';

  function closeNav() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', labelOpen);
  }

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? labelClose : labelOpen);
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 860px)').matches) closeNav();
  });
})();
