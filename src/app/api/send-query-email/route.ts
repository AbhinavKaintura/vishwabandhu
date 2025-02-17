import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    console.log("req", req);
  try {
    const body = await req.json();
    const { name, phone, email, query } = body;
    // const { name, phone, email, query } = await req.json();

    console.log("formData from server", { name, phone, email, query });
    if (!name || !phone || !email || !query) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email, // User's email
      to: process.env.EMAIL_USER,
      subject: "New Query from Support Form",
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nQuery:\n${query}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Query sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Error sending query" }, { status: 500 });
  }
}