

 /**
  * This funtion valid user name
  * @returns false if the user name field is empty
  */
    function validateForm() {
      let x = document.forms["myForm"]["fname"].value;
      if (x == "") {
        alert("Name must be filled out");
        return false;
      }
    }

  