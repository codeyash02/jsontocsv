/* eslint-disable no-useless-escape */
const mongoose = require('mongoose')

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required!'],
  },
  gender: {
    type: String
  },
  dob: {
    type: String,
    required: [true, 'Date of birth is required!'],
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  address: {
    addressLine1: {
      type: String,
      required: [true, 'Required Address Line 1'],
    },
    addressLine2: {
      type: String,
      required: [true, 'Required Address Line 2'],
    },
    city: {
      type: String,
      required: [true, 'Required City'],
    },
    postcode: {
      type: String,
      required: [true, 'Required City'],
    },
  },
  ageVerified: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  block: {
    type: Boolean,
    default: false,
  },
  notification: {
    type: [String],
    enum:['Email', 'SMS', 'Phone']
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    // eslint-disable-next-line security/detect-unsafe-regex
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  cancelMsg: String,
  notificationToken: String,
  authCode: String,
},
{
  timestamps: true,
});




module.exports=mongoose.models.User || mongoose.model('User', userSchema);

// export default mongoose.models.User || mongoose.model('User', userSchema);
