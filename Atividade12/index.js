function validar(){
    nome = document.forms[0].elements[0].value
    email = document.forms[0].elements[1].value
    comentario = document.pesquisa.comentario.value
    pesquisa = document.pesquisa.radioPesquisa.value

    //verifica nome
    if(nome.length < 10){
        alert('Nome deve conter 10 caracteres.')
        document.forms[0].elements[0].focus()
    }

    //verifica @ e . no email
    if(email.indexOf("@") == -1 || email.indexOf(".") == -1){
        alert('Email inválido')
        document.forms[0].elements[1].focus()
    }

    //verifica pesquisa
    switch (pesquisa) {
        case "sim":
            alert("Volte sempre à esta página!")
            break
        case "nao":
            alert("Que bom que você voltou a esta pagina")
            break
        default:
            alert("Por favor, responda a pesquisa")
            document.pesquisa.radioPesquisa.focus()
    }

    //verifica comentario
    comentario = comentario.trim()
    if(comentario.length == 0){
        alert('Por favor, digite um comentário')
        document.pesquisa.comentario.focus()
    }





}