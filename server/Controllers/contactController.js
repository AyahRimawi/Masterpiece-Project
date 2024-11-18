const Contact = require("../Models/Contact");
const EmailService = require("../utils/emailService");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // التحقق من البيانات المطلوبة
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // إنشاء رسالة اتصال جديدة
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });
    
    await contact.save();

    // إرسال بريد إلكتروني للمسؤول
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // إرسال إلى نفس البريد الإلكتروني
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // إرسال بريد تأكيد للمستخدم
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting SecondChance',
      html: `
        <h3>Dear ${name},</h3>
        <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
        <p>Your message details:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,</p>
        <p>SecondChance Team</p>
      `
    };

    // إرسال البريدين الإلكترونيين
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Error sending message. Please try again later.',
      error: error.message
    });
    }
    
};