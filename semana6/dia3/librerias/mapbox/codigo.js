mapboxgl.accessToken = "pk.eyJ1IjoiYmVuaWNvbmRvcmkiLCJhIjoiY2ttem8xd2NoMGNnMzJvbzJubHNueXQxZiJ9.hunL3t4LXRN-uB_lY-i2qg";
let map = new mapboxgl.Map({
container: "mapa", // container ID
style: "mapbox://styles/mapbox/streets-v11", // style URL
center: [-13.52264, -71.96734], // starting position [lng, lat]
zoom: 2 // starting zoom
});
