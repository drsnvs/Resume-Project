$(document).ready(function() {
  function deleteNote() {
    $(".delete-note").off('click').on('click', function(event) {
      event.stopPropagation();
      $(this).parents('.note-item').remove();
    })
  }
  function favNote() {
    $(".fav-note").off('click').on('click', function(event) {
      event.stopPropagation();
      $(this).parents('.note-item').toggleClass('note-fav');
      $(this).toggleClass("las");
    })
  }
  function addLabelGroups() {
    $('.tags-selector .label-group-item').off('click').on('click', function(event) {
      event.preventDefault();
      /* Act on the event */
      var getclass = this.className;
      var getSplitclass = getclass.split(' ')[0];
      if ($(this).hasClass('label-personal')) {
        $(this).parents('.note-item').removeClass('note-social');
        $(this).parents('.note-item').removeClass('note-work');
        $(this).parents('.note-item').removeClass('note-important');
        $(this).parents('.note-item').toggleClass(getSplitclass);
      } else if ($(this).hasClass('label-work')) {
        $(this).parents('.note-item').removeClass('note-personal');
        $(this).parents('.note-item').removeClass('note-social');
        $(this).parents('.note-item').removeClass('note-important');
        $(this).parents('.note-item').toggleClass(getSplitclass);
      } else if ($(this).hasClass('label-social')) {
        $(this).parents('.note-item').removeClass('note-personal');
        $(this).parents('.note-item').removeClass('note-work');
        $(this).parents('.note-item').removeClass('note-important');
        $(this).parents('.note-item').toggleClass(getSplitclass);
      } else if ($(this).hasClass('label-important')) {
        $(this).parents('.note-item').removeClass('note-personal');
        $(this).parents('.note-item').removeClass('note-social');
        $(this).parents('.note-item').removeClass('note-work');
        $(this).parents('.note-item').toggleClass(getSplitclass);
      }
    });
  }
  $('.hamburger').on('click', function(event) {
    $('.app-note-container').find('.tab-title').toggleClass('note-menu-show')
    $('.app-note-container').find('.app-note-overlay').toggleClass('app-note-overlay-show')
  })
  $('.app-note-overlay').on('click', function(e){
    $(this).parents('.app-note-container').children('.tab-title').removeClass('note-menu-show')
    $(this).removeClass('app-note-overlay-show')
  })
  $('.tab-title .nav-pills a.nav-link').on('click', function(event) {
    $(this).parents('.app-note-container').find('.tab-title').removeClass('note-menu-show')
    $(this).parents('.app-note-container').find('.app-note-overlay').removeClass('app-note-overlay-show')
  })
  var $btns = $('.list-actions').click(function() {
    if (this.id == 'all-notes') {
      var $el = $('.' + this.id).fadeIn();
      $('#ct > div').not($el).hide();
    } if (this.id == 'important') {
      var $el = $('.' + this.id).fadeIn();
      $('#ct > div').not($el).hide();
    } else {
      var $el = $('.' + this.id).fadeIn();
      $('#ct > div').not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');  
  })
  $('#btn-add-notes').on('click', function(event) {
    $('#notesMailModal').modal('show');
    $('#btn-n-save').hide();
    $('#btn-n-add').show();
  })
  // Button add
  $('#notesMailModal').on('hidden.bs.modal', function (event) {
      event.preventDefault();
      document.getElementById('n-title').value = '';
      document.getElementById('n-description').value = '';
  })
  deleteNote();
  favNote();
  addLabelGroups();
})
// Validation Process
var $_getValidationField = document.getElementsByClassName('validation-text');
getNoteTitleInput = document.getElementById('n-title');
getNoteTitleInput.addEventListener('input', function() {
  getNoteTitleInputValue = this.value;
  if (getNoteTitleInputValue == "") {
    $_getValidationField[0].innerHTML = 'Title Required';
    $_getValidationField[0].style.display = 'block';
  } else {
    $_getValidationField[0].style.display = 'none';
  }
})
getNoteDescriptionInput = document.getElementById('n-description');
getNoteDescriptionInput.addEventListener('input', function() {
  getNoteDescriptionInputValue = this.value;
  if (getNoteDescriptionInputValue == "") {
    $_getValidationField[1].innerHTML = 'Description Required';
    $_getValidationField[1].style.display = 'block';
  } else {
    $_getValidationField[1].style.display = 'none';
  }
})
$('.note-action .fav-note').hover(function () {
  $(this).toggleClass("las");
});
$('.note-container .note-content').on('click', function(){
  window.location.href = 'apps_notes_details.html';
  return false;
});
