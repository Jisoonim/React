import Request from 'request'

const fs = require('fs')
const request = require('request')

request('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png')
.pipe(fs.createWriteStream('test.png'))
