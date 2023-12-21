const CreateProduct = (data) => {
    let productContainer = document.querySelector('.product-container');
    productContainer.innerHTML += `
    <div class="product-card">
         <button class="btn edit-btn" onclick="location.href = '/add-product/${data.id}'"><img src="images/edit.png" alt=""></button>
         <button class="btn open-btn onclick="location.href = '/products/${data.id}'"><img src="images/open.png" alt=""></button>
         <button class="btn delete-btn"><img src="images/delete.png" alt=""></button>
         
         <img src="${data.image}" class="product-img" alt="">
         <p class="product-name">${data.tags[0]} ➡️</p>
    </div>
    `;
}