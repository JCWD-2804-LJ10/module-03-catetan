import handlebars from "nodemailer-express-handlebars";
import nodemailer from "nodemailer";
import path, { extname } from "path";
import dotenv from "dotenv";
dotenv.config();
export interface Emails {
    from: string;
    to: string;
    subject: string;
    template: string;
    context: any;
}


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

transporter.use(
  "compile",
  handlebars({
    viewEngine: {
      extname: ".hbs",
      partialsDir: path.resolve("./src/views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./src/views"),
    extName: ".hbs",
  })
);

export const sendEmail = (email:Emails) =>{
    const mailOptions: Emails = {
      from: email.from,
      to: email.to,
      subject: email.subject,
      template: email.template,
      context: email.context,
    };
    return transporter.sendMail(mailOptions)
}

