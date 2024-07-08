import { Request, Response } from "express";
import { Emails, sendEmail } from "../services/emailService.ts";
import dotenv from "dotenv";
dotenv.config();

export const createEmail = async (req: Request, res: Response) => {
  try {
    const { to, subject, template, context }: Emails = req.body;
    const emailBody: Emails = {
      from: process.env.EMAIL_USER as string,
      to: to,
      subject: subject,
      template: "emailTemplate",
      context: context,
    };
    await sendEmail(emailBody);
    res
      .status(201)
      .send({ message: "Email sent successfully to " + emailBody });
  } catch (error: any) {
    res.status(500).send({ message: "sent failed", error: error.message });
  }
};
