$(document).ready(stickFooter);

$(window).resize(stickFooter);

function stickFooter() {
    
    if ($(window).height() > 1400) {
        $("#main-footer").addClass("fixed-bottom");

    } else {
        $("#main-footer").removeClass("fixed-bottom");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const options = {
      root:null,// its the viewport
      threshold: 0, //if 1 then 100% of item needs to be on the page
      rootMargin: "-50px" 
  };
      var lazyImages =[].slice.call(
       document.querySelectorAll("img.lazy")
      )
      
      if ("IntersectionObserver" in window) {
         let lazyImageObserver = 
           new IntersectionObserver((entries, observer) => {
             entries.forEach(function(entry) {
               if (entry.isIntersecting) {
                 let lazyImage = entry.target;
                 lazyImage.src = lazyImage.dataset.src;
                 lazyImage.srcset = lazyImage.dataset.srcset;
                 lazyImage.classList.remove("lazy");
                 lazyImage.classList.add("appear");
                 lazyImageObserver.unobserve(lazyImage);
                //  console.log(lazyImages);
               }
             });
           },options);
     
         lazyImages.forEach(function(lazyImage) {
           lazyImageObserver.observe(lazyImage);
         });
       } else {
         // Possibly fall back to a more compatible method here
       }
     });