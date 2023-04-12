const DB_ROUTE = "../db/products.json"


const products = []

const productsContainerHTML = document.querySelector(".products-container")

const renderProducts = ()=>{
    for(const product of products){
        productsContainerHTML.innerHTML += `
        <div class="card">
            <button class="favorite-button">
                <i class="bi bi-heart"></i>
            </button>
            <img src="${product.img}" alt="">
            <div class="card-info">
                <div class="priceContainer">
                    <h3>
                        $${product.price}
                    </h3>
                    <span>%${product.offer} OFF</span>
                </div>
                <p class="textCard">${product.feeDescription}</p>
                <p class="textCard"><strong>Envio gratis</strong> <i class="bi bi-lightning-charge-fill"></i></p>
                <p class="card-description">${product.title} </p>
            </div>
        </div>
        `
    }
}

fetch(DB_ROUTE)
.then(res => res.json())
.then(data => {
    for(const product of data){
        products.push(product)
    }
    renderProducts()
})