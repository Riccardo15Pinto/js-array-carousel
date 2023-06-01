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
let imagecontentmin = '';

//per ogni elemento dell array creo un tag img
//per ogni elemento dell array creo un tag div>img
for(let i = 0; i < images.length; i++){
    imagecontent += `<img src="${images[i]}" class="none border">`;
    imagecontentmin += `<div class="opacity "><img src="${images[i]}" class="border"></div>`;
}

//inserisco le immagini nel DOM
firstgalleryelement.innerHTML = imagecontent ;
secondgalleryelement.innerHTML = imagecontentmin ;

//recupero tutte le immagini
const imageElements = document.querySelectorAll('#main-gallery img');
const imageElementsmin = document.querySelectorAll('#second-gallery div');

//preparo la gestione dell'index
let currentIndex = 0;

//impostiamo la prima immagine come quella attiva
imageElements[currentIndex].classList.add('active');

//impostiamo la prima immagine senza l'opacity
imageElementsmin[currentIndex].classList.remove('opacity');

//metto l'orecchio in ascolto
afterbuttonelement.addEventListener('click', function(){

    //rimuovo la classe active
    imageElements[currentIndex].classList.remove('active');

    //aggiungo la classe opacity
    imageElementsmin[currentIndex].classList.add('opacity');

    //---------------------------------------

    if(currentIndex === images.length - 1){

        //se
        currentIndex = 0;

    }else{

        //allora
        currentIndex++
    }

    //rimuovo la classe opacity
    imageElementsmin[currentIndex].classList.remove('opacity');

    //aggiungo la classe active
    imageElements[currentIndex].classList.add('active');
})

//metto l'orecchio in ascolto
beforebuttonelement.addEventListener('click', function(){

    //rimuovo la classe active
    imageElements[currentIndex].classList.remove('active');

    //aggiungo la classe opacity
    imageElementsmin[currentIndex].classList.add('opacity');

    //---------------------------------------

    if(currentIndex < 1 ){
        //se
        currentIndex = images.length - 1;

    }else{
        //allora
        currentIndex--
    }

    //rimuovo la classe opacity
    imageElementsmin[currentIndex].classList.remove('opacity');
    
    //aggiungo la classe active
    imageElements[currentIndex].classList.add('active');
})
//check element
console.log(imagecontent)
console.table(images)  
console.log(firstgalleryelement)