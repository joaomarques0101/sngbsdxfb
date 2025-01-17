// Animação de rolagem suave para o conteúdo
document.querySelector("header").addEventListener("click", function() {
    document.querySelector(".content").scrollIntoView({ behavior: "smooth" });
});

// Animação de fade-in para o rodapé ao rolar a página
window.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    const position = footer.getBoundingClientRect().top;

    if (position < window.innerHeight) {
        footer.style.opacity = 1;
        footer.style.transition = "opacity 1s ease-in-out";
    }
});
// Animação de rolagem suave para o conteúdo ao clicar no cabeçalho
document.querySelector("header").addEventListener("click", function () {
    const content = document.querySelector(".content");
    if (content) {
        content.scrollIntoView({ behavior: "smooth" });
    }
});

// Animação de fade-in para o rodapé ao rolar a página
window.addEventListener("scroll", function () {
    const footer = document.querySelector("footer");
    if (footer) {
        const position = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Verifica se o rodapé está visível na viewport
        if (position < windowHeight) {
            footer.style.opacity = 1;
            footer.style.transition = "opacity 1s ease-in-out";
        } else {
            // Opcional: pode redefinir a opacidade se o rodapé sair da viewport
            footer.style.opacity = 0;
        }
    }
});
