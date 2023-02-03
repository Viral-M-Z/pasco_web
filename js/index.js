
var acc = document.getElementsByClassName("pages-collapsible-title");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("pages-active");
        // this.acc.toggle("expand");
        var panel = document.getElementsByClassName("pages-body-content");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });    
}



// const slides = document.querySelectorAll(".mySlides")
// var counter = 0;
// console.log(slides)


// slides.forEach(
//     (slide,index) => {
//         slide.style.left = `${index * 100}%`
//     }
// )

// const slideImage = () => {
//     slides.forEach(
//         (slide) => {
//             slide.style.transform = `translateX(-${counter * 100}%)`
//         }
//     )
// }

// const goNext = () => {
//     counter++;
//     if (counter > slides.length-1) { counter = 0}
//     slideImage()
// }

// const goPrev = () => {
//     counter--;
//     if (counter < 0) {counter = slides.length-1}
//     slideImage()
// }


