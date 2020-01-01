import { heroes } from './heroes.js'

const heroesElem = document.querySelector('.heroes');
const paginationElem = document.querySelector('.page-numbers');

let currentPage = 1;
let cards = 4;

function displayList(heroes, container, cardsPerPage, page) {
    container.innerHTML = '';
    page--;

    let start = cardsPerPage * page;
    let end = start + cardsPerPage;

    let paginatedItems = heroes.slice(start, end);

    paginatedItems.forEach(hero => {

        let heroElem = document.createElement('div');
        heroElem.classList.add('hero');

        heroElem.innerHTML = `
            <h2>${hero.name}</h2>
            <img src="${hero.img}" />
            <p>${hero.bio}</p>
        `;

        container.appendChild(heroElem);
    });
}

function setupPagination(heroes, container, cardsPerPage) {
    container.innerHTML = '';

    let pageCount = Math.ceil(heroes.length / cardsPerPage);
    
    for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationBtn(i, heroes);

        container.appendChild(btn);
    }
}

function paginationBtn(page, heroes) {
    let btn = document.createElement('button');
    btn.innerText = page;

    if (currentPage == page) {
        btn.classList.add('active');
    }

    btn.addEventListener('click', function() {
        if (btn.classList.contains('active')) {
            return;
        }

        currentPage = page;

        displayList(heroes, heroesElem, cards, currentPage);

        let currentBtn = document.querySelector('.page-numbers button.active');
        currentBtn.classList.remove('active');

        btn.classList.add('active');
    });

    return btn;
}

displayList(heroes, heroesElem, cards, currentPage);
setupPagination(heroes, paginationElem, cards);