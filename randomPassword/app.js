const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdrfghijklmnopqrstuvwxyz";
const number = "1234567890";
const specialChar = "!@#$%^&*()_?><:";

const generatePassword = ()=>{
    let len = 16;
    let chars = '';
    const inculdeUpperCase = document.getElementById("checkbox1").checked;
    const inculdeLowerCase = document.getElementById("checkbox2").checked;
    const inculdeNumber = document.getElementById("checkbox3").checked;
    const inculdeSpecialChar = document.getElementById("checkbox4").checked;

    if(inculdeUpperCase){
        chars += upperCase;
    }
    if(inculdeLowerCase){
        chars += lowerCase;
    }
    if(inculdeNumber){
        chars += number;
    }

    if(inculdeSpecialChar){
        chars += specialChar;
    }

    if(chars === " "){
        alert("Please select at least one ");
       
    }
    let password = "";
    for(let i = 0; i<len; i++){
        const randomIndex  =  Math.floor(Math.random()* chars.length);
        password += chars.charAt(randomIndex);
    }
    document.getElementById('Password-display').value = password;

};

const copyClipboard = () =>{
    const capturingPassword = document.getElementById("Password-display");
    capturingPassword.select();
    document.execCommand('copy');
    alert("Password copied to clipboard successfully");
    document.getElementById("Password-display").value = '';

    
}

document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById("copy-btn").addEventListener('click', copyClipboard);