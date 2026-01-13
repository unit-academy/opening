// Função Auxiliar: Sanitização e Formatação (Segurança contra XSS)
const formatName = (str) => {
    // 1. Remove tags HTML perigosas (transforma < em &lt;)
    const safeStr = str.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });

    // 2. Capitaliza (Estética)
    return safeStr.charAt(0).toUpperCase() + safeStr.slice(1).toLowerCase();
};
document.addEventListener("DOMContentLoaded", () => {
    // --- 1. REFERÊNCIAS DO DOM ---
    const trigger = document.getElementById("botTrigger");
    const windowChat = document.getElementById("chatWindow");
    const closeBtn = document.getElementById("chatClose");
    const chatBody = document.getElementById("chatBody");

    // Adicionado: Referência à mensagem de redirecionamento global
    const redirectMessageGlobal = document.getElementById('redirectMessage'); 

    // Variáveis de Estado
    let inputArea, nameInput, sendBtn;
    let userName = "";
    let isChatOpen = false;

    // REMOVIDO: A segunda definição da função formatName foi removida para usar apenas a mais robusta no topo do arquivo.
    // const formatName = (str) => { ... };

    // ============================================================
    // LINKS DE CHECKOUT AVULSOS (PARA PREENCHIMENTO POSTERIOR)
    // ============================================================
    const individualModuleLinks = {
        criativa: "https://pay.kiwify.com.br/SEU_LINK_MODULO_CRIATIVA", // <-- SUBSTITUA PELO LINK REAL DE IA CRIATIVA
        automacao: "https://pay.kiwify.com.br/SEU_LINK_MODULO_AUTOMACAO", // <-- SUBSTITUA PELO LINK REAL DE AUTOMAÇÃO
        web: "https://pay.kiwify.com.br/dVcVlDI", // <-- SUBSTITUA PELO LINK REAL DE WEB FULL STACK
        mobile: "https://pay.kiwify.com.br/SEU_LINK_MODULO_MOBILE" // <-- SUBSTITUA PELO LINK REAL DE MOBILE
    };
    // Link para o UNIT Pass (Acesso Vitalício)
    const unitPassLink = "https://pay.kiwify.com.br/dVcVlDI";


    // ============================================================
    // 2. CÉREBRO DO BOT (BASE DE CONHECIMENTO & FILOSOFIA UNIT)
    // ============================================================
    const knowledge = {
        // --- ABERTURA ---
        intro: {
            msg: "Olá. Bem-vindo à interface da <strong>UNIT Academy</strong>.<br><br>Sou o assistente virtual da UNIT e estou aqui para orientá-lo na escolha da sua formação. <br>Nossa metodologia foca na formação de profissionais preparados para a nova realidade do desenvolvimento de soluções assistido por IA.<br>Para iniciarmos, <strong>qual é o seu nome?</strong>",
            type: "input"
        },

        // --- MENU PRINCIPAL ---
        menu: {
            getMsg: (name) => `Olá, <strong>${name}</strong> Seja bem-vindo. A UNIT forma <strong>Arquitetos de Soluções</strong>, profissionais capazes de arquitetar e desenhar sistemas completos.<br><br>Para recomendarmos a trilha ideal, selecione seu foco principal:`,
            options: [
                { text: "💻 Arquitetura Web Full Stack", next: "perfil_iniciante" },
                { text: "⚙️ Lógica & Automação (Backend)", next: "perfil_empreendedor" },
                { text: "🛡️ UNIT Pass (Acesso Vitalício)", next: "info_combo" },
                { text: "🎨 Design & Assets com IA", next: "perfil_criativo" },
                { text: "📱 Mobile & Distribuição (Apps)", next: "perfil_mobile" },
                { text: "🏛️ Visão Institucional & Founder", next: "manifesto_unit" },
                { text: "❓ Dúvidas Frequentes (FAQ)", next: "faq_rapido" }
            ]
        },

        // --- FLUXO 1: WEB FULL STACK (INICIANTE) ---
        perfil_iniciante: {
            msg: "Excelente escolha. O mercado exige profissionais que entreguem soluções completas (SaaS, Dashboards, Plataformas).<br><br>Nesta formação, aplicamos a metodologia <strong>IA-First</strong>: você aprende os fundamentos da Engenharia de Software e Arquitetura MVC, enquanto utiliza a IA para acelerar a codificação da sintaxe bruta. Como você deseja prosseguir?",
            options: [
                { text: "📄 Ler Ementa Técnica (Web)", action: "open_modal", target: "web" },
                { text: "🛡️ Adquirir UNIT Pass (Vitalício)", action: "checkout_flow", url: unitPassLink /* Link para UNIT Pass (Acesso Vitalício) */ },
                { text: "Matricular apenas em Web Stack", action: "checkout_flow", url: individualModuleLinks.web /* Link para módulo Web Stack */ },
                { text: "🔙 Voltar ao Menu", next: "back_to_menu" }
            ]
        },

        // --- FLUXO 2: AUTOMAÇÃO E BACKEND ---
        perfil_empreendedor: {
            msg: "Perfeito. O foco aqui é eficiência operacional. Você não precisa ser um desenvolvedor sênior para criar automações poderosas.<br><br>Ensinamos a utilizar Python e APIs para criar <strong>Agentes Autônomos</strong> e sistemas que processam dados, atendem clientes e executam tarefas complexas sem intervenção humana. Como você deseja prosseguir?",
            options: [
                { text: "📄 Ler Ementa Técnica (Automação)", action: "open_modal", target: "automacao" },
                { text: "🛡️ Adquirir UNIT Pass (Vitalício)", action: "checkout_flow", url: unitPassLink /* Link para UNIT Pass (Acesso Vitalício) */ },
                { text: "Matricular apenas em Automação", action: "checkout_flow", url: individualModuleLinks.automacao /* Link para módulo Automação */ },
                { text: "🔙 Voltar ao Menu", next: "back_to_menu" }
            ]
        },

        // --- FLUXO 3: IA CRIATIVA ---
        perfil_criativo: {
            msg: "A apresentação visual é crítica para a validação de produtos digitais.<br><br>Nesta trilha, você dominará a geração de ativos de nível profissional (Vídeo, Imagem e Áudio) utilizando IAs generativas, eliminando a dependência de bancos de imagem genéricos ou contratação de terceiros. Como você deseja prosseguir?",
            options: [
                { text: "📄 Ler Ementa Técnica (Design)", action: "open_modal", target: "criativa" },
                { text: "🛡️ Adquirir UNIT Pass (Vitalício)", action: "checkout_flow", url: unitPassLink /* Link para UNIT Pass (Acesso Vitalício) */ },
                { text: "Matricular apenas em IA Criativa", action: "checkout_flow", url: individualModuleLinks.criativa /* Link para módulo IA Criativa */ },
                { text: "🔙 Voltar ao Menu", next: "back_to_menu" }
            ]
        },

        // --- FLUXO 4: MOBILE ---
        perfil_mobile: {
            msg: "A presença em lojas de aplicativos aumenta drasticamente a percepção de valor do seu software.<br><br>Utilizamos a técnica de <strong>Wrappers Nativos</strong> para converter sistemas Web em aplicativos instaláveis de alta performance, simplificando o processo de desenvolvimento e publicação. Como você deseja prosseguir?",
            options: [
                { text: "📄 Ler Ementa Técnica (Mobile)", action: "open_modal", target: "mobile" },
                { text: "🛡️ Adquirir UNIT Pass (Vitalício)", action: "checkout_flow", url: unitPassLink /* Link para UNIT Pass (Acesso Vitalício) */ },
                { text: "Matricular apenas em Mobile", action: "checkout_flow", url: individualModuleLinks.mobile /* Link para módulo Mobile */ },
                { text: "🔙 Voltar ao Menu", next: "back_to_menu" }
            ]
        },

        // --- FLUXO 5: COMBO VITALÍCIO ---
        info_combo: {
            msg: "O <strong>UNIT Pass</strong> é a nossa modalidade de acesso completo. Foi desenhado para oferecer ao aluno uma base sólida e abrangente na arquitetura e geração de sistemas.<br><br><strong>Vantagens da Assinatura Vitalícia:</strong><br>✅ <strong>Acesso Total:</strong> As 4 Formações (Web, Automação, Design e Mobile).<br>✅ <strong>Updates Perpétuos:</strong> Acesso sempre que houver atualizações relevantes e sem custo adicional.<br>✅ <strong>Certificação Master:</strong> Validação completa de competência em Arquitetura de Sistemas.<br>✅ <strong>Economia:</strong> Vantagem financeira superior à aquisição dos módulos avulsos. Como você deseja prosseguir?",
            options: [
                { text: "🛡️ Destravar Acesso Vitalício Agora", action: "checkout_flow", url: unitPassLink /* Link para UNIT Pass (Acesso Vitalício) */ },
                { text: "Prefiro escolher um módulo avulso", next: "menu_treinamentos" },
                { text: "🔙 Voltar ao Menu", next: "back_to_menu" }
            ]
        },

        // --- FLUXO 6: MANIFESTO & FILOSOFIA ---
        manifesto_unit: {
            msg: "A UNIT foi fundada sob a visão de <strong>Gustavo Capichoni</strong>. Defendemos o conceito de <strong>Autonomia Técnica Real</strong>.<br><br>Acreditamos que o profissional moderno deve deter o controle sobre suas ferramentas de produção. Ao dominar o código e a IA, você elimina intermediários e ganha velocidade para validar e escalar suas próprias ideias. Como você deseja prosseguir?",
            options: [
                { text: "Entendi. Quero iniciar minha formação.", next: "menu_treinamentos" },
                { text: "Sobre o Fundador (Bio)", next: "bio_gustavo" },
                { text: "🔙 Voltar ao Menu", next: "back_to_menu" }
            ]
        },

        bio_gustavo: {
            msg: "Gustavo Capichoni é Arquiteto de Soluções Digitais especializado em sistemas de alta performance. Com expertise em <strong>Trading Quantitativo</strong> e <strong>Engenharia de Software</strong>, desenvolve arquiteturas de <strong>SaaS</strong> e automações empresariais.<br><br>Diferente de instrutores puramente acadêmicos, sua metodologia é extraída diretamente do campo de batalha, focando no que funciona em ambientes de alta pressão.",
            options: [
                { text: "Ver grade de treinamentos", next: "menu_treinamentos" },
                { text: "🔙 Voltar ao Menu", next: "back_to_menu" }
            ]
        },

        // --- FLUXO 7: FAQ RÁPIDO ---
        faq_rapido: {
            msg: "Selecione o tópico da sua dúvida para uma resposta objetiva:",
            options: [
                { text: "💻 Pré-requisitos de Programação", next: "faq_programar" },
                { text: "🛡️ Política de Garantia", next: "faq_garantia" },
                { text: "📅 Tempo de Acesso", next: "faq_acesso" },
                { text: "📱 Requisitos de Hardware", next: "faq_pc" },
                { text: "🔙 Voltar ao Menu", next: "back_to_menu" }
            ]
        },
        faq_programar: {
            msg: "<strong>Não exigimos experiência prévia.</strong><br>A metodologia IA-First foi desenhada para nivelar o conhecimento. A IA executa a codificação complexa; nós ensinamos você a ler, estruturar e corrigir o código. É o fim da barreira de entrada técnica tradicional. Como você deseja prosseguir?",
            options: [{ text: "Voltar às Dúvidas", next: "faq_rapido" }, { text: "Ir para Formações", next: "menu_treinamentos" }]
        },
        faq_garantia: {
            msg: "<strong>Segurança Contratual.</strong><br>Oferecemos garantia incondicional de 7 dias, processada diretamente pela plataforma Kiwify. Caso a metodologia não se adeque ao seu perfil, o reembolso é integral e automático. Como você deseja prosseguir?",
            options: [{ text: "Voltar às Dúvidas", next: "faq_rapido" }, { text: "Ir para Formações", next: "menu_treinamentos" }]
        },
        faq_acesso: {
            msg: "<strong>Sobre o Acesso: Vitalício ou Individual.</strong><br>Ao adquirir o UNIT Pass, o conteúdo é seu permanentemente. Você estuda no seu ritmo e recebe todas as atualizações futuras da plataforma sem taxas extras. Como você deseja prosseguir?",
            options: [{ text: "Voltar às Dúvidas", next: "faq_rapido" }, { text: "Ir para Formações", next: "menu_treinamentos" }]
        },
        faq_pc: {
            msg: "<strong>Hardware Básico.</strong><br>Como utilizamos IAs em nuvem (OpenAI, Google, Anthropic), o processamento pesado não ocorre na sua máquina. Um notebook simples ou computador com acesso estável à internet é suficiente. Como você deseja prosseguir?",
            options: [{ text: "Voltar às Dúvidas", next: "faq_rapido" }, { text: "Ir para Formações", next: "menu_treinamentos" }]
        },

        // --- AUXILIARES (MENU TREINAMENTOS ATUALIZADO) ---
        menu_treinamentos: {
            msg: "Confira abaixo as opções de especialização disponíveis na UNIT Academy:",
            options: [
                { text: "🛡️ UNIT Pass (Acesso Vitalício)", next: "info_combo" },
                { text: "🎨 Design & Assets com IA", action: "open_modal", target: "criativa" },
                { text: "⚙️ Lógica & Automação", action: "open_modal", target: "automacao" },
                { text: "💻 Arquitetura Web Full Stack", action: "open_modal", target: "web" },
                { text: "📱 Mobile & Distribuição", action: "open_modal", target: "mobile" },
                { text: "🔙 Voltar ao Menu", next: "back_to_menu" }
            ]
        }
    };

    // ============================================================
    // 3. MOTOR DE EXECUÇÃO (LÓGICA & INTERFACE)
    // ============================================================

    function initInputArea() {
        if (!document.getElementById("botInputArea")) {
            const div = document.createElement("div");
            div.id = "botInputArea";
            div.className = "chat-input-area";
            div.innerHTML = `
                <input type="text" id="botNameInput" class="chat-input" placeholder="Digite seu nome..." autocomplete="off">
                <button id="botSendBtn" class="chat-send"><i class="fa-solid fa-paper-plane"></i></button>
            `;
            windowChat.appendChild(div);

            inputArea = div;
            nameInput = document.getElementById("botNameInput");
            sendBtn = document.getElementById("botSendBtn");

            sendBtn.onclick = handleNameSubmit;
            nameInput.onkeypress = (e) => {
                if (e.key === "Enter") handleNameSubmit();
            };
        } else {
            inputArea = document.getElementById("botInputArea");
            nameInput = document.getElementById("botNameInput");
        }
    }

    function showTyping() {
        const div = document.createElement("div");
        div.className = "msg msg-bot typing-indicator";
        div.id = "typingBubble";
        div.innerHTML = `<span>.</span><span>.</span><span>.</span>`;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
        return div;
    }

    function addMsg(text, type, delay = 0) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const div = document.createElement("div");
                div.className = `msg msg-${type}`;
                div.innerHTML = text;
                chatBody.appendChild(div);
                chatBody.scrollTop = chatBody.scrollHeight;
                resolve();
            }, delay);
        });
    }

    function addOptions(options) {
        const div = document.createElement("div");
        div.className = "chat-options";
        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "chat-btn";
            btn.innerHTML = `<span style="color:var(--neon-green)">›</span> ${opt.text}`;
            btn.onclick = () => handleOptionClick(opt);
            div.appendChild(btn);
        });
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function handleNameSubmit() {
        const rawName = nameInput.value.trim();
        if (rawName.length > 1) {
            userName = formatName(rawName); // Aplica a formatação automática
            addMsg(userName, "user");
            inputArea.classList.remove("active");

            const typing = showTyping();
            setTimeout(() => {
                typing.remove();
                const menuData = knowledge.menu;
                addMsg(menuData.getMsg(userName), "bot");
                addOptions(menuData.options);
            }, 1000);
        }
    }

    function handleOptionClick(opt) {
        addMsg(opt.text, "user");

        const oldOpts = document.querySelectorAll(".chat-options");
        oldOpts.forEach(el => el.remove());

        const typing = showTyping();

        setTimeout(() => {
            typing.remove();

            if (opt.action === "open_modal") {
                addMsg("Carregando plano de ensino... 📄", "bot");
                if (typeof abrirModalM === "function") {
                    abrirModalM(opt.target);
                    // Pega o link específico do módulo avulso usando opt.target
                    const specificModuleLink = individualModuleLinks[opt.target];

                    setTimeout(() => {
                        addMsg(`Ementa de ${opt.target.toUpperCase()} disponível na tela. Como você deseja prosseguir?`, "bot");
                        addOptions([
                            { text: "🛡️ Adquirir UNIT Pass (Vitalício)", action: "checkout_flow", url: unitPassLink /* Link para UNIT Pass (Acesso Vitalício) */ },
                            { text: "Matricular apenas neste módulo", action: "checkout_flow", url: specificModuleLink /* Link para módulo específico */ },
                            { text: "🔙 Voltar ao Menu", next: "back_to_menu" }
                        ]);
                    }, 1200);
                }
            } else if (opt.action === "checkout_flow") {
                // Fechar a janela do chat imediatamente para mostrar a sobreposição global
                resetAndCloseChat(); // Garante que o chat esteja fora do caminho

                // Ativar a mensagem de redirecionamento global
                if (redirectMessageGlobal) {
                    redirectMessageGlobal.style.opacity = '1';
                    redirectMessageGlobal.style.visibility = 'visible';
                }

                // Redireciona após um pequeno atraso (para dar tempo de ver a mensagem)
                setTimeout(() => {
                    window.location.href = opt.url;
                }, 2000); // 2 segundos de exibição da mensagem global
            } else if (opt.next) {
                runFlow(opt.next);
            }

        }, 600);
    }

    function runFlow(flowKey) {
        if (flowKey === "back_to_menu") {
            const menuData = knowledge.menu;
            addMsg(`Menu Principal acessado. Como posso auxiliar, ${userName}?`, "bot");
            addOptions(menuData.options);
            return;
        }

        const data = knowledge[flowKey];
        if (data) {
            const msgText = (typeof data.getMsg === "function") ? data.getMsg(userName) : data.msg;
            addMsg(msgText, "bot");
            if (data.options) addOptions(data.options);
        }
    }

    // ============================================================
    // 4. CONTROLE DE JANELA E INICIALIZAÇÃO
    // ============================================================

    function openChat() {
        windowChat.classList.add("open");
        isChatOpen = true;

        if (window.innerWidth < 768) {
            document.body.classList.add("chat-open");
        }

        if (!userName) {
            chatBody.innerHTML = "";
            initInputArea();

            setTimeout(() => {
                addMsg(knowledge.intro.msg, "bot");
                setTimeout(() => {
                    const input = document.getElementById("botInputArea");
                    if (input) {
                        input.classList.add("active");
                        const field = document.getElementById("botNameInput");
                        if (field) field.focus();
                    }
                }, 500);
            }, 300);
        }
    }

    function resetAndCloseChat() {
        windowChat.classList.remove("open");
        isChatOpen = false;
        document.body.classList.remove("chat-open");

        setTimeout(() => {
            userName = "";
            chatBody.innerHTML = "";
            if (inputArea) inputArea.classList.remove("active");
            if (nameInput) nameInput.value = "";
        }, 400);
    }

    trigger.addEventListener("click", () => {
        if (!isChatOpen) openChat();
        else resetAndCloseChat();
    });

    closeBtn.addEventListener("click", resetAndCloseChat);
});