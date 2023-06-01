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
for(let i = 0; i < images.length; i++){
    imagecontent += `<img src="${images[i]}" class="none">`;
    imagecontentmin += `<div class="opacity"><img src="${images[i]}"></div>`;
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
imageElementsmin[currentIndex].classList.remove('opacity');

afterbuttonelement.addEventListener('click', function(){
    imageElements[currentIndex].classList.remove('active');
    imageElementsmin[currentIndex].classList.add('opacity');
    
    
    
    
    if(currentIndex === images.length - 1){
        currentIndex = 0;
    }else{
        
        currentIndex++
        
    }
    
    imageElementsmin[currentIndex].classList.remove('opacity');
    imageElements[currentIndex].classList.add('active');


    console.log(currentIndex)

})

beforebuttonelement.addEventListener('click', function(){

    imageElements[currentIndex].classList.remove('active');
    imageElementsmin[currentIndex].classList.add('opacity');
    
    if(currentIndex < 1 ){

        currentIndex = images.length - 1;

    }else{

        currentIndex--
    }

    imageElementsmin[currentIndex].classList.remove('opacity');
        
    imageElements[currentIndex].classList.add('active');

    console.log(currentIndex)

})



console.log(imagecontent)
console.table(images)  
console.log(firstgalleryelement)