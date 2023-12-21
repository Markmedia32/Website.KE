// navbar

document.addEventListener('DOMContentLoaded', function () {
    // Get the Product element button
    var ProductButton = document.querySelector('.Link-item');

    // Add a click event listener to the Products button
    productButton.addEventListener('click', function (event) {
		// Prevent the default behaviour of the anchor tag
		event.preventDefault();


        // Navigate to the products.html page
        window.location.href = 'products.html';
    });
});


const createNavbar = () => {
    let navbar = document.querySelector('.navbar');

    navbar.innerHTML += `
	<ul class="links-container">
		<li class="Link-item"><a href="#" class="Link active">Home</a></li>
		<li class="Link-item"><a href="products.html" class="Link">Product</a></li>
		<li class="Link-item"><a href="shoes.html" class="Link">Shoes</a></li>
		<li class="Link-item"><a href="suits.html" class="Link">Suits</a></li>
		<li class="Link-item"><a href="jackets.html" class="Link">Jackets</a></li>
		<li class="Link-item"><a href="Contact.html" class="Link">Contact</a></li>
	</ul>
	<div class="user-interactions">
		<div class="cart">
			<img src="images/cart.png" class="cart-icon" alt="">
			<span class="cart-item-count">00</span>
		</div>
		<div class="user">
			<img src="images/user.png" class="user-icon" alt="">
			<div class="user-icon-popup">
                <p> Login to your account</p>
				<a> Login</a>
			</div>
			</div>
		</div>`
}

createNavbar();

// user icon popup

let userIcon = document.querySelector('.user-icon');
let userPopupIcon = document.querySelector('.user-icon-popup');

userIcon.addEventListener('click', () => userPopupIcon.classList.toggle('active'))

let text = userPopupIcon.querySelector('p');
let actionBtn = userPopupIcon.querySelector('a');
let user = JSON.parse(sessionStorage.user || null);

if(user != null){ // user is logged in
    text.innerHTML = `log in as, ${user.name}`;
    actionBtn.innerHTML = 'logout';
    actionBtn.addEventListener('click', () => logout());
} else{
    text.innerHTML = 'login to your account';
    actionBtn.innerHTML = 'login';
    actionBtn.addEventListener('click', () => location.href ='/login');
}

const logout = () => {
    sessionStorage.clear()
    location.reload();
}
