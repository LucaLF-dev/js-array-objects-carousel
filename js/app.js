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