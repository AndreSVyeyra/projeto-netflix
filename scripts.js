const body = document.body;
const themeToggleBtn = document.querySelector('.theme-toggle-fixed');
const THEME_KEY = 'netflix-theme';

const applyTheme = (isDarkMode) => {
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '🌙';
        themeToggleBtn.setAttribute('aria-label', 'Modo escuro ativo, clique para modo claro');
    } else {
        body.classList.remove('dark-mode');
        themeToggleBtn.textContent = '🌞';
        themeToggleBtn.setAttribute('aria-label', 'Modo claro ativo, clique para modo escuro');
    }
    localStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light');
};

const initTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark') {
        applyTheme(true);
        return;
    }

    if (savedTheme === 'light') {
        applyTheme(false);
        return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark);
};

themeToggleBtn.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    applyTheme(!isDarkMode);
});

initTheme();
