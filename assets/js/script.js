let photo = document.getElementById ('Monsterwallpaper');
photo.addEventListener ('mouseover', image2);
photo.addEventListener ('mouseout', image1);

function image2(){
    photo.src='assets/img/Monsterenergy.jpeg';
    photo.alt='Monster icone';
}

function image1(){
    photo.src='assets/img/Monsterwallpaper.jpg';
    photo.alt='Monster wallpaper';
}