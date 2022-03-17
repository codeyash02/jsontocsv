/* eslint-disable security/detect-unsafe-regex */
/* eslint-disable no-useless-escape */
const mongoose = require('mongoose')
import validateEmail from '../../../utils/emailregex';
import Bcryptjs from 'bcryptjs';
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
}, {timestamps: true});

// export default mongoose.models.admin || mongoose.model('admin', adminSchema);
module.exports= mongoose.models.admin || mongoose.model('admin', adminSchema);
