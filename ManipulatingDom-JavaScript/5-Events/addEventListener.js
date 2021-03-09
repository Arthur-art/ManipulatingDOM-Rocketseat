const h1 = document.querySelector('h1');
const input = document.querySelector('input');



const alert = (()=>{
    console.log('Clicou');
});

h1.addEventListener('mouseover', alert);

//Argumento Event
input.onkeydown = ((event)=>{
    console.log(event.key)
})