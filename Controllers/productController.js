import { productModel } from "../Model/productModel.js";


let addProduct = async (req, res) => {
    try {
        let newProduct = await productModel.create(req.body)
        res.send(newProduct).status(200)
    } catch (err) {
        console.error(err)
        res.status(500).send("add Product problem")
    }
}


let getAllProducts = async (req, res) => {
    try {
        let users = await productModel.find()
        res.send(users).status(200)
    } catch (err) {
        console.error(err)
        res.status(500).send("get all Products problem")
    }
}

let getProductByID = async (req, res) => {
    try {
        let user = await productModel.findById(req.params.id)
        res.send(user).status(200)
    } catch (err) {
        console.error(err)
        res.status(500).send("get by id problem")
    }
}

let deleteProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.id)
        res.send("deleted product").status(200)
    } catch (err) {
        console.error(err)
        res.status(500).send("get by id problem")
    }
}

let updateProduct = async (req, res) => {
    try {
        let updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(updatedProduct).status(200)
    } catch (err) {
        console.error(err)
        res.status(500).send("get by id and update problem")
    }
}



export { addProduct, getAllProducts, getProductByID, deleteProduct, updateProduct }