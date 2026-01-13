/**
 * INDEX.JS - UNIT ACADEMY
 * Controle de funcionalidades da Página Inicial
 */

document.addEventListener("DOMContentLoaded", function() {

    // --- 1. LÓGICA DO PRELOADER ---
    // Ocorre quando a página inteira (imagens, vídeo) termina de carregar
    window.addEventListener("load", function() {
        const preloader = document.getElementById("unit-preloader");
        if (preloader) {
            // Pequeno delay para garantir que a transição seja suave
            setTimeout(() => {
                preloader.classList.add("preloader-hidden");
            }, 800); 
        }
    });

    // --- 2. OUTRAS FUNÇÕES ---
    // O redirecionamento agora é feito via HTML (<a> tag) para melhor SEO.
    // Este arquivo fica preparado para lógica futura (ex: Analytics, Popups, etc).

});