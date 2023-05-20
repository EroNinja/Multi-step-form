var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");

var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");

var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");

var form_1_progessbar = document.querySelector(".form_1_progessbar")
var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");
var form_4_progessbar = document.querySelector(".form_4_progessbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");


form_1_next_btn.addEventListener("click", function(){
    if (validateForm(form_1)) {
        form_1.style.display = "none";
        form_2.style.display = "block";

        form_1_btns.style.display = "none";
        form_2_btns.style.display = "flex";

        form_2_progessbar.classList.add("active");
        form_1_progessbar.classList.add("completed");
    }
});

form_2_back_btn.addEventListener("click", function(){
    form_1.style.display = "block";
    form_2.style.display = "none";

    form_1_btns.style.display = "flex";
    form_2_btns.style.display = "none";

    form_2_progessbar.classList.remove("active");
    form_1_progessbar.classList.remove("completed");
});

form_2_next_btn.addEventListener("click", function(){
    if (validateForm(form_2)) {
        form_2.style.display = "none";
        form_3.style.display = "block";

        form_3_btns.style.display = "flex";
        form_2_btns.style.display = "none";

        form_3_progessbar.classList.add("active");
        form_2_progessbar.classList.add("completed")
    }
});

form_3_back_btn.addEventListener("click", function(){
    form_2.style.display = "block";
    form_3.style.display = "none";

    form_3_btns.style.display = "none";
    form_2_btns.style.display = "flex";

    form_3_progessbar.classList.remove("active");
    form_2_progessbar.classList.remove("completed")
});

form_3_next_btn.addEventListener("click", function(){
    if (validateForm(form_3)) {
        form_3.style.display = "none";
        form_4.style.display = "block";

        form_4_btns.style.display = "flex";
        form_3_btns.style.display = "none";

        form_4_progessbar.classList.add("active");
        form_3_progessbar.classList.add("completed")
    }
});

form_4_back_btn.addEventListener("click", function(){
    form_3.style.display = "block";
    form_4.style.display = "none";

    form_4_btns.style.display = "none";
    form_3_btns.style.display = "flex";

    form_4_progessbar.classList.remove("active");
    form_3_progessbar.classList.remove("completed")
});

btn_done.addEventListener("click", function(){
    if (validateForm(form_4)) {
        showModal();
        form_4_progessbar.classList.add("completed")
    }
});

shadow.addEventListener("click", function(){
    modal_wrapper.classList.remove("active");
});

function validateForm(form) {
    var inputs = form.querySelectorAll(".input");
    var valid = true;

    inputs.forEach(function(input) {
        var errorMessage = input.nextElementSibling;

        if (input.value.trim() === "") {
            input.classList.add("error");
            errorMessage.textContent = "Field cannot be empty";
            valid = false;
        } else {
            input.classList.remove("error");
            errorMessage.textContent = ""; 
        }

        if (input.id === "first_name" || input.id === "last_name") {
            if (!/^[a-zA-Z']*$/.test(input.value)) {
                input.classList.add("error");
                errorMessage.textContent = "Invalid characters entered";
                valid = false;
            }
        }

        if (input.id === "username"){
            if (!/^[a-zA-Z0-9_]*$/.test(input.value)) {
                input.classList.add("error");
                errorMessage.textContent = "Invalid characters entered";
                valid = false;
            }
        }

        if (input.id === "password") {
            if (input.value.length < 6) {
                input.classList.add("error");
                errorMessage.textContent = "Password should be at least six characters long";
                valid = false;
            }
        }

        if (input.id === "email") {
            if (!/^[a-zA-Z0-9'@._-]*$/.test(input.value) || (input.value.indexOf('@') === -1 || input.value.indexOf('.') === -1)){
                input.classList.add("error");
                errorMessage.textContent = "Invalid characters entered or '@' symbol or '.' symbol is missing";
                valid = false;
            }
        }

        if (input.id === "date") {
            if (!/^\d{2}-\d{2}-\d{4}$/.test(input.value)) {
                input.classList.add("error");
                errorMessage.textContent = "Invalid date format. Please use the format dd-mm-yyyy";
                valid = false;
            }
        }

        if (input.id === "contact_num") {
            if (input.value.length !== 10) {
                input.classList.add("error");
                errorMessage.textContent = "Only 10 digits required";
                valid = false;
            }
        }
    });

    return valid;
}

function showModal() {
    modal_wrapper.classList.add("active");
}
