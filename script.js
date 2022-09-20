const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=|/";

let getUpper = () =>{
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

let getLower = () =>{
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

let getNumber = () =>{
    return number[Math.floor(Math.random() * number.length)];
}

let getSymbol = () =>{
    return symbol[Math.floor(Math.random() * symbol.length)];
}

let generatePassword = () =>{
    const len = lenEl.value;
    let password = '';
    if(upperEl.checked){
        password += getUpper();
    }
    if(lowerEl.checked){
        password += getLower();
    }
    if(symbolEl.checked){
        password += getSymbol();
    }
    if(numberEl.checked){
        password += getNumber();
    }
    for(let i = password.length; i<len; i++){
        const x = generateX();
        password += x;
    }
    pwEl.innerText = password;
}

let generateX = () =>{
    const xs = [];
    if(upperEl.checked){
        xs.push(getUpper());
    }
    if(lowerEl.checked){
        xs.push(getLower());
    }
    if(numberEl.checked){
        xs.push(getNumber());
    }
    if(symbolEl.checked){
        xs.push(getSymbol());
    }
    if(xs.length == 0) return "";
    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;

    if(!password){
        return ;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert('The generated password has been successfully copied to the clipboard');
})

