const mongoose = require('mongoose')

const {Schema} = mongoose;

const eventSchema = new Schema({
        id: Number,
        raceName: {
            type: String,
            required: true,
        },
        startTime: {
            type: Date,
            default: Date.now()
        },
        venueName: String, 
        placed: String, 
        status: {
            type: String,
            enum: ['active', 'declared', 'notOpen'],
            default: 'active'
        }
    }
)
module.exports= mongoose.models.Event || mongoose.model('Event', eventSchema);


// export default mongoose.models.Event || mongoose.model('Event', eventSchema);