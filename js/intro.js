let list = document.querySelector('.list');
let products = [
    {
        name: "ProArt Studiobook",
        year: "2022",
        price: "2000000",
        img: "../img/proArt.png",
        def: "",
        mouse: "../img/mouse.jpg",
        backpack: "../img/backpack.jpd",
        virus: "../img/virus.png",
        office: "../img/office.jpg",
        oneDrive: "../img/oneDrive.jpg"
    },
    {
        name: "Zenbook Pro",
        year: "2023",
        price: "3500000",
        img: "../img/zenbook.png",
        def: "",
        mouse: "../img/mouse.jpg",
        backpack: "../img/backpack.jpd",
        virus: "../img/virus.png",
        office: "../img/office.jpg",
        oneDrive: "../img/oneDrive.jpg"
    },
    {
        name: "ExpertBook B5",
        year: "2021",
        price: "2000000",
        img: "../img/expert.webp",
        def: "",
        mouse: "../img/mouse.jpg",
        backpack: "../img/backpack.jpd",
        virus: "../img/virus.png",
        office: "../img/office.jpg",
        oneDrive: "../img/oneDrive.jpg"
    },
    {
        name: "ASUS Chrome book CX9",
        year: "2022",
        price: "2700000",
        img: "../img/chrome.png",
        def: "",
        mouse: "../img/mouse.jpg",
        backpack: "../img/backpack.jpd",
        virus: "../img/virus.png",
        office: "../img/office.jpg",
        oneDrive: "../img/oneDrive.jpg"
    },
    {
        name: "ASUS TUF Gaming F15",
        year: "2023",
        price: "3400000",
        img: "../img/gaming.png",
        def: "",
        mouse: "../img/mouse.jpg",
        backpack: "../img/backpack.jpd",
        virus: "../img/virus.png",
        office: "../img/office.jpg",
        oneDrive: "../img/oneDrive.jpg"
    },
    {
        name: "ProArt Studiobook 16",
        year: "2022",
        price: "1200000",
        img: "../img/vivo.png",
        def: "",
        mouse: "../img/mouse.jpg",
        backpack: "../img/backpack.jpd",
        virus: "../img/virus.png",
        office: "../img/office.jpg",
        oneDrive: "../img/oneDrive.jpg"
    }
];
let categories = [...new Set(products.map((item) => { return item }))];
let cart = document.getElementById('def');
cart.innerHTML = categories.map((item) => {
    var { name, price, img } = item;
    return (`<article class="content">
            
    <img class="images" src=${img}>
                    <h3>${name} </h3>
                    <p> Тайлбар хэсэг оруулах</p>
                    <h6>${price}</h6>
                    <ul>
                        <li><i class="fa fa-star checked" aria-hidden="true"> </i></li>
                        <li><i class="fa fa-star checked" aria-hidden="true"> </i></li>
                        <li><i class="fa fa-star checked" aria-hidden="true"> </i></li>
                        <li><i class="fa fa-star checked" aria-hidden="true"> </i></li>
                        <li><i class="fa fa-star " aria-hidden="true"> </i></li>
                    </ul>
               
                <button class="buy" onclick="addCard()">Add to cart</button>
            </article>`
    )


}).join('')
