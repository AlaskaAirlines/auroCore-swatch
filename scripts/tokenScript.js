console.log('')
console.log('Build started...');

// Required dependency
const componentConfig = require('style-dictionary').extend('./scripts/componentConfig.json');

// Style Dictionary build function
componentConfig.buildAllPlatforms();
