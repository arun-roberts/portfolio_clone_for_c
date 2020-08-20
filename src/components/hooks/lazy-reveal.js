window.addEventListener('load', function() {
  
    // setTimeout to simulate the delay from a real page load
    setTimeout(lazyLoad, 1000);
    
  });
  
  function lazyLoad() {
    var card_images = document.querySelectorAll('.grid-item');
    
    // loop over each card image
    card_images.forEach(function(card_image) {
      var content_image = card_image.querySelector('img');
      
      // listen for load event when the new photo is finished loading
      content_image.addEventListener('load', function() {
        card_image.style.opacity = 0.5;
      });
      
    });
    
  }