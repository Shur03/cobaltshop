let list = document.querySelector('.list');
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
let categories = [...new Set(products.map((item) => { return item }))];
let cart = document.getElementById('root');
cart.innerHTML = categories.map((item) => {
    var { name, price, image } = item;
    return (`<article class="content">
            
    <img class="images" src=${image}>
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

function addCard(a) {
    document.getElementById("quantity").innerHTML = cart.length;
    let j = 0;
    if (cart.length == 0) {
        document.getElementById("cartItem").innerHTML = "Your Cart Empty";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { name, year, price, image } = items;
            return (
                `<article class="cartItem">
            
                <img class="images" src=${image}>
                                <h3>${name} </h3>
                                <p> Тайлбар хэсэг оруулах</p>
                                <h6>${price}</h6>>
                                </article>`


            )
        }
        )
    }
}
