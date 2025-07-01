function getArray<T>(items: T[]): T[]
{
    return new Array<T>().concat(items)
}

let numberArray = getArray([1, 2, 3, 4])
let stringArray = getArray(["Mika", "Layla", "Gabe"])

console.log(numberArray, stringArray);

// Restringir tipos
function marge<T extends object, U extends object>(obj1: T, obj2: U) {
    return {...obj1, ...obj2}
}

const result = marge({name: "Gabe", age: 19}, 
    {job: "Dev", isActive: true}
)

console.log(result)

// Ultilitários de tipo
type Todo = {
    title: string;
    description: string;
    completed: boolean;
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate}
}

const meuTodo: Todo = {
    title: "Teste",
    description: "Alguma coisa",
    completed: false
}

const todoAtualizado = updateTodo(meuTodo, {completed: true})

console.log(todoAtualizado)