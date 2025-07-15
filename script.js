document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');

  aplicarTemaSalvo(body, themeToggle);
  inicializarAlternanciaTema(body, themeToggle);
  injetarAnimacaoShake();
  prepararScrollSuave();
  configurarLinksDeNavegacao();
  aplicarAnimacaoCarrinho();
  console.log("Comprix ativado com tema, interações e animações.");
});

/*Tema Claro e Escuro*/

function aplicarTemaSalvo(body, Toggle) {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  body.classList.toggle('dark-theme', isDark);
  if (Toggle) Toggle.textContent = isDark ? '🌞' : '🌙';
}

function inicializarAlternanciaTema(body, Toggle) {
  if (!Toggle) return;
  Toggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    Toggle.textContent = isDark ? '🌞' : '🌙';
  });
}

/*Animação Shake*/

function injetarAnimacaoShake() {
  const shakeStyle = document.createElement('style');
  shakeStyle.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
      20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
  `;
  document.head.appendChild(shakeStyle);
}

/*Scroll Suave*/

function prepararScrollSuave() {
  window.scrollTo = function(element){
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}

/*Links de Navegação*/

function configurarLinksDeNavegacao() {
  document.querySelectorAll("nav ul li a").forEach(link => {
    const href = link.getAttribute("href");
    const destino = document.querySelector(href);
    if (destino) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo(destino);
      });
    }
  });
}

/*Scroll Suave + fade In*/

if (href?.startsWith("#") && destino){
  link.addEventListener("click", e => {
    e.preventDefault();
    destino.classList.add("fade-in");
    setTimeout(() => destino.classList.remove("fade-in"), 800);
    smoothScrollTo(destino);
  });
}

/*Houver animação*/

link.addEventListener("mouseenter", () => {
  link.style.transform = "translateY(-2px) scale(1.05)";
  link.style.transition = "transform 0.2s ease";
});
link.addEventListener("mouseleave", () => {
  link.style.transform = "";
});

/* Animação e itens do carrinho*/

function aplicarAnimacaoCarrinho() {
  function shakeCartItems() {
    document.querySelectorAll(".cart-items li").forEach((item, i) => {
      item.style.animation = `shake 0.5s ease ${i * 0.1}s forwards`;
    });
  }
}

if (typeof window.showSection === 'function'){
  const originalShowSection = window.showSection;
  window.showSection = function(sectionId) {
    originalShowSection(sectionId);
    if (sectionId === "carrinho") {
      setTimeout(shakeCartItems, 300);
    }
  };
}
