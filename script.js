// Referências aos elementos do mini chat e menu
const iconeChat = document.getElementById('iconeChat');
const miniChat = document.getElementById('miniChat');
const fecharChat = document.getElementById('fecharChat');
const sendMessage = document.getElementById('sendMessage');
const userInput = document.getElementById('userInput');
const chatBody = document.getElementById('chatBody');

// Função para gerenciar a rolagem da página
const toggleBodyScroll = (disable) => {
    document.body.style.overflow = disable ? 'hidden' : 'auto';
};

// Função para rolar para a última mensagem
const scrollToLastMessage = () => {
    chatBody.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
};

// Função para adicionar mensagem
const addMessage = (sender, message) => {
    const newMessage = document.createElement('p');
    newMessage.textContent = `${sender}: ${message}`;
    chatBody.appendChild(newMessage);
    scrollToLastMessage(); // Rola para a última mensagem
};

// Função para enviar a resposta da IA
const sendBotResponse = (message) => {
    const typingIndicator = document.createElement('p');
    typingIndicator.textContent = 'IA: Digite algo...';
    chatBody.appendChild(typingIndicator);

    setTimeout(() => {
        chatBody.removeChild(typingIndicator);
        addMessage('IA', message);
    }, 1000); // Simula o tempo de resposta da IA (1 segundo)
};

// Função para exibir as opções iniciais
const displayInitialOptions = () => {
    const options = `
        1- Desenvolver um projeto
        2- Falar com o profissional
        3- Quero um projeto
        4- Uma curiosidade
    `;
    addMessage('IA', options);
};

// Mapa de respostas rápidas
const respostas = {
    '1': 'Aqui está o link para desenvolver um projeto no WhatsApp: https://wa.me/seunumerodowhatsapp',
    '2': 'Aqui está o link para falar com o profissional no WhatsApp: https://wa.me/seunumerodowhatsapp',
    '3': 'Aqui está o link para querer um projeto no WhatsApp: https://wa.me/seunumerodowhatsapp',
    '4': 'A programação surgiu na década de 30, com os primeiros computadores elétricos. Antes da programação, eram usados cartões perfurados para criar códigos. Em 1948, Konrad Zuse publicou a linguagem de programação Plankalkül.',
};

// Função para enviar a resposta baseada na escolha do usuário
const handleUserMessage = (message) => {
    const response = respostas[message];
    if (response) {
        sendBotResponse(response);
    } else {
        sendBotResponse('Desculpe, não entendi. Por favor, escolha uma das opções: \n1- Desenvolver um projeto\n2- Falar com o profissional\n3- Quero um projeto\n4- Uma curiosidade');
    }
};

// Abrir o chat
iconeChat.addEventListener('click', () => {
    miniChat.style.display = 'flex';
    displayInitialOptions();
});

// Fechar o chat
fecharChat.addEventListener('click', () => {
    miniChat.style.display = 'none';
});

// Enviar mensagem ao clicar no botão
sendMessage.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage('Você', userMessage);
        userInput.value = ''; // Limpa o campo de input
        handleUserMessage(userMessage); // Processa a resposta do bot
    }
});

// Enviar mensagem ao pressionar Enter
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage.click();
    }
});

// Funcionalidade do menu do boneco
const iconeBoneco = document.getElementById('iconeBoneco');
const menuBoneco = document.getElementById('menuBoneco');
const fecharMenu = document.getElementById('fecharMenu');

// Abrir o menu ao clicar no ícone do boneco
iconeBoneco.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede o clique de propagação
    menuBoneco.classList.add('aberto');
    toggleBodyScroll(true);  // Desativa a rolagem
});

// Fechar o menu ao clicar no botão "Fechar"
fecharMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede o clique de propagação
    menuBoneco.classList.remove('aberto');
    toggleBodyScroll(false);  // Restaura a rolagem
});

// Fechar o menu ao clicar fora do menu
document.addEventListener('click', (event) => {
    if (!menuBoneco.contains(event.target) && !iconeBoneco.contains(event.target)) {
        menuBoneco.classList.remove('aberto');
        toggleBodyScroll(false);  // Restaura a rolagem
    }
});
    //carrossel
    document.addEventListener('DOMContentLoaded', () => {
        const carrossel = document.querySelector('.carrossel');
        const carrosselContainer = document.querySelector('.carrossel-container');
        const prevBtn = document.querySelector('.carrossel-prev');
        const nextBtn = document.querySelector('.carrossel-next');
        
        let currentIndex = 0;
        const items = document.querySelectorAll('.carrossel-item');
        const totalItems = items.length;
        let isManualControl = false;  // Flag para verificar se a navegação manual está sendo usada
        
        // Função para duplicar os itens do carrossel
        function duplicarItens() {
            const carrosselItemsClone = carrossel.innerHTML; // Clona os itens
            carrossel.innerHTML += carrosselItemsClone; // Duplicando os itens para o loop contínuo
        }
    
        // Inicializa a duplicação dos itens ao carregar a página
        duplicarItens();
    
        // Função para atualizar o carrossel
        function updateCarrossel() {
            const offset = -currentIndex * (items[0].offsetWidth + 1.25 * 16); // Ajusta o deslocamento conforme o espaçamento
            carrossel.style.transform = `translateX(${offset}px)`;
        }
    
        // Navegação manual
        prevBtn.addEventListener('click', () => {
            isManualControl = true; // Desativa a animação automática
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
            updateCarrossel();
        });
    
        nextBtn.addEventListener('click', () => {
            isManualControl = true; // Desativa a animação automática
            currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
            updateCarrossel();
        });
    
        // Reativa a animação depois de um tempo sem interação
        function resetAnimation() {
            if (!isManualControl) return;  // Se a navegação manual foi usada, não reinicia a animação.
            
            carrossel.style.animation = 'none'; // Desativa a animação
            setTimeout(() => {
                carrossel.style.animation = 'rolar 15s linear infinite'; // Reativa a animação
            }, 10);
            isManualControl = false;
        }
    
        // Adiciona um evento para reiniciar a animação após o movimento manual
        carrossel.addEventListener('transitionend', resetAnimation);
    });
    
