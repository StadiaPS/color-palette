const screenSize = document.querySelector('p.screen-size');
const r = document.querySelector(":root");

let width = screen.width;
let height = screen.height;

r.style.setProperty('--device-width', width);
r.style.setProperty('--device-height', height);

screenSize.innerHTML = width + ' X ' + height;