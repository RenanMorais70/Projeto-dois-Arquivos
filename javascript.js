
// Cria um elemento h1 com o id 'titulo'
var titulo = document.createElement('h1');
// Atribui o id 'titulo' ao elemento h1
titulo.id = 'titulo';
// Atribui o texto 'Loja Virtual' ao elemento h1
titulo.innerText = 'Loja Virtual';
// Adiciona o elemento h1 ao corpo do documento
document.body.appendChild(titulo);

// Cria um elemento div que represente um produto à venda
var produto = document.createElement('div');
// Atribui o id 'produto' ao elemento div
produto.id = 'produto';
// Atribui o estilo 'display: flex; flex-direction: column; align-items: center;' ao elemento div
produto.style = 'display: flex; flex-direction: column; align-items: center;';
// Adiciona o elemento div ao corpo do documento
document.body.appendChild(produto);

// Cria um elemento img que represente a imagem do produto
var imagem = document.createElement('img');
// Atribui o atributo 'src' com o valor 'https://i.imgur.com/5w0yJ6a.jpg' ao elemento img
imagem.src = 'https://i.imgur.com/5w0yJ6a.jpg';
// Atribui o atributo 'alt' com o valor 'Camiseta branca com estampa de gato' ao elemento img
imagem.alt = 'Camiseta branca com estampa de gato';
// Atribui o estilo 'width: 300px; height: 300px;' ao elemento img
imagem.style = 'width: 300px; height: 300px;';
// Adiciona o elemento img ao elemento produto
produto.appendChild(imagem);

// Cria um elemento h2 que represente o nome do produto
var nome = document.createElement('h2');
// Atribui o texto 'Camiseta Gato' ao elemento h2
nome.innerText = 'Camiseta Gato';
// Adiciona o elemento h2 ao elemento produto
produto.appendChild(nome);

// Cria um elemento p que represente a descrição do produto
var descricao = document.createElement('p');
// Atribui o texto 'Camiseta branca de algodão com estampa de gato preto e a frase "Eu amo gatos"' ao elemento p
descricao.innerText = 'Camiseta branca de algodão com estampa de gato preto e a frase "Eu amo gatos"';
// Adiciona o elemento p ao elemento produto
produto.appendChild(descricao);

// Cria um elemento span que represente o preço do produto
var preco = document.createElement('span');
// Atribui o texto 'R$ 49,90' ao elemento span
preco.innerText = 'R$ 49,90';
// Atribui o estilo 'font-weight: bold;' ao elemento span
preco.style = 'font-weight: bold;';
// Adiciona o elemento span ao elemento produto
produto.appendChild(preco);
