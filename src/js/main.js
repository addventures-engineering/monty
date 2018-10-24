/* Main JS code */
import "../sass/style.scss"

(function ($, Drupal) {
  $(document).ready(function() {

    /**
     * 
     *  Scroll Offset for anchor links so section titles not hidden under fixed header
     * 
     */
    // $('header .menu a').on('click', function(e){
    //   e.preventDefault();

    //   var scrollAnchor = $(this).attr('href');
    //   var scrollTo = $(scrollAnchor);
    //   var headerHeight = $('header').height();
    //   console.log('scrollAnchor',scrollAnchor);
      
    //   $('html,body').animate({
    //     scrollTop: scrollTo.offset().top - headerHeight
    //   }, 'slow');
    // });

    /**
     * 
     * Master Scroll listener function for future development expansion.
     * All scroll listeners should be added here to benefit from rAF throttling & debouncing.
     * 
     */
    // set variables
    var latestKnownScrollY = 0,
        scrollTicking = false,
        header = document.getElementsByTagName('header')[0];
    
    // Attach listener using browser compatabile methods
    if (window.addEventListener) {
      window.addEventListener('scroll', onScroll, false);
    } else {
      window.attachEvent('scroll', onScroll);
    }
    
    // Master scroll event listener function
    function onScroll() {
      latestKnownScrollY = window.pageYOffset;
      requestTick();
    }
    
    // tick function that wraps the animation effect functions. Used for debouncing the scroll listener
    function requestTick() {
      if(!scrollTicking) {
        
        // Use request animation frame with function callback to perform the animation
        // This method is the most performant by leveraging the native browser
        // API to synchronize the animation visual to browser render frame rate
        // for smoother animations with less memory overhead
        requestAnimationFrame(animationBehaviorCallback);

        // add additional scroll function effects here

      }
      scrollTicking = true;
    }
  
    // Rename this function and customize animation behavior
    function animationBehaviorCallback() {
      // reset the tick so we can
      // capture the next onScroll
      scrollTicking = false;

      // Add animation behavior here

    }



  });

  /**
   * 
   *  Function plugin for checking if element is visible in viewport
   *    Includes support for offset from top of bottom of viewport
   *    for more specific control of when to trigger callback behavior.
   * 
   */
  $.fn.isInViewport = function( options ) {

    var settings = $.extend({
      // Set default top & bottom offsets to zero
      bottomOffset: 0,
      topOffset: 0
    }, options );

    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    if( settings.topOffset > 0 ) {
      viewportTop += settings.topOffset;
    }
    var viewportBottom = viewportTop + $(window).height();
    if( settings.bottomOffset > 0 ) {
      viewportBottom -= settings.bottomOffset;
    }
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
})(window.jQuery, window.Drupal);