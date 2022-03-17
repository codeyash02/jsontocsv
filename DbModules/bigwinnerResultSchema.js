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

module.exports= mongoose.models.bigwinnerResult || mongoose.model('bigwinnerResult', resultSchema )
// export default mongoose.models.bigwinnerResult || mongoose.model('bigwinnerResult', resultSchema )