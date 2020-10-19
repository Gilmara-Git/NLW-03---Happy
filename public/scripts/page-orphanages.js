
//create map
const map = L.map('mapid').setView([-27.2143428,-49.6388383], 15); // this is our map (setview has latitude, longitude, zoom)

//create and add titeLayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
.addTo(map)


// create ICON  - It is on the documentation how to do it. 
 const icon = L.icon({
     iconUrl: "/images/map-marker.svg",
     iconSize: [58, 68],
     iconAnchor: [29, 68],
     popupAnchor: [170, 2]
 })


 function addMarker({id, name, lat, lng}){
    //create pop-up overlay - property and values are in the documentation
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
    }).setContent(`${name}<a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`)

    //create and ADD marker
    L
    .marker([lat,lng ], {icon} )
    .addTo(map)
    .bindPopup(popup)
 }


 const orphanagesSpan = document.querySelectorAll('.orphanages span')
 //console.log(orphanagesSpan)
 //const spans = document.querySelectorAll('.orphanages span')  
//  for (let span of spans){    
//         const orphanage = {
//                     id: span.dataset.id,
//                     name: span.dataset.name,
//                     lat: span.dataset.lat, 
//                     lng: span.dataset.lng
//                 }
//         console.log(orphanage)
//         addMarker(orphanage)
//     }
   

    
    orphanagesSpan.forEach( span => {
        const orphanage = {
            id: span.dataset.id,
            name: span.dataset.name,
            lat: span.dataset.lat, 
            lng: span.dataset.lng
        }
        //console.log(orphanage)
        addMarker(orphanage)
        
   })

    

        


