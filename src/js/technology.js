import '../scss/style.scss';
import data from './data.json';
import Nav from './components/nav'

import Vehicle from '/src/assets/technology/image-launch-vehicle-portrait.jpg';
import Spaceport from '/src/assets/technology/image-spaceport-portrait.jpg';
import Capsule from '/src/assets/technology/image-space-capsule-portrait.jpg';

import VehicleL from '/src/assets/technology/image-launch-vehicle-landscape.jpg';
import SpaceportL from '/src/assets/technology/image-spaceport-landscape.jpg';
import CapsuleL from '/src/assets/technology/image-space-capsule-landscape.jpg';


const technologyVehicle = document.querySelector(".technology__vehicle");
const technologySpaceport = document.querySelector(".technology__spaceport")
const technologyCapsule = document.querySelector(".technology__capsule");

const technologyTitle = document.querySelector("#technology__title");
const technologyDescription = document.querySelector("#technology__description");
const technologyImage = document.querySelector("#technology__image");

if (window.innerWidth <= 768) {
    technologyImage.src = VehicleL;
}

technologyVehicle.addEventListener("click", () => {
    technologyTitle.innerHTML = data.technology[0].name;
    technologyDescription.innerHTML = data.technology[0].description;
    if (window.innerWidth <= 768) {
        technologyImage.src = VehicleL;
    } else{
        technologyImage.src = Vehicle;
    }
});

technologySpaceport.addEventListener("click", () => {
    technologyTitle.innerHTML = data.technology[1].name;
    technologyDescription.innerHTML = data.technology[1].description;
    if (window.innerWidth <= 768) {
        technologyImage.src = SpaceportL;
    } else{
        technologyImage.src = Spaceport;
    }
});

technologyCapsule.addEventListener("click", () => {
    technologyTitle.innerHTML = data.technology[2].name;
    technologyDescription.innerHTML = data.technology[2].description;
    if (window.innerWidth <= 768) {
        technologyImage.src = CapsuleL;
    } else{
        technologyImage.src = Capsule;
    }
});