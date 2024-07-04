import { Request, Response } from "express";
import * as drugService from "../services/drugService.ts";

export const createDrug = async (req: Request, res: Response) => {
  try {
    const drug = await drugService.createDrug(req.body);
    res.status(201).send({ data: drug });
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

export const getDrugs = async (req: Request, res: Response) => {
  try {
    const { name, page , limit } = req.query;
    const drugs = await drugService.getDrugs(
      { name: name as string },
      Number(page),
      Number(limit)
    );
    res.status(200).send({ data: drugs });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};



export const getDrugById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const drug = await drugService.getDrugById(Number(id));
        if (!drug) {
          return res.status(404).send({ error: "Drug not found" });
        }
        res.status(200).send({ data: drug });
      } catch (error) {
}
}


export const updateDrug = async (req: Request, res: Response) => {
const {id} = req.params
    try {
    const drug = await drugService.updateDrugById(Number(id), req.body);
    res.status(201).send({data:drug});
} catch (error) {
    res.status(404).send({error: error});
}
}


export const deleteDrug = async (req: Request, res: Response) => {
    const {id} = req.params
        try {
        const drug = await drugService.deleteDrugById(Number(id));
        res.status(201).send({data:drug});
    } catch (error) {
        res.status(404).send({error: error});
    }
    }