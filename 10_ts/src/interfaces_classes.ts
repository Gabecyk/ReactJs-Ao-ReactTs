interface User {
    id: number;
    name: string;
    isActive: boolean;
}

// Utilizando interface

const myUser: User = {
    id: 1,
    name: "Gabe",
    isActive: true,
}

console.log(myUser);


// Classes 
class Person implements User {
    id: number;
    name: string;
    isActive: boolean;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    greet(isNew: boolean) {
        console.log(`Olá meu nome é ${this.name}`)
        if(isNew)
            console.log("Sou novo por aqui!")
    }
}

const p1 = new Person(1, "gabe")

console.log(p1)

p1.greet(true);