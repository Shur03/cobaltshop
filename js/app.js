"use strict";

var openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.close');
let list = document.querySelector('.list');
let listCard = document.querySelector('.cardList');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
"use strict";

openShopping.addEventListener("click", function () {
    body.classList.add('active');
});

closeShopping.addEventListener('click', function () {
    body.classList.remove('active');
});
let products = [
    {
        name: "ProArt Studiobook",
        year: "2022",
        price: "2000000",
        image: "../img/proArt.png"
    },
    {
        name: "Zenbook Pro",
        year: "2023",
        price: "3500000",
        image: "../img/zenbook.png"
    },
    {
        name: "ExpertBook B5",
        year: "2021",
        price: "2000000",
        image: "../img/expert.webp"
    },
    {
        name: "ASUS Chrome book CX9",
        year: "2022",
        price: "2700000",
        image: "../img/chrome.png"
    },
    {
        name: "ASUS TUF Gaming F15",
        year: "2023",
        price: "3400000",
        image: "../img/gaming.png"
    },
    {
        name: "ProArt Studiobook 16",
        year: "2022",
        price: "1200000",
        image: "../img/vivo.png"
    }
];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="image/${value.image}" />
        <div class="title">${value.name}</div>
        <div class="pric">${value.price.toLocaleString()}</div>
        <div class="year">${value.year}</div>
        <button onclick="addCard(${key})">Add to Card</button>
    `;
        list.appendChild(newDiv);
    });
}
initApp();
function addCard(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }

    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = ``;
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                    < div > <img src="image/${value.image}></img></div>
            <div>{$value.name}</div>
            <div>{$value.price.toLocaleString()}</div>
            <div>{$value.quantity}</div>
            <div>
                <button onclick="change(${key},${value.quantity - 1})">-</button>
            < div class="count" > ${value.quantity}</div >
                <button onclick="change(${key}),${value.quantity - 1})">+</button>
            </div >
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

}
function change(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    }
    else {
        listCards[key].quantity = quantity;

        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}