import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

// ✅ Create Nodemailer transporter
export const transporter = nodemailer.createTransport({
  service: "gmail", // or Outlook, Yahoo, Zoho, etc.
  auth: {
    user: process.env.EMAIL_USER, // e.g. your Gmail address
    pass: process.env.EMAIL_PASS, // your App Password, not Gmail login password!
  },
});

// ✅ Sender details (similar to your 'sender' object)
export const sender = {
  email: process.env.EMAIL_USER,         // same as user above
  name: process.env.EMAIL_FROM_NAME,     // your display name
};
