// This code checks if all inputs of the form are filled and alerts the user if any input is empty

// form validation function
function validateForm() {
  var form = document.forms["formBody"];

  //   store form data in an object for easy access
  var formData = {
    first_Name: form["first-name"].value,
    last_Name: form["last-name"].value,
    email: form["email"].value,
    age_Range: form["age-range"].value,
  };

  // check if all fields are filled and alert user if any field is empty
  // returns the name of the empty fields in an array for later alerting this is used to prevent the user getting multiple alerts for each empty field
  const formValidityString = Object.keys(formData).map(function (key) {
    if (!formData[key] || formData[key] === "") {
      // replace underscores with spaces to make the text more readable
      return key.replace("_", " ");
    }
    return "";
  });

  //check if all fields are filled and return true if all fields are filled
  const formValid = formValidityString.every(function (value) {
    return value === "";
  });

  //ask the user to fill all fields if any field is empty
  if (!formValid) {
    alert(
      // lots of spaces to try and center the text i would normally use a popup modal but i alert is required for the assignment
      "Missing Required Fields! \r\n Please Enter Values For The Following Fields:\r\n\r\n                            " +
        formValidityString.join("\r\n                            ")
    );
  }
  // return false if any field is empty to prevent the form from submitting
  return formValid;
}

// welcome user function
// this function is called when the page loads and alerts the user to fill out the form
function welcomeUser() {
  alert(
    "Welcome to the Tourism Sample Page! \r\n\r\n Please fill out the form below to continue"
  );
}
