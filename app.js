const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')
const songsContainer = document.querySelector('#songs-container')
const prevAndNextContainer = document.querySelector('#prev-and-next-container')

/* trocar a api pois esta já não está mais funcionando*/ 
const apiUrl = `https://api.lyrics.ovh`
const insertSongsIntoPage = songsInfo =>{
    debugger
    songsContainer.innerHTML = songsContainer.innerHTML = songsInfo.data.map(song => `
    <li class="song">
        <span class="songs-artist"> <strong> ${song.artist.name} </strong> - ${song.title} </span>
        <button class="btn" data-artist="${song.artist.name}" data-song-title="${song.title}"> Ver Letra </button>
    </li>`).join('') 
}

const fetchSongs = async term => {
    const response = await fetch(`${apiUrl}/suggest/${term}`)
    const data = await response.json()

    insertSongsIntoPage(data)
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
