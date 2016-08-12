(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    $('.carousel').carousel();
    
    linkInterno.on('click',function(e) {
      e.preventDefault();
      var href = $(this).attr('href');
      $('html, body').animate({ scrollTop : $( href ).offset().top }, 'slow', 'easeInOutExpo');
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

