import * as fs from 'fs/promises'

const path = './zzdir'

async function deleteNodeModules(path: string): Promise<void> {
  const entries = await fs.readdir(path, { withFileTypes: true })
  console.log('entries:', entries)
  for (const entry of entries) {
    console.log(
      `scanning ${entry.name}, ${entry.isDirectory() ? 'dir' : 'file'}`
    )
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules') {
        console.log('deleting...')
        await fs.rm(path + '/' + entry.name, { force: true, recursive: true })
      } else {
        deleteNodeModules(path + '/' + entry.name)
      }
    }
  }
}

deleteNodeModules(path)
