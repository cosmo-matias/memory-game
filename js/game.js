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

const creatCard = (character) => {

    const card = creatElement('div', 'card');
    const front = creatElement('div', 'face front');
    const back = creatElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const loadGame = () => {
    characters.forEach((character) => {

        const card = creatCard(character);
        grid.appendChild(card);

    })
}

loadGame();