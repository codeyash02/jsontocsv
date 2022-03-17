const mongoose = require('mongoose')

const { Schema } = mongoose;
const marketSchema = new Schema({
    id: Number,
    eventId: Number,
    marketId: Number,
    selections: [Schema.Types.Mixed],
});
marketSchema.set("timestamps", true)
// export default mongoose.models.market || mongoose.model('market', marketSchema);
module.exports=mongoose.models.market || mongoose.model('market', marketSchema);
