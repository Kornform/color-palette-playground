module.exports = {
    content: [
        "./_layouts/**/*.html",
        "./_includes/**/*.html",
        "./_posts/**/*.md",
        "./*.html",
    ],
    darkMode: 'class', // class-based dark mode
    theme: {
        extend: {
            fontFamily: {
                sans: ["Sen", "sans-serif"],
                heading: ["Oswald", "sans-serif"],
                body: ["Playwrite DE Grund", "cursive"],
            },
            colors: {
                // Base colors - semantic naming
                'bg-primary': 'var(--color-bg-primary)',
                'bg-secondary': 'var(--color-bg-secondary)',
                'bg-tertiary': 'var(--color-bg-tertiary)',

                // Button colors
                'button-bg': 'var(--color-bg-button)',
                'button-hover-bg': 'var(--color-bg-button-hover)',
                'button-active-bg': 'var(--color-bg-button-active)',

                // Text colors
                'text-primary': 'var(--color-text-primary)',
                'text-secondary': 'var(--color-text-secondary)',
                'text-disabled': 'var(--color-text-disabled)',

                // Border colors
                'border-light': 'var(--color-border-light)',
                'border-medium': 'var(--color-border-medium)',

                // Secondary button colors
                'button-secondary': 'var(--color-button-secondary)',
                'button-secondary-hover': 'var(--color-button-secondary-hover)',
                'button-secondary-active': 'var(--color-button-secondary-active)',

                // Accent colors (beachte die neuen Einträge)
                accent: {
                    // Blue
                    blue: 'var(--color-accent-blue)',
                    'blue-hover': 'var(--color-accent-blue-hover)',
                    'blue-active': 'var(--color-accent-blue-active)',
                    'blue-subtle': 'var(--color-accent-blue-subtle)',

                    // Red
                    red: 'var(--color-accent-red)',
                    'red-hover': 'var(--color-accent-red-hover)',
                    'red-active': 'var(--color-accent-red-active)',
                    'red-subtle': 'var(--color-accent-red-subtle)',

                    // Purple
                    purple: 'var(--color-accent-purple)',
                    'purple-hover': 'var(--color-accent-purple-hover)',
                    'purple-active': 'var(--color-accent-purple-active)',
                    'purple-subtle': 'var(--color-accent-purple-subtle)',

                    // Green
                    green: 'var(--color-accent-green)',
                    'green-hover': 'var(--color-accent-green-hover)',
                    'green-active': 'var(--color-accent-green-active)',
                    'green-subtle': 'var(--color-accent-green-subtle)',

                    // Yellow
                    yellow: 'var(--color-accent-yellow)',
                    'yellow-hover': 'var(--color-accent-yellow-hover)',
                    'yellow-active': 'var(--color-accent-yellow-active)',
                    'yellow-subtle': 'var(--color-accent-yellow-subtle)',
                },
            },
            // Shadow utilities
            boxShadow: {
                'sm': 'var(--shadow-small)',
                'md': 'var(--shadow-medium)',
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: 'var(--color-text-primary)',
                        a: {
                            color: 'var(--color-accent-blue)',
                            '&:hover': {
                                color: 'var(--color-accent-blue-hover)',
                                textDecoration: 'underline',
                            },
                        },
                        h1: {
                            color: 'var(--color-text-primary)',
                            fontFamily: ['Oswald', 'sans-serif'].join(', '),
                        },
                        h2: {
                            color: 'var(--color-text-primary)',
                            fontFamily: ['Oswald', 'sans-serif'].join(', '),
                        },
                        h3: {
                            color: 'var(--color-text-primary)',
                            fontFamily: ['Oswald', 'sans-serif'].join(', '),
                        },
                        h4: {
                            color: 'var(--color-text-primary)',
                            fontFamily: ['Oswald', 'sans-serif'].join(', '),
                        },
                        strong: {
                            color: 'var(--color-text-primary)',
                        },
                        blockquote: {
                            color: 'var(--color-text-secondary)',
                            borderLeftColor: 'var(--color-border-medium)',
                        },
                        hr: {
                            borderColor: 'var(--color-border-light)',
                        },
                        code: {
                            color: 'var(--color-accent-blue)',
                        },
                        pre: {
                            backgroundColor: 'var(--color-bg-tertiary)',
                            code: {
                                color: 'var(--color-text-primary)',
                            },
                        },
                        th: {
                            color: 'var(--color-text-primary)',
                            borderBottomColor: 'var(--color-border-medium)',
                        },
                        td: {
                            borderBottomColor: 'var(--color-border-light)',
                        },
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
