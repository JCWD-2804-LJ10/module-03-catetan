import express, { Request, Response } from "express";
import data from "../../data/madurastock.json" assert { type: "json"}

const getAllStock = (req: Request, res: Response) =>{
    return res.send(data);
}
const getById = (req: Request, res: Response) =>
    {
        const productId = parseInt(req.params.id);
        const product = data.data.find((product) => product.id === productId);
        if (product) {
          res.send(product);
        } else {
          res.status(404).send("Product not found");
        }
    }
const putStock = (req: Request, res: Response) =>
    {
        const { id } = req.params;
        const updatedStock = req.body;
        const index = data.data.findIndex((product) => product.id === parseInt(id));
        if (index !== -1) {
          data.data[index] = { ...data.data[index], ...updatedStock };
          return res.status(201).send(data.data[index]);
        }
        return res.status(404).send("product not found");
    }

    const postProduct = (req:Request, res:Response) => {
        const newProduct = { ...req.body, id: data.data.length + 1 };
        data.data.push(newProduct);
        return res.status(201).send(newProduct);
    }


const patchProduct = (req: Request, res: Response) =>{
    const { id } = req.params;
        const updatedStock = req.body;
        const index = data.data.findIndex((product) => product.id === parseInt(id));
        if (index !== -1) {
          data.data[index] = { ...data.data[index], ...updatedStock };
          return res.status(201).send(data.data[index]);
        }
        return res.status(404).send("product not found");
}
const deleteProduct = (req: Request, res: Response) =>
    {
        const { id } = req.params;
        const index = data.data.findIndex((product) => product.id === parseInt(id));
        if (index !== -1) {
          const [deletedProduct] = data.data.splice(index, 1);
          return res.status(201).send(deletedProduct);
        }
        return res.status(404).send("product not found");
    }

export {
    getAllStock,
    getById,
    putStock,
    patchProduct,
    deleteProduct,
    postProduct
}