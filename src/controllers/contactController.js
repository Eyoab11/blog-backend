const Contact = require('../models/Contact');

// Submit contact form
exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};