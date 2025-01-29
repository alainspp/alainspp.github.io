document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".experience__icons");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Deja de observar una vez que se muestra
          }
        });
      },
      { threshold: 0.2 } // Se activa cuando el 20% del elemento es visible
    );
  
    cards.forEach((card) => observer.observe(card));
  });
  