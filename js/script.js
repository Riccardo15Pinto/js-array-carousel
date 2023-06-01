//check console log
console.log('ok js');
//richiamo elementi dal DOM
const firstgalleryelement = document.getElementById('main-gallery');
const secondgalleryelement = document.getElementById('second-gallery');
const beforebuttonelement = document.getElementById('left-side');
const afterbuttonelement = document.getElementById('right-side');
// creo un ARRAY
const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp',];
//preparo le immagini
let imagecontent = '';
//per ogni elemento dell array creo un tag img
for(let i = 0; i <= images.length; i++){
    imagecontent += `<img src="${images[i]}>"`;
}
//inserisco le immagini nel DOM
firstgalleryelement.innerHTML = imagecontent ;
//recupero tutte le immagini
const imageElements = document.querySelectorAll('img');
//preparo la gestione dell'index
let currentIndex = 0;
//impostiamo la prima immagine come quella attiva




afterbuttonelement.addEventListener('click', function(){

});




console.log(imagecontent)
console.table(images)
   
    
console.log(firstgalleryelement)