// step -01:add click event handler with the submit button

document.getElementById("btn-submit").addEventListener("click", function () {
  // step -02:get the email address inside the email input field
  //   always remember to use .value to get text from an input field

  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   step -03:get password
  //   3.1:set id on the html element
  //   3.1:get the element
  //   3.1:get the value from the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  //   DANGER : DO NOT VERIFY email password on the client site
  // step -04:verify email and password

  if (email === "sontan@baap.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("tui password vule gesosh!! Toke teijjo sontan ghosona korlam.");
  }
});
