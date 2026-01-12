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