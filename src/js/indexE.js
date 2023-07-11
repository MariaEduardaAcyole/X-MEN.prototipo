// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');




//passo 2 = adicionar a classe selecionado no personagemque o usuario cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }


//passo 3 - verificar se ja existe um persoangem selecionado, se sim, devemos remover a seleçao dele

// remove selecionado
removerSelecaoDoPersonagem();


//adiciona selecionado 
personagem.classList.add('selecionado');
   


// Objetivo 2 -quando o mouse em cima do personagem na listagem, trocar imagem o nome e a descriçao do personagem grande


//passo 1 - pegar o elemento do personagem grande para adicionar as informaçoes nele

alterarImagemPersonagemSelecionado(personagem);



//passo 3 - alterar o nome do  personagem grande

alterarNomePersonagemSelecionado(personagem);

//passo 4 - alterar a descriçao do personagem grande

alterarDescricaoPersonagem(personagem);
    })
})


function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/personagens/${idPersonagem}.gif`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}



//addEventListener so funciona para um item nao funciona numa lista
