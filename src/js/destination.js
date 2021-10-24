import '../scss/style.scss';
import data from './data.json';
import Nav from './components/nav'

import Moon from '/src/assets/destination/image-moon.webp';
import Mars from '/src/assets/destination/image-mars.webp';
import Europa from '/src/assets/destination/image-europa.webp';
import Titan from '/src/assets/destination/image-titan.webp';

const destinationMoon = document.querySelector('#destination__moon');
const destinationMars = document.querySelector('#destination__mars');
const destinationMEuropa = document.querySelector('#destination__europa');
const destinationTitan = document.querySelector('#destination__titan');

const destinationImage = document.querySelector('#destination__image');
const destinationTitle = document.querySelector('#destination__title');
const destinationDescription = document.querySelector('#destination__description');
const destinationDistance = document.querySelector('#destination__distance');
const destinationTravel = document.querySelector('#destination__travel');

destinationMoon.addEventListener("click", () => {
    destinationImage.src = Moon;
    destinationTitle.innerHTML = data.destinations[0].name;
    destinationDescription.innerHTML = data.destinations[0].description;
    destinationDistance.innerHTML = data.destinations[0].distance;
    destinationTravel.innerHTML = data.destinations[0].travel;
});

destinationMars.addEventListener("click", () => {
    destinationImage.src = Mars;
    destinationTitle.innerHTML = data.destinations[1].name;
    destinationDescription.innerHTML = data.destinations[1].description;
    destinationDistance.innerHTML = data.destinations[1].distance;
    destinationTravel.innerHTML = data.destinations[1].travel;
});

destinationMEuropa.addEventListener("click", () => {
    destinationImage.src = Europa;
    destinationTitle.innerHTML = data.destinations[2].name;
    destinationDescription.innerHTML = data.destinations[2].description;
    destinationDistance.innerHTML = data.destinations[2].distance;
    destinationTravel.innerHTML = data.destinations[2].travel;
});

destinationTitan.addEventListener("click", () => {
    destinationImage.src = Titan;
    destinationTitle.innerHTML = data.destinations[3].name;
    destinationDescription.innerHTML = data.destinations[3].description;
    destinationDistance.innerHTML = data.destinations[3].distance;
    destinationTravel.innerHTML = data.destinations[3].travel;
});