function listarFilmes() {
    var listaDeFilmes = document.getElementById("lista-de-filmes");

    elemento = "";
    for (i=0; i < todosOsFilmes.length; i++) {
        elemento += "<div>";
        elemento += "<img alt='Capa do Filme' src=" + todosOsFilmes[i].url + ">";
        elemento += "<h1>" + todosOsFilmes[i].nome + "</h1>";
        elemento += "</div>"
    }
    listaDeFilmes.innerHTML = elemento;
}
function adicionarFilme () {
    var nomeDoNovoFilme = document.getElementById("nome-do-novo-filme").value;
    var urlDoNovoFilme = document.getElementById("url-do-novo-filme").value;

    if (nomeDoNovoFilme == "") {
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Você esqueceu o nome do filme!'});

    } else if (urlDoNovoFilme.endsWith(".JPG") || urlDoNovoFilme.endsWith(".jpg") || urlDoNovoFilme.endsWith(".png") || urlDoNovoFilme.endsWith(".PNG")) {
        todosOsFilmes.push(nomeDoNovoFilme = {nome:nomeDoNovoFilme, url:urlDoNovoFilme});
        Swal.fire({icon: 'success',title: 'Sucesso',text: 'Filme Adicionado!'});

        document.getElementById("nome-do-novo-filme").value = "";
        document.getElementById("url-do-novo-filme").value = "";
        listarFilmes();
    } else {
        Swal.fire({icon: 'error',title: 'Oops...',text: 'URL da Capa Inválida!'});
    }
}
var todosOsFilmes = [
    {
        nome:'Terminator 1',
        url:'https://m.media-amazon.com/images/I/81IbgE6mixL.jpg'
    },
    {
        nome:'Godzilla vs Kong',
        url:'https://m.media-amazon.com/images/M/MV5BOTI3NzNhNDItYWY0My00ZmE3LTgxMmYtYzQzZWU2NDcxYzVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg'
    },
    {
        nome:'John Wick 3',
        url:'https://br.web.img3.acsta.net/pictures/19/04/03/21/31/0977319.jpg'
    },
    {
        nome:'Avatar',
        url:'https://i.pinimg.com/originals/5d/68/49/5d6849092aea2a932f2a7f201bea4a66.jpg'
    },
    {
        nome:'Atlas',
        url:'https://es.web.img3.acsta.net/pictures/24/03/13/17/53/3089446.jpg'
    },
  
];
listarFilmes();