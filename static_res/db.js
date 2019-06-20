// declara um conjunto fake de dados para contatos
    var dbfake = {
        "posts": [
            {
                "id": 1,
                "titulo": "Guia Definitivo Como Criar um Blog Incrível e Ganhar Dinheiro Com Ele",
                "texto": `Blogs, blogs e mais blogs!

                Eu amo blogs e trabalho com eles desde 2007.
                
                Mas como você pode criar um blog?
                
                Eu vou ajudar!
                
                Você vai ler agora um tutorial completo sobre como criar um blog passo a passo.
                
                É para aprender como criar um hoje mesmo!
                
                Olha aqui um índice com tudo que você vai aprender a partir de agora:`,
                "imagem": "https://neilpatel-qvjnwj7eutn3.netdna-ssl.com/wp-content/uploads/2018/09/blog-neil-patel-700x475-min.jpg",
                "data": "Mon Jun 17 2019 19:31:12",
                "curtidas": 25,
                "comentarios": [{ "nome": "jonatan", "texto": "uau muy topen" },
                { "nome": "joao", "texto": "calaboca seboso" }]
            },
            {
                "id": 2,
                "titulo": "segundo Graham",
                "texto": "Sincere@april.biz",
                "imagem": "static_res/img/top.jpg",
                "data": "Mon Jun 17 2019 19:31:16",
                "curtidas": 25,
                "comentarios": [{ "nome": "jonatan", "texto": "uau muy topen" },
                { "nome": "joao", "texto": "calaboca seboso" }]
            },
            {
                "id": 3,
                "titulo": "terceiro Graham",
                "texto": "o34u12io",
                "imagem": "static_res/img/top.jpg",
                "data": "Mon Jun 17 2019 19:31:14",
                "curtidas": 25,
                "comentarios": [{ "nome": "jonatan", "texto": "uau muy topen" },
                { "nome": "joao", "texto": "calaboca seboso" }]
            },
            {
                "id": 4,
                "titulo": "terceiro Graham",
                "texto": "o34u12io",
                "imagem": "static_res/img/top.jpg",
                "data": "Mon Jun 17 2019 19:31:14",
                "curtidas": 25,
                "comentarios": [{ "nome": "jonatan", "texto": "uau muy topen" },
                { "nome": "joao", "texto": "calaboca seboso" }]
            },
            {
                "id": 5,
                "titulo": "terceiro Graham",
                "texto": "o34u12io",
                "imagem": "static_res/img/top.jpg",
                "data": "Mon Jun 17 2019 19:31:14",
                "curtidas": 25,
                "comentarios": [{ "nome": "jonatan", "texto": "uau muy topen" },
                { "nome": "joao", "texto": "calaboca seboso" }]
            },

        ]
    }

// Caso exista no Local Storage, recupera os dados salvos
var db = JSON.parse(localStorage.getItem('dbPedroHenriqueFerreira&MichelliCristina'));
if (!db) {
    db = dbfake
    
    localStorage.setItem('dbPedroHenriqueFerreira&MichelliCristina', JSON.stringify(db));
}

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertPost(post) {
    // Calcula novo Id a partir do último código existente no array
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "titulo": post.titulo,
        "texto": post.texto,
        "imagem": post.imagem,
        "data": `${new Date().toString()}`
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    //displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbPedroHenriqueFerreira&MichelliCristina', JSON.stringify(db));
}
//converting to base64 from url paths
function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}
//converting to base64 from input file
function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        return reader.result;
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}
async function enviarPost() {
    var titulo = document.getElementById("tituloSubmit").value;
    var texto = document.getElementById("textoSubmit").value;
    for (i = 0; i < db.posts.length; i++) {
        db.posts[i].id > lastId ? lastId = db.posts[i].id : false;

    }
    var reader = new FileReader();
    reader.readAsDataURL(document.getElementById('imageSubmit').files[0]);
    reader.onload = function () {
        
        db.posts.push({
            "id": genId(),
            "titulo": titulo,
            "texto": texto,
            "curtidas": 0,
            "data": new Date(),
            "imagem": reader.result,
            "comentarios": []
        })
        localStorage.setItem('dbPedroHenriqueFerreira&MichelliCristina', JSON.stringify(db));
        console.log(reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}
function enviarComment(el) {
    let Titulo = el.target.parentElement.getElementsByTagName("input")[0];
    let Texto = el.target.parentElement.getElementsByTagName("input")[1];
    if (Titulo.value && Texto.value) {
        let id = el.target.parentElement.parentElement.id - 1;
        db.posts[id].comentarios.push({ "nome": Titulo.value, "texto": Texto.value });

        localStorage.setItem('dbPedroHenriqueFerreira&MichelliCristina', JSON.stringify(db));
    }
}
function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
        db.data[index].email = contato.email,
        db.data[index].telefone = contato.telefone,
        db.data[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbPedroHenriqueFerreira&MichelliCristina', JSON.stringify(db));
}
function enviarComentario(dados) {

}
function sortByDate() {
    let items = new Array();
    let db = JSON.parse(localStorage.db).posts
    array.forEach(element => {

    });
    return items
}
function addCurtida(id) {
    for (y = 0; y < db.posts.length; y++) {
        if (db.posts[y].id == id) {
            db.posts[y].curtidas++;
            localStorage.setItem('dbPedroHenriqueFerreira&MichelliCristina', JSON.stringify(db));
        }
    }
}
function deleteContato(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbPedroHenriqueFerreira&MichelliCristina', JSON.stringify(db));
}
