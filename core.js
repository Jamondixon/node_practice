const path = require("path")
const util = require('util')


util.log(path.basename(__filename))
const dirUploads = path.join(__dirname, "www", "files", "uploads" )
util.log("^ the name of the current file")