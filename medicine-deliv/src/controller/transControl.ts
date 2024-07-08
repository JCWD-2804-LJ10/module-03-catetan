import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export interface Transaction {
  payment_type?: string;
  transaction_details?: {
    order_id: string;
    gross_amount: number;
  };
  credit_card?: {
    secure: boolean;
  };
  bank_transfer?: {
    bank?: string;
    account_number?: string;
  };
  customer_details?: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  };
}

export const createSnapTransaction = async (req: Request, res: Response) => {
  const { order_id, gross_amount, first_name, last_name, email, phone } =
    req.body;
  const body: Transaction = {
    transaction_details: {
      order_id: order_id,
      gross_amount: Number(gross_amount),
    },
    credit_card: {
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
          Authorization: `Basic ${Buffer.from(
            process.env.MIDTRANS_SERVER_KEY + ":"
          ).toString("base64")}`,
        },
      }
    );
    res.status(201).send({ data: midtransResponse.data });
  } catch (error: any) {
    res
      .status(500)
      .send({ data: error.response ? error.response.data : error.message });
  }
};

export const createBankTransaction = async (req: Request, res: Response) => {
  const {
    order_id,
    gross_amount,
    bank_code,
    account_number,
    first_name,
    last_name,
    email,
    phone,
  } = req.body;
  try {
    const SERVER_KEY = process.env.MIDTRANS_SERVER_KEY as string;
    const base64Encodedkey = Buffer.from(SERVER_KEY).toString("base64");
    const bodyRequest: Transaction = {
      payment_type: "bank_transfer",
      transaction_details: {
        order_id: order_id,
        gross_amount: Number(gross_amount),
      },
      bank_transfer: {
        bank: bank_code,
        account_number: account_number,
      },
      customer_details: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
      },
    };
    const transactionResponse = await axios.post(
      "https://api.sandbox.midtrans.com/v2/charge",
      bodyRequest,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${base64Encodedkey}`,
        },
      }
    );
    res.status(201).send({ data: transactionResponse.data });
  } catch (error: any) {
    res
      .status(500)
      .send({
        error: "failed to create bank transfer transaction",
        status: error.response?.status + "" + error.response?.statusText,
        description: error.response?.data,
      });
  }
};
