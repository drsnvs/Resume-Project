$('.search .search-full input').on('keyup', function() {
  var rex = new RegExp($(this).val(), 'i');
    $('.file-t-content tbody tr').hide();
    $('.file-t-content tbody tr').filter(function() {
        return rex.test($(this).text());
    }).fadeIn();
});
$('#addFolder').on('click', function(event) {
  event.preventDefault();
  $('#addFolderModal').modal('show');
});
var fileManagerToggle;
$('#fileManagerHistory').on('click', function(event) {
  fileManagerToggle = !fileManagerToggle;
  event.preventDefault();
  if(fileManagerToggle){
    $('.file-manager-bottom-history').show();
    $('.file-manager-bottom-default').hide();
  } else {
    $('.file-manager-bottom-history').hide();
    $('.file-manager-bottom-default').show();
  }
});