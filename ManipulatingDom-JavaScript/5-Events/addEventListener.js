const h1 = document.querySelector('h1');



const alert = (()=>{
    console.log('Clicou');
});

h1.addEventListener('mouseover', alert);