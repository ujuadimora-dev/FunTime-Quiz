

 /**
  * This funtion valid user name(credit  to  https://www.w3schools.com/)
  * @returns false if the user name field is empty
  */
    function validateForm() {
      let x = document.forms["myForm"]["fname"].value;
      if (x == "") {
        alert("Name must be filled out");
        return false;
      }
    }

  