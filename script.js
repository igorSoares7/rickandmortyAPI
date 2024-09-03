
async function executar(){

    
    
    const meuInput = document.getElementById("idPersonagem")
    


    const id = meuInput.value


    const personagem = await buscarPersonagemDaAPI(id)
    
    
    document.getElementById("imgPersonagem").src = personagem.image
    document.getElementById("nomePersonagem").innerHTML = personagem.name

    
}


async function buscarPersonagemDaAPI(id){
    const url = `https://rickandmortyapi.com/api/character/${id}`

    const response = await fetch(url)
    return response.json()
}