const mongoose = require('mongoose')

const { Schema } = mongoose;
const userLhsSelectionSchema = new Schema({
    tournamentId: mongoose.Schema.Types.ObjectId,
    roundId: String,
    userId: mongoose.Schema.Types.ObjectId,
    selectedEvent:  [Schema.Types.Mixed],
    gameType:[ {
        type: String,
        enum: ["lhsFestival", 'bigWinner', 'winStreak']
    }],
    lhsFestivalWinner: [Number]
});


// export default mongoose.models.LhsSelection || mongoose.model('LhsSelection', userLhsSelectionSchema);
module.exports= mongoose.models.LhsSelection || mongoose.model('LhsSelection', userLhsSelectionSchema);