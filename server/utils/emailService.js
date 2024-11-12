// // utils/emailService.js
// const nodemailer = require('nodemailer');

// class EmailService {
//   constructor() {
//     this.transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS, // يجب استخدام "App Password" من Gmail
//       },
//     });
//   }

//   async sendEmail(options) {
//     const mailOptions = {
//       from: `"SecondChance" <${process.env.EMAIL_FROM}>`,
//       to: options.to,
//       subject: options.subject,
//       text: options.text,
//       html: options.html || options.text.replace(/\n/g, '<br>')
//     };

//     try {
//       const info = await this.transporter.sendMail(mailOptions);
//       console.log('Email sent:', info.messageId);
//       return info;
//     } catch (error) {
//       console.error('Error sending email:', error);
//       throw error;
//     }
//   }
// }

// module.exports = new EmailService();

// // utils/emailService.js
// const nodemailer = require('nodemailer');

// class EmailService {
//   constructor() {
//     this.transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });
//   }

//   async sendProductApprovalEmail(userEmail, productName) {
//     const mailOptions = {
//       from: `"SecondChance" <${process.env.EMAIL_USER}>`,
//       to: userEmail,
//       subject: 'Product Approval Notification',
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #2b6cb0;">Product Approved!</h2>
//           <p>Dear Seller,</p>
//           <p>We are pleased to inform you that your product "<strong>${productName}</strong>" has been approved and is now listed on SecondChance.</p>
//           <p>Your product is now visible to all users and available for purchase.</p>
//           <p>Thank you for choosing SecondChance as your marketplace platform.</p>
//           <br>
//           <p>Best regards,</p>
//           <p>The SecondChance Team</p>
//         </div>
//       `
//     };

//     try {
//       await this.transporter.sendMail(mailOptions);
//       console.log('Product approval email sent successfully');
//     } catch (error) {
//       console.error('Error sending product approval email:', error);
//       throw error;
//     }
//   }

//   async sendProductRejectionEmail(userEmail, productName, reason) {
//     const mailOptions = {
//       from: `"SecondChance" <${process.env.EMAIL_USER}>`,
//       to: userEmail,
//       subject: 'Product Review Update',
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #2b6cb0;">Product Review Update</h2>
//           <p>Dear Seller,</p>
//           <p>We have reviewed your product "<strong>${productName}</strong>" and unfortunately, we cannot approve it at this time.</p>
//           <p><strong>Reason for rejection:</strong></p>
//           <p style="padding: 10px; background-color: #f8f8f8; border-left: 4px solid #e53e3e;">${reason}</p>
//           <p>You can make the necessary adjustments and submit the product again for review.</p>
//           <p>If you have any questions, please don't hesitate to contact our support team.</p>
//           <br>
//           <p>Best regards,</p>
//           <p>The SecondChance Team</p>
//         </div>
//       `
//     };

//     try {
//       await this.transporter.sendMail(mailOptions);
//       console.log('Product rejection email sent successfully');
//     } catch (error) {
//       console.error('Error sending product rejection email:', error);
//       throw error;
//     }
//   }
// }

// module.exports = new EmailService();

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
