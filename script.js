// Change text on button click with cool effect
document.getElementById('changeTextBtn').addEventListener('click', function() {
    const greeting = document.getElementById('greeting');
    greeting.textContent = 'Welcome to JavaScript World!';
    greeting.classList.add('fade-in'); // Apply fade-in animation
    
    // Change button text after click
    this.textContent = 'Clicked!';
    this.disabled = true;
    
    // Add more interaction: update info text after delay
    setTimeout(() => {
        const infoText = document.getElementById('infoText');
        infoText.textContent = "Look at that! You've made the text dynamic!";
        infoText.style.opacity = '1'; // Show text with fade effect
    }, 1000);
});