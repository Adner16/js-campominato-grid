console.log('js ok');

// 1 richiamare l'elemento del dom
// 2 aggiungi griglia al click delgi elementi
// 3 cambia il colore al click delle celle



let grid = document.getElementById('grid');
const livello = document.getElementById('livello');
const play = document.getElementById('btn');
const cols = 10;


btn.addEventListener('click', function createGrid (){
    const choise = livello.value;
    let cols = 10;
    let cell;
    const cells = 10;
    const totalCells = cols * cell;
    for ( i = 0; i > totalCells; i++){
        const cell = document.createElement('div');
        grid.appendChild(cell);
    }

    if (choise.value == 'medium'){
        cols = 9;
    }else if (choise.value == 'hard'){
         cols = 7;
    }
    

    const grid = document.createElement('div');
           grid.className = '';

    grid = document.createElement('div');
    grid= className('grid');
})


