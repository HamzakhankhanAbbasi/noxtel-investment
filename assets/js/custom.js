// NAVIGATION
initializeStellarNav(1, '#main-nav');
function initializeStellarNav(index, element) {
  $(element).stellarNav({
    breakpoint: 1024,
    position: 'left'
  });
}

// INDEX SECTION 1 SLIDER JS
$('.indexSec1-slider').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});


//PRODUCT QUANTITY SELECT INPUT
$(document).ready(function(){
    $('.count').prop('disabled', false);
    $(document).on('click','.plus',function(){
       $(this).siblings('.count').val(parseInt($(this).siblings('.count').val()) + 1 );
   });
    $(document).on('click','.minus',function(){
      $(this).siblings('.count').val(parseInt($(this).siblings('.count').val()) - 1 );
      if ($(this).siblings('.count').val() == 0) {
        $(this).siblings('.count').val(1);
        }
    });
});

//showandhide-sidebar-home-page
$(document).ready(function(){
  $('.head-wrap').click(function(){
    $('.category-listing').fadeToggle();
    //  $('.category-listing').toggle();
  });
});
