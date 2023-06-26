const card = document.querySelector('.card');
    card.addEventListener('mouseover', function() {
        this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        this.style.transform = 'scale(1.02)';
    });
    card.addEventListener('mouseout', function() {
        this.style.boxShadow = '';
        this.style.transform = '';
    });
