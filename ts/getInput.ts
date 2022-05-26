import * as readline from 'readline'

readline
  .createInterface({ input: process.stdin, output: process.stdout })
  .question('Enter directory name: ',
    answer => {
      console.log('you entered:', answer)
    }
  )