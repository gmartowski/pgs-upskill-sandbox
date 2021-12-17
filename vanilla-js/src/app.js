
// Geolocation API
navigator.geolocation.getCurrentPosition((position) => {

    const geo = document.querySelector('#geolocaction-api');
    geo.textContent = '';

    const data = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        speed: position.coords.speed,
        accuracy: position.coords.accuracy,
        altitudeAccuracy: position.coords.altitudeAccuracy,
        altitude: position.coords.altitude,
        heading: position.coords.heading,
    }


    Object.keys(data).map((item) => {
        let element = document.createElement('div');
        element.innerText = `${item}: ${data[item]}`
        geo.appendChild(element);
    });

    document.getElementById('link').setAttribute('href', `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`)
});


