const mongoose = require('mongoose')

const { Schema } = mongoose;

const notifySchema  = new Schema({
  userId: mongoose.SchemaTypes.ObjectId,
  type: String,
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  data: {
    type: mongoose.SchemaTypes.Mixed
  },
  tournamentId: mongoose.SchemaTypes.ObjectId,
  read: {
    type: Boolean,
    default: false,
  }
});
// export default mongoose.models.notification || mongoose.model('notification', notifySchema);
module.exports=mongoose.models.notification || mongoose.model('notification', notifySchema);;
