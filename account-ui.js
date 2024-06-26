$(document).ready(function() {
  // Disable the button initially
  $('#account-submit').prop('disabled', true);
  $('#password-submit').prop('disabled', true);
  
  $('#account-form input').change(function() {
    if ($(this).val() !== '') {
      $('#account-submit').prop('disabled', false);
      $('#account-submit').removeClass('button-tertiary-gray-outline').addClass('button-primary-outline-small');
    } else {
      // If default option is selected, disable the button
      $('#account-submit').prop('disabled', true);
      $('#account-submit').removeClass('button-primary-outline-small').addClass('button-tertiary-gray-outline');
    }
  });
  
  $('#new-password-input').change(function() {
    if ($(this).val() !== '') {
      $('#password-submit').prop('disabled', false);
      $('#password-submit').removeClass('button-tertiary-gray-outline').addClass('button-primary-outline-small');
    } else {
      // If default option is selected, disable the button
      $('#password-submit').prop('disabled', true);
      $('#password-submit').removeClass('button-primary-outline-small').addClass('button-tertiary-gray-outline');
    }
  });
  
  $('#account-form').submit(function(event) {
      $('#account-submit').prop('disabled', true);
      $('#account-submit').removeClass('button-primary-outline-small').addClass('button-tertiary-gray-outline');
  })
  
  $('#password-form').submit(function(event) {
      $('#password-submit').prop('disabled', true);
      $('#password-submit').removeClass('button-primary-outline-small').addClass('button-tertiary-gray-outline');
  })
});