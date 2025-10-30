const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUg0Njc4SDIxallXOVhJZmhSUTZjMzM2bnRSczFOeGRBRlhsKy9qYUYyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnJuUUtRenhqbEZGNXJJT2VRUkNzbHFXMW5JWWZ5NmNuckNjL0tic3JtWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UHppclh3SDgycDF1SjdpK2E0bzU3aDBTNGVzREJCSUFxZkZ6RDBtcldVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUXk1d0dPcnI3eklRTFNoZ2M5VEJOcCt0bHlobDZYZUc1VnppTFVyOVFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JZGFHV1djMXZLK3ZqN3Jmekt1M3BkL2xJV0toTXZDc2FkdlBMeDZVMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcwYmVQZkxJdklaUElVbWJWbXB0TWRjRWd3aU9jQ0kra0VNeGFWdUk5eUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1BTmxkY3VnRWk0NlR0VFpPdDRNeHl3QXlBL0lxdmRIMlhaU2VxUitWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1AybndvNEx3UkJYMzlZV2huUmNyekhrK0RCRlFReHlHNktIVlNmc3BtTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYxTDlDSk1rVUM2T1ZCY2w2VkVEYUZWdkRWZmFwOUF5N3Y4ZmxPdjd4aVd6azZNdE9sOGErNG5MM0VreWpURnRZT01lRVBFdlVEUlB4QmxhMFE2K2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6Ik94NzZWWG9CQ0hUanQ1eTc2THJWZ09qRlFSQlRiME1zbXBnSUtEMTNSRHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IloxSFFMRFRGIiwibWUiOnsiaWQiOiIyMzQ5MTE0MjM4ODA0OjUzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTAwNDUxMDEzODg2MDkwOjUzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXVyaEo0TEVLL09qTWdHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNnFHYUNFM3lLRlgrZEQzVjhZaXVTQUlhTUtJNmVzelRwYU5rUGVuOHJFOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidlQvaVhHYnlsRFBCaGlOVlR2VTJveUJOYWcxUUp3UDBpZ2lubjhBWjlhc1RFTVY5ZkR6UzRvMnVsTk9Tc1lpZFlzdmNiZGZyYm5rejV1UnY0eWc4Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlZ3OEVtWmVZMktCMWU3eUdMU2tiZE1LRkI4elJmc3lvT1dzOTVrS0NiOGVwa1g5WWM2bXlkRHpOcytKdndVWlFvNy8wRkRPcHJmWDVHMGRzSHlmVGlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTExNDIzODgwNDo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlcWhtZ2hOOGloVi9uUTkxZkdJcmtnQ0dqQ2lPbnJNMDZXalpEM3AvS3hQIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTgxNDMyMiwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCTm0ifQ==',
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "true", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "KPOLOR-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "OSAKPOLOR-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,😍,😘,😏,😎,😩,😡,❤️‍🔥,🔥,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923303788282",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐌𝐑 OSAKPOLOR",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Osakpolor*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "2349114238804",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "true",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY NOW PLEASE  CALL BACK LATER , THANK YOU 🫶🏻_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
