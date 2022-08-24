//déclaration des variables

const result = document.getElementById('result');
const buttons = document.querySelectorAll(".btn");

// ajout d'un évènement

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        result.textContent += e.target.id;
    })
});

equal.addEventListener('click', () => {
    result.textContent = Math(result.textContent);
})

clear.addEventListener('click', () => {
    result.textContent = "";
})
