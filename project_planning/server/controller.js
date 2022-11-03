const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors());
app.use(express.json());



const { getHome, getTeamInfo, getHighlights, getHistory, getJoin } = require('./main')

app.get('/team', getTeamInfo)
app.get('/highlights', getHighlights)
app.get('/history', getHistory)
app.get('/', getHome)
app.get('/join', getJoin)














const port = process.env.PORT || 4600

app.listen(port, console.log(`Server running on ${port}`))