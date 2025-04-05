document.addEventListener('DOMContentLoaded', () => {
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

    // Adiciona eventos aos botões
    document.querySelectorAll('.cyber-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const section = e.target.dataset.section;
            // Aqui você pode adicionar a navegação para as diferentes seções
            console.log(`Navegando para: ${section}`);
        });
    });
}); 