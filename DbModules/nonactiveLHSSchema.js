const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    tournamentId: mongoose.SchemaTypes.ObjectId,
    notStanding: [
        {
            userId: mongoose.SchemaTypes.ObjectId,
        }
    ]
});

// export default mongoose.models.NonStandingLHS || mongoose.model('NonStandingLHS', resultSchema )
module.exports=mongoose.models.NonStandingLHS || mongoose.model('NonStandingLHS', resultSchema )
