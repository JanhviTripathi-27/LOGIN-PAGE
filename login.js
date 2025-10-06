alert('Welcome to Rose Radiance 🌺🌸');

function userInput() {
    var a = document.getElementById('username').value;
    var b = document.getElementById('email').value;
    var c = document.getElementById('password').value;
    var d = document.getElementById('countryCode').value;
    var e = document.getElementById('PhoneInput').value;
    var f = document.getElementById('countryFilter').value;
    
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);



    if (a === "" || b === "" || c === "" || d === "" || e === "" || f === "" ) {
        alert("All fields are mandatory");
        return false;
    } else if (e.length !== 10) {
        alert("Please enter a valid 10-digit phone number!");
        return false;
    } else if (isNaN(e)) {
        alert("Phone number should contain only numbers!");
        return false;
    } else {
        alert("Form submitted successfully!");
        return true;
    }
}