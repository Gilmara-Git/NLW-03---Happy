deleteOrphanage = document.querySelector('.primary-button.delete')

function deleteForm(event){
    const confirmation = confirm("Você quer deletar?")
    if(!confirmation) {
    event.preventDefault()

    }

    
    window.location.href="/orphanage?_method=DELETE"
}
