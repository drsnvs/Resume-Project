$(function () {
  $('input.basic').maxlength({
    threshold: 25,
    alwaysShow: false,
    placement: 'bottom-right-inside',
    warningClass: "label text-warning font-12",
    limitReachedClass: "label text-success-teal font-12"
  });
  $('input.threshold').maxlength({
    threshold: 20,
    alwaysShow: false,
    placement: 'bottom-right-inside',
    warningClass: "label text-warning font-12",
    limitReachedClass: "label text-success-teal font-12",
  });
  $('input.color-change').maxlength({
    placement: 'bottom-right-inside',
    warningClass: "label badge-warning font-12 px-2 rounded mt-1",
    limitReachedClass: "label badge-success-teal font-12 px-2 rounded mt-1",
  });
  $('input.custom-message').maxlength({
    threshold: 25,
    alwaysShow: false,
    placement: 'bottom-right-inside',
    warningClass: "label text-warning font-12 mt-1",
    limitReachedClass: "label text-success-teal font-12 mt-1",
    preText: 'You have used ',
    separator: ' of ',
    postText: ' chars.'
  });
  $('textarea#textarea').maxlength({
    threshold: 225,
    alwaysShow: false,
    placement: 'bottom-right-inside',
    warningClass: "label text-warning font-12 mt-1",
    limitReachedClass: "label text-success-teal font-12 mt-1"
  });
  $('input.bottom').maxlength({
    threshold: 25,
    alwaysShow: false,
    placement: 'bottom',
    warningClass: "label text-warning font-12 mt-1",
    limitReachedClass: "label text-success-teal font-12 mt-1"
  });
  $('input.left').maxlength({
    threshold: 25,
    alwaysShow: false,
    placement: 'left',
    warningClass: "label text-warning font-12",
    limitReachedClass: "label text-success-teal font-12"
  });
  $('input.right').maxlength({
    threshold: 25,
    alwaysShow: false,
    placement: 'right',
    warningClass: "label text-warning font-12",
    limitReachedClass: "label text-success-teal font-12"
  });
  $('input.top').maxlength({
    threshold: 25,
    alwaysShow: false,
    placement: 'top',
    warningClass: "label text-warning font-12",
    limitReachedClass: "label text-success-teal font-12"
  });
  $('input.bottom-right').maxlength({
    threshold: 25,
    alwaysShow: false,
    placement: 'bottom-right',
    warningClass: "label text-warning font-12 mt-1",
    limitReachedClass: "label text-success-teal font-12 mt-1"
  });
  $('input.top-right').maxlength({
    threshold: 25,
    alwaysShow: false,
    placement: 'top-right',
    warningClass: "label text-warning font-12",
    limitReachedClass: "label text-success-teal font-12"
  });
  $('input.top-left').maxlength({
    threshold: 25,
    alwaysShow: false,
    placement: 'top-left',
    warningClass: "label text-warning font-12",
    limitReachedClass: "label text-success-teal font-12"
  });
  $('input.bottom-left').maxlength({
    threshold: 25,
    alwaysShow: false,
    placement: 'bottom-left',
    warningClass: "label text-warning font-12",
    limitReachedClass: "label text-success-teal font-12"
  });
  $('input.centered-right').maxlength({
    threshold: 25,
    alwaysShow: false,
    placement: 'centered-right',
    warningClass: "label text-warning font-12 mt-1",
    limitReachedClass: "label text-success-teal font-12 mt-1"
  });
});