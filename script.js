//display javascript

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// // thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n)
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides")
//     let dots = document.getElementsByClassName("dot")
    
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = 1
//     }

//     for ( i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"
//     }
//     for( i = 0; i < dots.length; i++ ){
//         dots[i].className = dots[i].className.replace(" active", "")
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex -1].className += " active";
// }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Automatic slide

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//      let i = 0;
//      let slides = documents.getElementById("mySlides");
//      for ( i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"
//      }

//      slideIndex++;
//      if ( slideIndex > slides.length) {
//         slideIndex = 1;
//         slides[slideIndex.length].style.display = "block"
//         setTimeout(showSlides, 2000)
//      }
// }

// ============================================================================

const  body = document.querySelector("body");


function dark() {
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black";
  }

  else{
    body.style.backgroundColor = "white";
  }
}