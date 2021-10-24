import '../scss/style.scss';
import data from './data.json';
import Nav from './components/nav'

import Douglas from '/src/assets/crew/image-douglas-hurley.webp';
import Mark from '/src/assets/crew/image-mark-shuttleworth.webp';
import Victor from '/src/assets/crew/image-victor-glover.webp';
import Anousheh from '/src/assets/crew/image-anousheh-ansari.webp';

const crewDouglas = document.querySelector('.crew__douglas');
const crewMark = document.querySelector('.crew__mark');
const crewVictor = document.querySelector('.crew__victor');
const crewAnousheh = document.querySelector('.crew__anousheh');

const crewImage = document.querySelector(".crew__image");
const crewName = document.querySelector("#crew__name");
const crewRole = document.querySelector("#crew__role");
const crewDescription = document.querySelector("#crew__description");

crewDouglas.addEventListener('click', () => {
    crewImage.src = Douglas;
    crewName.innerHTML = data.crew[0].name;
    crewRole.innerHTML = data.crew[0].role;
    crewDescription.innerHTML = data.crew[0].bio;
});
crewMark.addEventListener('click', () => {
    crewImage.src = Mark;
    crewName.innerHTML = data.crew[1].name;
    crewRole.innerHTML = data.crew[1].role;
    crewDescription.innerHTML = data.crew[1].bio;
});
crewVictor.addEventListener('click', () => {
    crewImage.src = Victor;
    crewName.innerHTML = data.crew[2].name;
    crewRole.innerHTML = data.crew[2].role;
    crewDescription.innerHTML = data.crew[2].bio;
});
crewAnousheh.addEventListener('click', () => {
    crewImage.src = Anousheh;
    crewName.innerHTML = data.crew[3].name;
    crewRole.innerHTML = data.crew[3].role;
    crewDescription.innerHTML = data.crew[3].bio;
});