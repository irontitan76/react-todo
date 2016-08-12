var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();
console.log('Current timestamp', now.unix())

var timestamp = 1470972411;
var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMM DD, YYYY @ h:mm A'));

console.log('Current moment', currentMoment.format('dddd MMMM Do, YYYY @ h:mm:ss A'));
