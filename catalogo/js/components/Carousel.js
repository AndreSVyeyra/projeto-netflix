// Importa a função para criar cards individuais
import { createCard } from './Card.js';

// Função que cria um carousel (linha de filmes) para uma categoria
export function createCarousel(category) {
    // Cria o elemento principal da seção do slider
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Cria o cabeçalho com título e indicadores
    const header = document.createElement('div');
    header.className = 'slider-header';

    // Título da categoria
    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    // Container para indicadores de página (ainda não implementado)
    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    // Adiciona título e indicadores ao cabeçalho
    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    // Container principal do slider com overflow controlado
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';

    // Linha flexível que contém todos os cards
    const row = document.createElement('div');
    row.className = 'movie-row';

    // Cria e adiciona um card para cada item da categoria
    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    // Botões de navegação para rolagem
    const leftButton = document.createElement('button');
    leftButton.className = 'scroll-button left';
    leftButton.innerHTML = '&#8249;'; // Seta esquerda

    const rightButton = document.createElement('button');
    rightButton.className = 'scroll-button right';
    rightButton.innerHTML = '&#8250;'; // Seta direita

    // Adiciona botões e linha ao container
    sliderContainer.appendChild(leftButton);
    sliderContainer.appendChild(row);
    sliderContainer.appendChild(rightButton);
    section.appendChild(sliderContainer);

    // Lógica de rolagem usando transformação CSS
    let scrollPosition = 0; // Posição atual de rolagem em pixels
    const scrollAmount = 250; // Quantidade de pixels para rolar por clique

    // Evento para rolar para a esquerda
    leftButton.addEventListener('click', () => {
        scrollPosition = Math.max(scrollPosition - scrollAmount, 0); // Não permite rolagem negativa
        row.style.transform = `translateX(-${scrollPosition}px)`; // Aplica translação
    });

    // Evento para rolar para a direita
    rightButton.addEventListener('click', () => {
        const maxScroll = row.scrollWidth - sliderContainer.clientWidth; // Largura máxima de rolagem
        scrollPosition = Math.min(scrollPosition + scrollAmount, maxScroll); // Não ultrapassa o limite
        row.style.transform = `translateX(-${scrollPosition}px)`; // Aplica translação
    });

    // Retorna a seção completa do carousel
    return section;
}
