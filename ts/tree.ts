import { Dirent } from 'fs'
import * as fs from 'fs'
import * as path from 'path'

interface FileType {
  name: string
  type: 'dir' | 'file'
}

const counts = { file: 0, dir: 0 }

const printTree = (directory: string, prefix: string) => {
  const files = fs.readdirSync(directory, { withFileTypes: true })

  const filesList: FileType[] = files.map((file: Dirent) => ({
    name: file.name,
    type: file.isDirectory() ? 'dir' : 'file',
  }))

  filesList.sort((f1, f2) => f2.type.localeCompare(f1.type))

  for (let i = 0; i < filesList.length; i++) {
    const file = filesList[i]
    const shapes =
      i === filesList.length - 1 ? ['└── ', '    '] : ['├── ', '│   ']

    console.log(`${prefix}${shapes[0]}${file.name}`)
    if (file.type === 'dir') {
      counts.dir += 1
      printTree(path.join(directory, file.name), prefix + shapes[1])
    } else {
      counts.file += 1
    }
  }
}

const thePath = process.argv[2] || './pewdir'
console.log(thePath)
printTree(thePath, '')
console.log(`files: ${counts.file}, directories: ${counts.dir}`)
