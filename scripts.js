document.addEventListener('DOMContentLoaded', () => {
    // Configuração de áudio
    let bgMusic = new Audio('audio/cyberpunk-theme.mp3');
    bgMusic.loop = true;
    let isMusicPlaying = false;

    // Elementos principais
    const mainSection = document.querySelector('.main-section');
    const navCards = document.querySelector('.nav-cards');
    const welcomeMessage = document.querySelector('.welcome-message');
    const warningMessage = document.querySelector('.warning-message');

    // Conteúdo inicial
    const initialContent = mainSection.innerHTML;

    // Controles de navegação
    document.getElementById('btnHome').addEventListener('click', () => {
        showHome();
    });

    // Controle de música
    document.getElementById('btnMusic').addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            document.getElementById('btnMusic').textContent = '🔇 Música';
        } else {
            bgMusic.play();
            document.getElementById('btnMusic').textContent = '�� Música';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Alternador de tema
    let currentTheme = 'blue';
    const themes = {
        blue: {
            '--neon-primary': '#00f3ff',
            '--neon-secondary': '#ff00ff'
        },
        green: {
            '--neon-primary': '#00ff00',
            '--neon-secondary': '#ffff00'
        },
        pink: {
            '--neon-primary': '#ff00ff',
            '--neon-secondary': '#00f3ff'
        }
    };

    document.getElementById('btnTheme').addEventListener('click', () => {
        const themeKeys = Object.keys(themes);
        const currentIndex = themeKeys.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themeKeys.length;
        currentTheme = themeKeys[nextIndex];

        const root = document.documentElement;
        const newTheme = themes[currentTheme];
        root.style.setProperty('--neon-blue', newTheme['--neon-primary']);
        root.style.setProperty('--neon-pink', newTheme['--neon-secondary']);
    });

    // Simula um efeito de terminal sendo hackeado
    setTimeout(() => {
        document.querySelector('.warning-message').style.display = 'none';
        document.querySelector('.welcome-message').style.display = 'block';
    }, 3000);

    // Adiciona efeitos de glitch aleatórios
    setInterval(() => {
        const elements = document.querySelectorAll('.glitch');
        elements.forEach(element => {
            if (Math.random() > 0.7) {
                element.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
                setTimeout(() => {
                    element.style.transform = 'translate(0)';
                }, 100);
            }
        });
    }, 2000);

    // Navegação dos cards
    document.querySelectorAll('.section-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const section = e.target.closest('.card').dataset.section;
            navigateToSection(section);
        });
    });

    // Função para mostrar a tela inicial
    function showHome() {
        // Limpa o conteúdo principal
        mainSection.innerHTML = '';
        
        // Recria os cards de navegação
        const navCardsDiv = document.createElement('div');
        navCardsDiv.className = 'nav-cards';
        
        const sections = ['identity', 'history', 'abilities'];
        const icons = ['🎭', '📖', '⚡'];
        const titles = ['IDENTIDADE', 'HISTÓRIA', 'HABILIDADES'];
        
        sections.forEach((section, index) => {
            const card = document.createElement('div');
            card.className = 'card section-card';
            card.dataset.section = section;
            
            card.innerHTML = `
                <div class="card-icon">${icons[index]}</div>
                <h3>${titles[index]}</h3>
            `;
            
            card.addEventListener('click', () => navigateToSection(section));
            navCardsDiv.appendChild(card);
        });
        
        mainSection.appendChild(navCardsDiv);
        
        // Adiciona as mensagens
        const warningDiv = document.createElement('div');
        warningDiv.className = 'warning-message glitch';
        warningDiv.innerHTML = '<span>⚠️ ACESSO RESTRITO – SE VOCÊ NÃO É EU, SAIA DAQUI!</span>';
        
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'welcome-message';
        welcomeDiv.innerHTML = '<p class="typing">Bem-vindo ao Codex Tahely. Se você está lendo isso, significa que alguém hackeou meu diário ou eu estou ferrada. De qualquer forma... divirta-se.</p>';
        
        mainSection.appendChild(warningDiv);
        mainSection.appendChild(welcomeDiv);
    }

    // Função para navegar entre seções
    function navigateToSection(section) {
        const sections = {
            identity: {
                title: 'Identidade',
                content: `
                    <div class="section-content">
                        <div class="nav-cards">
                            <div class="card section-card" data-section="identity">
                                <div class="card-icon">🎭</div>
                                <h3>IDENTIDADE</h3>
                            </div>
                            <div class="card section-card" data-section="history">
                                <div class="card-icon">📖</div>
                                <h3>HISTÓRIA</h3>
                            </div>
                            <div class="card section-card" data-section="abilities">
                                <div class="card-icon">⚡</div>
                                <h3>HABILIDADES</h3>
                            </div>
                        </div>
                        <h3>Identidade Pessoal</h3>
                        <p>Nascida como Gih'ah Tahely, transformada no Sujeito 89P13, e renascida como Ra'ven Andor. 
                        Minha identidade é um reflexo das múltiplas vidas que fui forçada a viver.</p>
                        
                        <h3>Origem</h3>
                        <p>Originária de Khan'dar, cresci em meio a uma sociedade tecnologicamente avançada, 
                        mas politicamente instável.</p>
                    </div>
                `
            },
            history: {
                title: 'História',
                content: `
                    <div class="section-content">
                        <h3>Passado</h3>
                        <p>Minha história começa em Khan'dar, onde nasci em uma família de cientistas. 
                        O que deveria ter sido uma infância normal se transformou em um pesadelo quando 
                        me tornei parte de um experimento não autorizado.</p>
                        
                        <h3>Presente</h3>
                        <p>Hoje, uso minhas habilidades para garantir que ninguém mais passe pelo que passei. 
                        Como agente da CVT, trabalho para proteger aqueles que não podem se proteger.</p>
                    </div>
                `
            },
            abilities: {
                title: 'Habilidades',
                content: `
                    <div class="section-content">
                        <h3>Habilidades Técnicas</h3>
                        <ul>
                            <li>Hackeamento Neural Avançado</li>
                            <li>Programação Quântica</li>
                            <li>Manipulação de Sistemas de Segurança</li>
                        </ul>
                        
                        <h3>Habilidades Físicas</h3>
                        <ul>
                            <li>Combate Corpo a Corpo</li>
                            <li>Agilidade Aprimorada</li>
                            <li>Reflexos Aumentados</li>
                        </ul>
                    </div>
                `
            }
        };

        // Carrega o conteúdo da seção
        mainSection.innerHTML = `
            <h2 class="section-title">${sections[section].title}</h2>
            ${sections[section].content}
        `;

        // Reativa os event listeners nos cards
        document.querySelectorAll('.section-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const newSection = e.currentTarget.dataset.section;
                navigateToSection(newSection);
            });
        });
    }
}); 