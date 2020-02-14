function submitNow(){
    var checkBox = document.getElementById("policyCheck");
    
    // Check if User check accept the policy
    if(checkBox.checked == false){
        alert('Please accept the term of use & privacy policy');
        return false;
    }

}
