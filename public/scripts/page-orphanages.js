
//create map
const map = L.map('mapid').setView([-27.2143428,-49.6388383], 15); // this is our map (setview has latitude, longitude, zoom)

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


//create pop-up overlay - property and values are in the documentation
 const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight:240
 }).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')



//create and ADD marker
L
.marker([-27.2143428,-49.6388383],{icon})
.addTo(map)
.bindPopup(popup)





