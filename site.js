/* ============================================================================
   Nácar v2 · site.js  (shared by index, faro, pulso, onda)
   ----------------------------------------------------------------------------
   Include after the engine, before any page script:
     <script src="scrollcraft.js"></script>
     <script src="site.js"></script>
     <script> page script, may use window.Nacar </script>

   What it does, once, on load:
   1. MOTION-OFF. Under prefers-reduced-motion it adds `html.rm` and, BEFORE the
      engine mounts, turns every pinned act (pin / scrub / pan) into a plain
      flow act and strips the scroll-driven attributes (cue, kinetic,
      parallax, reveal, pan). Result: no extra pinned scroll, nothing hidden
      behind a cue, and the page CSS under `html.rm` draws the static, complete
      composition. Entry fades (data-sc-in) and counters stay; the engine
      already makes those gentle.
      Page CSS that reads --sc-p should go through its own variable, e.g.
        .act { --p: var(--sc-p); }   html.rm .act { --p: 1; }
      because the engine writes --sc-p inline and would otherwise keep driving it.
   2. Mounts the engine on <body> (skip with <body data-nacar-manual> and call
      Nacar.mount() yourself after building DOM).
   3. Local nav: marks the lnav link whose section is on screen
      (aria-current="true"), matched by href="#id".

   Exposes window.Nacar = { reduce, sc, mount() }.
   ========================================================================== */
(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var Nacar = window.Nacar = { reduce: reduce, sc: null, mount: mount };

  function staticise() {
    document.documentElement.classList.add('rm');
    var pinned = document.querySelectorAll('[data-sc-act="pin"],[data-sc-act="scrub"],[data-sc-act="pan"]');
    Array.prototype.forEach.call(pinned, function (el) {
      el.setAttribute('data-rm-was', el.getAttribute('data-sc-act'));
      el.setAttribute('data-sc-act', 'flow');
      el.removeAttribute('data-sc-span');
    });
    ['data-sc-cue', 'data-sc-kinetic', 'data-sc-parallax', 'data-sc-reveal', 'data-sc-pan']
      .forEach(function (attr) {
        Array.prototype.forEach.call(document.querySelectorAll('[' + attr + ']'), function (el) {
          el.removeAttribute(attr);
        });
      });
  }

  function mount() {
    if (Nacar.sc) return Nacar.sc;
    if (reduce) staticise();
    if (window.ScrollCraft) Nacar.sc = window.ScrollCraft.mount(document.body);
    return Nacar.sc;
  }

  function localNav() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.lnav__right a[href^="#"]:not(.pill)'));
    if (!links.length || !('IntersectionObserver' in window)) return;
    var map = new Map();
    links.forEach(function (a) {
      var t = document.getElementById(a.getAttribute('href').slice(1));
      if (t) map.set(t, a);
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var a = map.get(e.target);
        if (!a) return;
        if (e.isIntersecting) {
          links.forEach(function (l) { l.removeAttribute('aria-current'); });
          a.setAttribute('aria-current', 'true');
        } else if (a.getAttribute('aria-current')) {
          a.removeAttribute('aria-current');
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    map.forEach(function (_, t) { io.observe(t); });
  }

  if (!document.body.hasAttribute('data-nacar-manual')) mount();
  localNav();
})();
