const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['candidate', 'recruiter', 'admin'], default: 'candidate' },
  resume: { type: String },
  parsedResume: { type: Object },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);