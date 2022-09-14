/* Scroll To Top */ 
$('.scrollTop').click(function() {
    $("html, body").animate({scrollTop: 0});
});
$('.navbar .dropdown.notification-dropdown > .dropdown-menu, .navbar .dropdown.message-dropdown > .dropdown-menu ').click(function(e) {
    e.stopPropagation();
});
/* Tooltips */
$('.bs-tooltip').tooltip();
/* Popovers */
$('.bs-popover').popover();
/* Rounded Tooltip */
$('.t-dot').tooltip({
    template: '<div class="tooltip status rounded-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
});
$('.nav-item .dropdown-menu .nav-drop-body a.account-item.settings').click(function() {
    console.log('as');
    $('body').addClass('right-bar-enabled');
    $('.rightbar-overlay').addClass('show');
    // Open third tab (settings) in right bar everytime
    $('.right-bar .simplebar-content .nav-tabs .nav-item:nth-child(1) a.nav-link').removeClass('active');
    $('.right-bar .simplebar-content .nav-tabs .nav-item:nth-child(3) a.nav-link').addClass('active');
    $('.right-bar .simplebar-content .tab-content .tab-pane:nth-child(1)').removeClass('active');
    $('.right-bar .simplebar-content .tab-content .tab-pane:nth-child(3)').addClass('active');
});
/* Version of IE */
function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  if (Idx > 0) 
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
    return 11;
  else
    return 0; // Not IE
}