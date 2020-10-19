
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const lat  = document.querySelector('span[data-lat]').dataset.lat
const lng  = document.querySelector('span[data-lng]').dataset.lng

//create map - with lat and lng. It positions the map so, icon stay in the middle of the map
const map = L.map("mapid", options).setView([lat, lng], 15); // this is our map (setview has latitude, longitude, zoom)

//create and add titeLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create ICON  - It is on the documentation how to do it.
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and ADD marker
L.marker([lat, lng], { icon }).addTo(map);

// Image Gallery

function selectImage(event) {
  
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  //remove all Active classes from the buttons
  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  const button = event.currentTarget; // clicked button
  //console.log(button.children)   HTML collection with 1 position
  // Select the clicked image
  const image = button.children[0];

  // Updated the container of image ( the bigger image)
  const imageContainer = document.querySelector(".orphanage-details > img");

  imageContainer.src = image.src;

  // Add an Active Class to the current button
  button.classList.add("active");
}


