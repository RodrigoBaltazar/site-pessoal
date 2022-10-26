//ToDo:

// Bloco abaixo coloca os itens do menu ao click do burguer.


function burguer(){
    let nav = document.querySelector('nav');
    nav.style.display = 'block';

    let li = document.querySelectorAll('li');
    li.forEach(li => {
        li.style.display = 'inline-block';    
    });

    let divs = document.querySelectorAll("div");
    divs.forEach(divs => {
        divs.style.display = 'none';
    })
}

