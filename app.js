const utils = require('./utils')
const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

//write data in file sync (name, content)
fs.writeFileSync('notes.txt','This file was created by Node.js.')

//Append data to file sync
fs.appendFileSync('notes.txt',' Written by Jorge')

console.log(utils.add(1,4))

console.log(utils.getNotes())

console.log(validator.isEmail('joelias@example.com'))

console.log(chalk.green('Success !'))

//process.argv  get the input from the user in console
//process.argv[2] example of index 2, that is the first user input after node and app.js path
console.log(process.argv[2])

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('Adding a new note!')
    }
})

console.log(yargs.argv);