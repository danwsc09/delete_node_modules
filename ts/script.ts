import * as fs from 'fs'

const path = '/Users/wonsang/Downloads'

// fs.readdir(path,
//   { withFileTypes: true },
//   (err, files) => {
//     if (err) {
//       console.error('ERROR', err)
//       return
//     }

//     files.forEach(file => {
//       if (file.isDirectory()) {
//         console.log('dir:', file.name)
//       }
//       if (file.isFile()) {
//         console.log('file:', file.name)
//       }
//     })
//     console.log(files.length)
//   }
// )

const files: fs.Dirent[] = fs.readdirSync(path, { withFileTypes: true })
// const sortedFiles = files
//   .map(file => ({
//     type: file.isDirectory() ? 'dir' : 'file',
//     name: file.name
//   }))
//   .sort((f1, f2) => f1.type.localeCompare(f2.type))

// sortedFiles.forEach(({ type, name }) => {
//   console.log(`${type}: ${name}`)
// })
