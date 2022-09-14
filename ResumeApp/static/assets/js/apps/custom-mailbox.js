$(document).ready(function() {
	$('.selectall').click(function() {
		if ($(this).is(':checked')) {
			$('input:checkbox').prop('checked', true);
		} else {
			$('input:checkbox').prop('checked', false);
		}
	});
	$("input[type='checkbox'].justone").change(function(){
		var a = $("input[type='checkbox'].justone");
		if(a.length == a.filter(":checked").length){
			$('.selectall').prop('checked', true);
		}
		else {
			$('.selectall').prop('checked', false);
		}
	});
	$('.email-right input[type=checkbox]').on('change', function () {
		if($(this).prop('checked') == true){
			$(".mail-options").show();
			$(".mail-options-default").hide();
		}
		else if(!$(".email-right input[type=checkbox]:checked").length){
			$(".mail-options").hide();
			$(".mail-options-default").show();
		}
	});
	$('.email-starred').on('click', function(event) {
		if ($(this).find($("i")).hasClass("lar")) {
			$(this).find($("i")).removeClass('lar').addClass('las text-warning');
		} else if($(this).find($("i")).hasClass("las"))  {
			$(this).find($("i")).removeClass('las text-warning').addClass('lar');
		}
	});
	$('.message-list li a.title, .message-list li a.subject').on('click', function(){
		window.location.href = 'apps_mail_details.html';
		return false;
	});
	$('.input-search').on('keyup', function() {
	  var rex = new RegExp($(this).val(), 'i');
	    $('.message-list li').hide();
	    $('.message-list li').filter(function() {
			return rex.test($(this).text());
		}).show();
		if( $(this).val().length != 0 ) {
			$(".next-button").hide();
		} else {
			$(".next-button").show();
		}
	});
	var arr = [];
	var children = "";
	var count = 0;
	var count2 = 0
	$('#file-upload').change(function() {
		count2++
		if(count2 > 1){
			count++;
		}
		var file = $('#file-upload')[0].files[0].name;
		arr.push(file);
			children = '<label>' + arr[count] + '<span title="Remove Attachment" class="delete-label bs-tooltip"><i class="las la-times"></i></span></label>';
		// console.log(children);
		$(".attached-files").append(children);
	});
	$('.attached-files').on('click', '.delete-label',  function(event) {
		$(this).parent().remove();
	});
});