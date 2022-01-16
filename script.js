const screenSize = document.querySelector('p.screen-size');

let width = screen.width;
let height = screen.height;

screenSize.innerHTML = width + ' X ' + height;