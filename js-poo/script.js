//fonction constructrice
class User{
    constructor(name, age){
        this.name = name
        this.age = age;
}
saySomething(text){
    console.log(this.name + 'dit:' + text);
}
}
//classe héritée
class Utilisateur extends User{
    run() {
        //possible de mettre une fonction
    }
}

const user0 = new Utilisateur("Anaïs", 21)
const user1 = new Utilisateur('Greg', 23)

console.log(user0)
console.log(user1)