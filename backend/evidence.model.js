const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Evidence = new Schema({
    evidence_description: {
        type: String
    },
    evidence_author: {
        type: String
    },
    evidence_volume: {
        type: String
    },
    evidence_pages: {
        type: String
    },
    evidence_url: {
        type: String
    },
    evidence_completed: {
        type: Boolean
    }
});
module.exports = mongoose.model('Evidence', Evidence);