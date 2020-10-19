
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
