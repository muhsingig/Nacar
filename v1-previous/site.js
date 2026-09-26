// Nácar shared script: scroll reveal (once) + tiny helpers.
(function(){
  var els=[].slice.call(document.querySelectorAll('.reveal'));
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}});
  },{rootMargin:'0px 0px -8% 0px',threshold:0.12});
  els.forEach(function(e){io.observe(e)});
  // safety: anything above the fold on load shows immediately
  requestAnimationFrame(function(){els.forEach(function(e){if(e.getBoundingClientRect().top<innerHeight)e.classList.add('in')})});
})();
