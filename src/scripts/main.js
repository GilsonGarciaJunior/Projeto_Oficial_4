document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-section-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.sectionButton;
            const aba = document.querySelector(`[data-section-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('info-style--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('text--active');
        })
    }
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-section-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('text--active');
    }
}

function escondeTodasAbas() {
    const sectionContainer = document.querySelectorAll('[data-section-id]');

    for (let i = 0; i < sectionContainer.length; i++) {
        sectionContainer[i].classList.remove('info-style--is-active');
    }
}