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
        // Restaura o conteúdo inicial
        mainSection.innerHTML = initialContent;
        
        // Mostra os cards de navegação
        document.querySelectorAll('.section-card').forEach(card => {
            card.style.display = 'block';
        });
        
        // Mostra as mensagens de boas-vindas
        welcomeMessage.style.display = 'block';
        warningMessage.style.display = 'block';
    });

    document.getElementById('btnBack').addEventListener('click', () => {
        // Se estiver em uma seção, volta para a home
        if (mainSection.querySelector('.section-content')) {
            document.getElementById('btnHome').click();
        }
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

    // Função para navegar entre seções
    function navigateToSection(section) {
        const sections = {
            identity: {
                title: 'Identidade',
                content: `
                    <div class="section-content">
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

        // Esconde os cards de navegação
        document.querySelectorAll('.section-card').forEach(card => {
            card.style.display = 'none';
        });

        // Esconde as mensagens de boas-vindas
        welcomeMessage.style.display = 'none';
        warningMessage.style.display = 'none';

        // Carrega o conteúdo da seção
        mainSection.innerHTML = `
            <h2 class="section-title">${sections[section].title}</h2>
            ${sections[section].content}
        `;
    }
}); 