const grid = document.querySelector('.grid');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'meeseeks',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'scroopy',
    'summer'
]

const creatElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 20) {
        alert('Parabéns, você conseguiu!')
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 500);
    }
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}

const creatCard = (character) => {

    const card = creatElement('div', 'card');
    const front = creatElement('div', 'face front');
    const back = creatElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ]; /* com os (...) espalhamos todos os elementos do array characters duas vezes*/

    const shuffleCharacters = duplicateCharacters.sort( () => Math.random() - 0.5 ); /* aqui as cartas serão embaralhadas com o metodo sort, porém esse metodo precisa de uma função, nesse caso usamos a função Math.rondom() - 0.5 para gerar um número menor que zero e maior que zero, porém menor que 1. */

    shuffleCharacters.forEach((character) => {
        const card = creatCard(character);
        grid.appendChild(card);
    })
}

loadGame();