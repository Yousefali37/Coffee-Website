let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.Close');
let list = document.querySelector('.listProduct');
let listCard = document.querySelector('.listCart');
let body = document.querySelector('body');
let quantity = document.querySelector('.shopping span');
let total = document.querySelector('.total');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'cappuccino',
        image: 'cappuccino.avif',
        price: 24
    },
    {
        id: 2,
        name: 'Black Coffee',
        image: 'Black Coffee.jpg',
        price: 29
    },
    {
        id: 3,
        name: 'Latte/Iced Latte',
        image: 'Iced Latte.avif',
        price: 19
    },
    {
        id: 4,
        name: 'Flat White',
        image: 'Flat White.avif',
        price: 14
    },
    {
        id: 5,
        name: 'Cafe au Lait',
        image: 'Cafe au Lait.avif',
        price: 34
    
    },
    {
        id: 6,
        name: 'Macchiato',
        image: 'Macchiato.avif',
        price: 39
    },
    {
        id: 7,
        name: 'Frappe',
        image: 'Frappe.avif',
        price: 26
    },
    {
        id: 8,
        name: 'Cold Brew',
        image: 'Cold Brew.avif',
        price: 28
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}