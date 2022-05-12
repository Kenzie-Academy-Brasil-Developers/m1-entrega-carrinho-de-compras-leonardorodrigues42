const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99,
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98,
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99,
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98,
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98,
    },
    {
        id: 6,
        name: "Desconto",
        price: - 0.04,
    },
]

const main = document.createElement("main")
document.body.appendChild(main)

const productList = document.createElement("ul")
main.appendChild(productList)

function renderizaLista() {
    for (let i = 0; i < productsCart.length; i++){
        const productItem = document.createElement("li")
        productList.appendChild(productItem)
        
        const ProductDetails = document.createElement("section")
        productItem.appendChild(ProductDetails)

        const valorItem = document.createElement("div")
        productItem.appendChild(valorItem)
        
        ProductDetails.textContent = productsCart[i].name
        valorItem.textContent = `R$ ${productsCart[i].price}`
    }
    somaTotalPrice()
}

function somaTotalPrice() {
    let totalPrice = 0
    for (var i = 0; i < productsCart.length; i++) {
        totalPrice += productsCart[i].price
    }
    
    const total = document.createElement("div")
    main.appendChild(total)
    total.id = "total"
    total.innerHTML = "<div>Total</div>" + `<div>R$ ${totalPrice}</div>`
}

renderizaLista()

const buttonEnd = document.createElement("button")
main.appendChild(buttonEnd)
buttonEnd.textContent = 'Finalizar compra'