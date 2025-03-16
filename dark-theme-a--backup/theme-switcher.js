// Theme Switcher - Example Implementation
document.addEventListener('DOMContentLoaded', function () {
    // Create theme toggle button
    const toggleButton = document.createElement('button');
    toggleButton.id = 'theme-toggle';
    toggleButton.className = 'theme-toggle-btn';
    toggleButton.innerHTML = '🌓';
    toggleButton.title = 'Toggle theme';
    document.body.appendChild(toggleButton);

    // Add styles for the toggle button
    const style = document.createElement('style');
    style.textContent = `
      .theme-toggle-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--color-bg-secondary);
        color: var(--color-text-primary);
        border: 1px solid var(--color-border-light);
        box-shadow: var(--shadow-small);
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        transition: all 0.3s ease;
      }
      
      .theme-toggle-btn:hover {
        transform: scale(1.1);
      }
    `;
    document.head.appendChild(style);

    // Check for saved theme preference or respect OS preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    // Apply the theme
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (prefersDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Toggle theme function
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // Add event listener to the toggle button
    toggleButton.addEventListener('click', toggleTheme);

    // Bonus: Listen for OS theme changes 
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
});