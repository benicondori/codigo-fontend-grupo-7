mapboxgl.accessToken = "pk.eyJ1IjoiYmVuaWNvbmRvcmkiLCJhIjoiY2ttem8xd2NoMGNnMzJvbzJubHNueXQxZiJ9.hunL3t4LXRN-uB_lY-i2qg";
let map = new mapboxgl.Map({
container: "mapa", // container ID
style: "mapbox://styles/mapbox/streets-v9", // style URL
//center: [-13.52264, -71.96734], // starting position [lng, lat]
zoom: 1 // starting zoom
});
let mensaje=new mapboxgl.Popup()
.setHTML("<h3>buenos dias</h3><p>empecemos..!!</p>");
let marcador=new mapboxgl.Marker()
.setLngLat([-13.52264, -71.96734])
.setPopup(mensaje)
.addTo(map);
