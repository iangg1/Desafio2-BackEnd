const ProductManager = require("./managers/productManager");

const manager = new ProductManager("./data/Product.json")

const queries = async () => {
    try{
        console.log("Primera consulta")
        let product = await manager.getProduct()
        console.log(product);
        console.log("Nuevo producto")
        const productDemo1 = {name: "Coca-Cola", size: "2,25lt", price: "5u$s"};
        await manager.createProduct(productDemo1)

        console.log("Segunda consulta")
        product = await manager.getProduct()
        console.log(product);
        console.log("Nuevo producto")
        const productDemo2 = {name: "Fanta", size: "1,5lt", price: "3u$s"};
        await manager.createProduct(productDemo2)

        console.log("Tercera consulta")
        product = await manager.getProduct()
        console.log(product);
        console.log("Nuevo producto")
        const productDemo3 = {name: "Sprite", size: "3lt", price: "7u$s"};
        await manager.createProduct(productDemo3)

        console.log("Cuarta consulta")
        product = await manager.getProduct()
        console.log(product);
    } catch(error) {
        console.log(error)
    }
}

queries()