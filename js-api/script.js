const init = {
    method: 'POST',
    headers:{
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
        pseudo: 'GreksO',
        message: 'Termines le taffe!',
    }),
    mode: "cors",
    credentials: 'same-origin',
};

document.querySelector('form').addEventListener('submit', () =>{

    fetch('http://localhost:3000/posts', init)
    .then(() => console.log('data envoyée'))
})