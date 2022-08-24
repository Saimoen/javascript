//déclaration des variables
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const response = document.querySelector('.exemple');
const chapitre1 = document.querySelector('.chap1');
const chapitre2 = document.querySelector('.chap2');
const chapitre3 = document.querySelector('.chap3')

//ajout d'un "Event"
// click-event
questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle('question-clicked');
});

btn1.addEventListener("click", () => {
    response.classList.add('show-response')
    response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.classList.add('show-response');
    response.style.background = "red";
});

//mouse-events
//déclaration des variables
const mousemove = document.querySelector(".mousemove");

//ajout d'un event
window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.height = '100px';
});

window.addEventListener("mouseup", () => {
    mousemove.style.width = '100px';
});

chapitre1.addEventListener("mouseenter", () => {
    chapitre1.style.background = '#F2C94C';
});

chapitre3.addEventListener("mouseout", () => {
    chapitre3.style.background = 'pink';
});

chapitre2.addEventListener("mouseover", () => {
    chapitre2.style.transform = 'translateX(-100px)';
});

//keypress-event
//déclaration des variables

const keypress = document.querySelector('.keypress');
const key = document.getElementById('key');

//ajout d'event
document.addEventListener('keypress', (e) => {
    key.textContent = e.key;
});

//scroll-event
//déclaration des variables

const scroll = document.querySelector('nav')
//ajout d'évènements

window.addEventListener('scroll', () => {

    if (window.scrollY > 120){
        scroll.style.top = 0;
    } else {
        scroll.style.top = "-50px";
    }
});

//Form-event
//déclaration des variables

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = "";
let language = "";

//ajout d'un évènement

inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
    language = e.target.value;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
            <h3>Pseudo: ${pseudo}</h3>
            <h4>Destination préférée: ${language}</h4> `;
    } else {
        alert('Veuillez acceptez les CGV');
    }
});

//forEach
//Déclaration des variables
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('click', (e) =>{
        e.target.style.transform = "scale(0.7)";
    });
});




    


