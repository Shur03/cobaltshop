// <gobi-product></gobi-product>
import html from "./utility.js";

class Computer extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.innerHTML = html`
        <div class="gobi-product">
            <img src="https://picsum.photos/300/150.webp?random=${Math.random() * 100}" alt="">
            <p>asdf arwr sdfas dfawer asdfasdfaewr</p>
            <button role="button">Add to cart</button>
        </div>`
    }
    connectedCallback() {
        this.querySelector("button").addEventListener("click", () => {
            const myCart = document.querySelector(" computerShopping");
            myCart.AddToCart(this);
            myCart.color = "#0f0";
            // MyApp.SetState("lastColor", "#0f0");
            // MyApp.AddProductToShoppingCart(this);
            // alert(MyApp.GetState("lastColor"));
        })
    }
    disconnectedCallback() {

    }
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}

window.customElements.define('gobi-product', Computer);