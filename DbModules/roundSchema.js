const mongoose = require('mongoose')

const  { Schema } = mongoose;


const RoundSchema = new Schema({
    name: {
        type: String,
        required: true, 
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    tournamentId: {
        type: Schema.Types.ObjectId,
        ref: 'Tournament'
    },
    raceDetails: [{type:Schema.Types.ObjectId, ref: 'Event'}],
    status: {
        type: String,
        enum: ['open for bid', 'biding closed', 'declare result',]
    },
    completed: {
        type: Boolean,
        default: false
    },
    roundEnd: {
        type: Boolean,
        default: false
    },
    bid: {
        type: Boolean,
        default: false
    },
    bidStartDay:{
        type: String,
        required: true,
    },
    bidEndDay:{
        type: String,
        required: true,
    },
    bidStart: {
        type: Date,
        required: true
    },
    bidEnd: {
        type: Date,
        required: true
    },
    notify: {
        type: Boolean,
        default: false,
    },
    roundstartNotify: {
        type: Boolean,
        default: false,
    },
    notifyTime: {
        type: Date,
        required: true
    }
},{
    timestamps: true,
  });
// export default mongoose.models.tournamentRound || mongoose.model('tournamentRound', RoundSchema);
module.exports=mongoose.models.tournamentRound || mongoose.model('tournamentRound', RoundSchema);
