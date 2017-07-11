const moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1499772293;
var currentMoment = moment.unix(1499772293);
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
