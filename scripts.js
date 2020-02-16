function submitNow(){
    var checkBox = document.getElementById("policyCheck");
    var passwordOne = document.forms["form"]["password"].value;
    var passwordTwo = document.forms["form"]["confirmPassword"].value;

    // Check if user input the match password
    if(passwordOne !== passwordTwo){
        alert('Please check your password if it\'s match');
        return false;
    }
    // Check if user check accept the policy
    if(checkBox.checked == false){
        alert('Please accept the term of use & privacy policy');
        return false;
    }

}
