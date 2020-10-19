
//create map
const map = L.map('mapid').setView([-27.2143428,-49.6388383], 15); // this is our map (setview has latitude, longitude, zoom)

//create and add titeLayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
.addTo(map)

 const icon = L.icon({
     iconUrl: "/images/map-marker.svg",
     iconSize: [58, 68],
     iconAnchor: [29, 68]
     
 })

//create and ADD marker
let marker;

map.on('click', (event)=>{ // evetn will have latitude and longitude
    //console.log(event.latlng.lat)
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value= lat; // This 2 value will be send in the req.body to backend
    document.querySelector('[name=lng]').value = lng; // They are hidden inputs 

    //remove icon before adding another

    marker && map.removeLayer(marker)

    // add icon tileLayer
    marker = L.marker([lat, lng],{ icon }).addTo(map)


})


//Add photo field

function addPhotoField() { 

    const container = document.querySelector('#images')

    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    const newFieldContainer =  fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    if(newFieldContainer.children[0].value == "") return false
    
    newFieldContainer.children[0].value = ""
    
    container.appendChild(newFieldContainer) 

}



function deletePhotoField(event){

  const span = event.currentTarget
  const fieldsContainer = document.querySelectorAll('.new-upload')  

  //console.log(fieldsContainer)
  if(fieldsContainer.length < 2 ) {
    
    span.parentNode.children[0].value = ""; // this is cleaning the new-upload 1st child
    return
  }

  span.parentNode.remove();
}

// Set yes or No as the ACTIVE one

function toggleSelect(event) {

    // clear the active class from both buttons
    document.querySelectorAll('.button-select button')
    .forEach((button)=> { 
        
        button.classList.remove('active')
    }) // So um valor na arrow function, posso retirar os colchetes
    

    // get the clicked button and Add active class
    const button =  event.currentTarget
        button.classList.add('active')

    // verify its value -  update input hidden with the selected value
    const input = document.querySelector('[name="open_on_weekends"]')        
        input.value = button.dataset.value
    
     
}


function validateLatLng(event) { 
    console.log(event)
    const lat = document.querySelector('[name=lat]').value
    const lng = document.querySelector('[name=lng]').value
    console.log(lat)  
    console.log(lng)
    
    if(lat=="" && lng ==""){  
        event.preventDefault(); // Prevent form submission
        alert("Por favor marque um ponto no mapa indicando a localização do orfanato.")
   
    }
  
}
