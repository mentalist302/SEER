const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const evidenceRoutes = express.Router();
const PORT = process.env.PORT || 4000;
var text;

let Evidence = require('./evidence.model');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/evidence', { useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

evidenceRoutes.route('/').get(function(req, res) {
    Evidence.find(function(err, evidence) {
        if (err) {
            console.log(err);
        } else {
            res.json(evidence);
        }
    });
});

evidenceRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Evidence.findById(id, function(err, evidence) {
        res.json(evidence); 
    });
});

evidenceRoutes.route('/find/:evidence_description').get(function(req, res) {
    let desc = req.params.evidence_description;
    Evidence.findOne({evidence_description: desc.toLowerCase()}, function(err, evidence) {
        res.json(evidence); 
    });
});

evidenceRoutes.route('/update/:id').post(function(req, res) {
    Evidence.findById(req.params.id, function(err, evidence) {
        if (!evidence) 
            res.status(404).send("data is not found");
        else
            evidence.evidence_description = req.body.evidence_description;
            evidence.evidence_author = req.body.evidence_author;
            evidence.evidence_volume = req.body.evidence_volume;
            evidence.evidence_pages = req.body.evidence_pages;
            evidence.evidence_url = req.body.evidence_url;
            evidence.evidence_completed = req.body.evidence_completed;
            evidence.save().then(evidence => {
                res.json('evidence updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

evidenceRoutes.route('/deleted/:id').get(function(req, res) {
    let id = req.params.id;
    Evidence.findByIdAndDelete(id, function(err){
        if(err) console.log(err);
        console.log("Successful deletion");
      });
    });

evidenceRoutes.route('/add').post(function(req, res) {
    let evidence = new Evidence(req.body);
    evidence.save()
        .then(evidence => {
            res.status(200).json({'evidence': 'evidence added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new evidence failed');
        });
});
app.use('/evidence', evidenceRoutes);
app.listen(PORT, function() {
    text = "Server is running on Port: ";
    console.log(text + PORT);
});