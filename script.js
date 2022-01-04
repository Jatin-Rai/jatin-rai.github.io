const form = document.getElementById('form');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

//validating name
fname.addEventListener('blur', () => {
    checkNameInput();
})

function checkNameInput() {
    const nameValue = fname.value.trim();
    let check = true;

    let regName = /^[a-zA-Z]{2,20}\s[a-zA-Z]{2,20}$/;

    if (nameValue === "") {
        setError(fname, "cannot be empty");
        check = false;
    } else if (!regName.test(nameValue)) {
        setError(fname, "invalid name");
        check = false
    } else {
        setSuccess(fname);
        check = true;
    }
    return check;
}

//validating email
email.addEventListener('blur', () => {
    checkEmailInput();
})

function checkEmailInput() {
    const emailValue = email.value.trim();

    let check = true;

    let regEmail = /^[a-z0-9_.A-z]{3,20}\@[a-zA-z]{2,10}\.[a-z]{2,5}$/;

    if (emailValue === "") {
        setError(email, "cannot be empty");
        check = false;
    } else if (!regEmail.test(emailValue)) {
        setError(email, "invalid email");
        check = false;
    } else {
        setSuccess(email, "");
        check = true;
    }
    return check;
}

//validating phone number
phone.addEventListener("keypress", (e) => {

    if (e.key === "Backspace" || e.key === "Delete") return;

    if (e.target.value.length === 0) {
        phone.value = "(";
    }

    if (e.target.value.length === 4) {
        phone.value = phone.value + ")";
    }

    if (e.target.value.length === 5) {
        phone.value = phone.value + " - ";
    }

    if (e.target.value.length === 11) {
        phone.value = phone.value + " - ";
    }

    //assigning the value required to verify the operator
    const operator = phone.value.substr(1, 3);

    //assigning the value required to verify the operator circle
    const circle = phone.value.substr(8, 3);

    verifyOperator(operator);

    verifyCircle(circle);

    checkPhoneInput();

})

function checkPhoneInput() {
    const phoneValue = phone.value.trim();
    let check = true;

    let regPhone = /^\(\d{3}\)\s-\s\d{3}\s-\s\d{4}$/;

    if (phoneValue === "") {
        setError(phone, "cannot be empty");
        check = false;
    } else if (regPhone.test(phoneValue)) {
        setSuccess(phone);
        check = true
    }
    return check;
}

//validating form
form.addEventListener('submit', (e) => {
    const name = fullname.value;
    const mail = email.value;
    const ph = phone.value;


    if (!checkInputs()) {
        e.preventDefault()
    } else {
        // localStorage.setItem('NAME', name);
        // localStorage.setItem('MAIL', mail);
        // localStorage.setItem('PHONE', ph);

        // window.location.href = "thankyou.html";

        sessionStorage.setItem('NAME', name);
        sessionStorage.setItem('MAIL', mail);
        sessionStorage.setItem('PHONE', ph);
    }

})

//checking if all the inputs are correct to proceed
function checkInputs() {
    let check = true;

    if (!checkNameInput()) check = false;

    if (!checkEmailInput()) check = false;

    if (!checkPhoneInput()) check = false;

    return check;

}

//error message, success message, and operator and circle
function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.textContent = message;

    formControl.className = 'form-control error';
}

function setSuccess(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

function setOp(input, message) {
    const formControl = input.parentElement;
    const bold = formControl.querySelector('b');

    bold.textContent = message;
}

function setCir(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');

    span.textContent = message;
}

// //handling submit request
// function handleSubmit() {
//     const name = fullname.value;
//     const mail = email.value;
//     const ph = phone.value;

//     // localStorage.setItem('NAME', name);
//     // localStorage.setItem('MAIL', mail);
//     // localStorage.setItem('PHONE', ph);

//     // window.location.href = "thankyou.html";

//     sessionStorage.setItem('NAME', name);
//     sessionStorage.setItem('MAIL', mail);
//     sessionStorage.setItem('PHONE', ph);

// }

//function to check the service operator
function verifyOperator(operator) {

    if (operator >= "621" && operator <= "799") {
        setOp(phone, "Jio, ");
    } else if (operator >= "801" && operator <= "920") {
        setOp(phone, "Idea, ")
    } else if (operator >= "921" && operator <= "999") {
        setOp(phone, "Vodafone, ");
    } else if (operator < 621 || operator > 999) {
        setError(phone, "");
    }

    return;
}

//function to check the circle/states
function verifyCircle(circle) {

    if (circle == 100) {
        setCir(phone, "Andhra Pradesh");
    } if (circle == 110) {
        setCir(phone, "Arunachal Pradesh");
    } if (circle == 120) {
        setCir(phone, "Assam");
    } if (circle == 130) {
        setCir(phone, "Bihar");
    } if (circle == 140) {
        setCir(phone, "Chhattisgarh");
    } if (circle == 150) {
        setCir(phone, "Goa");
    } if (circle == 160) {
        setCir(phone, "Gujarat");
    } if (circle == 170) {
        setCir(phone, "Haryana");
    } if (circle == 180) {
        setCir(phone, "Himachal Pradesh");
    } if (circle == 190) {
        setCir(phone, "Jharkhand");
    } if (circle == 200) {
        setCir(phone, "Karnataka");
    } if (circle == 210) {
        setCir(phone, "Kerala");
    } if (circle == 220) {
        setCir(phone, "Madhya Pradesh");
    } if (circle == 230) {
        setCir(phone, "Maharashtra");
    } if (circle == 240) {
        setCir(phone, "Manipur");
    } if (circle == 250) {
        setCir(phone, "Nagaland");
    } if (circle == 260) {
        setCir(phone, "Odisha");
    } if (circle == 270) {
        setCir(phone, "Punjab");
    } if (circle == 280) {
        setCir(phone, "Rajasthan");
    } if (circle == 290) {
        setCir(phone, "Sikkim");
    } if (circle == 300) {
        setCir(phone, "Tamil Nadu");
    } if (circle == 310) {
        setCir(phone, "Telangana");
    } if (circle == 320) {
        setCir(phone, "Tripura");
    } if (circle == 330) {
        setCir(phone, "Uttarakhand");
    } if (circle == 340) {
        setCir(phone, "Uttar Pradesh");
    } if (circle == 350) {
        setCir(phone, "West Bengal");
    } if (circle == 360) {
        setCir(phone, "Andaman");
    } if (circle == 370) {
        setCir(phone, "Chandigarh");
    } if (circle == 380) {
        setCir(phone, "DamanUT");
    } if (circle == 390) {
        setCir(phone, "NCT Delhi");
    } if (circle == 400) {
        setCir(phone, "J&K");
    } if (circle == 410) {
        setCir(phone, "Ladakh");
    } if (circle == 420) {
        setCir(phone, "Lakshadweep");
    } if (circle == 430) {
        setCir(phone, "Puducherry");
    } if (circle == "") {
        setCir(phone, "");
    }
    return;
}

