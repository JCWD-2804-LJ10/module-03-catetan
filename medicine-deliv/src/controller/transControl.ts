import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config()
export interface Transaction {
    transaction_details: {
      order_id: string;
      gross_amount: number;
    };
    credit_card:{
        secure: boolean;
    };
    customer_details: {
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
    };
  }

export const createSnapTransaction = async (req:Request,res:Response) => {
    const { order_id, gross_amount, first_name, last_name, email, phone } =
    req.body;
  const body: Transaction = {
    transaction_details: {
      order_id: order_id,
      gross_amount: Number(gross_amount),
    },
    credit_card:{
        secure: true,
    },
    customer_details: {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
    },
  };
  try {
    const midtransResponse = await axios.post(
      "https://app.sandbox.midtrans.com/snap/v1/transactions",
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(process.env.MIDTRANS_SERVER_KEY + ":" ).toString("base64")}`
        },
      }
    );
    res.status(201).send({data: midtransResponse.data})
  } catch (error: any) {
   res.status(500).send({data: error.response ? error.response.data:error.message});
  }
};

