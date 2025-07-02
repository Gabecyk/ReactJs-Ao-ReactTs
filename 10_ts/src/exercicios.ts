// Ex1
interface Vehicle {
    mark: string,
    model: string,
    year: number,
}

const TypeR: Vehicle = {
    mark: "Honda",
    model: "Type-r",
    year: 2023,
}

function descOfCar(veiculo: Vehicle): void
{
    console.log(`Marca: ${veiculo.mark}, modelo: ${veiculo.model}, ano: ${veiculo.year}`)
}

descOfCar(TypeR)

// Ex2

function firstElement<T>(items: T[]): T
{
    return items[0]
}

const arrayTeste: string[] = ["A", "B", "C"]
const arrayTeste2 = [1, 2, 3]

console.log(firstElement(arrayTeste))

console.log(firstElement(arrayTeste2))

// Ex3
type Product = {
    id: number;
    name: string;
    price: number;
}

function freezeProduct(product: Product): Readonly<Product> {
    return Object.freeze(product)
}

const bread: Product = { id: 2, name: "Pão", price: 1.99}

const frozenBread = freezeProduct(bread);

console.log(frozenBread)
//frozenBread.name = "Pão doce";

function updateProductPrice(
    product: Product,
    newPrice: Partial<Product>
): Product {
    return {...product, ...newPrice}
}

const updateBread = updateProductPrice(bread, { price: 3.49 });

console.log(updateBread)