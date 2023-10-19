const imagesText = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

const imagesSrc = [
	'./img/01.webp',
	'./img/02.webp',
	'./img/03.webp',
	'./img/04.webp',
	'./img/05.webp',
]

const carouselDOMElement = document.querySelector('.carousel')


const thumbnailDOMElement = carouselDOMElement.querySelector('.thumbnail')

for (let i = 0; i < imagesSrc.length; i++) {
	
	const src = imagesSrc[i]

	const html = `<img class="carousel__item" src="${src}" alt="" />`
	const htmlThumb = `<img class="carousel__item--thumb" src="${src}" alt="" />`

	
	thumbnailDOMElement.innerHTML += htmlThumb
	carouselDOMElement.innerHTML += html 

}

// recuperando dal DOM tutte le immagini stampate nel ciclo for
const itemDOMElements = document.querySelectorAll('.carousel__item')
console.log(itemDOMElements)

// creo la variabile stato del carosello (indice della slide attiva)
let currentIndex = 0

// aggiungo la classe active alla slide attiva
let currentSlide = itemDOMElements[currentIndex]
currentSlide.classList.add('active')

// carousel controls
const arrowTop = document.querySelector('.carousel .arrow--top')
const arrowBottom = document.querySelector('.carousel .arrow--bottom')
console.dir(arrowTop, arrowBottom)

arrowBottom.addEventListener('click', function () {
	console.log('click bottom')

	const activeSlideElement = itemDOMElements[currentIndex]
	activeSlideElement.classList.remove('active')

	if (currentIndex === itemDOMElements.length - 1) {
		currentIndex = 0
	} else {
		currentIndex++
	}

	const nextSlideElement = itemDOMElements[currentIndex]
	nextSlideElement.classList.add('active')
})

arrowTop.addEventListener('click', function () {
	console.log('click top')

	const activeSlideElement = itemDOMElements[currentIndex]
	activeSlideElement.classList.remove('active')

	if (currentIndex === 0) {
		currentIndex = itemDOMElements.length - 1
	} else {
		currentIndex--
	}

	const nextSlideElement = itemDOMElements[currentIndex]
	nextSlideElement.classList.add('active')
})