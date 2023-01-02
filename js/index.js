


const slides = document.querySelectorAll(".mySlides")
var counter = 0;
console.log(slides)


slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

const goNext = () => {
    counter++;
    if (counter > slides.length-1) { counter = 0}
    slideImage()
}

const goPrev = () => {
    counter--;
    if (counter < 0) {counter = slides.length-1}
    slideImage()
}


