import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;

        // Highlight current profile in dropdown
        const profileOptions = document.querySelectorAll('.profile-option');
        profileOptions.forEach(option => {
            if (option.getAttribute('data-nome') === nomePerfil) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    // Dropdown functionality
    const profileMenu = document.getElementById('profile-menu');
    const profileDropdown = document.getElementById('profile-dropdown');

    if (profileMenu && profileDropdown) {
        profileMenu.addEventListener('click', (e) => {
            e.preventDefault();
            profileDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!profileMenu.contains(e.target)) {
                profileDropdown.classList.remove('show');
            }
        });

        // Handle profile switching
        const profileOptions = document.querySelectorAll('.profile-option');
        profileOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const nome = option.getAttribute('data-nome');
                const imagem = option.getAttribute('data-imagem');
                
                localStorage.setItem('perfilAtivoNome', nome);
                localStorage.setItem('perfilAtivoImagem', imagem);
                
                // Update UI
                const kidsLink = document.querySelector('.kids-link');
                const profileIcon = document.querySelector('.profile-icon');
                
                if (kidsLink) kidsLink.textContent = nome;
                if (profileIcon) profileIcon.src = imagem;
                
                // Highlight new active profile
                profileOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Close dropdown
                profileDropdown.classList.remove('show');
            });
        });
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
