let handler = async (m, { conn, isOwner, text, isAdmin }) => {
let who
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
else who = m.chat
} else {
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
}
try {
if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = true
else global.db.data.users[who].banned = true
m.reply(`*[βππππβ] π΄πππ΄ π²π·π°π π΅ππ΄ π±π°π½π΄π°π³πΎ π²πΎπ½ π΄ππΈππΎ*\n\n*ββ π΄π» π±πΎπ π½πΎ ππ΄π°π²π²πΈπΎπ½π°ππ° π° π½πΈπ½πΆππ½ π²πΎπΌπ°π½π³πΎ π·π°πππ° π³π΄ππ±π°π½π΄π°π π΄πππ΄ π²π·π°π*`)
} catch (e) {
throw `*[βππππβ] π΄πππ΄ π²π·π°π π½πΎ π΄πππ° ππ΄πΆπΈππππ°π³πΎ π΄π½ π»π° π±π°ππ΄ π³π΄ π³π°ππΎπ*`
}}
handler.help = ['ban']
handler.tags = ['owner', 'group']
handler.command = /^ban(chat)?$/i
module.exports = handler
