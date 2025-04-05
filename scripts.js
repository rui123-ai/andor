document.addEventListener('DOMContentLoaded', () => {
    // Configuração de áudio
    let bgMusic = new Audio('audio/cyberpunk-theme.mp3');
    bgMusic.loop = true;
    let isMusicPlaying = false;

    // Controles de navegação
    document.getElementById('btnHome').addEventListener('click', () => {
        window.location.href = '#';
    });

    document.getElementById('btnBack').addEventListener('click', () => {
        window.history.back();
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
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            const section = e.target.closest('.card').dataset.section;
            navigateToSection(section);
        });
    });

    // Função para navegar entre seções
    function navigateToSection(section) {
        const sections = {
            identity: 'Identidade',
            history: 'História',
            abilities: 'Habilidades',
            hidden: 'Arquivos Ocultos'
        };

        // Aqui você pode adicionar a lógica para carregar o conteúdo de cada seção
        const mainSection = document.querySelector('.main-section');
        mainSection.innerHTML = `
            <h2 class="section-title">${sections[section]}</h2>
            <div class="section-content">
                <p>Carregando conteúdo de ${sections[section]}...</p>
            </div>
        `;
    }
}); 