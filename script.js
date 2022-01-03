
const fullname = document.getElementById('fname');
const email = document.getElementById('femail');
const phone = document.getElementById('fphone');
const form = document.getElementById('form');

//A function to set message beside the input box
function setMsg(id, msg) {

    let msgId = document.getElementById(id);

    if (isNaN(id.value)) {
        msgId.textContent = msg;
    } else {
        msgId.textContent = "";
    }
}

// Event listener for the fullname input which checks the correctness of the name input by the user
fullname.addEventListener('blur', () => {

    let regexName = /^[a-zA-Z]{2,20}\s[a-zA-Z]{2,20}$/;
    let nameStr = fullname.value;

    if (nameStr == "") {
        setMsg('namemsg', "*this field cannot be empty");
    } else if (regexName.test(nameStr)) {
        setMsg('namemsg', "");
    } else if (!regexName.test(nameStr)) {
        setMsg('namemsg', "*your first name and last name must contain at least 2 letters each.")
    } else {
        setMsg('namemsg', "");
    }
})

//Event listener to check if the email input field is empty or not
email.addEventListener('blur', () => {

    let emailStr = email.value;

    if (emailStr == "") {
        setMsg('emailmsg', "*email is compulsory");
    } else {
        setMsg('emailmsg', "");
    }

})

// An event listener to maintain the input format required for the phone number input field
phone.addEventListener("keydown", (e) => {

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
})

function handleSubmit(){
    const name = fullname.value;
    const mail = email.value;
    const ph = phone.value;

    sessionStorage.setItem('NAME', name);
    sessionStorage.setItem('MAIL', mail);
    sessionStorage.setItem('PHONE', ph);


}

//function to check the service operator
function verifyOperator(operator) {

    if (operator >= "621" && operator <= "799") {
        document.getElementById('phoneoperator').style.color = "black";
        setMsg('phoneoperator', "Jio, ");
    } else if (operator >= "801" && operator <= "920") {
        document.getElementById('phoneoperator').style.color = "black";
        setMsg('phoneoperator', "Idea, ")
    } else if (operator >= "921" && operator <= "999") {
        document.getElementById('phoneoperator').style.color = "black";
        setMsg('phoneoperator', "Vodafone, ");
    } else {
        document.getElementById('phoneoperator').style.color = "red";
        setMsg('phoneoperator', "*invalid");
    }
}

//function to check the circle/states in which the operator is functioning
function verifyCircle(circle) {

    if (circle == 100) {
        setMsg('phonecircle', "Andhra Pradesh");
    } if (circle == 110) {
        setMsg('phonecircle', "Arunachal Pradesh");
    } if (circle == 120) {
        setMsg('phonecircle', "Assam");
    } if (circle == 130) {
        setMsg('phonecircle', "Bihar");
    } if (circle == 140) {
        setMsg('phonecircle', "Chhattisgarh");
    } if (circle == 150) {
        setMsg('phonecircle', "Goa");
    } if (circle == 160) {
        setMsg('phonecircle', "Gujarat");
    } if (circle == 170) {
        setMsg('phonecircle', "Haryana");
    } if (circle == 180) {
        setMsg('phonecircle', "Himachal Pradesh");
    } if (circle == 190) {
        setMsg('phonecircle', "Jharkhand");
    } if (circle == 200) {
        setMsg('phonecircle', "Karnataka");
    } if (circle == 210) {
        setMsg('phonecircle', "Kerala");
    } if (circle == 220) {
        setMsg('phonecircle', "Madhya Pradesh");
    } if (circle == 230) {
        setMsg('phonecircle', "Maharashtra");
    } if (circle == 240) {
        setMsg('phonecircle', "Manipur");
    } if (circle == 250) {
        setMsg('phonecircle', "Nagaland");
    } if (circle == 260) {
        setMsg('phonecircle', "Odisha");
    } if (circle == 270) {
        setMsg('phonecircle', "Punjab");
    } if (circle == 280) {
        setMsg('phonecircle', "Rajasthan");
    } if (circle == 290) {
        setMsg('phonecircle', "Sikkim");
    } if (circle == 300) {
        setMsg('phonecircle', "Tamil Nadu");
    } if (circle == 310) {
        setMsg('phonecircle', "Telangana");
    } if (circle == 320) {
        setMsg('phonecircle', "Tripura");
    } if (circle == 330) {
        setMsg('phonecircle', "Uttarakhand");
    } if (circle == 340) {
        setMsg('phonecircle', "Uttar Pradesh");
    } if (circle == 350) {
        setMsg('phonecircle', "West Bengal");
    } if (circle == 360) {
        setMsg('phonecircle', "Andaman & Nicobar Islands");
    } if (circle == 370) {
        setMsg('phonecircle', "Chandigarh");
    } if (circle == 380) {
        setMsg('phonecircle', "Dadra & Nagar Haveli and Daman & Diu");
    } if (circle == 390) {
        setMsg('phonecircle', "NCT Delhi");
    } if (circle == 400) {
        setMsg('phonecircle', "Jammu & Kashmir");
    } if (circle == 410) {
        setMsg('phonecircle', "Ladakh");
    } if (circle == 420) {
        setMsg('phonecircle', "Lakshadweep");
    } if (circle == 430) {
        setMsg('phonecircle', "Puducherry");
    } if (circle == "") {
        setMsg('phonecircle', "");
    }
}

