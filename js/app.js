 var bLazy = new Blazy({
        breakpoints: [{
	    width: 420 // Max-width
          , src: 'data-src-small'
	}]
      , success: function(element){
	    setTimeout(function(){
		// We want to remove the loader gif now.
		// First we find the parent container
		// then we remove the "loading" class which holds the loader image
		var parent = element.parentNode;
		parent.className = parent.className.replace(/\bloading\b/,'');
	    }, 200);
        }
   });
 

   /*$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      autoplay: true,
      items: 1,
      nav: true,
      loop: true,
      autoplayHoverPause: true,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
    });
    $('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000]);
      console.log('play');
  })
  $('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay');
         console.log('stop');
  });
  });
*/

  $('.owl-carousel').owlCarousel({
    lazyLoad:true,
	autoplay: true,
	items: 1,
	nav: true,
	loop: true,
	autoplayHoverPause: true,
	animateOut: 'slideOutUp',
	animateIn: 'slideInUp',
  dots: true,
  autoplayTimeout: 2500
 
});


  


  objectFitImages();
  jarallax(document.querySelectorAll('.jarallax'));
  jarallax(document.querySelectorAll('.jarallax-keep-img'), {
      keepImg: true,
  });





$(document).foundation()


