let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ ππ½ ππ΄πππΎ πΏπ°ππ° π·π°π±π»π°π π²πΎπ½ ππΈπΌππΈπΌπΈ πΎ π΄π» π±πΎπ*\n\n*π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} Hola Dragon-Bot*`
let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
let json = await res.json()
if (json.success) m.reply(json.success)
else throw json }
handler.help = ['simsimi']
handler.tags = ['general']
handler.command = ['dragon', 'bot', 'drago'] 
module.exports = handler
