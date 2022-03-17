const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    tournamentId: mongoose.SchemaTypes.ObjectId,
    allStanding: [
        {
            userId: mongoose.Schema.Types.ObjectId,
            checked: {
                type: Boolean,
                default: false,
            }
        }
    ]
});
module.exports=mongoose.models.LhsStanding || mongoose.model('LhsStanding', resultSchema )
// export default mongoose.models.LhsStanding || mongoose.model('LhsStanding', resultSchema )