(function(){
  const links=[...document.querySelectorAll('.site-header nav a')];
  const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));
      }
    });
  },{rootMargin:'-30% 0px -60% 0px',threshold:0});
  sections.forEach(s=>observer.observe(s));
})();
