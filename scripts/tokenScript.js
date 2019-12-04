console.log('')
console.log('Build started...');

console.log('')
console.log('         .         . ')
console.log('               *       *')
console.log('')
console.log('                 * * *')
console.log('                    !')
console.log('               *       * ')
console.log('')
console.log(" ██████╗ ██████╗ ██╗ ██████╗ ███╗   ██╗")
console.log("██╔═══██╗██╔══██╗██║██╔═══██╗████╗  ██║")
console.log("██║   ██║██████╔╝██║██║   ██║██╔██╗ ██║")
console.log("██║   ██║██╔══██╗██║██║   ██║██║╚██╗██║")
console.log("╚██████╔╝██║  ██║██║╚██████╔╝██║ ╚████║")
console.log(" ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝")
console.log('')
console.log("██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗")
console.log("██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║")
console.log("██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║")
console.log("██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║")
console.log("██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║")
console.log("╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝")
console.log('')
console.log("███████╗██╗   ██╗███████╗████████╗███████╗███╗   ███╗")
console.log("██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║")
console.log("███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║")
console.log("╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║")
console.log("███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║")
console.log("╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝")
console.log('')



// Required dependency
const componentConfig = require('style-dictionary').extend('./scripts/componentConfig.json');

// Style Dictionary build function
componentConfig.buildAllPlatforms();
