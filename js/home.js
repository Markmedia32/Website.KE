    // image collage
const collageImages = [...document.querySelectorAll('.collage-img')];

collageImages.forEach((item, i) =>{
	item.addEventListener('mouseover',() => {
		collageImages.forEach((image, index) => {
			if(index != i){
				image.style.filter = 'blur(5px)';
				item.style.zIndex = 2;
			}
		})
	})



	item.addEventListener('mouseleave', () => {
		collageImages.forEach((image, index) => {
			image.style.filter = null;
		})
		item.style.zIndex = null;
	})
})
// Responsive Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


