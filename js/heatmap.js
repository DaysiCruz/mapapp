
// Cargando API Google Maps
document.addEventListener('DOMContentLoaded', function() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIG.GOOGLE_MAPS_API_KEY}&libraries=visualization`;
    script.onload = initMap;
    document.body.appendChild(script);
});

function initMap() {
    const map = new google.maps.Map(document.getElementById('heatmap'), {
        zoom: 6,
        center: {lat: 13.705243, lng: -89.24231}
    });

    const clients = [
        {name: 'Daniel Chavez', lat: 13.705243, lng: -89.24231},
        {name: 'Paola Alvarenga', lat: 13.696674, lng: -89.197927},
        {name: 'Daniela Paz', lat: 14.692511, lng: -87.86136},
        {name: 'John Smith', lat: 12.022747, lng: -86.252007},
        {name: 'David Calix', lat: 8.103289, lng: -80.596013}
    ];

    const heatmapData = clients.map(client => {
        return new google.maps.LatLng(client.lat, client.lng);
    });

    const heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        map: map
    });

    clients.forEach(function(client) {
        const marker = new google.maps.Marker({
            position: {lat: client.lat, lng: client.lng},
            map: map,
            title: client.name
        });

        const infoWindow = new google.maps.InfoWindow({
            content: 
            `
                <div>
                    <h3>${client.name}</h3>
                    <p>Latitud: ${client.lat}</p>
                    <p>Longitud: ${client.lng}</p>
                </div>
            `
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
        // para cerrar la ventana de información al hacer clic en otro lugar del mapa
        map.addListener('click', function() {
            infoWindow.close();
        });
    });

    heatmap.setMap(map);
}
window.onload = initMap;

