const { format } = require('timeago.js');
const helpers = {}

helpers.convert = (timestamp) =>{
     return format(timestamp); 
};
module.exports = helpers;