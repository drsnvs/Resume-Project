// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('simple-example');
      var invalid = $('.simple-example .invalid-feedback');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
              invalid.css('display', 'block');
          } else {
              invalid.css('display', 'none');
              form.classList.add('was-validated');
          }
        }, false);
      });
    }, false);
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('email-form');
      var invalid = $('.email-form .invalid-feedback');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
              invalid.css('display', 'block');
          } else {
              invalid.css('display', 'none');
              form.classList.add('was-validated');
          }
        }, false);
      });
    }, false);
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('select-form');
      var invalid = $('.select-form .invalid-feedback');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
              invalid.css('display', 'block');
          } else {
              invalid.css('display', 'none');
              form.classList.add('was-validated');
          }
        }, false);
      });
    }, false);
  })();
function validateCheck(form){
    var invalid = $('.checkbox-form .invalid-feedback');
    var valid = $('.checkbox-form .valid-feedback');
    ErrorText= "";
    if ( ( form.gender.checked == false ) )
    {
        invalid.css('display', 'block');
        valid.css('display', 'none');
        return false;
    }
    else { 
        invalid.css('display', 'none');
        valid.css('display', 'block');
    }
};
function validateRadio(){
    var invalid = $('.radio-form .invalid-feedback');
    var valid = $('.radio-form .valid-feedback');
    var radios = document.getElementsByName("yesno");
    var formValid = false;
    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) {
            formValid = true;
            invalid.css('display', 'none');
            valid.css('display', 'block');
        }
        i++;        
    }
    if (!formValid){
        invalid.css('display', 'block');
        valid.css('display', 'none');
    } 
    return formValid;
};
function validateTextarea() {
    var invalid = $('.textarea-form .invalid-feedback');
    var valid = $('.textarea-form .valid-feedback');
    var val = document.getElementById('textarea').value;
    if (/^\s*$/g.test(val) || val.indexOf('\n') != -1) {
        invalid.css('display', 'block');
        valid.css('display', 'none');
    } else { 
        invalid.css('display', 'none');
        valid.css('display', 'block');
    }
}
function validatePasswordMatch(){
  var invalid = $('.field-matching .invalid-feedback');
  var invalidPasswordField = document.getElementById("invalidPasswordField");
  var valid = $('.field-matching .valid-feedback');
  var validPasswordField = document.getElementById("validPasswordField");
  var pass1 = document.getElementById('pwd1').value;
  var pass2 = document.getElementById('pwd2').value;
  if(pass1 == ''){
    invalid.css('display', 'block');
    invalidPasswordField.innerHTML = 'Please enter a password';
    return;
  }
  if(pass2 == ''){
    invalid.css('display', 'block');
    invalidPasswordField.innerHTML = 'Please enter confirm password';
    return;
  }
  if (pass1 == pass2)
  {
    invalid.css('display', 'none');
    valid.css('display', 'block');
    validPasswordField.innerHTML = 'Success !';
    return;
  } else {
    invalid.css('display', 'block');
    valid.css('display', 'none');
    invalidPasswordField.innerHTML = 'Password do not match';
  }
}
function isURL() {
  var invalid = $('.url-checking .invalid-feedback');
  var valid = $('.url-checking .valid-feedback');
  var urlID = document.getElementById("urlID");
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  if(pattern.test(urlID.value)){
    invalid.css('display', 'none');
    valid.css('display', 'block');
  } else {
    invalid.css('display', 'block');
    valid.css('display', 'none');
  }
}
function validateNumeric(){
  var invalid = $('.number-checking .invalid-feedback');
  var valid = $('.number-checking .valid-feedback');
  var numberID = document.getElementById("numberID");
  var z = numberID.value;
  if(!/^[0-9]+$/.test(z)){
    invalid.css('display', 'block');
    valid.css('display', 'none');
  } else {
    invalid.css('display', 'none');
    valid.css('display', 'block');
  }
}
function validateMin(){
  var invalid = $('.min-checking .invalid-feedback');
  var valid = $('.min-checking .valid-feedback');
  var minID = document.getElementById("minID");
  var z = minID.value;
  if(z.length<6){
    invalid.css('display', 'block');
    valid.css('display', 'none');
  } else {
    invalid.css('display', 'none');
    valid.css('display', 'block');
  }
}
function validateMax(){
  var invalid = $('.max-checking .invalid-feedback');
  var valid = $('.max-checking .valid-feedback');
  var maxID = document.getElementById("maxID");
  var z = maxID.value;
  if(z.length>6 || z.length < 1){
    invalid.css('display', 'block');
    valid.css('display', 'none');
  } else {
    invalid.css('display', 'none');
    valid.css('display', 'block');
  }
}
function validatePassword(){
  var invalid = $('.pwd-checking .invalid-feedback');
  var invalidPasswordField = document.getElementById("invalidPasswordField2");
  var valid = $('.pwd-checking .valid-feedback');
  var validPasswordField = document.getElementById("validPasswordField2");
  var re = /(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/;
  var p = document.getElementById('pwd').value;
  console.log(p.length);
  if (p.length < 8) {
    invalid.css('display', 'block');
    valid.css('display', 'none');
    invalidPasswordField.innerHTML = 'Your password must be at least 8 characters';
    return false;
  }
  if (p.search(/[a-z]/i) < 0) {
    invalid.css('display', 'block');
    valid.css('display', 'none');
    invalidPasswordField.innerHTML = 'Your password must contain at least one letter';
    return false;
  }
  if (p.search(/[0-9]/) < 0) {
    invalid.css('display', 'block');
    valid.css('display', 'none');
    invalidPasswordField.innerHTML = 'Your password must contain at least one digit';
    return false;
  }
  if (p.search(/[a-z]/) < 0) {
    invalid.css('display', 'block');
    valid.css('display', 'none');
    invalidPasswordField.innerHTML = 'Your password must contain at least one lowercase letter';
    return false;
  }
  if (p.search(/[A-Z]/) < 0) {
    invalid.css('display', 'block');
    valid.css('display', 'none');
    invalidPasswordField.innerHTML = 'Your password must contain at least one uppercase letter';
    return false;
  }
  if (p.search(/(?=.*[!@#$%^&*])/) < 0) {
    invalid.css('display', 'block');
    valid.css('display', 'none');
    invalidPasswordField.innerHTML = 'Your password must contain at least one special character';
    return false;
  }
  else {
    invalid.css('display', 'none');
    valid.css('display', 'block');
    return true;
  }
}
