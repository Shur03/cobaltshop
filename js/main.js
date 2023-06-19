let list = document.querySelector('.list');
let products = [

    {
        name: "ProArt Studiobook",
        image: "img/game.jpg"
    },
    {
        name: "Zenbook Pro",
        image: "img/game.jpg"
    },
    {
        name: "Zenbook Pro",
        image: "img/game.jpg"
    },
    {
        name: "Zenbook Pro",
        image: "img/game.jpg"
    },
    {
        name: "Zenbook Pro",
        image: "img/game.jpg"
    },
    {
        name: "Zenbook Pro",
        image: "img/game.jpg"
    },
    {
        name: "Zenbook Pro",
        image: "img/game.jpg"
    },
    {
        name: "Zenbook Pro",
        image: "img/game.jpg"
    },
    {
        name: "Zenbook Pro",
        image: "img/game.jpg"
    }

];
let categories = [...new Set(products.map((item) => { return item }))];
let cart = document.getElementById('saleProduct');
cart.innerHTML = categories.map((item) => {
    var { name, image } = item;
    return (`<article class="ret">
         
    <img class="images" src=${image}>
                    <h3>${name} </h3>
                  
                    
                    
               
                <button class="buy" </button>
            </article>`
    )


}).join('')
