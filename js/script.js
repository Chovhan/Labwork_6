$(document).ready(function() {
  $('.img-area').slick({
    autoplay: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false
  });

  $('#switch-1').threestatebutton({
    statecount: 3,
    state: 1,
    stateChanged: stateChanged
  });

  $('#signButton').click(function() {
    var name = $('#name').val();
    var email = $('#email').val();
    var pass = $('#password').val();
    var code = $('#code').val();

    console.log("Sign in");
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("password: " + pass);
    console.log("code: " + code);
  });

  $('#loginButton').click(function() {
    var emailLog = $('#emaillog').val();
    var passwordLog = $('#passwordlog').val();

    console.log("Log in");
    console.log("email: " + emailLog);
    console.log("password: " + passwordLog);
  })
})

function stateChanged(state, source) {
  var elements = document.querySelectorAll("[role='presentation']");
  elements[state].click();
}
