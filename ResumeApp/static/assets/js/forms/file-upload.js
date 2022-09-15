$(document).ready(function(){
    // For file attachment
    var arr = [];
	var children = "";
	var count = 0;
	var count2 = 0
	$('#file-upload').change(function(e) {
		count2++
		if(count2 > 1){
			count++;
		}
        var file = $('#file-upload')[0].files[0].name;
		arr.push(file);
			children = '<label>' + arr[count] + '<span title="Remove Attachment" class="delete-label bs-tooltip"><i class="las la-times"></i></span></label>';
        // console.log(children);
        $(".attached-files").css({
            'display': 'block',
        });
        $(".attached-files").append(children);
         // If no file was selected, empty the preview <img>
         if(!e.target.files.length){
            return imgElement.src = '';
         } 
         // Set the <img>'s src to a reference URL to the selected file
         return imgElement.src = URL.createObjectURL(e.target.files.item(0))
	});
	$('.attached-files').on('click', '.delete-label',  function(event) {
        $(this).parent().remove();
        imgElement.src = '';
        $(".attached-files").css({
            'display': 'none',
        });
    });
    const imgElement = document.getElementById('image-preview');
});