
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'dce64c2811be',
}

// Other
global.owner = ['556286231599','556285279944','553284020930']
global.premium = ['556286231599','556285279944','553284020930']
global.packname = '🔥☄️𝙀𝙨𝙩⃟𝙚𝙡𝙖𝙧 𝙊𝙧𝙞⃟𝙤𝙣☄️🔥'
global.author = 'Dr3z1n'
global.sessionName = 'Drezin'
global.prefa = ['.']
global.sp = '⭔'
global.mess = {
    success: '✓ Sucesso',
    admin: 'So adm pode usar esse comando Rhun!',
    botAdmin: 'O bot deve ser administrador primeiro!',
    owner: 'Quem é vc irmao ?',
    group: 'So pode ser usado em grupos!',
    private: 'So pode ser usado no pv do bot!',
    bot: 'Recursos especiais do usuário do número do bot',
    wait: 'Pera so um pouco',
    endLimit: 'Seu limite diário expirou, o limite será redefinido a cada 12 horas',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/estelarmd.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
