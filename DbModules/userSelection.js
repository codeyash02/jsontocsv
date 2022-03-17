const mongoose = require('mongoose')

const { Schema } = mongoose;
const userSelectionSchema = new Schema({
    tournamentId: mongoose.Schema.Types.ObjectId,
    roundId: String,
    userId: mongoose.Schema.Types.ObjectId,
    selectedEvent:  [Schema.Types.Mixed],
    bigWinner: Schema.Types.Mixed,
    gameType:[ {
        type: String,
        enum: ["lhsFestival", 'bigWinner', 'winStreak']
    }],
});
module.exports= mongoose.models.userSelections || mongoose.model('userSelections', userSelectionSchema);

// export default mongoose.models.userSelections || mongoose.model('userSelections', userSelectionSchema);
