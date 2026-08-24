$( document ).ready(function() {
    $(".year").text( (new Date).getFullYear() );
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach((el) => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
