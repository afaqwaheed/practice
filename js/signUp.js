$(document).ready(function () {

    const firstName = $('#firstName');
    const LastName = $('#lastName');
    const email = $('#email');
    const password = $('#password');
    let submitBtn = $('#submitBtn');

    firstName.keyup(function () {
        firstName_check();
    });

    function firstName_check() {
        if (firstName.val() === '' || firstName.val() === null) {
            $("#fnameMsg").html('* please enter your first name');
            $("#fnameMsg").show();
            return false;
        }
        else {
            $("#fnameMsg").hide();
        }

        if (firstName.val().length < 3 || firstName.val().length > 20) {
            $("#fnameMsg").html('* First Name length must be between 3 and 20');
            $("#fnameMsg").show();
            return false;
        }
        else {
            $("#fnameMsg").hide();
        }
    }


    LastName.keyup(function () {
        LastName_check();
    });

    function LastName_check() {
        if (LastName.val() === '' || LastName.val() === null) {
            $("#lnameMsg").html('* please enter your Last name');
            $("#lnameMsg").show();
            return false;
        }
        else {
            $("#lnameMsg").hide();
        }

        if (LastName.val().length < 3 || LastName.val().length > 20) {
            $("#lnameMsg").html('* Last Name length must be between 3 and 20');
            $("#lnameMsg").show();
            return false;
        }
        else {
            $("#lnameMsg").hide();
        }
    }

    email.keyup(function () {
        email_check();
    });

    function email_check() {
        let pattern = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,3}$/;

        if (email.val() === '' || email.val() === null) {
            $("#emailMsg").html('* Please enter your email');
            $("#emailMsg").show();
            return false;
        }
        else {
            $("#lnameMsg").hide();
        }

        if (email.val().match(pattern) || email.val()===pattern) {
            $("#emailMsg").html('* Valid email');
            $("#emailMsg").css('color','green');
            $("#emailMsg").show();
            return false;
        }
        else {
            $("#lnameMsg").hide();
        }
        if (email.val()!=pattern) {
            $("#emailMsg").html('* Invalid email');
            $("#emailMsg").css('color','red');
            $("#emailMsg").show();
            return false;
        }
        else {
            $("#lnameMsg").hide();
        }
               
    }


    password.keyup(function () {
        password_check();

    });

    function password_check() {
        if (password.val() === '' || password.val() === null) {
            $("#passwordMsg").html('* please enter your password');
            $("#passwordMsg").show();
            return false;
        }
        else {
            $("#passwordMsg").hide();
        }

        if (password.val().length < 6 || password.val().length > 8) {
            $("#passwordMsg").html('* Password length must be between 6 and 8');
            $("#passwordMsg").show();
            return false;
        }
        else {
            $("#passwordMsg").hide();
        }
    }



    submitBtn.click(function () {
        console.log("you clicked the button");
        firstName_check();
        LastName_check();
        email_check();
        password_check();
    });


});