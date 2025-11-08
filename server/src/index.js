import express from 'express'
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/", (req, res) => {
    res.send("Application running successfully")
})

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`)
})