$(document).ready(function() {
  $('#input-search').on('keyup', function() {
    var rex = new RegExp($(this).val(), 'i');
      $('.searchable-items .items:not(.items-header-section)').hide();
      $('.searchable-items .items:not(.items-header-section)').filter(function() {
          return rex.test($(this).text());
      }).show();
  });
  $('#btn-add-company').on('click', function(event) {
    $('#addCompanyModal #btn-add').show();
    $('#addCompanyModal #btn-edit').hide();
    $('#addCompanyModal').modal('show');
  })
  $('.btn-edit-contact').on('click', function(event) {
    $('#editContactModal #btn-add').show();
    $('#editContactModal #btn-edit').hide();
    $('#editContactModal').modal('show');
  })
  $('#image').click(function(){
    $('#myfile').click()
  })
});
