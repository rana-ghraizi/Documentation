function display(){
document.querySelector("#show").addEventListener('click', function(){
    document.querySelector('#texte').hidden = false;
})
document.querySelector("#hide").addEventListener('click', function(){
    document.querySelector('#texte').hidden = true;
})
}