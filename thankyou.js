window.addEventListener('load', () => {
    const name = sessionStorage.getItem('NAME');
    const phone = sessionStorage.getItem('PHONE');

    // const name = localStorage.getItem('NAME');
    // const phone = localStorage.getItem('PHONE');

    document.getElementById('firstname').innerHTML = name;
    document.getElementById('phone').innerHTML = phone;


})

console.log(generateOtp());


function handleSubmit(){
    
    const setOtp = generateOtp();
    
    let inputOtp = document.getElementById('otp');
    
    if(inputOtp == setOtp) {
        window.location.replace("http://pixel6.co/");
    } else {
        window.location.replace("./success.html");
    }
    
}

function generateOtp(){
    let num = '0123456789';
    let OTP = '';

    for(let i=0; i<4; i++){
        OTP += num[Math.floor(Math.random()*10)];
    }
    console.log(OTP);
}