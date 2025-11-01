/**
 * =======================================================
 * 1. MÓDULO DE TEMPLATES (Sistema de Templates JavaScript)
 * =======================================================
 */

// Conteúdo HTML da página INÍCIO (Extraído do index.html)
const homeTemplate = `
    <section class="hero">
        <div class="hero-content">
            <h1>Transforme Vidas com Voluntariado</h1>
            <p>Junte-se a nós e ajude a construir um futuro mais solidário e inclusivo.</p>
            <a href="#" onclick="navigate('cadastro')" class="btn-primary">Quero Ser Voluntário</a>
        </div>
    </section>
    
    <section class="about">
      <h2>Quem Somos</h2>
      <p>Somos uma organização sem fins lucrativos que promove inclusão social, educação e apoio a famílias em situação de vulnerabilidade. Nosso propósito é conectar corações dispostos a transformar vidas.</p>
    </section>

    <section class="about">
        <h2>Nosso Impacto</h2>
        <p>A cada ano, transformamos centenas de vidas. Nosso modelo de atuação garante que cada doação e hora voluntariada gere o máximo de impacto social.</p>
        <div class="impact-cards">
            <div class="card">
                <div class="card-icon">👥</div>
                <h3>500+</h3>
                <p>Voluntários ativos</p>
            </div>
            <div class="card">
                <div class="card-icon">🏠</div>
                <h3>120</h3>
                <p>Famílias apoiadas</p>
            </div>
            <div class="card">
                <div class="card-icon">🎓</div>
                <h3>8</h3>
                <p>Projetos ativos</p>
            </div>
        </div>
    </section>
`;

// Conteúdo HTML da página PROJETOS (Extraído do projeto.html)
const projectsTemplate = `
    <section class="hero">
        <div class="hero-content">
            <h1>Nossos Projetos</h1>
            <p>Conheça as iniciativas que estão mudando vidas em nossa comunidade.</p>
        </div>
    </section>

    <section class="about">
        <h2 id="educacao">Educação</h2>
        <p>Projetos que oferecem reforço escolar, oficinas e capacitação profissional para todas as idades.</p>
    </section>

    <section class="about">
        <h2 id="saude">Saúde</h2>
        <p>Campanhas de conscientização, atendimentos básicos e suporte à saúde mental e física.</p>
    </section>

    <section class="about">
        <h2 id="cultura">Cultura e Inclusão</h2>
        <p>Atividades culturais, artísticas e esportivas que promovem cidadania e autoestima.</p>
    </section>

    <section class="cta">
        <div class="cta-content">
            <h2>Participe de Nossos Projetos</h2>
            <p>Faça parte dessa transformação social!</p>
            <div class="cta-buttons">
                <a href="#" onclick="navigate('cadastro')" class="btn-primary">Cadastre-se</a>
                <a href="#" onclick="navigate('home')" class="btn-secondary">Voltar ao Início</a>
            </div>
        </div>
    </section>
`;

// Conteúdo HTML da página CADASTRO (Extraído do cadastro.html com adição dos placeholders de erro)
const cadastroTemplate = `
    <section class="hero hero-cadastro">
        <div class="hero-content">
            <h1>Torne-se um Voluntário</h1>
            <p>Preencha o formulário e venha fazer parte da nossa equipe de voluntários.</p>
        </div>
    </section>

    <section class="signup-section">
      <h2>Cadastro de Voluntários</h2>
      <div class="success-message" id="successMessage">
        ✅ Cadastro realizado com sucesso! Entraremos em contato em breve.
      </div>
      <form id="volunteerForm">
        <fieldset>
          <legend>Dados Pessoais</legend>
          <div class="form-group">
            <label for="nome">Nome Completo *</label>
            <input type="text" id="nome" name="nome" required minlength="5" />
            <div class="error-message" id="error-nome"></div>
          </div>
          <div class="form-group">
            <label for="email">E-mail *</label>
            <input type="email" id="email" name="email" required />
            <div class="error-message" id="error-email"></div>
          </div>
          <div class="form-group">
            <label for="telefone">Telefone *</label>
            <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999" required pattern="^\\(?([0-9]{2})\\)?[-.\\s]?([0-9]{4,5})[-.\\s]?([0-9]{4})$" />
            <div class="error-message" id="error-telefone"></div>
          </div>
          <div class="form-group">
            <label for="idade">Idade *</label>
            <input type="number" id="idade" name="idade" min="16" max="100" required />
            <div class="error-message" id="error-idade"></div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Disponibilidade</legend>
          <div class="form-group">
            <label for="disponibilidade">Quando você pode ajudar? *</label>
            <select id="disponibilidade" name="disponibilidade" required>
              <option value="">Selecione...</option>
              <option value="fins-de-semana">Fins de semana</option>
              <option value="dias-uteis">Dias úteis</option>
              <option value="flexivel">Horário flexível</option>
              <option value="pontual">Ações pontuais</option>
            </select>
          </div>
          <div class="form-group">
            <label for="area-interesse">Área de Interesse *</label>
            <select id="area-interesse" name="area-interesse" required>
              <option value="">Selecione...</option>
              <option value="distribuicao-alimentos">Distribuição de Alimentos</option>
              <option value="educacao">Educação</option>
              <option value="saude">Saúde</option>
              <option value="administrativo">Administrativo</option>
              <option value="qualquer">Qualquer área</option>
            </select>
          </div>
        </fieldset>

        <fieldset>
          <legend>Informações Adicionais</legend>
          <div class="form-group">
            <label for="experiencia">Experiência prévia</label>
            <textarea id="experiencia" name="experiencia" placeholder="Conte-nos sobre sua experiência..."></textarea>
          </div>
          <div class="form-group">
            <label for="motivacao">Motivação</label>
            <textarea id="motivacao" name="motivacao" placeholder="Por que você quer ser voluntário?"></textarea>
          </div>
        </fieldset>

        <button type="submit" class="btn-primary">Enviar Cadastro</button>
      </form>
    </section>
`;

/**
 * =======================================================
 * 2. MÓDULO DE ROTEAMENTO (Implementação do SPA Básico)
 * =======================================================
 */

// Mapeamento de rotas
const routes = {
    'home': homeTemplate,
    'projects': projectsTemplate,
    'cadastro': cadastroTemplate
};

/**
 * Função principal para navegação e renderização do conteúdo.
 * @param {string} route - A chave da rota (ex: 'home').
 * @param {string} anchor - Opcional. Âncora para rolar após o carregamento (ex: '#educacao').
 */
function navigate(route, anchor = '') {
    const appContent = document.getElementById('app-content');
    
    if (appContent && routes[route]) {
        // 1. Manipulação do DOM: Injeta o novo template
        appContent.innerHTML = routes[route];
    } else {
        // Rota não encontrada, navega para a home
        appContent.innerHTML = routes['home'];
        route = 'home';
    }
    
    // 2. Atualiza o Histórico (simula a navegação de página)
    history.pushState({ route: route }, `${route.charAt(0).toUpperCase() + route.slice(1)}`, `#${route}`);

    // 3. Atualiza o estado visual da navegação
    updateActiveLink(route);
    
    // 4. Configura eventos específicos da página (Validação de Formulário)
    if (route === 'cadastro') {
        setupCadastroForm();
    }
    
    // 5. Rola para a âncora, se existir
    window.scrollTo(0, 0); // Rola para o topo da página primeiro
    if (anchor) {
        setTimeout(() => {
            document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

/**
 * Atualiza a classe 'active' nos links de navegação.
 */
function updateActiveLink(currentRoute) {
    document.querySelectorAll('#navMenu a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Encontra o link principal e adiciona 'active'
    if (currentRoute === 'home') {
        document.getElementById('nav-home')?.classList.add('active');
    } else if (currentRoute === 'projects') {
        // Adiciona ao link principal "Projetos ▼"
        document.getElementById('nav-projects')?.classList.add('active');
    } else if (currentRoute === 'cadastro') {
        document.getElementById('nav-cadastro')?.classList.add('active');
    }
}

// Lógica de inicialização: carrega a página inicial ao carregar o script
document.addEventListener("DOMContentLoaded", () => {
  const initialRoute = window.location.hash.substring(1).split('/')[0] || 'home';
  navigate(initialRoute);
});

// Permite navegação usando os botões Voltar/Avançar do navegador
window.onpopstate = function(event) {
    if (event.state && event.state.route) {
        navigate(event.state.route);
    } else {
        navigate('home');
    }
};

// Função do menu hambúrguer (mantida)
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open');
}


/**
 * =======================================================
 * 3. MÓDULO DE FUNCIONALIDADES (Verificação de Consistência)
 * =======================================================
 */

/**
 * Configura o formulário de cadastro após ele ser carregado no DOM (na rota 'cadastro').
 */
function setupCadastroForm() {
    const form = document.getElementById('volunteerForm');
    if (form) {
        // Adiciona listener para a submissão do formulário
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão

            // Chama a função de validação e processamento
            if (validateForm(form)) {
                simulateSubmission(form);
            } else {
                // Rola para o primeiro campo inválido
                const firstInvalid = form.querySelector('.is-invalid');
                if (firstInvalid) {
                    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });

        // Adiciona listeners para feedback em tempo real
        form.querySelectorAll('input, select, textarea').forEach(element => {
            // Valida ao sair do campo
            element.addEventListener('blur', function() {
                validateField(this);
            });
            // Limpa o erro ao digitar
            element.addEventListener('input', function() {
                this.classList.remove('is-invalid');
                document.getElementById(`error-${this.id}`) && (document.getElementById(`error-${this.id}`).textContent = '');
            });
        });
    }
}

/**
 * Sistema de verificação de consistência de dados em formulários, com aviso ao usuário.
 * @param {HTMLFormElement} form 
 * @returns {boolean}
 */
function validateForm(form) {
    let isValid = true;
    
    // Campos a serem validados especificamente
    const fieldsToValidate = ['nome', 'email', 'telefone', 'idade', 'disponibilidade', 'area-interesse'];

    fieldsToValidate.forEach(id => {
        const field = document.getElementById(id);
        if (field && !validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

/**
 * Valida um campo específico e exibe aviso ao usuário.
 * @param {HTMLElement} field 
 * @returns {boolean}
 */
function validateField(field) {
    let errorMessage = '';
    const value = field.value.trim();
    const id = field.id;
    
    field.classList.remove('is-invalid'); // Limpa o estado anterior
    
    // 1. Validação de campo vazio para todos os 'required'
    if (field.hasAttribute('required') && (value === '' || field.value === '')) {
        errorMessage = 'Este campo é obrigatório.';
    } 
    // 2. Validação de Nome (Mínimo de 5 caracteres)
    else if (id === 'nome' && value.length < 5) {
        errorMessage = 'O nome deve ter pelo menos 5 caracteres.';
    } 
    // 3. Validação de E-mail (Regex simples)
    else if (id === 'email' && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        errorMessage = 'E-mail inválido. Utilize o formato nome@dominio.com.';
    } 
    // 4. Validação de Telefone (conforme o pattern do input)
    else if (id === 'telefone' && !field.checkValidity()) {
         errorMessage = 'Telefone inválido. Formato esperado: (99) 99999-9999.';
    }
    // 5. Validação de Idade (Mínimo 16)
    else if (id === 'idade' && (parseInt(value) < 16 || parseInt(value) > 100)) {
        errorMessage = 'Você deve ter entre 16 e 100 anos para se cadastrar.';
    }
    
    // 6. Manipulação do DOM: Aviso ao usuário
    const errorElement = document.getElementById(`error-${id}`);
    if (errorMessage) {
        field.classList.add('is-invalid'); // Adiciona classe CSS para destacar a borda
        if (errorElement) errorElement.textContent = errorMessage; // Exibe o erro
        return false;
    } else {
        if (errorElement) errorElement.textContent = ''; // Limpa o erro
        return true;
    }
}


/**
 * Simula a submissão do formulário e feedback de sucesso.
 */
function simulateSubmission(form) {
    const successMessage = document.getElementById('successMessage');
    
    // Simulação de salvamento (Poderia ser um AJAX ou localStorage)
    console.log('Formulário Enviado com Sucesso!'); 
    
    // Exibe a mensagem de sucesso
    if (successMessage) {
        successMessage.style.display = 'block'; 
    }

    // Limpa o formulário e oculta a mensagem após 5 segundos
    setTimeout(() => {
        if (successMessage) {
            successMessage.style.display = 'none';
        }
        form.reset(); 
        // Navega de volta para a Home após o sucesso, para demonstrar o SPA
        navigate('home'); 
    }, 5000);
}
// Dropdown do menu "Projetos ▼"
document.addEventListener('click', (e) => {
  if (e.target.closest('.dropdown-item')) {
    const dropdown = e.target.closest('.dropdown-item').querySelector('.dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  } else {
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.style.display = 'none');
  }
});
