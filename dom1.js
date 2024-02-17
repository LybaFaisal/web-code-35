document.getElementById("ptag").innerHTML= "Lyba Here From @csschuckles";



let element= document.getElementById("ptag2");

document.getElementById("demo").innerHTML= "Modern advancements are due to:" + element.innerHTML;


let element1= document.getElementsByTagName("p");

document.getElementById("demo1").innerHTML= "First message=" + element1[3].innerHTML;

// password

function validateForm()
{
    let password=document.getElementById("password").value;

    if(password.length<8)
    {
        alert("Enter a password with atleast 8 characters");
        return false;
    }
    var uppercasePattern = /[A-Z]/;
            if (!uppercasePattern.test(password)) {
                alert("Password should contain at least one capital letter.");
                return false;
            }

            var LowercasePattern = /[a-z]/;
            if (!LowercasePattern.test(password)) {
                alert("Password should contain at least one Lower letter.");
                return false;
            }
            return true;
        }

            // if(password==password.toLowerCase()){
                // alert("Password should contain at least one uppercase");
                // return false}

                // if(password==password.toLowerCase()){
                // alert("Password should contain at least one uppercase");
                // return false}