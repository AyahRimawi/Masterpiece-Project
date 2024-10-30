// // utils/emailService.js
// const nodemailer = require("nodemailer");

// class EmailService {
//   constructor() {
//     // Create a transporter using SMTP
//     this.transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
//       port: process.env.EMAIL_PORT, // e.g., 587
//       secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
//       auth: {
//         user: process.env.EMAIL_USER, // your email
//         pass: process.env.EMAIL_PASS, // your email password or app password
//       },
//     });
//   }

//   // Method to send an email
//   async sendEmail(options) {
//     const mailOptions = {
//       from: process.env.EMAIL_FROM, // sender address
//       to: options.to,
//       subject: options.subject,
//       text: options.text,
//       html: options.html,
//     };

//     try {
//       const info = await this.transporter.sendMail(mailOptions);
//       console.log("Email sent: ", info.messageId);
//       return info;
//     } catch (error) {
//       console.error("Error sending email:", error);
//       throw error;
//     }
//   }

//   // Specific method for sending product approval emails
//   async sendProductApprovalEmail(to, productName) {
//     await this.sendEmail({
//       to,
//       subject: "Product Approved",
//       text: `Your product "${productName}" has been approved and is now listed on our platform.`,
//       html: `<p>Your product <strong>"${productName}"</strong> has been approved and is now listed on our platform.</p>`,
//     });
//   }

//   // Specific method for sending product rejection emails
//   async sendProductRejectionEmail(to, productName, reason) {
//     await this.sendEmail({
//       to,
//       subject: "Product Rejected",
//       text: `We're sorry, but your product "${productName}" has been rejected. Reason: ${
//         reason || "Not specified"
//       }`,
//       html: `<p>We're sorry, but your product <strong>"${productName}"</strong> has been rejected.</p><p>Reason: ${
//         reason || "Not specified"
//       }</p>`,
//     });
//   }
// }

// module.exports = new EmailService();


// utils/emailService.js
const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // يجب استخدام "App Password" من Gmail
      },
    });
  }

  async sendEmail(options) {
    const mailOptions = {
      from: `"SecondChance" <${process.env.EMAIL_FROM}>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html || options.text.replace(/\n/g, '<br>')
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      return info;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}

module.exports = new EmailService();
