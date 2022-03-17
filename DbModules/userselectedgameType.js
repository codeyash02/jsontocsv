const mongoose = require('mongoose')

const {Schema} = mongoose

const gameTypeByUserSchema = new Schema({
    tournamentId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    gameType: [String],
});
module.exports=mongoose.models.selectedGameType || mongoose.model('selectedGameType', gameTypeByUserSchema)

// export default mongoose.models.selectedGameType || mongoose.model('selectedGameType', gameTypeByUserSchema)