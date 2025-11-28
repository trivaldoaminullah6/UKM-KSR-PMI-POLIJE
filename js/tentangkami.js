     // Add subtle parallax effect on mouse move
        document.addEventListener('DOMContentLoaded', function() {
            const hero = document.querySelector('.hero');
            
            hero.addEventListener('mousemove', (e) => {
                const x = (window.innerWidth - e.pageX * 2) / 100;
                const y = (window.innerHeight - e.pageY * 2) / 100;
                
                hero.style.backgroundPositionX = x + 'px';
                hero.style.backgroundPositionY = y + 'px';
            });
            
            // Add scroll animation for buttons
            const buttons = document.querySelectorAll('.btn-custom');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.querySelector('i').style.transform = 'scale(1.2)';
                    this.querySelector('i').style.transition = 'transform 0.3s ease';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.querySelector('i').style.transform = 'scale(1)';
                });
            });
        });