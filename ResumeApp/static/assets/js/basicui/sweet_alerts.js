$('.widget-content .message').on('click', function () {
  swal({
    title: 'Basic Message',
    padding: '1em'
  })
})
$('.widget-content .success').on('click', function () {
  swal({
    title: 'Good job!',
    text: "You clicked the!",
    type: 'success',
    padding: '2em'
  })
})
$('.widget-content .dynamic-queue').on('click', function () {
  const ipAPI = 'https://api.ipify.org?format=json'
  swal.queue([{
    title: 'Your public IP',
    confirmButtonText: 'Show my public IP',
    text:
      'Your public IP will be received ' +
      'via AJAX request',
    showLoaderOnConfirm: true,
    preConfirm: function() {
      return fetch(ipAPI)
        .then(function (response) { 
            return response.json();
        })
        .then(function(data) {
           return swal.insertQueueStep(data.ip)
        })
        .catch(function() {
          swal.insertQueueStep({
            type: 'error',
            title: 'Unable to get your public IP'
          })
        })
    }
  }])
})
$('.widget-content .title-text').on('click', function () {
  swal({
    title: 'The Internet?',
    text: "That thing is still around?",
    type: 'question',
    padding: '2em'
  })
})
$('.widget-content .step-by-step').on('click', function () {
  swal.mixin({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3'],
    padding: '2em',
  }).queue([
    {
      title: 'Question 1',
      text: 'Step by step modal is easy'
    },
    'Question 2',
    'Question 3'
  ]).then(function(result) {
    if (result.value) {
      swal({
        title: 'All done!',
        padding: '2em',
        html:
          'Your answers: <pre>' +
            JSON.stringify(result.value) +
          '</pre>',
        confirmButtonText: 'Great!'
      })
    }
  })
})
$('.widget-content .custom-animation').on('click', function () {
  swal({
    title: 'Custom animation with Animate.css',
    animation: false,
    customClass: 'animated tada',
    padding: '2em'
  })
})
$('.widget-content .timer').on('click', function () {
  swal({
    title: 'Auto close alert!',
    text: 'I will close in 1 seconds.',
    timer: 1000,
    padding: '2em',
    onOpen: function () {
      swal.showLoading()
    }
  }).then(function (result) {
    if (
      // Read more about handling dismissals
      result.dismiss === swal.DismissReason.timer
    ) {
      console.log('I was closed by the timer')
    }
  })
})
$('.widget-content .custom-image').on('click', function () {
  swal({
    title: 'Amazing!',
    text: 'Modal with a custom image.',
    imageUrl: 'assets/img/logo.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false,
    padding: '2em'
  })
})
$('.widget-content .html').on('click', function () {
  swal({
    title: '<i>Alert with</i> <u>HTML</u>',
    type: 'info',
    html:
      'You can use <b>bold text</b>, ' +
      '<a href="https://www.google.com">links</a> ' +
      'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      'OK',
    cancelButtonText:
    'Cancel',
    padding: '2em'
  })
})
$('.widget-content .warning.confirm').on('click', function () {
  swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      padding: '2em'
    }).then(function(result) {
      if (result.value) {
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
})
$('.widget-content .custom-width-padding-background').on('click', function () {
  swal({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: "7em",
    customClass: "background-modal",
    background: '#fff url(assets/img/auth_1_bg_2.jpg) no-repeat 100% 100%',
  })
})
$('.widget-content .footer').on('click', function () {
  swal({
    type: 'error',
    title: 'Sorry!',
    text: 'Something went really wrong!',
    footer: '<a>This is a footer</a>',
    padding: '2em'
  })
})
