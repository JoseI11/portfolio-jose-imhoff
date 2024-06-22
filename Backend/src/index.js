/* eslint-disable no-undef */
// backend/index.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from 'dotenv';


dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;
  const mailOptions = {
    from: process.env.USER,
    to,
    subject,
    text,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send(error.toString());
    }
    res.send("Email sent: " + info.response);
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
