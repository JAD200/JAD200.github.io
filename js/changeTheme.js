const toggle = document.getElementById('toggle')
const currentTheme = window.localStorage.getItem('theme');

/* checks if the theme stored in localStorage is dark
if yes apply the dark theme to the body */
if (currentTheme === 'dark') document.body.classList.add('dark-theme')

// Event listener stops when the change theme button is clicked
toggle.addEventListener('click', () => {
document.body.classList.toggle('dark-theme');

let theme = 'light'
if (document.body.classList.contains('dark-theme')) theme = 'dark'

window.localStorage.setItem('theme', theme);
});