const getAttribut = document.querySelector('.Content');


let Data = false;

const sum = (a,b) => a+b;

let a = 2;
let b = 3;

let result = sum(a,b)


if(result == 5){
    Data = true;
}

console.log(Data)

if(Data == true){
    getAttribut.setAttribute('id', 'header');
}else{
    getAttribut.removeAttribute('class')
}