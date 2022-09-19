const fs = require('fs');
const path = require('path');
const {saveData} = require('./saveData');

saveData('./data/users.json', 'newData', true);