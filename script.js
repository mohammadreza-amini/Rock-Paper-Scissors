let images = document.querySelectorAll('.img-items');
let cpuImages = document.querySelectorAll('.img-cpu-choosed');
for (let i = 0; i <= images.length - 1; i++){
    images[i].addEventListener('click', () => {
        hiddenSelector(i);
        randomCpu = Math.floor((Math.random() * 10) / 4);
        cpuImages[randomCpu].classList.remove('hidden');
        gameLogic(i, randomCpu);
    })
}
function hiddenSelector(i) {
    for (let j = 0; j <= images.length - 1; j++){
        if (j != i) {
            images[j].classList.add('hidden');
        }
    }
}

const refreshFunction = () => {
    for (let i = 0; i <= images.length - 1; i++) {
      images[i].classList.remove("hidden");
      cpuImages[i].classList.add("hidden");
    }
}

document.querySelector('button').addEventListener(('click'), refreshFunction);

document.addEventListener('keydown', (e) => {
    if (e.key == 'r') {
        refreshFunction();
    }
});

function gameLogic(user, cpu) {
    const userPoint = document.querySelector('#user-point');
    const cpuPoint = document.querySelector('#cpu-point');
    if (user !== cpu) {
        if (user == 0) {
          if (cpu == 1) {
            userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
          } else {
            cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
          }
        }
        if (user == 1) {
            if (cpu == 0) {
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
            } else {
                userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
            }
        }
        if (user == 2) {
            if (cpu == 0) {
                userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
            } else {
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
            }
        }
    }
}