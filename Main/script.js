// Theme Toggle Functionality
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeIcon.className = savedTheme === 'light-mode' ? 'fas fa-sun' : 'fas fa-moon';
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    themeIcon.className = 'fas fa-moon'; // Switch to moon icon
    localStorage.setItem('theme', ''); // Save preference
  } else {
    body.classList.add('light-mode');
    themeIcon.className = 'fas fa-sun'; // Switch to sun icon
    localStorage.setItem('theme', 'light-mode'); // Save preference
  }
});
