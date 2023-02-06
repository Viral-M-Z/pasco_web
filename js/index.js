
var acc = document.getElementsByClassName("pages-collapsible-title");
var i;

for (i = 0; i < acc.length; i++) {
    
    // var previous = acc[i];
    // // console.log(acc[i]);
    // if (acc[i] != previous) {
    //     previous.addEventListener("click", function () {
    //        this.classList.toggle("pages-active"); 
    //        var panel = this.nextElementSibling;
    //        panel.style.maxHeight = "0px";
    //     });
    // }
    // acc[i].onclick = function(){alert('Number ' + i + ' was clicked')};
    // console.log(this);
    acc[i].addEventListener("click", function () {
        
        // alert('Number ' + e + ' was clicked');
        this.classList.toggle("pages-active");
        var parentC = this.style;
        var panel = this.nextElementSibling.style;
        // console.log(panel.style);
        // console.log(this.style);
        if (panel.maxHeight) {
            panel.border = "0px";
            panel.maxHeight = null;
            parentC.borderBottomLeftRadius = "4px";
            parentC.borderBottomRightRadius = "4px";
        } else {
            panel.border = "1px solid rgba(255, 255, 255, 0.38)";
            panel.maxHeight = this.nextElementSibling.scrollHeight + "px";
            parentC.borderBottomLeftRadius = "0px";
            parentC.borderBottomRightRadius = "0px";
            panel.borderTop = "0px";
        }
    });

    // this.acc.toggle("expand");
    // var panel = document.getElementsByClassName("pages-body-content");
    // console.log(panel.style.maxHeight);
    // console.log(panel.style.display);
    // if (panel.style.display === "flex") {
    //     panel.style.display = 'none';
    // } else {
    //     panel.style.display = "flex";
    // }
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


