const fs = require('fs')

const path = '/Users/wonsang/Downloads'

fs.readdir(path, (err, files) => {
  if (err) {
    console.error('ERROR', err)
    return
  }
  console.log('files:', files)
})

