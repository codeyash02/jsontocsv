const mongoose = require('mongoose')

const {Schema} = mongoose;
const horseParticpantSchema = new Schema({
    eventid: Number,
    participants: [Schema.Types.Mixed],
    result: String
});


// export default mongoose.models.horseparticipants || mongoose.model('horseparticipants', horseParticpantSchema);
module.exports= mongoose.models.horseparticipants || mongoose.model('horseparticipants', horseParticpantSchema);