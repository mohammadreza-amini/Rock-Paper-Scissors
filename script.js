let images = document.querySelectorAll('.img-items');
for (let i = 0; i <= images.length - 1; i++){
    images[i].addEventListener('click', () => {
        hiddenSelector(i);
    })
}
function hiddenSelector(i) {
    for (let j = 0; j <= images.length - 1; j++){
        if (j != i) {
            images[j].classList.add('hidden');
        }
    }
}