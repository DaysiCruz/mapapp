document.addEventListener('DOMContentLoaded', function() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIG.GOOGLE_MAPS_API_KEY}&loading=async&libraries=visualization&callback=initMa`;
    script.onload = initMap;
    document.body.appendChild(script);
});

function initMap() {
    const map = new google.maps.Map(document.getElementById('heatmap'), {
        zoom: 6,
        center: {lat: 13.705243, lng: -89.24231}
    });

    const heatmapData = [
        new google.maps.LatLng(13.705243, -89.24231),
        new google.maps.LatLng(13.696674, -89.197927),
        new google.maps.LatLng(14.692511, -87.86136),
        new google.maps.LatLng(12.022747, -86.252007),
        new google.maps.LatLng(8.103289, -80.596013)
    ];

    const heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData
    });

    heatmap.setMap(map);
}

window.onload = initMap;
