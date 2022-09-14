var fixmeTop = $('.makeitSticky').offset().top -10;       // get initial position of the element
$(window).scroll(function() {                  // assign scroll event listener
    var currentScroll = $(window).scrollTop(); // get current position
    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.makeitSticky').css({                      // scroll to that element or below it
          position: 'fixed',
          top: '55px',
          left: '256px',
          right: '20px',
          background: '#f2f7ff',
          width: '79.6%',
        });
    } else {                                   // apply position: static
        $('.makeitSticky').css({                      // if you scroll above it
          position: 'relative',
          background: '#f2f7ff',
          left: '-8px',
          width: '101.5%',
          top: '0',
        });
    }
});