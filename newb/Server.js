const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const PORT = 9000;
const { spawn } = require('child_process');
const path = require('path');
const CORS = require('cors');
const mongoose = require('mongoose');
const UserResponsesModel = require('./database/Responses');
const ReviewUserModel = require('./database/Review');
const fs = require('fs');
const filePath = './user.txt';


app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(CORS(({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
})));

mongoose.connect("mongodb://0.0.0.0:27017/Responses").then(() => {
    console.log("Connected To MongoDBCompass");
}).catch((err) => {
    console.log(`${err} is Occured!!`);
})

function RunModelFile(ClubName, EmailId) {
    const pathtoFileForExecution = path.join('./', 'app.py');

    const childProcess = spawn("python", [pathtoFileForExecution]);

    childProcess.stdout.on("data", data => {
        console.log(`Script output: ${data}`);
        const FloatReviewData=parseFloat(data);
        
        const UserReviews = new ReviewUserModel({
            ClubName: ClubName,
            EmailId: EmailId,
            Rating: FloatReviewData
        });

        UserReviews.save().then(() => {
            console.log(`New Review has Been Added into database`)
        }).catch((err) => {
            console.log(`Error While Saving UserResponse : ${err}`)
        })

    });

    childProcess.stderr.on("data", data => {
        console.error(`Script error: ${data}`);
    });

    childProcess.on("close", code => {
        console.log(`Script process exited with code ${code}`);
    });

}

app.get("/", (req, res) => {
    res.send("Server is On Baby!!");
})

app.post("/AcceptRequest", async (req, res) => {

    const ClubName = req.body.ClubName;
    const EmailId = req.body.EmailId;
    const FirstQuestion = req.body.FirstQuestion;
    const SecondQuesion = req.body.SecondQuesion;

    const UserResponses = new UserResponsesModel({
        ClubName: ClubName,
        EmailId: EmailId,
        FirstQuestion: FirstQuestion,
        SecondQuesion: SecondQuesion
    })

    fs.writeFile(filePath, EmailId, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Data has been written to', filePath);
    });

    UserResponses.save().then(() => {
        console.log(`NewUser Added to database`)
    }).catch((err) => {
        console.log(`Error While Saving UserResponse : ${err}`)
    })

    RunModelFile(ClubName, EmailId);

    res.send("Done Scene");
})


app.listen(PORT, () => {
    console.log(`Server is on PORT:${PORT}`);
})
