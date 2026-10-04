
var a1 = document.getElementById("role");
var a = ["Full stack Developer", "Web designer", "Java Developer"];
var i = 0;
var c = "";  // Initialize the variable

setInterval(f1, 4400);

function f1() {
    var main = a[i];
    c = "";
    var j = 0;

    var v = setTimeout(f2, 200);

    function f2() {
        if (j < main.length) {
            c += main[j];
            a1.innerText = c;
            j++;
            setTimeout(f2, 200);
        }
    }

    i++;
    if (i >= a.length) {
        i = 0;
    }
}

f1();
//Side menu



icon = document.getElementById("slas");
minimenu = document.getElementById("sidemeni");
isactive = false;

function menu() {
    if (isactive) {
        isactive = false;
        icon.className = "bi bi-list three";
        minimenu.className = "d-none d-lg-none sidemenu edp";
    }
    else {
        isactive = true;
        icon.className = "bi bi-x-circle three";
        minimenu.className = "d-block d-lg-none sidemenu edp";
    }
}

//Contact form in Header 

var Headerform = document.getElementById("contact-form");


function Close() {
    Headerform.className = "w open";
}


function Close1() {
    Headerform.className = "w hide";
}

//Form Validation
checkvalue = 1;
function submit() {
    if (checkvalue == 0) {
        return false;
    }
    else {
        return true;
    }
}

function first() {
    FirstName = document.getElementById("fn1");
    Span1 = document.getElementById("form-firstname");
    ex1 = /^[a-zA-Z]{3,15}$/;

    if (FirstName.value == "") {
        Span1.innerText = "Enter FirstName";
        FirstName.style.border = "2px solid red";
        checkvalue = 0;
    }
    else if (ex1.test(FirstName.value) == false) {
        Span1.innerText = "Enter Name must have 3 to 8 character";
        FirstName.style.border = "2px solid red";
        checkvalue = 0;
    }
    else {
        Span1.innerText = ""
        FirstName.style.border = "2px solid green";
    }
}

function last() {
    lastName = document.getElementById("ln1");
    sp2 = document.getElementById("form-lastname");
    ex2 = /^[a-zA-Z]{3,15}$/;

    if (lastName.value == "") {
        sp2.innerText = "Enter LastName";
        lastName.style.border = "2px solid red";
        checkvalue = 0;
    }
    else if (ex2.test(lastName.value) == false) {
        sp2.innerText = "Enter Name must have 3 to 8 character";
        lastName.style.border = "2px solid red";
        lastName.focus();
        checkvalue = 0;
    }
    else {
        sp2.innerText = "";
        lastName.style.border = "2px solid green"
    }
}

function email() {
    Email = document.getElementById("en1");
    sp3 = document.getElementById("form-Email");
    ex2 = /^[a-z0-9]{3,40}@gmail\.com$/;

    if (Email.value == "") {
        sp3.innerText = "Enter valid Email";
        Email.style.border = "2px solid red";
        checkvalue = 0;
    }
    else if (ex2.test(Email.value) == false) {
        sp3.innerText = "Enter valid Email";
        Email.style.border = "2px solid red";
        Email.focus();
        checkvalue = 0;
    }
    else {
        sp3.innerText = "";
        Email.style.border = "2px solid green";
    }

}

function subject() {
    sub = document.getElementById("sub1");
    error12 = document.getElementById("form-subject");
    subexp = /^[a-zA-Z0-9\s]{5,60}$/;

    if (sub.value == "") {
        error12.innerText = "Should Enter Subject";
        sub.style.border = "2px solid red";
        checkvalue = 0;
    }
    else if (subexp.test(sub.value) == false) {
        error12.innerText = "Atleast One";
        sub.style.border = "2px solid red";
        checkvalue = 0;
    }
    else {
        error12.innerText = "";
        sub.style.border = "2px solid green";
    }
}

function msg() {
    msg = document.getElementById("msg");
    errorspan = document.getElementById("form-msg");
    subexp1 = /^[a-zA-Z0-9\s]{5,300}$/;

    if (msg.value == "") {
        errorspan.innerText = "Should Enter Subject";
        msg.style.border = "2px solid red";
    }
    else if (subexp1.test(msg.value) == false) {
        errorspan.innerText = "Atleast One";
        msg.style.border = "2px solid red";
    }
    else {
        errorspan.innerText = "";
        msg.style.border = "2px solid green";
    }
}