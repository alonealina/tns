console.log('js is loaded');
// BURGER
$(document).ready(function() {
  $('.header__burger').on('click', function() {
    $(this).toggleClass('is-open');
    $('.sp-menu').toggleClass('is-open');
  });
});

// SCROLL TO HASH
$(document).ready(function(){
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});

// LANG
$(document).ready(function() {
  $('.lang').on('click', function() {
    $(this).toggleClass('is-open');
    $('.lang-menu').fadeToggle('is-show');
  });
});

// FADE ANIMATION
$(window).scroll(function (){
  $('.is-fadein').each(function(){
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('is-play');
      // $(this).find('.animate').addClass('is-play');
    }
  });
  $('.is-fade-y').each(function(){
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('is-play');
      // $(this).find('.animate').addClass('is-play');
    }
  });
  $('.is-fade-x').each(function(){
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('is-play');
      // $(this).find('.animate').addClass('is-play');
    }
  });
});

$('.is-fadein').each(function(){
  var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
  if (scroll > elemPos - windowHeight + 100){
    $(this).addClass('is-play');
    // $(this).find('.animate').addClass('is-play');
  }
});
$('.is-fade-y').each(function(){
  var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
  if (scroll > elemPos - windowHeight + 100){
    $(this).addClass('is-play');
    // $(this).find('.animate').addClass('is-play');
  }
});
$('.is-fade-x').each(function(){
  var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
  if (scroll > elemPos - windowHeight + 100){
    $(this).addClass('is-play');
    // $(this).find('.animate').addClass('is-play');
  }
});

$(window).scroll(function (){
  var elemPos = $('.menu').offset().top;
  // console.log(elemPos);
  // console.log($(window).scrollTop());
  if($(window).scrollTop() > elemPos - 45) {
    $('.hidden-menu').show();
  } else {
    $('.hidden-menu').hide();
  }
});