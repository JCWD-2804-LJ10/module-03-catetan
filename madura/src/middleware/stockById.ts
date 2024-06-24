import {Request , Response , NextFunction } from  "express";
import data from "../../data/madurastock.json" assert { type: "json"}

const CheckStockById = (
    req: Request,
    res: Response,  
    next: NextFunction
)=> {
 const {id} = req.params;
 const product = data.data.find((stock) => stock.id === parseInt(id));
 if (!product){
    return res.status(404).send("stock not found")
 }

    const newStock = req.body.stok
    if (newStock<0){
        return res.status(400).send("stock must be greater than 0")
    }

    if(newStock !== undefined && newStock <product.stok)
        {
            return res.status(400).send("stock cannot be less than current stock")
        }

        next();
}

export {CheckStockById};