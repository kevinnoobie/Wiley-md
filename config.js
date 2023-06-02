//Upgraded To Wiley-md V02 
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//Important & must be change #ATY
global.owner = [
  ['916207142994', 'Gariox 3D', true],
    ['919172389527', 'Shizo The Techie', true]
] 
global.prems = []


//Make Changes #ATY
global.bname = 'Poison-MD'     //Your Bot Name
global.oname = 'Abdul'     //Your Name
global.onum = '254798708444' //Number for status forwarding 
global.iglink = 'https://instagram.com/noo.b.i.e?igshid=OTk0YzhjMDVlZA=='     //Your Instagram Link
global.ytlink = 'https://YouTube.com/@poisonmods'      //Your YouTube Channel Link
global.gclink = 'https://chat.whatsapp.com/HAWJUHgf2NE1iwfPrkDrcT' //Your WhatsApp Group Link
global.script = 'https://github.com/Shizothetechie/wiley-md'  //Donot Change if you appreciate our work 🙂❤️



//Global ImgRes #NMTM
global.menuimg = fs.readFileSync('./media/menu.png')
global.btnimg = fs.readFileSync('./media/logo.png')
global.imgmenu = fs.readFileSync('./media/logo.png')

//Wiley-MD Internal #NMTM
global.version = '2.0.1'
global.package = 'com.tedevs.wiley'
global.library = 'Baileys-MD'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
