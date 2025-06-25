const Newsletter = require('../models/NewsLetter');

// Subscribe to newsletter
exports.subscribe = async (req, res, next) => {
  try {
    const { email } = req.body;
    const subscription = await Newsletter.create({ email });
    res.status(201).json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
};