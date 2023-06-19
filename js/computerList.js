// <gobi-productlist></gobi-productlist>
import "./computers.js";

class ComputerList extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.innerHTML = `
        <style> 
        .product-list{
            display:flex;
            flex-direction: ${this.getAttribute("direction")}; 
            gap:2ch;
            flex-wrap: wrap;}

        .product-list > computer{
            flex: 1 1;
        }
      </style>
    <div class="product-list">
        <computer></computer>
        <computer></computer>
        <computer></computer>
    </div>`;
    }
    connectedCallback() {

    }
    disconnectedCallback() {

    }
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}

window.customElements.define('Computer-Shop', ComputerList);