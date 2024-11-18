// utils/orderEmailService.js
const nodemailer = require("nodemailer");

class OrderEmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendOrderStatusEmail(userEmail, userName, orderId, status) {
    const emailContent = this.getEmailContentByStatus(
      status,
      userName,
      orderId
    );

    const mailOptions = {
      from: `"SecondChance" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: emailContent.subject,
      html: emailContent.html,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Order status email sent successfully for order ${orderId}`);
    } catch (error) {
      console.error("Error sending order status email:", error);
      throw error;
    }
  }

  getEmailContentByStatus(status, userName, orderId) {
    const formattedOrderId = `#${orderId}`;

    switch (status) {
      case "Shipped":
        return {
          subject: `Your Order ${formattedOrderId} Has Been Shipped!`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2b6cb0;">Your Order is on its Way!</h2>
              <p>Dear ${userName},</p>
              <p>Great news! Your order ${formattedOrderId} has been shipped and is on its way to you.</p>
              <p>You can track your order status in your account dashboard.</p>
              <p>Thank you for choosing SecondChance!</p>
              <br>
              <p>Best regards,</p>
              <p>The SecondChance Team</p>
            </div>
          `,
        };

      case "Delivered":
        return {
          subject: `Your Order ${formattedOrderId} Has Been Delivered!`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2b6cb0;">Your Order Has Been Delivered!</h2>
              <p>Dear ${userName},</p>
              <p>We're happy to inform you that your order ${formattedOrderId} has been successfully delivered!</p>
              <p>We hope you enjoy your purchase. If you have any questions or concerns, please don't hesitate to contact us.</p>
              <p>Thank you for shopping with SecondChance!</p>
              <br>
              <p>Best regards,</p>
              <p>The SecondChance Team</p>
            </div>
          `,
        };

      default:
        return {
          subject: `Order ${formattedOrderId} Status Update`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2b6cb0;">Order Status Update</h2>
              <p>Dear ${userName},</p>
              <p>Your order ${formattedOrderId} has been updated to status: ${status}</p>
              <p>You can check your order details in your account dashboard.</p>
              <br>
              <p>Best regards,</p>
              <p>The SecondChance Team</p>
            </div>
          `,
        };
    }
  }
}

module.exports = new OrderEmailService();
