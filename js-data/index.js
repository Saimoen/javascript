let data = [{
    pseudo: 'Dracaufeu',
    age: 20,
    technos: ["Javascript", "React", "NodeJS"],
    admin: false,
},
    {pseudo: 'Tortank',
    age: 21,
    technos: ["Javascript", "React", "NodeJS"],
    admin: true,
},
    {pseudo: 'Herbizarre',
    age: 24,
    technos: ["Javascript", "React", "NodeJS"],
    admin: false,
}];

//----------------------Structure de contrôle---------------------//

//IF,ELSE
if(data[0].age > data[1].age) {
    document.body.innerHTML += `<h3> Pseudo </h3>`;
} else {
    document.body.innerHTML += `<h3> Age </h3>`;
}

//While
let w = 0;

while(w < 2) {
    w++;
    document.body.innerHTML += `<h3> boucle "while" </h3>`;
};

//Les boucles "For"
for(const user of data){
    console.log(data)
};

for(i=0; i < 3; i++){
    document.body.innerHTML += `<h3> boucle "For" </h3>`
}

//Switch
document.body.addEventListener('click', (e) => {
    switch(e.target.id){
        case "javascript":
        document.body.style.background = "yellow";
        break;
        case "react":
        document.body.style.background = "blue";
        break;
        case "php":
        document.body.style.background = "purple";
        break;
    }
})

//Filter, Sort, Map

document.body.innerHTML += data
.sort((a,b) => b.age-a.age)
//.filter((user) => user.admin === true )
.map((user) =>
`

<div class="array">
<div id="user-card">

<h2>${user.pseudo}</h2>
<p>Age : ${user.age} ans</p>
<p>Status : ${user.admin === true ? "Modératrice" : "Utilisatrice"}</p>

</div>
</div>

`)
.join('');


document.body.addEventListener('click', (e) => {
    switch(e.target.id){
        case "user-card":
        document.body.style.background = "grey";
        break;
        
    }
})

let date = new Date();
console.log(date);