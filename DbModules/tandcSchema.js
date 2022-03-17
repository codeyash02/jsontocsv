const mongoose = require('mongoose')

const { Schema } = mongoose;
const pageUpdateSchema = new Schema({
    title: String,
    detail: String,
});

// export default mongoose.models.tandc  || mongoose.model<any>('tandc', pageUpdateSchema);
module.exports=mongoose.models.tandc  || mongoose.model('tandc', pageUpdateSchema);
