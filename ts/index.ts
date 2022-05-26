import * as fs from 'fs/promises'
import * as readline from 'readline'

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question('Enter full path to delete all node_modules recursively: ',
  answer => {
    async function deleteNodeModules(path: string): Promise<void> {
      const entries = await fs.readdir(path, { withFileTypes: true })
      for (const entry of entries) {
        if (entry.isDirectory()) {
          if (entry.name === 'node_modules') {
            await fs.rm(path + '/' + entry.name, { force: true, recursive: true })
          } else {
            deleteNodeModules(path + '/' + entry.name)
          }
        }
      }
    }
    deleteNodeModules(answer)
    rl.close()
  }
)
