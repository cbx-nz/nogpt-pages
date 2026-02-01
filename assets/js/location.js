const location = document.getElementById('location')

function getLocation() {
    if (navigator.getLocation) {
        navigator.getLocation.getCurrentPosition(success, error);
    } else {
        location.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function success() {
    location.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
function error() {
    location.innerHTML = "Sorry, Not Available."
}