'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

async function displayNotification() {
    if (Notification.permission === "granted") {
       const reg = await navigator.serviceWorker.getRegistration();
       reg.showNotification("Go go");
    }
  }

  displayNotification()

if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(function(position){
    const {latitude} = position.coords;
    const {longitude} = position.coords;

    const coords = [latitude, longitude]

    const map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker(coords).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

        map.on('click', function(mapEvent){
               let animalName= prompt("Nombre de mascota")
    L.marker(mapEvent.latlng)
    .bindPopup(L.popup({maxWidth: 250, minWidth: 100, autoClose: false, closeOnClick: false, className: "running-popup"})).addTo(map).setPopupContent(`Aqui esta perdida ${animalName}, porfavor llamar a 666666`)
    .openPopup();
        })
 
}, function(){
    alert("Couldnt get Position")
})