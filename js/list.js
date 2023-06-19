class product {
    constructor(name, year, price, image) {
        this.name = name;
        this.year = year;
        this.price = price;
        this.image - image;
    }
}
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
window.addEventListener("load", showData());
function showData() {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach((product) => {
        let productElement = document.createElement("section");
        productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Quantity: ${product.year}</p>
        <img src="image/${product.image}" />
      `;
        productList.appendChild(productElement);
    });
}
// document.getElementById("demo").innerHTML
/*(function () {
    "use Script";
    var newElement = document.createElement(article);
    newElement.textContent = ""
});*/