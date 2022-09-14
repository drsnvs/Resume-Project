$( document ).ready(function() {
  $('.user-list-box .search > input').on('keyup', function() {
    var rex = new RegExp($(this).val(), 'i');
      $('.people .person').hide();
      $('.people .person').filter(function() {
        return rex.test($(this).text());
      }).show();
  });
});
$('.user-list-box .person, .team-container .single-team').on('click', function(event) {
  if ($(this).hasClass('.active')) {
    return false;
  } else {
    $('.user-list-box .person').removeClass('active');
    $(this).addClass('active');
    $('.chat-details').fadeIn();
    $('.chat-user-details').fadeIn();
    $('.chat-details.empty').addClass('d-none');
    const getScrollContainer = document.querySelector('.chatting-container'); //Scroll bottom when chat initiate
    getScrollContainer.scrollTop = getScrollContainer.scrollHeight; //Scroll bottom when chat initiate
  }
  // For Smaller Screens
  $('.hamburger').children().removeClass('la-times');
  $('.hamburger').children().addClass('la-bars');
  $('.chat-container .user-container').removeClass('opened');
  toggleHumburger = !toggleHumburger;
});
$('.chat-with').on('click', function(event) {
  $('.chat-user-details').addClass('visible');
});
$('.hide-chat-user-details').on('click', function(event) {
  $(this).parents('.chat-user-details').removeClass('visible');
});
$('.chat-text-input').on('keydown', function(event) {
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes();
  if(event.key === 'Enter') {
    var chatInput = $('.chat-text-input');
    var chatInputMessage = chatInput.val();
    if (chatInputMessage === '') { 
      chatInput.addClass('border border-danger');
      return; 
    } else {
      $messageHtml = '<div class="own-chat-container slideInRight"><div class="own-chat"><p>' + chatInputMessage + '</p></div><span class="own-time">' + time + '</span></div>';
      $('.chatting-container').append($messageHtml);
      const getScrollContainer = document.querySelector('.chatting-container'); //Scroll bottom when chat initiate
      getScrollContainer.scrollTop = getScrollContainer.scrollHeight; //Scroll bottom when chat initiate
      if(chatInput.hasClass('border border-danger')){
        chatInput.removeClass('border border-danger');
      }
      chatInput.val('');
    }
  }
})
$('.chat-send').on('click', function(event) {
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes();
  var chatInput = $('.chat-text-input');
  var chatInputMessage = chatInput.val();
  if (chatInputMessage === '') { 
    chatInput.addClass('border border-danger');
    return; 
  } else {
    $messageHtml = '<div class="own-chat-container slideInRight"><div class="own-chat"><p>' + chatInputMessage + '</p></div><span class="own-time">' + time + '</span></div>';
    $('.chatting-container').append($messageHtml);
    const getScrollContainer = document.querySelector('.chatting-container'); //Scroll bottom when chat initiate
    getScrollContainer.scrollTop = getScrollContainer.scrollHeight; //Scroll bottom when chat initiate
    if(chatInput.hasClass('border border-danger')){
      chatInput.removeClass('border border-danger');
    }
    chatInput.val('');
  }
});
$('.start-call').on('click', function(event) {
  $('.chat-calling-div').show(); // Enable it for re-connecting
  $('.chat-calling-div').addClass('start-call'); // Calling popup appeared
  $('.scw-call-type span').hide(); // Hide 'is video' text 
  $('.accept-call').show();
  $('.accept-video-call').hide();
});
$('.start-video-call').on('click', function(event) {
  $('.chat-calling-div').show(); // Enable it for re-connecting
  $('.chat-calling-div').addClass('start-call'); // Calling popup appeared
  $('.scw-call-type span').show(); // Show 'is video' text 
  $('.accept-video-call').show();
  $('.accept-call').hide();
});
$('.accept-call').on('click', function(event) {
  $('.small-call-window-container').addClass('accepted-call'); // Call accepted / connected
  $('.mute-call').addClass('active'); // Mute button show
  $('.accept-call').hide(); // Call accept button hide
  $('.scw-call-type').hide();
  $('.accepted-call-timer').show(); // Call Timer hide
  $('.call-user').show();
});
$('.accept-video-call').on('click', function(event) {
  $('.small-call-window-container').addClass('accepted-video-call'); // Call accepted / connected
  $('.mute-call').addClass('active'); // Mute button show
  $('.accept-video-call').hide(); // Call accept button hide
  $('.scw-call-type').hide();
  $('.accepted-call-timer').show(); // Call Timer hide
  $('.call-user').hide();
  $('.video-user').show();
});
var toggleMuteButton;
$('.mute-call').on('click', function(event) {
  toggleMuteButton = !toggleMuteButton;
  if(toggleMuteButton){
    $('.la-microphone-slash').hide();
    $('.la-microphone').show();
  } else {
    $('.la-microphone-slash').show();
    $('.la-microphone').hide();
  }
});
$('button.reject-call').on('click', function(event) {
  $('.chat-calling-div').removeClass('start-call'); // Calling popup closed
  if($('.small-call-window-container').hasClass('accepted-call')){
    $('.small-call-window-container').removeClass('accepted-call'); // End call
    $('.chat-calling-div').hide(); // Instantly Close calling popup
  }  
  if($('.small-call-window-container').hasClass('accepted-video-call')){
    $('.small-call-window-container').removeClass('accepted-video-call'); // End call
    $('.chat-calling-div').hide(); // Instantly Close calling popup
  } 
  //$('.accept-call').show(); // Call accept button show
  $('.mute-call').removeClass('active'); // Mute button hide
  $('.scw-call-type').show();
  $('.accepted-call-timer').hide(); // Call Timer show
  $('.call-user').show();
  $('.video-user').hide();
});
var toggleHumburger
$('.hamburger').on('click', function(event) {
  toggleHumburger = !toggleHumburger;
  if(toggleHumburger){
    $(this).children().removeClass('la-bars');
    $(this).children().addClass('la-times');
    $('.chat-container .user-container').addClass('opened');
  } else {
    $(this).children().removeClass('la-times');
    $(this).children().addClass('la-bars');
    $('.chat-container .user-container').removeClass('opened');
  }
})
const ps = new PerfectScrollbar('.people', {
  suppressScrollX : true
});
const cs = new PerfectScrollbar('.chatting-container', {
  suppressScrollX : true
});
