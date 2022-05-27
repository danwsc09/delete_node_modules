// '├'
// '─'
// '└'
// '│'
import { Dirent } from 'fs'
import * as fs from 'fs/promises'

const path = '.'

const printTree = async () => {
  const files = await fs.readdir(path, { withFileTypes: true })
  files.forEach((file: Dirent) => {
    console.log(file)
    
  })
}

printTree()