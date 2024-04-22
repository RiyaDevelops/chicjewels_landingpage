
// hamburger variable, hamburger variable selects css element with class name menu
const hamburger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile");

hamburger.addEventListener('click', () => {
    // hamburger.classlist.toggle("toggle");
    mobileMenu.classList.toggle("navbar-open");
});


 // Slider Begins here 
 const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true,
    skipBtn:false,
    // This JavaScript code retrieves the HTML element with the ID "prev-arrow" from the document.
    prevArrow: document.getElementById('prev-arrow'), // previous arrow
    nextArrow: document.getElementById('next-arrow'),  // next arrow
    responsive: {
        // viewport for 480 and smaller
        480:{
            dots: true,
            arrows:true,
        },
        // from 500 to 1279 viewport dots are shown
       
    }


    });



   

  

//  ONLY ACCEPTS OND ID AS ITS ARGUemenNT ??

   
   


      

 


  
    