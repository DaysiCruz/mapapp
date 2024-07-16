document.addEventListener('DOMContentLoaded', function() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIG.GOOGLE_MAPS_API_KEY}`;
    script.onload = initMap;
    document.body.appendChild(script);
});

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {lat: 13.705243, lng: -89.24231}
    });

    const clients = [
        {name: 'Daniel Chavez', lat: 13.705243, lng: -89.24231},
        {name: 'Paola Alvarenga', lat: 13.696674, lng: -89.197927},
        {name: 'Daniela Paz', lat: 14.692511, lng: -87.86136},
        {name: 'John Smith', lat: 12.022747, lng: -86.252007},
        {name: 'Ximena Alfaro', lat: 8.103289, lng: -80.596013}
    ];

    clients.forEach(function(client) {
        const marker = new google.maps.Marker({
            position: {lat: client.lat, lng: client.lng},
            map: map,
            title: client.name
        });

        const infoWindow = new google.maps.InfoWindow({
            content: 
                client.name,
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    });
}

window.onload = initMap;