const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    tournamentId: mongoose.Schema.Types.ObjectId,
    result: [
        {
            tournamentId: mongoose.Schema.Types.ObjectId,
            roundDetails: [String],
            totalbigwinnercount: [Number],
            userDetail: [mongoose.Schema.Types.Mixed],
            totalWin: Number,
            position: Number,
            checked: {
                type: Boolean,
                default: false
            }
        }
    ]
});

module.exports=mongoose.models.winStreakResult || mongoose.model('winStreakResult', resultSchema )

