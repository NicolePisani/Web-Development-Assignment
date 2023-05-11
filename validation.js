function validateForm1(){
    var errors = "";

    var FirstName1 = document.getElementById('firstName1').value;
    if(FirstName1==""){
        errors += "<li>Please enter First Name.</li>";
        document.getElementById('firstName1').classList.add('inputError');
    }
    else{
        document.getElementById('firstName1').classList.remove('inputError');
    }

    var LastName1 = document.getElementById('lastName1').value;
    if (LastName1==""){
        errors += "<li>Please enter Last Name.</li>";
        document.getElementById('lastName1').classList.add('inputError');
    }
    else{
        document.getElementById('lastName1').classList.remove('inputError');
    }

    var Email1 = document.getElementById('email1').value;
    if (Email1==""){
        errors += "<li>Please enter Email.</li>";
        document.getElementById('email1').classList.add('inputError');
    }
    else{
        document.getElementById('email1').classList.remove('inputError');
    }

    var Phone1 = document.getElementById('phone1').value;
    if (Phone1==""){
        errors += "<li>Please enter Phone.</li>";
        document.getElementById('phone1').classList.add('inputError');
    }
    else{
        document.getElementById('phone1').classList.remove('inputError');
    }


    if(errors!=""){
        document.getElementById('errorlist').innerHTML = errors;
        return false;
    }
    
    else{
        document.getElementById('errorlist').innerHTML = "";
        return true;
    
    }
}

function resetForm1(){
    document.getElementById('errorlist').innerHTML = "";
    document.getElementById('FirstName1').classList.remove('inputError');
    document.getElementById('LastName1').classList.remove('inputError');
    document.getElementById('Email1').classList.remove('inputError');
    document.getElementById('Phone1').classList.remove('inputError');
}

function validateForm2(){
    var errors = "";

var FirstName2 = document.getElementById('firstName2').value;
    if(FirstName2==""){
        errors += "<li>Please enter First Name.</li>";
        document.getElementById('firstName2').classList.add('inputError');
    }
    else{
        document.getElementById('firstName2').classList.remove('inputError');
    }

    var LastName2 = document.getElementById('lastName2').value;
    if (LastName2==""){
        errors += "<li>Please enter LastName.</li>";
        document.getElementById('lastName2').classList.add('inputError');
    }
    else{
        document.getElementById('lastName2').classList.remove('inputError');
    }

    var Email2 = document.getElementById('email2').value;
    if (Email2==""){
        errors += "<li>Please enter Email.</li>";
        document.getElementById('email2').classList.add('inputError');
    }
    else{
        document.getElementById('email2').classList.remove('inputError');
    }

var Password2 = document.getElementById('password2').value;
    if (Password2==""){
        errors += "<li>Please enter Phone.</li>";
        document.getElementById('password2').classList.add('inputError');
    }
    else{
        document.getElementById('password2').classList.remove('inputError');
    }
}

function resetForm2(){
    document.getElementById('errorlist').innerHTML = "";
    document.getElementById('firstName2').classList.remove('inputError');
    document.getElementById('lastName2').classList.remove('inputError');
    document.getElementById('email2').classList.remove('inputError');
    document.getElementById('password2').classList.remove('inputError');
}
    