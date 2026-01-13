/* ==================================================================
   DADOS DOS TREINAMENTOS (O "Banco de Dados" Local)
   Atualizado: Formato de Lista Vertical (Tópicos) e Agnóstico a Ferramentas.
================================================================== */
const TRILHAS_DATA = {
    "criativa": {
        title: "Design & Assets com IA",
        desc: "A fundação visual. Antes de escrever código, aprendemos a gerar os recursos gráficos e vídeos que darão vida ao sistema.",
        skills: "Domínio completo da geração de mídia sintética (Imagem, Vídeo e Áudio) para uso profissional.",
        list: [
            { 
                title: "Módulo 01: Introdução & Visão Geral", 
                tag: "Conceito", 
                desc: "<strong>Tópicos:</strong><br>• O cenário da IA Generativa<br>• Diferença entre Modelos (LLM vs Diffusion)<br>• Ética e Direitos Autorais<br>• Configuração do ecossistema de criação" 
            },
            { 
                title: "Módulo 02: Arsenal Criativo & Setup", 
                tag: "Arsenal", 
                desc: "<strong>Tópicos:</strong><br>• Acesso aos Geradores de Imagem High-End<br>• Plataformas de Vídeo Sintético<br>• IAs de Voz e Áudio<br>• Gestão de créditos e planos" 
            },
            { 
                title: "Módulo 03: Engenharia de Prompts (Visual)", 
                tag: "Fundamentos", 
                desc: "<strong>Tópicos:</strong><br>• Estrutura lógica de um comando visual<br>• Parâmetros de Câmera e Renderização<br>• Estilização e Iluminação<br>• Controle de Consistência (Seeds)" 
            },
            { 
                title: "Módulo 04: Síntese de Imagem (UI Assets)", 
                tag: "Prática", 
                desc: "<strong>Tópicos:</strong><br>• Criação de Ícones e Botões para Apps<br>• Texturas e Backgrounds para Web<br>• Upscaling (Aumento de resolução)<br>• Remoção de fundo e Vetorização" 
            },
            { 
                title: "Módulo 05: Vídeo Generativo & Motion", 
                tag: "Multimídia", 
                desc: "<strong>Tópicos:</strong><br>• Conversão de Texto para Vídeo<br>• Animação de Imagens Estáticas<br>• Controle de movimento de câmera<br>• Loops para Backgrounds de Sites" 
            },
            { 
                title: "Módulo 06: Avatares & Voz Neural", 
                tag: "Aplicação", 
                desc: "<strong>Tópicos:</strong><br>• Clonagem de Voz e Text-to-Speech<br>• Sincronia Labial (Lip Sync)<br>• Criação de Apresentadores Virtuais<br>• Produção de VSL (Vídeo de Vendas)" 
            },
            { 
                title: "Módulo 07: Prototipagem de Interfaces", 
                tag: "Workflow", 
                desc: "<strong>Tópicos:</strong><br>• Geração de telas de UI/UX completas<br>• Wireframes conceituais com IA<br>• Exportação de assets para o código" 
            }
        ]
    },
    "automacao": {
        title: "Lógica & Automação (Backend)",
        desc: "O cérebro da operação. Preparamos o ambiente para a IA escrever scripts que trabalham por você.",
        skills: "Capacidade de criar 'funcionários digitais' e scripts complexos usando a lógica assistida por IA.",
        list: [
            { 
                title: "Módulo 01: Fundamentos da Automação", 
                tag: "Conceito", 
                desc: "<strong>Tópicos:</strong><br>• Lógica de Programação Estruturada<br>• O conceito de API e Webhooks<br>• Protocolos de comunicação web<br>• Arquitetura Cliente-Servidor" 
            },
            { 
                title: "Módulo 02: Ambiente de Desenvolvimento", 
                tag: "Setup", 
                desc: "<strong>Tópicos:</strong><br>• Instalação do Editor de Código (IDE)<br>• Configuração do Interpretador Python<br>• Variáveis de Ambiente do Sistema<br>• Gerenciamento de Pacotes" 
            },
            { 
                title: "Módulo 03: Metodologia IA-First", 
                tag: "Metodologia", 
                desc: "<strong>Tópicos:</strong><br>• Engenharia de Prompt para Código<br>• Leitura e Interpretação de Logs<br>• Técnicas de Debugging com IA<br>• Estruturação de scripts modulares" 
            },
            { 
                title: "Módulo 04: Manipulação de Dados", 
                tag: "Técnico", 
                desc: "<strong>Tópicos:</strong><br>• Leitura de planilhas e arquivos CSV<br>• Tratamento e limpeza de dados<br>• Filtros lógicos<br>• Geração automática de relatórios" 
            },
            { 
                title: "Módulo 05: Web Scraping (Robôs)", 
                tag: "Prática", 
                desc: "<strong>Tópicos:</strong><br>• Automação de Navegador Web<br>• Extração de dados de sites<br>• Interação com formulários e botões<br>• Armazenamento de dados coletados" 
            },
            { 
                title: "Módulo 06: Bots de Mensageria", 
                tag: "Aplicação", 
                desc: "<strong>Tópicos:</strong><br>• Conexão com APIs de Mensagem<br>• Recebimento e envio automático<br>• Lógica de triagem de atendimento<br>• Integração com IA de texto" 
            },
            { 
                title: "Módulo 07: Trader Quant (Projeto Final)", 
                tag: "Avançado", 
                desc: "<strong>Tópicos:</strong><br>• Conexão com API de Corretoras<br>• Leitura de dados de mercado<br>• Lógica condicional de Compra/Venda<br>• Travas de segurança e risco" 
            }
        ]
    },
    "web": {
        title: "Arquitetura Web Full Stack",
        desc: "A construção do ecossistema. Aprenda a levantar plataformas completas, do banco de dados ao front-end.",
        skills: "Você se torna um Arquiteto de Software capaz de construir SaaS, Dashboards e Plataformas de Venda.",
        list: [
            { 
                title: "Módulo 01: O Ecossistema Web", 
                tag: "Conceito", 
                desc: "<strong>Tópicos:</strong><br>• Como a internet funciona (DNS/IP)<br>• Front-end vs Back-end<br>• Ciclo de vida de uma requisição<br>• Estrutura de Hospedagem" 
            },
            { 
                title: "Módulo 02: Servidor Local", 
                tag: "Setup", 
                desc: "<strong>Tópicos:</strong><br>• Instalação de Servidor Web Local<br>• Configuração de Banco de Dados<br>• Ambientes de execução (Runtime)<br>• Portas e Permissões" 
            },
            { 
                title: "Módulo 03: Arquitetura de Software", 
                tag: "Estrutura", 
                desc: "<strong>Tópicos:</strong><br>• Padrão MVC (Model-View-Controller)<br>• Organização profissional de pastas<br>• Separação de Lógica e Visual<br>• Boas práticas de segurança" 
            },
            { 
                title: "Módulo 04: Front-End Inteligente", 
                tag: "Vision-to-Code", 
                desc: "<strong>Tópicos:</strong><br>• Conversão de imagem para HTML/CSS<br>• Layouts Responsivos (Mobile/Desktop)<br>• Estilização avançada com IA<br>• Interatividade com Scripts" 
            },
            { 
                title: "Módulo 05: Banco de Dados", 
                tag: "Backend", 
                desc: "<strong>Tópicos:</strong><br>• Modelagem de dados relacionais<br>• Criação de Tabelas e Índices<br>• Consultas de leitura e gravação<br>• Conexão segura com o sistema" 
            },
            { 
                title: "Módulo 06: Sistemas de Acesso", 
                tag: "Aplicação", 
                desc: "<strong>Tópicos:</strong><br>• Lógica de Cadastro e Login<br>• Criptografia e Segurança de dados<br>• Sessões de usuário<br>• Painéis restritos (Dashboard)" 
            },
            { 
                title: "Módulo 07: Deploy & Publicação", 
                tag: "Publicação", 
                desc: "<strong>Tópicos:</strong><br>• Contratação de Servidor Cloud<br>• Transferência de arquivos (FTP/Git)<br>• Configuração de Domínio e DNS<br>• Certificados de Segurança (SSL)" 
            }
        ]
    },
    "mobile": {
        title: "Mobile & Distribuição (Apps)",
        desc: "Domine a tela mais importante do mundo. Converta seus sistemas web em aplicativos nativos instaláveis.",
        skills: "Capacidade de transformar qualquer projeto Web em um aplicativo (Android/iOS) e publicar nas lojas.",
        list: [
            { 
                title: "Módulo 01: O Conceito Mobile-First", 
                tag: "Conceito", 
                desc: "<strong>Tópicos:</strong><br>• Diferenças de UX (Toque vs Clique)<br>• Navegação por Gestos<br>• Áreas de segurança da tela<br>• Planejamento de App Híbrido" 
            },
            { 
                title: "Módulo 02: Ambiente de Compilação", 
                tag: "Setup", 
                desc: "<strong>Tópicos:</strong><br>• Instalação das SDKs necessárias<br>• Configuração de emuladores<br>• Preparação do ambiente Java/Build<br>• Variáveis de sistema" 
            },
            { 
                title: "Módulo 03: Tecnologia Wrapper", 
                tag: "Estratégia", 
                desc: "<strong>Tópicos:</strong><br>• O conceito de Webview<br>• Ponte entre Web e Nativo<br>• Configuração de Manifesto do App<br>• Permissões de sistema" 
            },
            { 
                title: "Módulo 04: UI/UX Nativa", 
                tag: "Design", 
                desc: "<strong>Tópicos:</strong><br>• Remoção de comportamentos de navegador<br>• Fixação de menus e barras<br>• Ícones e Telas de Abertura (Splash)<br>• Transições fluidas" 
            },
            { 
                title: "Módulo 05: Recursos do Dispositivo", 
                tag: "Integração", 
                desc: "<strong>Tópicos:</strong><br>• Acesso à Câmera e Galeria<br>• Geolocalização (GPS)<br>• Vibração e Sensores<br>• Notificações Locais" 
            },
            { 
                title: "Módulo 06: Compilação (Build)", 
                tag: "Técnico", 
                desc: "<strong>Tópicos:</strong><br>• Geração de Chaves de Assinatura (Keystore)<br>• Compilação de pacotes (APK/AAB)<br>• Otimização e redução de tamanho<br>• Testes em dispositivos reais" 
            },
            { 
                title: "Módulo 07: Lojas e Distribuição", 
                tag: "Business", 
                desc: "<strong>Tópicos:</strong><br>• Criação de Conta de Desenvolvedor<br>• Preenchimento de Ficha da Loja<br>• Prints e Assets de Marketing<br>• Processo de Submissão e Review" 
            }
        ]
    }
};

/* ==================================================================
   LÓGICA E FUNÇÕES (INTOCADA - SÓ COPIAR E COLAR TUDO)
================================================================== */

function getTagStyle(tagName) {
    const styles = {
        default: { color: "var(--primary)", bg: "rgba(124, 58, 237, 0.15)" },
        gray:    { color: "#a0a0b0",        bg: "rgba(255,255,255,0.05)" },
        green:   { color: "var(--neon-green)", bg: "rgba(0, 255, 157, 0.1)" },
        orange:  { color: "var(--neon-orange)", bg: "rgba(255, 159, 67, 0.1)" }
    };

    if (["Setup", "Fundamentos", "Conceito", "Metodologia", "Estrutura"].includes(tagName)) return styles.gray;
    if (["Prática", "Aplicação", "Vision-to-Code", "Workflow", "Integração"].includes(tagName)) return styles.green;
    if (["Avançado", "Business", "Técnico", "Publicação", "Build", "Arsenal", "Multimídia", "Design"].includes(tagName)) return styles.orange;

    return styles.default;
}

function abrirModalM(tipo) {
    const data = TRILHAS_DATA[tipo];
    const modalM = document.getElementById("Mmodal");

    if (!data) return;

    document.getElementById("MmodalTitle").innerHTML = data.title;
    document.getElementById("MmodalDesc").innerHTML = data.desc;
    document.getElementById("MmodalSkills").innerHTML = data.skills;

    const listaHTML = data.list.map(item => {
        const style = getTagStyle(item.tag);
        return `
            <li style="margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <strong style="color: #fff; font-size: 1rem;">${item.title}</strong>
                    <span style="background: ${style.bg}; color: ${style.color}; padding: 3px 10px; border-radius: 4px; font-size: 0.7rem; border: 1px solid ${style.color}; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                        ${item.tag}
                    </span>
                </div>
                <p style="color: #a0a0b0; font-size: 0.85rem; margin: 0; line-height: 1.5;">${item.desc}</p>
            </li>
        `;
    }).join('');

    document.getElementById("MmodalList").innerHTML = listaHTML;
    modalM.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    const botoesEmenta = document.querySelectorAll(".MopenModal");
    const modalM = document.getElementById("Mmodal");
    const closeBtn = document.querySelector(".Mclose");

    botoesEmenta.forEach(btn => {
        btn.addEventListener("click", () => {
            abrirModalM(btn.getAttribute("data-train"));
        });
    });

    if (closeBtn) closeBtn.onclick = () => { modalM.style.display = "none"; };
    window.addEventListener("click", e => { if (e.target === modalM) modalM.style.display = "none"; });

    setupDepoimentos();
});

function setupDepoimentos() {
    const comments = [
    // --- GRUPO 1: Resultados Rápidos (ROI) ---
    { user: "@pedro_santos", text: "Em 3 dias de curso botei meu primeiro robô trader pra rodar. Já pagou o investimento da formação." },
    { user: "@mari_digital", text: "Eu gastava R$ 2.000 com designer. Hoje faço tudo sozinha com o módulo de IA Criativa. Surreal." },
    { user: "@crypto_dev", text: "Nunca tinha escrito uma linha de código. Ontem subi minha própria exchange de crypto. O método IA-First é vida." },
    
    // --- GRUPO 2: Carreira e Profissão ---
    { user: "@lucas_tech", text: "A UNIT não ensina só a apertar botão, ensina a pensar como arquiteto. Consegui meu primeiro freela de R$ 3k na primeira semana." },
    { user: "@ana_web3", text: "Estava travada estudando Java há 6 meses. Com a técnica Wrapper do Gustavo, lancei meu app na PlayStore em uma tarde." },
    { user: "@joao_automacao", text: "Meus bots de WhatsApp agora atendem 24h. Minha agência escalou de 5 para 50 clientes sem contratar ninguém." },

    // --- GRUPO 3: Mudança de Vida / Iniciantes ---
    { user: "@felipe_start", text: "Achei que era golpe por ser barato, mas o conteúdo do módulo Full Stack vale fácil uns 2 mil reais. Entrega absurda." },
    { user: "@clara_design", text: "O ImageFX mudou meu jogo. Criei um canal dark no TikTok só com vídeos de IA e já bateu 10k seguidores." },
    { user: "@roberto_senior", text: "Tenho 45 anos e achava que era velho pra tecnologia. O método é tão didático que viciei. Já automatizei todas as planilhas da minha loja." },

    // --- GRUPO 4: Autoridade e Técnica ---
    { user: "@dev_senior_br", text: "Sou dev há 10 anos e fiquei chocado. A velocidade que a gente ganha usando o Cursor + IA do jeito que a UNIT ensina é desleal." },
    { user: "@agencia_top", text: "Treinei toda minha equipe com esse curso. A produtividade triplicou. O módulo de automação salvou nossa operação." },
    { user: "@investidor_br", text: "O setup dos robôs é muito seguro. Não é promessa de dinheiro fácil, é matemática e lógica. Aprovado." },

    // --- GRUPO 5: Mobile e Inovação ---
    { user: "@app_maker", text: "Transformei o site da minha pizzaria em App nativo com a aula de Wrapper. Os pedidos aumentaram 40%." },
    { user: "@beatriz_ui", text: "As aulas de UI Design com IA são ouro. Gere os assets, jogo no código e pronto. Adeus bloqueio criativo." },
    { user: "@tech_founder", text: "O suporte é incrível e a comunidade se ajuda muito. Valeu cada centavo do acesso vitalício." },
    { user: "@gustavo_fan", text: "Só o módulo de Python pra Trader já valeria o preço cheio. O resto é bônus. Recomendo demais!" }
];

    let cIndex = 0;
    const commentDisplay = document.getElementById("comment-display");
    if(!commentDisplay) return;

    const userNameEl = commentDisplay.querySelector(".user-name");
    const userTextEl = commentDisplay.querySelector(".user-text");

    function updateComment() {
        commentDisplay.style.opacity = 0;
        setTimeout(() => {
            userNameEl.textContent = comments[cIndex].user;
            userTextEl.textContent = `"${comments[cIndex].text}"`;
            cIndex = (cIndex + 1) % comments.length;
            commentDisplay.style.opacity = 1;
        }, 500);
    }

    if(comments.length > 0) {
        userNameEl.textContent = comments[0].user;
        userTextEl.textContent = `"${comments[0].text}"`;
        setInterval(updateComment, 5000);
    }
}