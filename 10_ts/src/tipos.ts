//Tipos básicos

let isActive: boolean;

isActive = true

let total : number = 123

let myName: string = "Gabe"

console.log(typeof isActive, typeof myName, typeof total);

// Inferência de tipos

let isComplete = false

//isComplete = "teste" da erro de tipagem

let amout = 200

let username = "Lian"

console.log(typeof amout, typeof username, typeof isComplete)

let money;

console.log(typeof money)

money = 200

console.log(typeof money)

// Arrays de objetos
let numbers: number[] = [1,2,3];

console.log(typeof numbers)

let user: {name: string, age: number} = {
    name: "Gabe", 
    age: 19
};

// Tuplas
let rgb: [number, number, number] = [255, 0, 0];

console.log(typeof rgb)

// Tipos avançados

// Funções
function greet(nome: string): string // recebe string e retorna string
{
    return `Olá, ${nome}`
}

console.log(greet("Gabe"));

// Enum
enum Direction {
    Up,
    Down,
    Left,
    Right,
    Diagonal,
}

function getDirectionMessage(direction: Direction): string
{
    switch (direction) {
        case Direction.Up:
            return "Movendo para cima";
        case Direction.Down:
            return "Movendo para baixo";
        case Direction.Left:
            return "Movendo para esquerda";
        case Direction.Right:
            return "Movendo para direita";
        default:
            return "Ficou parado";
    }
}

console.log(getDirectionMessage(Direction.Up))
console.log(getDirectionMessage(Direction.Down))
console.log(getDirectionMessage(Direction.Left))
console.log(getDirectionMessage(Direction.Right))
console.log(getDirectionMessage(Direction.Diagonal))