const element = document.querySelector('.Content');

element.classList.add('active');
element.classList.remove('active');
//no toggle se a classe existir ele tira, se não, ele adiciona
element.classList.toggle('active');

console.log(element.classList)