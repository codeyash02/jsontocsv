const mongoose = require('mongoose')
const { Schema } = mongoose;
const tournamentSchema  =  new Schema({
    name: {
        type: String,
        required: true
    },
    prize: {
        type: String,
        required: true
    },
    prize1: {
        type: String,
        required: true
    },
    prize2: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true,
    },
    ongoingDate: {
        type: String
    },
    startDateEnd: {
        type: Date,
    },
    startDateEndBefore: {
        type: Date,
    },
    endDate: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'cancelled', 'inactive'],
        default: 'inactive'
    },
    seal: {
        type: Boolean,
        default: false
    },
    sport: {
        type: String,
        required: true,
    },
    gameType:[ {
        type: String,
        required: true,
        enum: ["lhsFestival", 'bigWinner', 'winStreak']
    }],
    tournamentImage: {
        type: String,
        required: true
    },
    raceType: String,
    enrolled: Number,
    rule: String,
    complete: {
        type: Boolean,
        default: false
    },    
    Upcoming: {
        type: Boolean,
        default: true,
    },
    onGoing: {
        type: Boolean,
        default: false
    },
    tournamentEndTime: {
        type: Date,
        required: true,
    },
    enrolledUser: [ mongoose.Schema.Types.Mixed ],
    allUserCount: {
        type :[mongoose.Schema.Types.ObjectId],
        default: [],
    },
    lhsUserCount:  {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
    },
    winStreakUserCount:  {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
    },
    bigwinnerUserCount:  {
        type :[String],
        default: [],
    },
    firstEventresult: {
        type: Boolean,
        default: false,
    },
    tournamentType: {
        type: String,
    },
    notify: {
        type: Boolean,
        default: false
    },
    beforenotify: {
        type: Boolean,
        default: false,
    },
    endDateAheadTimestamp: {
        type: Date,
    },
    festival: {
        type: Boolean,
        default: false
    },
    location: {
        type: String,
    }
},{
    timestamps: true,
});
module.exports=mongoose.models.Tournament || mongoose.model('Tournament', tournamentSchema);


// export default mongoose.models.Tournament || mongoose.model('Tournament', tournamentSchema);
