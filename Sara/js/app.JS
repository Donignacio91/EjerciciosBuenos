

import dialogPolyfill  from'../../../node_modules/dialog-polyfill'
function main() {
document.querySelector('#btninfo').addEventListener
('click', mostrar)
document.querySelector('#btncerrar').addEventListener
('click',cerrar)
}
function mostrar(){
    document.querySelector('#dialog').open= true}
function cerrar (){
    document.querySelector('#dialog').open= false}
    if (!modal.open modal show modal

function main2() {
    let modal = document.querySelector('#dialog')
    dialogPolyfill.registerDialog(modal);
    modal.showModal();
    document.querySelector('#btninfo').addEventListener('click',onClick)
    document.querySelector('#btncerrar').addEventListener('click', onClick)}

function onClick () {
    if(!modal.open){ modal.open = false};
    modal.open = !modal.open; 
    if (modal.open){modal.showModal}
    document.querySelector('#dialog').open= false
}

document.addEventListener('DOMContentLoaded',main)
ocument.addEventListener('DOMContentLoaded',canvas);

function canvas () {
   let c =document.querySelector('#cnvas').getContext('2D') 
   c.strokeStyle = "green";
   c.beginPath();
   for (var i = 10; i <= 210; i = i + 5) {
     c.moveTo(70 + i, i);
     c.lineTo(120 + i, 85 + i);
     c.lineTo(20 + i, 85 + i);
     c.lineTo(70 + i, i);
   }}
   c.stroke();
   