var pContainerHeight = $('.yawa').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.name').css({
      'transform' : 'translate(0px, '+ wScroll /5 +'%)'
    });



    }

  });