var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-times');

var HourlyAnalytic = new Schema ({
    "name": String,
    "display_name" :String,
    "accounts_active": [],
    "utcDay": Date
});

HourlyAnalytic.plugin(timestamps, { created: "created_at", lastUpdated: "updated_at" });

var HourlyAnalytic = mongoose.model('HourlyAnalytic', HourlyAnalytic);

module.exports = HourlyAnalytic;