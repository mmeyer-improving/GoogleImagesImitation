var images = [
    'https://pbs.twimg.com/media/EdoYKhhU4AAUqeH.jpg', 
    'https://pbs.twimg.com/media/EdjWU7xVAAE-_mZ.jpg', 
    'https://i.pinimg.com/originals/52/d0/42/52d04282e13e79caf5484c1f12d34c60.png', 
    'https://pbs.twimg.com/media/Ek9Q1SfU0AAM-r-.jpg', 
    'https://pbs.twimg.com/media/EDKCOJfVUAA1Z6c.jpg', 
    'https://ksr-ugc.imgix.net/assets/027/107/388/3a20fda1485bed478d9e33376d7bc810_original.png?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1573000773&auto=format&frame=1&q=92&s=cadd0edf5a3c64925b68e3fd1abec73a'];
var imagesContainer = document.querySelector('#image-list');
var focusPanel = document.querySelector('#focus-panel');
var focusImage = document.querySelector('#focus-image');
var exitIcon = document.querySelector('#exit-icon');

generateImages(200);

function generateImages(numberToGenerate) {
    for(var i = 0; i < numberToGenerate; i++) {
        var randomURL = images[Math.floor(Math.random() * images.length)];
        var img = document.createElement('IMG');
        img.classList.toggle('image-result');
        imagesContainer.appendChild(img);
        
        img.src = randomURL;
    }
}

window.onscroll = function(e) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        generateImages(100);
    }
};

exitIcon.addEventListener('click', () => {
    focusPanel.classList.toggle('hidden');
    imagesContainer.classList.toggle('condensed')
})

imagesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('image-result')) {
        console.log('Clicked an image');
        //If the focus panel is not already shown
        if (imagesContainer.classList.contains('condensed') === false) {
            //Show focus container if not already shown
            focusPanel.classList.toggle('hidden');
            //Resize images container if not already resized
            imagesContainer.classList.toggle('condensed')
        }
        //Change image in images container to be url of clicked image
        focusImage.src = e.target.src;
    }
})