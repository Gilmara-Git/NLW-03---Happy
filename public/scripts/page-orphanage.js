const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
    
}


//create map
const map = L.map('mapid', options ).setView([-27.2143428,-49.6388383], 15); // this is our map (setview has latitude, longitude, zoom)

//create and add titeLayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)


// create ICON  - It is on the documentation how to do it. 
 const icon = L.icon({
     iconUrl: "./public/images/map-marker.svg",
     iconSize: [58, 68],
     iconAnchor: [29, 68],
     popupAnchor: [170, 2]
 })




//create and ADD marker
L
.marker([-27.2143428,-49.6388383],{icon})
.addTo(map)





// Image Gallery

 function selectImage(event){

    const button = event.currentTarget // clicked button

    //remove all Active classes from the buttons

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

        function removeActiveClass(button) {
            button.classList.remove("active")

        }

        // Select the clicked image
        const image = button.children[0]
        const imageContainer = document.querySelector(".orphanage-details > img")
        imageContainer.src=image.src

         // Add an Active Class to the current button
        button.classList.add("active")
    }

 


    


    // Updated the container of image ( the bigger image)


   





   
    


