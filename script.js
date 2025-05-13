document.addEventListener("DOMContentLoaded", () => {
    // animación al hacer scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      section.classList.add("hidden");
      observer.observe(section);
    });
  
    // enviar formulario
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          status.style.display = "block";
          status.style.color = "#16a34a";
          status.innerText = "✅ ¡Gracias! Tu mensaje ha sido enviado.";
        } else {
          status.style.display = "block";
          status.style.color = "red";
          status.innerText = "❌ Ocurrió un error. Intenta de nuevo.";
        }
      };
      xhr.send(data);
    });
  
    // menú hamburguesa
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  
    // cerrar el menú al hacer clic en una sección
    const navLinkItems = document.querySelectorAll("#nav-links a");
    navLinkItems.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove("show");
        }
      });
    });
  });
  