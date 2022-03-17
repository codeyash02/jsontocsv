const mongoose = require('mongoose')

const {Schema} = mongoose;

const eventSchema = new Schema({
    tournamentId: mongoose.Schema.Types.ObjectId,
    events: [    
            {id: Number,
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
    ] 
});

module.exports= mongoose.models.EventTournament || mongoose.model('EventTournament', eventSchema);
// export default mongoose.models.EventTournament || mongoose.model('EventTournament', eventSchema);
