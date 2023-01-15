function validate(){  
    let name = document.getElementById('username').value;  
    let password = document.getElementById('password').value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  

    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      } 
      else
       alert('successful') 
    } 