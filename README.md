# aulaProgramacaoWeb# 💙 Organização de Voluntários - Single Page Application (SPA)

## Descrição do Projeto

Este projeto consiste em uma Single Page Application (SPA) desenvolvida para uma organização de voluntariado. O objetivo é fornecer uma plataforma rápida e acessível para que novos voluntários possam conhecer a organização, seus projetos e se cadastrar. A aplicação utiliza rotas simples via JavaScript e Hash History para navegação sem recarregar a página.

---

## 🎯 Especificações Técnicas e Requisitos da Entrega Final

Esta versão do projeto cumpre com todas as especificações técnicas obrigatórias: Controle de Versão (GitFlow), Acessibilidade e Otimização para Produção.

### 1. Controle de Versão com Git/GitHub

* **Estratégia de Branching:** Utilizamos o modelo **GitFlow**. O desenvolvimento ocorre na branch `develop`, e os novos recursos são criados em branches `lancamento` dedicadas. A branch `main` é reservada para releases de produção.
* **Commits Semânticos:** Todo o histórico de commits segue o padrão semântico (e.g., `feat:`, `fix:`, `docs:`), garantindo clareza no histórico e automatização de changelogs.
* **Versionamento Semântico:** O sistema de releases é gerenciado com tags seguindo o padrão **vMAJOR.MINOR.PATCH** (Ex: `v1.0.0`), marcando versões estáveis e prontas para produção.

### 2. Acessibilidade (WCAG 2.1 Nível AA)

A aplicação foi rigorosamente revisada para garantir a conformidade com as diretrizes do WCAG 2.1 AA:

| Requisito | Status | Implementação Técnica |
| :--- | :--- | :--- |
| **Navegação por Teclado** | ✅ Cumprido | Anel de foco (`:focus` outline) visível em todos os elementos interativos (`a`, `button`, `input`). Foco movido programaticamente para o `<main>` após navegação SPA. |
| **Estrutura Semântica** | ✅ Cumprido | Uso de `header`, `nav`, `main`, `footer`, `fieldset`, `legend`, e associação correta de `label` com `input`. |
| **Contraste Mínimo** | ✅ Cumprido | Cores do tema ajustadas para garantir contraste de 4.5:1 (texto normal) em todas as seções (verificado com WebAIM Contrast Checker). |
| **Suporte a Leitores de Tela** | ✅ Cumprido | Uso de atributos **ARIA** (`role`, `aria-expanded`, `aria-controls`, `aria-live="polite"` nas mensagens de erro e sucesso) para comunicação clara do estado da interface. |
| **Modo Escuro / Alto Contraste** | ✅ Cumprido | Implementação de modo escuro via `prefers-color-scheme: dark` no CSS, atendendo às necessidades de usuários com baixa visão. |

### 3. Otimização para Produção

* **Minificação (Recomendado):** Para o deploy, os arquivos `index.html`, `style.css` e `script.js` devem ser minificados usando ferramentas de build (Gulp, Webpack ou ferramentas online) para reduzir o tempo de carregamento.
* **Compressão de Imagens:** Todas as imagens futuras devem ser comprimidas e otimizadas (e.g., Squoosh, TinyPNG).

---

## 🛠️ Como Executar o Projeto Localmente

1.  **Clone o Repositório:**
    ```bash
    git clone [LINK DO SEU REPOSITÓRIO PÚBLICO]
    ```
2.  **Acesse a Pasta:**
    ```bash
    cd aulaProgramacaoWeb
    ```
3.  **Execute:** Abra o arquivo `index.html` diretamente no seu navegador. O SPA será inicializado automaticamente.

---

## ⚙️ Tecnologias Utilizadas

* **HTML5:** Estrutura e Conteúdo.
* **CSS3:** Estilização e Responsividade.
* **JavaScript (Vanilla):** Lógica SPA (Rotas) e Validação de Formulário.
* **Git / GitHub:** Versionamento e Colaboração.