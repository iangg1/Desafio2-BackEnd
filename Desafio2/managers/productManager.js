const fs = require ("fs/promises")
const {existsSync} = require("fs")

class ProductManager{

    constructor(path){
        this.path = path
    }

    async readFile(){
        return await fs.readFile(this.path,"utf-8")
    }

    async writeFile(string){
        return await fs.writeFile(this.path, string,"utf-8")
    }

    async getProduct(){
        try{
            if(existsSync(this.path)){
                const productString = await this.readFile()
                const product = await JSON.parse(productString);
                return product
            }else{
                return[]
            }
        } catch (error) {
            throw new Error(error.mesage)
        }
    }

    async getProductById(id){
        try{
            const users = await getProduct()
            const foundProduct = product.find(elem=> elem.id===id);

            if(!foundProduct){
                throw new Error ("That user doesn't exist.")
            }

            return foundProduct;
        } catch (error){
            console.log(error.message)
        }
    }

    async updateProduct(id, newProperties){
        const product = await getProduct()
        const foundProduct = await this.getProductById(id)

        const productUpdate = {...foundProduct, ...newProperties}

        const index = users.indexOf(foundProduct);

        product[index] = productUpdate;

        console.log(product)
    }

    async createProduct(product){
        try{
            const productArray = await getProduct()
            const newProduct = {id: productArray.length+1,...product}
            productArray.push(newProduct)

            const productString = JSON.stringify(productArray,null,"\t")

            await this.writeFile(productString)
            console.log("Product saved succesfully")
        } catch(error){
            console.log(error)
        }
    }
}


module.exports = ProductManager