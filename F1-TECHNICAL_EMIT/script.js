document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    
    if(name && message) {
        alert('Thank you, ' + name + '! Your message has been received.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});