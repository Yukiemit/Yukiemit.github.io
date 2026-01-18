document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = this.querySelector('input[type="text"]').value;
    let message = this.querySelector('textarea').value;
    
    if(name && message) {
        alert('Thank you, ' + name + '! Your message has been received.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    // Save preference to localStorage
    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
});
