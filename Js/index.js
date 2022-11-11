let slideIndex = 1;
showingSlides(slideIndex);

function slideShow(n) {
    showingSlides(slideIndex += n);
  }
  
  function showingSlides(n) {
    let i;
    let myslides = document.getElementsByClassName("slide");
    if (n > myslides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = myslides.length}
    for (i = 0; i < myslides.length; i++) {
      myslides[i].style.display = "none";
    }
    myslides[slideIndex-1].style.display = "block";
  }
  