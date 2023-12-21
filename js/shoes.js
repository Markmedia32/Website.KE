let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'Ex-1.PNG',
        price: 3500
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'Ex-2.PNG',
        price: 4000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'Ex-3.PNG',
        price: 3000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'Ex-4.PNG',
        price: 4500
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'Ex-5.PNG',
        price: 5000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'Ex-6.PNG',
        price: 3500
    },
];
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="images/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">Ksh${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    })

    
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

    // Add an event listener to the total element in the product card
    total.addEventListener('click', () => {
        // Redirect to Checkout.html when the total in the card is clicked
        window.location.href = 'Checkout.html';
    });
}
function changeQuantity(key, newQuantity) {
    if (newQuantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = newQuantity;
        listCards[key].price = newQuantity * products[key].price;
    }
    
    reloadCard();
}
