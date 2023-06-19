// <my-shoppingcard></my-shoppingcard>
import html from './utility.js'

class ComShoppingcart extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.products = [];

        if (this.getAttribute("cpu") != null)
            this.#Render(this.getAttribute("cpu"));
        else
            this.#Render();
    }

    #Render(backgroundColor = "#fff") {
        this.innerHTML = html`
        <div style="width:2rem;height:auto;background-color:${backgroundColor};"><svg version="1.1"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
        <g>
            <path d="M400.1,681.3" />
            <path
                d="M373.2,594.6h425.4c20,0,40.1-12.7,47.7-30.2l140.4-321.7c5.1-11.8,4.2-24.8-2.4-34.9c-6.4-9.7-16.9-15.3-28.9-15.3H283.2l-13-58c-6.9-31.1-37.8-55.4-70.3-55.4H30.6C19.2,79.2,10,88.4,10,99.8c0,11.4,9.2,20.6,20.6,20.6H200c13.3,0,27.3,10.8,30,23.2l131.2,586.3c-41.3,11.2-71.9,48.9-71.9,93.7c0,53.6,43.6,97.2,97.2,97.2c53.6,0,97.2-43.6,97.2-97.2c0-19.9-6-38.3-16.3-53.7h271.1c-10.3,15.4-16.3,33.9-16.3,53.7c0,53.6,43.6,97.2,97.2,97.2c53.6,0,97.2-43.6,97.2-97.2c0-53.6-43.6-97.2-97.2-97.2c-7,0-13.8,0.8-20.4,2.2H407c-1.3-0.3-2.6-0.5-3.9-0.7L373.2,594.6z M945.6,233.8L808.5,547.9c-0.9,2.1-5.9,5.5-9.9,5.5H364l-71.5-319.6H945.6z M442.5,823.6c0,30.9-25.1,56-56,56c-30.9,0-56-25.1-56-56c0-29.6,23-53.8,52.1-55.8c2.7,1.3,5.6,2,8.7,2H402C425.4,776.6,442.5,798.1,442.5,823.6 M875.5,823.6c0,30.9-25.1,56-56,56c-30.9,0-56-25.1-56-56c0-25.5,17.1-47,40.5-53.7h10c3.1,0,6.1-0.8,8.8-2C852.2,769.6,875.5,793.9,875.5,823.6" />
        </g>
    </svg>
    <div>${this.products.length}</div>`
    }

    AddToCart(myProduct) {
        this.products.push(myProduct);
        this.#Render();
    }
    connectedCallback() {

    }
    disconnectedCallback() {
    }



    get productCount() {
        return this.products.length;
    }

    set color(colorValue) {
        this.#Render(colorValue);
    }

    static get observedAttributes() {
        return ['color'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case "color":
                this.#Render(this.getAttribute("color"));
                break;

            default:
                break;
        }
    }
}

window.customElements.define('computer-shoppingcart', ComShoppingcart);