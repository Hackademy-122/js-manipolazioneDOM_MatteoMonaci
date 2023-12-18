// ESERCIZIO 1
//   Lavoriamo sul DOM. Creare 3 paragrafi in HTML e 3 bottoni. 

// Il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire
// il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale
// il terzo bottone dovrà rendere i paragrafi in grassetto e farli tornare come prima.
// PS: Uniamo le conoscenze che abbiamo appreso finora, come sappiamo quando c'è qualcosa di casuale possiamo utilizzare il Math.random().

const allP = document.querySelectorAll('p');

const btnUno = document.querySelector('#btnUno');
console.log(`bottone uno è ${btnUno.innerHTML}`);

const btnDue = document.querySelector('#btnDue');
console.log(`bottone due è ${btnDue.innerHTML}`);

const btnTre = document.querySelector('#btnTre');
console.log(`bottone tre è ${btnTre.innerHTML}`);

btnUno.addEventListener('click', () => {
    allP.forEach((singleP) => {
        singleP.classList.toggle('d-none');
    });
});

btnDue.addEventListener('click', () => {
    allP.forEach((singleP) => {
    singleP.style.color = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
    });
});


btnTre.addEventListener('click', () => {
    allP.forEach((singleP) => {
        singleP.classList.toggle('fw-bolder');
    });
});

// ESERCIZIO 2
// Replicare le card in dinamica con JavaScript, come visto a lezione.
// Create un array di oggetti a vostro piacimento e provare a divertirvi come abbiamo fatto a lezione, se avete tempo provate ad inserire qualche altra feature o funzione in JS.

const wrapper = document.querySelector('#wrapper');

let prodotti = [
    {name:'fotocamera', desc:'full-frame'},
    {name:'macchina', desc:'ibrida'},
    {name:'stereo', desc:'bose'},
]

// div.innerHTML = `

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${prodotti.name}</h5>
//     <p class="card-text">${prodotti.desc}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

// `


prodotti.forEach((singoloProdotto) => {

    // per ogni oggetto di prodotti dovrà crearmi un div
    let div = document.createElement('div');
    // che avrà per classe col
    div.classList.add('col-6');
    // che avrà per contenuto la struttura della card
    div.innerHTML =
    `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${singoloProdotto.name}</h5>
        <p class="card-text">${singoloProdotto.desc}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
    // per ogni ciclo aggiunge la card
    wrapper.appendChild(div);
});;
