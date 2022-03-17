const express = require('express')
const router = express.Router();
const converter = require('json-2-csv');
const fs = require('fs');
const User = require('./DbModules/userSchema')
const Admin = require('./DbModules/adminSchema')
const BigWinner = require('./DbModules/bigWinnerResult')
const Event = require('./DbModules/eventSchema')
const EventWithTournamnet = require('./DbModules/eventwithtournament')
const horseparticipants = require('./DbModules/horseparticipantsSchema')
const lhsUserSelection = require('./DbModules/lhsUserSelection')
const marketSchema = require('./DbModules/marketSchema')
const nonActiveLhs = require('./DbModules/nonactiveLHSSchema')
const notificationSchema = require('./DbModules/notificationSchema')
const roundSchema = require('./DbModules/roundSchema')
const standingLhs = require('./DbModules/standinglhs')
const tandcSchema = require('./DbModules/tandcSchema')
const tournamnetSchema = require('./DbModules/tournamentSchema')
const userSelectedGameType = require('./DbModules/userselectedgameType')
const userSelection = require('./DbModules/userSelection')
const winStreakResultSchema = require('./DbModules/winStreakResultSchema')


const label = User
  router.get('/getData', async (req, res) => {
    const getData = await label?.find().lean()

    try {
      const csv = await converter.json2csvAsync(getData);

      // print CSV string
      console.log(csv);

      // write CSV to a file
      fs.writeFileSync('todos.csv', csv);

    } catch (err) {
      console.log(err);
    }
    res.send(getData)

  })


module.exports = router
