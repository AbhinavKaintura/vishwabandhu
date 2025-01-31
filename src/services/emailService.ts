// services/emailService.ts
import { createTransport } from 'nodemailer';

const transporter = createTransport({
  // Configure your email service settings here
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

interface OrderEmailData {
  orderNumber: string;
  name: string;
  date: string;
  product: string;
  quantity: number;
  price: number;
  paymentMethod: string;
  address: {
    street: string;
    landmark: string;
    postalCode: string;
    state: string;
    country: string;
  };
  email: string;
  phone: string;
}

export const sendOrderConfirmationEmail = async (data: OrderEmailData) => {
  const emailContent = `
    <div style="font-family: Arial, sans-serif;">
      <h2 style="color: #7e3fa3;">Thank you for your order</h2>
      
      <p>Hi ${data.name},</p>
      <p>Just to let you know — we've received your order #${data.orderNumber}, and it is now being processed.</p>
      
      <h3 style="color: #7e3fa3;">[Order #${data.orderNumber}] (${data.date})</h3>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Product</th>
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Quantity</th>
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Price</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.product}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.quantity}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">₹${data.price.toFixed(2)}</td>
        </tr>
        <tr>
          <td colspan="2" style="border: 1px solid #ddd; padding: 8px;">Subtotal:</td>
          <td style="border: 1px solid #ddd; padding: 8px;">₹${data.price.toFixed(2)}</td>
        </tr>
        <tr>
          <td colspan="2" style="border: 1px solid #ddd; padding: 8px;">Payment method:</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.paymentMethod}</td>
        </tr>
        <tr>
          <td colspan="2" style="border: 1px solid #ddd; padding: 8px;">Total:</td>
          <td style="border: 1px solid #ddd; padding: 8px;">₹${data.price.toFixed(2)}</td>
        </tr>
      </table>
      
      <h3 style="color: #7e3fa3;">Billing address</h3>
      <p>
        ${data.name}<br>
        ${data.address.street}<br>
        ${data.address.landmark}<br>
        ${data.address.postalCode}<br>
        ${data.address.state}<br>
        ${data.address.country}<br>
        ${data.phone}<br>
        ${data.email}
      </p>
      
      <p>Thanks for using <a href="https://vishwabandhufoundation.org" style="color: #7e3fa3;">vishwabandhufoundation.org</a>!</p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: 'Your order is successful',
    html: emailContent
  });
};