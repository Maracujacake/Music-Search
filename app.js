const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')
const songsContainer = document.querySelector('#songs-container')
const prevAndNextContainer = document.querySelector('#prev-and-next-container')

/* trocar a api pois esta já não está mais funcionando*/ 
const apiUrl = `https://api.lyrics.ovh`

const fetchSongs = term => {
    fetch(`${apiUrl}/suggest/${term}`)
        .then(response => response.json())
        .then ( data =>{
            console.log(data)
        })
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const searchTerm = searchInput.value.trim()
    
    if(!searchTerm){
        alertaCampos()
        songsContainer.innerHTML = `<li class="warning-message">Por favor, preencha os campos</li>`
        function alertaCampos(){
            alert("Preencha corretamente os campos")
        }
        return
    }

    fetchSongs(searchTerm)
})
