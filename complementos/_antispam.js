let handler = m => m
handler.all = async function (m) {
  
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
let user = global.db.data.users[m.sender]

this.spam = this.spam ? this.spam : {}
if (!(m.sender in this.spam)) {
let spaming = {
jid: await m.sender, 
spam: 0,
lastspam: 0
}
this.spam[spaming.jid] = spaming
  
} else try {
this.spam[m.sender].spam += 1
  
if (new Date - this.spam[m.sender].lastspam > 1000) {
if (this.spam[m.sender].spam > 3) {
this.spam[m.sender].spam = 0
  
this.spam[m.sender].lastspam = new Date * 1
let tiempo = 60000 * 1
let time = user.antispam + tiempo * 1
let texto = `*[β] @${m.sender.split("@")[0]} π½πΎ π·π°πΆπ°π ππΏπ°πΌ!, π½πΎ πΏπΎπ³ππ°π πππ°π π° ${global.author} πΏπΎπ ${tiempo / 1000 - 59} πΌπΈπ½πππΎ*`

if (new Date - user.antispam < tiempo * 1) return
await conn.reply(m.chat, texto,  m, { mentions: this.parseMention(texto) })
