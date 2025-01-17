document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.social-links a');

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.boxShadow = '0 0 15px #aaa';
        });

        link.addEventListener('mouseout', () => {
            link.style.boxShadow = 'none';
        });

        link.addEventListener('click', () => {
            link.style.transform = 'scale(1.1)';
            setTimeout(() => {
                link.style.transform = '';
            }, 200);
        });
    });
});
