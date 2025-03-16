// Theme-Switcher: Wechselt zwischen Light und Dark Mode und speichert die Auswahl im LocalStorage.
// Falls kein Button im HTML vorhanden ist, wird er dynamisch in der rechten oberen Ecke eingefügt.

document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', storedTheme);

    // Prüfe, ob ein Theme-Toggle-Button bereits existiert; falls nicht, erstelle ihn.
    let themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
        themeToggle = document.createElement('button');
        themeToggle.id = 'theme-toggle';
        themeToggle.textContent = 'Toggle Theme';
        // Fester Platz in der rechten oberen Ecke
        themeToggle.style.position = 'fixed';
        themeToggle.style.top = '1rem';
        themeToggle.style.right = '1rem';
        themeToggle.style.padding = '0.5rem 1rem';
        themeToggle.style.border = 'none';
        themeToggle.style.borderRadius = '4px';
        themeToggle.style.cursor = 'pointer';
        themeToggle.style.zIndex = '1000';
        document.body.appendChild(themeToggle);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
