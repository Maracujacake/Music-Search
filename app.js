const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')
const songsContainer = document.querySelector('#songs-container')
const prevAndNextContainer = document.querySelector('#prev-and-next-container')


const apiUrl = `https://api.lyrics.ovh`

form.addEventListener('submit', event =>{
    event.preventDefault()

    const searchTerm = searchInput.value.trim()
    
    if(!searchTerm){
        alertaCampos()
        songsContainer.innerHTML = `<li class="warning-message">Por favor, preencha os campos</li>`
        function alertaCampos(){
            alert("Preencha corretamente os campos")
        }
    }
})
