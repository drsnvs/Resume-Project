// Owl Carousel
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		center: true,
		items:1,
		dots: false,
		loop:true,
		autoplay:true,
		autoplayTimeout:2500,
		autoplayHoverPause:false,
	});
});
// Verification Code Inputs
$('.digit-group').find('input').each(function() {
	$(this).attr('maxlength', 1);
	$(this).on('keyup', function(e) {
		var parent = $($(this).parent());
		if(e.keyCode === 8 || e.keyCode === 37) {
			var prev = parent.find('input#' + $(this).data('previous'));
			if(prev.length) {
				$(prev).select();
			}
		} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
			var next = parent.find('input#' + $(this).data('next'));
			if(next.length) {
				$(next).select();
			} else {
				if(parent.data('autosubmit')) {
					parent.submit();
				}
			}
		}
	});
});
// Form hide and show
$("#getCodeButton").click(function(){
	$(".form-1").removeClass("fadeInLeft show");
	$(".form-1").hide();
	$(".form-2").addClass("fadeInRight show");
});
$("#changeEmailAddress").click(function(){
	$(".form-2").removeClass("fadeInRight show");
	$(".form-2").hide();
	$(".form-1").addClass("fadeInLeft show");
});
// Captcha
function Captcha(){
	var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
		'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
			'0','1','2','3','4','5','6','7','8','9');
	var i;
	for (i=0;i<6;i++){
		var a = alpha[Math.floor(Math.random() * alpha.length)];
		var b = alpha[Math.floor(Math.random() * alpha.length)];
		var c = alpha[Math.floor(Math.random() * alpha.length)];
		var d = alpha[Math.floor(Math.random() * alpha.length)];
		var e = alpha[Math.floor(Math.random() * alpha.length)];
		var f = alpha[Math.floor(Math.random() * alpha.length)];
		var g = alpha[Math.floor(Math.random() * alpha.length)];
	}
	var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
	document.getElementById("mainCaptcha").innerHTML = code;
	document.getElementById("mainCaptcha").value = code;
	removeCaptcha();
}
function ValidCaptcha(){
	var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
	var string2 = removeSpaces(document.getElementById('txtInputCaptcha').value);
	if (string1 == string2){
		// return true;
		$("#Button1").hide();
		$("#checkMark").show();
		$("#checkMark").addClass("fadeInUp");
		$("#txtInputCaptcha").removeClass("error");
	}else{        
		$("#checkMark").hide();
		$("#checkMark").removeClass("fadeInUp");
		$("#Button1").show();
		$("#txtInputCaptcha").addClass("error");
	}
}
function removeCaptcha(){
	$("#checkMark").hide();
	$("#checkMark").removeClass("fadeInUp");
	$("#Button1").show();
}
function removeSpaces(string){
	return string.split(' ').join('');
}