const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Save to database
    const contact = await Contact.create({ name, email, message });

    // Send email notification
    const emailResult = await sendEmail({
      to: 'eyoabamare3@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (!emailResult.success) {
      console.warn('Contact saved, but email failed to send:', emailResult.error);
    }

    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};