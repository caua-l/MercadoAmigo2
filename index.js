import cart from "./cart.js";
import products from "./products.js";

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

//carregando o arquvio template
const loadTemplate = () => {
    fetch("template.html")
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        iniApp();
    })
}
loadTemplate();
const iniApp = () => {
    //carregar a lista dos produtos
    let listProduct = document.querySelector('.listProduct');
    listProduct.innerHTML = null;
    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = 
        `
            <img src="${product.image}"/>
            <h2>${product.name}</h2>
            <div class ="price">$${product.price}</div>
            <button class="addCart">
                Add To Cart
            </button>
        `;
        listProduct.appendChild(newProduct);
    })
}
