const input = document.querySelector('input');

input.onkeydown=(()=>{
    console.log('updatingDOWN');
});

input.onkeyup=(()=>{
    console.log('updatingUP');
});