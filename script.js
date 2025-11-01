// --- Templates SPA ---
const homeTemplate = `
<section class="hero">
  <div class="hero-content">
    <h1>Transforme Vidas com Voluntariado</h1>
    <p>Junte-se a nós e ajude a construir um futuro mais solidário e inclusivo.</p>
    <a onclick="navigate('cadastro', '', event)" class="btn-primary">Quero Ser Voluntário</a>
  </div>
</section>
<section class="about">
  <h2>Quem Somos</h2>
  <p>Somos uma organização sem fins lucrativos que promove inclusão social, educação e apoio a famílias em situação de vulnerabilidade.</p>
</section>`;

const projectsTemplate = `
<section class="hero">
  <div class="hero-content">
    <h1>Nossos Projetos</h1>
    <p>Conheça as iniciativas que estão mudando vidas em nossa comunidade.</p>
  </div>
</section>
<section class="impact-cards">
  <div class="card" id="educacao"><div class="card-icon">📚</div><h3>Educação</h3><p>Projetos de ensino e reforço.</p></div>
  <div class="card" id="saude"><div class="card-icon">🏥</div><h3>Saúde</h3><p>Campanhas de atendimento e apoio.</p></div>
  <div class="card" id="cultura"><div class="card-icon">🎨</div><h3>Cultura</h3><p>Atividades artísticas e sociais.</p></div>
</section>
<section class="cta">
  <div class="cta-content">
    <h2>Participe!</h2>
    <p>Faça parte dessa transformação social.</p>
    <div class="cta-buttons">
      <a onclick="navigate('cadastro', '', event)" class="btn-primary">Cadastre-se</a>
      <a onclick="navigate('home', '', event)" class="btn-secondary">Voltar</a>
    </div>
  </div>
</section>`;

const cadastroTemplate = `
<section class="hero hero-cadastro">
  <div class="hero-content">
    <h1>Torne-se um Voluntário</h1>
    <p>Preencha o formulário e venha fazer parte da nossa equipe de voluntários.</p>
  </div>
</section>
<section class="signup-section">
  <h2>Cadastro de Voluntários</h2>
  <div class="success-message" id="successMessage">✅ Cadastro realizado com sucesso!</div>
  <form id="volunteerForm">
    <fieldset>
      <legend>Dados Pessoais</legend>

      <div class="form-group">
        <label for="nome">Nome *</label>
        <input type="text" id="nome" required minlength="5">
        <div class="error-message" id="error-nome"></div>
      </div>

      <div class="form-group">
        <label for="email">E-mail *</label>
        <input type="email" id="email" required>
        <div class="error-message" id="error-email"></div>
      </div>

      <div class="form-group">
        <label for="telefone">Telefone *</label>
        <input type="tel" id="telefone" placeholder="(11) 99999-9999" required pattern="^\\(?([0-9]{2})\\)?[-.\\s]?([0-9]{4,5})[-.\\s]?([0-9]{4})$">
        <div class="error-message" id="error-telefone"></div>
      </div>

      <div class="form-group">
        <label for="idade">Idade *</label>
        <input type="number" id="idade" min="16" max="100" required>
        <div class="error-message" id="error-idade"></div>
      </div>

    </fieldset>
    <button type="submit" class="btn-primary">Enviar</button>
  </form>
</section>`;

// --- Rotas SPA ---
const routes = {
  home: homeTemplate,
  projects: projectsTemplate,
  cadastro: cadastroTemplate,
};

// Função principal de navegação (CORRIGIDA)
function navigate(route, anchor = '', event = null) {
  
  if (event) { // Se um evento de clique for fornecido (para os links do menu), previne o comportamento padrão
    event.preventDefault(); 
  }

  const app = document.getElementById('app-content');
  if (!app) return;

  app.innerHTML = routes[route] || routes.home;

  // Atualiza o hash na URL sem quebrar o histórico
  if (window.location.hash !== `#${route}`) {
    history.pushState({ route }, '', `#${route}`);
  }

  updateActiveLink(route);
  if (route === 'cadastro') setupCadastroForm();

  // Scroll para o topo
  window.scrollTo(0, 0);

  // Âncora opcional (educação, saúde, etc.)
  if (anchor) {
    setTimeout(() => {
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
}

// Atualiza os links ativos no menu
function updateActiveLink(current) {
  document.querySelectorAll('#navMenu a').forEach(a => a.classList.remove('active'));
  const active = document.getElementById(`nav-${current}`);
  if (active) active.classList.add('active');
}

// Inicialização SPA
window.addEventListener('DOMContentLoaded', () => {
  const route = window.location.hash.replace('#', '') || 'home';
  navigate(route);
});

window.addEventListener('popstate', e => {
  const route = e.state?.route || 'home';
  navigate(route);
});

// Menu Mobile
function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('open');
}

// --- Validação de Formulário ---
function setupCadastroForm() {
  const form = document.getElementById('volunteerForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateForm(form)) simulateSubmission(form);
  });

  form.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
      document.getElementById(`error-${input.id}`).textContent = '';
    });
  });
}

function validateForm(form) {
  const ids = ['nome', 'email', 'telefone', 'idade'];
  return ids.every(id => validateField(document.getElementById(id)));
}

// Função de validação de campo (CORRIGIDA - Regex de E-mail)
function validateField(field) {
  let message = '';
  const value = field.value.trim();
  // Regex de e-mail corrigida e segura
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (!value) message = 'Campo obrigatório.';
  else if (field.id === 'nome' && value.length < 5) message = 'Mínimo 5 caracteres.';
  else if (field.id === 'email' && !emailRegex.test(value)) message = 'E-mail inválido.';
  else if (field.id === 'telefone' && field.validity.patternMismatch) message = 'Telefone inválido.';
  else if (field.id === 'idade' && (value < 16 || value > 100)) message = 'Idade entre 16 e 100.';

  const errorEl = document.getElementById(`error-${field.id}`);
  if (message) {
    field.classList.add('is-invalid');
    errorEl.textContent = message;
    return false;
  }

  errorEl.textContent = '';
  return true;
}

function simulateSubmission(form) {
  const success = document.getElementById('successMessage');
  success.style.display = 'block';
  setTimeout(() => {
    success.style.display = 'none';
    navigate('home');
  }, 3000);
}

// --- Dropdown Interativo ---
document.addEventListener('click', e => {
  // Fecha dropdown ao clicar fora
  if (!e.target.closest('.dropdown-item') && !e.target.closest('.dropdown-menu')) {
     document.querySelectorAll('.dropdown-menu').forEach(menu => (menu.style.display = 'none'));
     return;
  }
  
  // Abre/Fecha dropdown ao clicar no item principal
  if (e.target.closest('.dropdown-item')) {
    const dropdown = e.target.closest('.dropdown-item').querySelector('.dropdown-menu');
    // Fecha todos os outros
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== dropdown) menu.style.display = 'none';
    });
    // Alterna o atual
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
});

// Correção: Garante que os dropdowns de sub-links fechem ao navegar
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu').forEach(menu => (menu.style.display = 'none'));
        document.getElementById('navMenu').classList.remove('open'); // Fecha menu mobile
    });
});