// * Functions

// Funzione per creare una cella

const createCell = (number) => {
    let cell = document.createElement('div'); // creo la cella
    cell.classList.add('cell'); // gli inserisco la classe che permette a css di dare le proprietà
    if(gridSelect.value === "2"){
        cell.classList.add('medium-cell');
    } else if(gridSelect.value === "3"){
        cell.classList.add('hard-cell');
    }
    cell.innerText = number; // preparo la lettura del numero al suo interno

    return cell;
}

// * Steps 

// Creo la griglia usando js

// Collego gli elementi della pagina

const container = document.getElementById('grid-container')
let grid = document.getElementById('grid');
const button = document.getElementById('start-button');



// * BONUS * //

// Collego l'elemento select della pagina

const gridSelect = document.getElementById('grid-select');

let rows;
let cells;


// Quando premo il pulsante start

button.addEventListener('click',() => {

    // Rimuovo la griglia esistente e ricreo l'elemento
    
    grid.remove();
    grid = document.createElement('div');
    grid.id = 'grid';
    container.appendChild(grid);

    // O svuoto l'interno della griglia

    // ? grid.innerHTML = ""
    
    

    // Dichiaro le misure della mia griglia nelle variabili
    
    switch(gridSelect.value) {
        case "1": {
            rows = 10;
            cells = 10;
            break;
        };
        case "2": {
            rows = 9
            cells = 9;
            
            break;
        }
        case "3": {
            rows = 7
            cells = 7;
            break;
        }
        
    }

    const totalCells = rows * cells;

    for(let i = 1; i <= totalCells; i++){ // Fintanto che non ho creato tante celle quante quelle richieste (in totalCells)
        let cell = createCell(i); // Creo una cella (con variabile cell) usando la funzione createCell
        grid.appendChild(cell);  // Appendo la nuova cella alla griglia
        cell.addEventListener('click',(event) => { // Osservo un evento applicato alla nuova cella quando essa viene cliccata
            event.target.classList.toggle('clicked'); // Che aggiunge/rimuove la classe clicked (creata in css)
            console.log('hai cliccato la casella: ' + [i]) // E mi stampa in console il numero della cella
        })
    }   
})