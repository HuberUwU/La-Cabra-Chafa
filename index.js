const Aoijs = require("aoi.js")
const keepAlive = require('./serveron')
const bot = new Aoijs.Bot({
  sharding: false, 
  shardAmount: 2, 
mobile: false,
  token: "ODM3MTQwOTg2NzQzNzUwNjU2.YIoOTA.lnHRtHZEseVloTZ4y7fQdreiN4s", 
  prefix: ["$getServerVar[prefix]"] 
})

bot.onMessage()
///COMANDOS!!
bot.status({
      text: "En $serverCount servers :0",
      type: "WATCHING",
      time: 12
})

bot.status({
text: "? Ping for Help",
type: "WATCHING",
time: 12
})

bot.command({
  name: "decir",
  code: `
  $disableRoleMentions
  $disableEveryoneMentions
  $message
  $deletecommand`
})

bot.command({
name: "soporte",
code: ` ✅ Accede a este servidor para obtener soporte: https://discord.gg/uC3pdPT5Ug `
})

bot.command({
name: "ayuda",
code: ` ✅ Accede a este servidor para obtener soporte o saber más sobre el bot: https://discord.gg/uC3pdPT5Ug `
})

bot.command({
name: "ping",
code: `
$title[Ping del bot]
$description[$botpingms]
$addfield[Tu ping;
$pingms]
$color[#8700D9] `
})

bot.command({
name: "jumbo",
aliases: ["emoji"],
code: `$djsEval[const emoji = require('discord.js').Util.parseEmoji("$message[1]") 

let emojis = 'https://cdn.discordapp.com/emojis/' + emoji.id + "." + (emoji.animated ? 'gif' : 'png')

message.channel.send(emojis)]`
})

bot.command({
  name: "helpog",
  code: `
  $title[Lista de comandos:]
  $description[😹Diversión[3] $getServerVar[prefix]decir $getServerVar[prefix]kill $getServerVar[prefix]logro
**Recordatorio: Este es un help temporal porque hay un error con el otro help!**

<a:musica:841950732932349952>Musica[13]   $getServerVar[prefix]play $getServerVar[prefix]join $getServerVar[prefix]leave $getServerVar[prefix]nowplaying $getServerVar[prefix]volume $getServerVar[prefix]queue $getServerVar[prefix]pause $getServerVar[prefix]resume $getServerVar[prefix]skip $getServerVar[prefix]stop $getServerVar[prefix]loop $getServerVar[prefix]resume $getServerVar[prefix]clearqueue $getServerVar[prefix]lyrics 
 
 📖Utilidad[15]   $getServerVar[prefix]avatar  $getServerVar[prefix]serverinfo  $getServerVar[prefix]traducir $getServerVar[prefix]jumbo  $getServerVar[prefix]ping $getServerVar[prefix]ayuda $getServerVar[prefix]userinfo $getServerVar[prefix]stats $getServerVar[prefix]buscar-spotify $getServerVar[prefix]botinfo $getServerVar[prefix]setnick $getServerVar[prefix]addemoji $getServerVar[prefix]snipe $getServerVar[prefix]editsnipe $getServerVar[prefix]id-emote
 
<:mod:841890283113283596>Moderacion[15] $getServerVar[prefix]ban $getServerVar[prefix]unban $getServerVar[prefix]kick $getServerVar[prefix]temprole $getServerVar[prefix]giverole $getServerVar[prefix]removerole $getServerVar[prefix]clear $getServerVar[prefix]id $getServerVar[prefix]setlogs $getServerVar[prefix]warn $getServerVar[prefix]unwarn $getServerVar[prefix]warns $getServerVar[prefix]nuke $getServerVar[prefix]lock $getServerVar[prefix]unlock  
   
⚙️Configuracion[1] $getServerVar[prefix]setprefix
   
<:extra:841894145470496768>Extras[2] $getServerVar[prefix]invite $getServerVar[prefix]votar  

📩tickets[3] $getServerVar[prefix]tsetup $getServerVar[prefix]ticket $getServerVar[prefix]close
$addfield[Recordatorio:;Si no te gusta mi prefix pon $getServerVar[prefix]setprefix para cambiarlo.] 
v1.1.2
$image[https://top.gg/api/widget/837140986743750656.svg]
[Invitame si quieres](https://dsc.gg/phonyx)🥺 | [Soporte](https://discord.gg/phonyx) | [Votar](https://discordthings.com/bot/837140986743750656) $footer[$addTimestamp] $addReactions[<a:verif:841219933433495572>]

 $color[#8700D9]`
})

bot.musicStartCommand({ 
channel: "$channelID", 
code: `$title[Estas Escuchando:$songInfo[title]
$color[#8700D9]` 
})

bot.musicEndCommand({
channel: "$channelID",
code:`
$title[Se a terminado la Musica ]
$description[Si quieres escuchar mas pon $getServerVar[prefix]play 🥺]
$footer[GRACIAS <3]
$color[#8700D9]`
})

bot.command({
 name: "play",
 aliases: ['p'],
 code:  `$title[Cancion Agregada a la cola: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title;]]
 $addField[Duracion:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration;];no]
 $addField[Agregada por :;$userTag[$authorID];no]
 $addField[URL:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url;];no]
 $thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail;]]
 $playSong[$message;❌** | No se encontro la cancion**]
 $footer[comando de musica | $getServerVar[prefix]play ]
 $addTimestamp
 $joinvc[$voiceid[$authorid]]
$onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo 
(**Si el bot no esta en ningún canal usar $getServerVar[prefix]join y vuelve a intentar**)]
$onlyIf[$voiceID!=;No estas en un canal de voz!] `
})

bot.command({
name: "pause",
code: `$pauseSong
**⏸️ Musica Pausada**
$onlyIf[$queueLength!=0;Ninguna Cancion se esta reproduciendo.]
$onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
$onlyIf[$voiceID!=;Tu necesitas estar en un canal de voz para usar este comando!]`
})

bot.command({
name: "resume",
code: `$resumeSong
**▶️ La Musica Fue Renaudada**
$onlyIf[$queueLength!=0;Noth.]
$onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
$onlyIf[$voiceID!=;Tu necesitas Estar en un canal de voz para usarlo!]`
})

bot.command({
name: "loop",
code: `$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Loop now **on**];false;Loop now **off**]
$onlyIf[$queueLength!=0;Ninguna cancion se esta reproduciendo.]
$onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
$onlyIf[$voiceID!=;Tu necesitas estar en un canal de voz para usar este comando!]`
})

bot.command({
name: "nowplaying",
aliases: "np",
code: `$author[Now playing;https://cdn.discordapp.com/emojis/729630163750354955.gif?size=1024]
$title[$songInfo[title]]
$description[$addField[Duration;$songInfo[duration]]
$addField[URL;$songInfo[url]]]
$footer[$botPingms to load it.]
$thumbnail[$songInfo[thumbnail]]
$color[#8700D9]
$onlyIf[$queueLength!=0;Ninguna cancion se esta reproduciendo.]
$onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
$onlyIf[$voiceID!=;Tu necesitas estar en un canal de voz para usar este comando!]`
})

bot.command({
name: "stop",
code: `$stopSong
$sendMessage[⏹️ Se a parado las canciones.;no]
$onlyIf[$queueLength!=0;**⛔  Ninguna Cancion se esta Reproduciendo**]
$deleteIn[25s]La solucion es muy sencilla!
$onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
$onlyIf[$voiceID!=;No estas en un canal de voz!] `
})
 
 bot.command({
name: "skip",
aliases: ['next'],
code: `$skipSong
⏩  Saltada!
$onlyIf[$queueLength>1;Only have **$queueLength song**]
$onlyIf[$queueLength!=0;**⛔  Ninguna cancion se esta reproduciendo**]
$onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
$onlyIf[$voiceID!=;**⛔  Tu necesitas estar en un canal de voz para usar este comando**]`
})

bot.command({
name: "clearqueue",
code: `$clearSongQueue
$stopSong
$editIn[125ms;✅  Lista borrada.por **$queueLength song** to **0**] ⚠️ borrando...
$onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
$onlyIf[$queueLength!=0;**⛔  Ninguna Cancion se esta reproduciendo**]`
})

bot.command({
name: "queue",
code: `$description[$queue[1;30]
$onlyIf[$queueLength!=0;Ninguna Cancion se esta reproduciendo.]
$onlyIf[$voiceID!=;Tu necesitas estar en un canal de voz para usar este comando!]`
})

bot.command({
name: "volume", 
code: `$volume[$message[1]]
$onlyIf[$message[1]<101;**⛔  Maximo volumen 100%**]
$onlyIf[$charCount[$message[1]]<4;Failed.]
$onlyIf[$isNumber[$message[1]]==true;Must number!]
$onlyIf[$message[1]!=;**⛔ Volume can change 0 - 100**]
$editIn[1s;**✅  Cambiado  a $message[1]%**] **Cambiando..**
$onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
$onlyIf[$voiceID!=;**⛔  Tu necesitas estar en un canal de voz*]
$onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
`
})

bot.command({
 name: "join",
 aliases: ['connect'],
 code: `
Me uni Correctamente a<#$voiceid[$authorid]>
$joinvc[$voiceid[$authorid]]
$onlyif[$voiceid[$clientid]==;:x: Ya estoy en otro canal de voz]
$onlyIf[$voiceid[$authorid]!=;:x: Porfavor Unete a un canal de voz.]`
})

bot.command({
 name: "leave",
 aliases: ['disconnect', 'dc'],
 code: `
Me desconecte Correctamente del Canal <#$voicid[$authorid]>
$leavevc
$onlyif[$voiceid[$clientid]!=;:x: Yo no estoy Conectado A un Canal.]
$onlyIf[$voiceid[$authorid]!=;:x: Porfavor unete a un canal de Voz.]
$onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
 `
})

bot.command({
  name: "avatar",
  code: `$image[$userAvatar[$findUser[$message]]]
  $color[RANDOM]`
});

bot.command({
  name: "rule34",
  code: `
  😳`
})

bot.variables({
prefix: "?",
})

bot.command({
name: "setprefix",
code: `
$author[Listo!;https://cdn.discordapp.com/attachments/795965782944120862/798540261353193472/6286_tada_animated.gif]
$description[Okay, Mi nuevo prefijo en este servidor es \`$message\`, ¡Ahora Usa! \`$messagehelp\`]
$footer[Prefix cambiado por @$username]
$color[$random[0;999999]]
$addTimestamp
$setServerVar[prefix;$message]
$argsCheck[>1;Use: \`$getServerVar[prefix]setprefix <NuevoPrefix>\`]
$onlyPerms[admin;x <:Avisar:841076954668728330>Lo siento Usted necesita administrador!]`
})

bot.command({
name: "traducir",
code:  `$title[Has Traducido un texto]
$description[
**Texto:**
$jsonRequest[https://api.playmax.repl.co/api/traducir?to=En?text=$message;text]

**Texto Traducido:**
$jsonRequest[https://api.playmax.repl.co/api/traducir?to=Es?text=$message;res]]
$color[RANDOM]
$argsCheck[>1;escribe algo]`
})

bot.command({
 name: "clear",
 code: `
$onlyPerms[manageserver;No tienes los permisos de "manageserver"]
$clear[$message]`
}) 

bot.command({
name: "ban",
code: `
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Ban}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif
$ban[$findUser[$message[1]];por $userTag[$authorID] razon: $sliceMessage[1];7]
$username[$findUser[$message[1]]] ¡Ha sido baneado!
$onlyBotPerms[ban;Necesito permiso de banear ]
$onlyIf[$findUser[$message[1]]!=$authorID;Por favor, dame un ID de usuario o menciona a alguien.]
$onlyPerms[ban;Necesitas permiso de banear]
`
});

bot.command({
  name: "serverinfo",
  code: `$title[$serverName[$guildID]'s Info]
$thumbnail[$serverIcon[$guildID]]
$description[**Nombre**
$serverName[$guildID]

**ID**
$guildID

**Owner**
<@$ownerID>

**Region**
$serverRegion

**Boosts**
$serverBoostCount

**Boost Level**
$serverBoostCount

**Boost Level**
$serverBoostLevel

**nivel de verificacion**
$serverVerificationLevel

**Total de miembros**
$membersCount

**dia de creacion**
$creationDate[$guildID]

**Emojis**
$serverEmojis]
$color[8700D9]`
})

bot.command({
 name: "addwiki",
 code:  `
$title[New Wiki!]
$description[$message]
$color[00fffff]
$footer[By: $username#$discriminator[$authorID]]
$argsCheck[>1;Usage: $getServerVar[prefx]addwiki <entry>]
$onlyIf[$charCount[$message]<2049;x Max. 2048 character]
$channelSendMessage[$channelID;wiki sent.]
$cooldown[30s;x Please wait %time% before using this command again]
$onlyIf[$getServerVar[wikichannel]!=;This server has no wiki channel run <setwikichannel to set one!]
$onlyIf[$getServerVar[wiki_system]==true;wiki system is not enabled!]

 $useChannel[$getServerVar[wikichannel]] `
});

bot.variables({
prefx: "?",
})

bot.command({
 name: "<@837140986743750656>", 
 nonPrefixed: true, 
 code:  `$title[Prefix] $description[Hola mi prefix es $getServerVar[prefix] Usa $getServerVar[prefix]help para conseguir mis comandos]
$color[8700D9]`
});

bot.command({
 name: "info",
 code:  `$color[RANDOM]
 $author[$userTag[$findUser[$message[1]]] Info;$authorAvatar]
 $description[**\Peticion de $userTag
 Informacion
 :name_badge:| Nombre - $username[$findUser[$message[1]]]
 :label:| Tag - #$user[$findUser[$message[1]];discrim]
 :id:| ID - $user[$findUser[$message[1]];id]
 \📅| Cuenta - $user[$findUser[$message[1]];created]
 Otra Informacion
 \🤖| Bot - $replaceText[$replaceText[$isBot[$findUser[$message[1]]];true;Si es un Bot];false;No es un Bot]
 :shield:| Insignias - $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$findUser[$message]];Early Verified Developer;$customEmoji[Developer]];House Balance;$customEmoji[Balance]];House Brilliance;$customEmoji[Brilliance]];House Bravery;$customEmoji[Bravery]];Verified Developer;];Discord Partner;$customEmoji[Partner]];Early Supporter;$customEmoji[Early]];Verified Bot;$customEmoji[BotCheck]]
 :camera:| Avatar - $image[$userAvatar[$findUser[$message]]]`
})

bot.command({
name: "botinfo",
code:  `$onlyIf[$isBot[$mentioned[1]]!=false;{title:⚠️ ERROR ⚠️} {description:❌ **|  No menciones a una persona, menciona a un bot!**}{color:FF0000}]
$author[$username[$mentioned[1]] Info;$userAvatar[$mentioned[1]]]
$title[Info]
$description[**Bot name** : <@$mentioned[1]>

**Tag** : #$discriminator[$mentioned[1]]

**ID** : $mentioned[1]

**Invite** 🔗 :
**[Click Here](https://discordapp.com/oauth2/authorize?client_id=$mentioned[1]&scope=bot&permissions=8)**
$addField[Bot Avatar;**[IMG HERE]($userAvatar[$mentioned[1]])**]]

$color[8700D9]

$argsCheck[1;{title:⚠️ ERROR ⚠️} {description:❌ **|  Tu necesitas mencionar a un bot**} {color:RED}] `

})

bot.command({
name: "id",
aliases: ['ID'],
code:  `La ID de <@$mentioned[1]> es $user[$findUser[$message[1]];id] `
})

bot.command({
name: "invite",
code:  `$onlyIf[$isBot[$mentioned[1]]!=false;{title:⚠️ ERROR ⚠️} {description:❌ **|  No menciones a una persona, menciona a un bot!**}{color:FF0000}]
$author[$username[$mentioned[1]] Invitacion;$userAvatar[$mentioned[1]]]
$title[Invitar]
$description[**Bot name** : <@$mentioned[1]>

**Tag** : #$discriminator[$mentioned[1]]

**ID** : $mentioned[1]

**Invite** 🔗 :
**[Click Here](https://discordapp.com/oauth2/authorize?client_id=$mentioned[1]&scope=bot&permissions=8)**

$color[8700D9]

$argsCheck[1;{title:⚠️ ERROR ⚠️} {description:❌ **|  Tu necesitas mencionar a un bot**} {color:RED}] `

})

bot.command({
 name: "unban",
 code: `$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Unban}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif
$unban[$message[1];By $userTag[$authorID] Reason: $sliceMessage[1]]
$username[$message[1]] **A sido Desbaneado ✅**
$onlyBotPerms[ban;**⛔  No tengo permisos de ban]
$argsCheck[>1;**⛔  Porfavor dame la ID de el que intentas desbanear**]
$onlyPerms[ban;**⛔  Tu necesitas permiso de banear**]
$suppressErrors[**⛔  No pude encontrar al usuario**]`
})

bot.command({
name: "kick",
code: `$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Kick}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif
$kick[$findUser[$message[1]]]
 $title[Kick]
 $description[
 Se a kickeado Correctamente al usuario!
 **Tag:** $userTag[$findUser[$message[1]]]
 **Mencion:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]]
 $footer[Kicked by $username[$authorID]]
 $addTimestamp
 $color[RANDOM]
$onlyIf[$findUser[$message[1]]!=$clientID;**❌  No puedes kickearme a mi**]
$onlyIf[$findUser[$message[1]]!=$authorID;**❌  No puedes kickearte tu mismo**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌  No puedes kickear a personas con roles mas altos que tu**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌  No puedo kickear a personas con roles mas altos que yo**]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;**❌  No pude encontrar a alguien con ese ID/nombre/mencionado En este server**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**❌  No puedes kickear al dueno del server**]
$onlyIf[$message[1]!=;**❌ Porfavor menciona a alguien o escribe una id**]
$onlyBotPerms[kick;**❌  No tengo permisos de hacer kick**]
$onlyPerms[kick;**❌  Permisos insuficientes**]`
})

bot.command({
name: "removerole",
code: `$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Role Removed <@&$mentionedRoles[1]>}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif
$color[RANDOM]
$takeRoles[$mentioned[1];$mentionedRoles[1]]
$title[Removed role to $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has taken <@&$mentionedRoles[1]> **role to** $username[$mentioned[1;yes]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔  Este usuario esta en una posicion mas alta que yo**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔  Este usuario esta mas alto en posicion o tiene la misma posicion que tu**]
$onlyIf[$mentionedRoles[1]!=;⛔ **Mention a role**]
$onlyIf[$mentioned[1]!=;**⛔  debes mencionar a alguien]
$onlyBotPerms[manageroles;⛔ **No tengo permiso de ** \`MANAGAGE_ROLES\`]
$onlyPerms[manageroles;⛔ ** Tu no tienes permiso de ** \`MANAGAGE_ROLES\`]`
})
 
bot.command({
name: "giverole",
code: `$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Role Added <@&$mentionedRoles[1]>}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif
$color[RANDOM]
$giveRoles[$mentioned[1];$mentionedRoles[1]]
$title[Role given to $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has recibido el rol <@&$mentionedRoles[1]> **role to** $username[$mentioned[1;yes]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$mentionedRoles[1]!=;<:Avisar:841076954668728330> **Menciona un rol**]
$onlyIf[$mentioned[1]!=;**:Avisar:841076954668728330>**]
$onlyBotPerms[manageroles; **<:Avisar:841076954668728330>Yo no tengo permiso de** \`MANAGAGE_ROLES\`]
$onlyPerms[manageroles; **T<:Avisar:841076954668728330>tu no tienes permisos de** \`MANAGAGE_ROLES\`]`
})
 
bot.command({
  name: "temprole",
  code: `$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Temprole}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif
$channelSendMessage[$channelID;<@$mentioned[1]>, Te e removido el rol $roleName[$findRole[$message[2]]] porque se acabo el tiempo]
$takeRoles[$mentioned[1];$findRole[$message[2]]]
$wait[$replaceText[$replaceText[$checkCondition[$message[3]==];true;24d];false;$message[3]]]
$channelSendMessage[$channelID;{description::white_check_mark: | $username[$mentioned[1]]#$discriminator[$mentioned[1]] Ha recibido el rol $roleName[$findRole[$message[2]]] Por  \`$replaceText[$replaceText[$checkCondition[$message[3]==];true;undefined time];false;$message[3]]\`}{color:RANDOM}]
$giveRoles[$mentioned[1];$findRole[$message[2]]]
$suppressErrors[{title:A ocurrido un error}{description:No encontré el rol}{color:RED}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Este Usuario tiene un rol mas alto que el mio]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Este Usuario Tiene un rol mas alto que el tuyo.]
$argsCheck[>3;Argumentos incorrectos. Ejemplo: $getServerVar[prefix]temprole @user @rol tiempo]
$onlyPerms[manageroles;{title[Permiso perdido]}{color:RANDOM}{description:<:Avisar:841076954668728330>Tu no tienes permisos de  \`MANAGE_ROLES\`}]`
})

bot.command({
name: "warn",
aliases: "Avisar",
code: `$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Accion:Warn}{field:Moderador:$username}{field:Usuario:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif
<:ticks:840853029976670228><@$mentioned[1]> Ha sido advertido Razon: \`$noMentionMessage\`
$setUserVar[reason;$getUserVar[reason;$mentioned[1]]/**$date+:$hour:$minute:$second**+> $noMentionMessage+;$mentioned[1]]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ Este usuario tiene una posicion mas alta que yo**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔  Este Usuario tiene una posición mas alta que tu**]
$onlyIf[$message[2]!=;**⛔  Da una razon**]
$onlyIf[$mentioned[1]!=;**⛔  Menciona a alguien para warnearlo y da una razon**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't warn yourself**]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔  No puedes warnear a un bot*]
$onlyBotPerms[manageroles;⛔ ** No tengo permiso de** \`MANAGAGE_ROLES\`]
$onlyPerms[manageroles;⛔ **Tu no tienes permiso de** \`MANAGAGE_ROLES\` ]`
})
 
bot.command({
name: "warns", 
code: `$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Accion:Warns}{field:Moderador:$username}{field:Usuario:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif
$color[RANDOM]
$title[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]'s warnings]
$description[
**$username[$mentioned[1;yes]]** has
\`$getUserVar[warn;$findUser[$message]]\` warnings
 
**Warnings User**
<@$mentioned[1;yes]> 
(\`$mentioned[1;yes]\`)]
$onlyIf[$getUserVar[warn;$findUser[$message]]>0;**⛔ The warnings of this user is already at 0**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't warn a bot, so they don't have warnings**]`
})
 
bot.command({
name: "unwarn", 
code: `$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Accion:Unwarn}{field:Moderador:$username}{field:Usuario:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif
$color[RANDOM]
$title[Se a removido la warn de $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has removed a warn from **$username[$mentioned[1;yes]]** 
he now has \`$getUserVar[warn;$findUser[$message]]\` Warnings]
$setUserVar[warn;$sub[$getUserVar[warn;$findUser[$message]];1];$findUser[$message]]
$removeSplitTextElement[$getTextSplitLength]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$getUserVar[warn;$findUser[$message]]>0;**⛔ The Warnings of this User is already at 0**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't unwarn yourself**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**, Correct usage: \`$getServerVar[prefix]unwarn <@user>\`]
$onlyPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms**]`
})
bot.variables({
warn: "0",
})

bot.variables({
reason: "0",
})

bot.command({
  name: "addemoji",
  code: `
 Emoji $addEmoji[https://cdn.discordapp.com/emojis/$replaceText[$replaceText[$checkCondition[$checkContains[$message[1];<]$checkContains[$message[1];:]$checkContains[$message[1];>]==truetruetrue]$isNumber[$message[1]];truefalse;$replaceText[$advancedTextSplit[$message[1];:;3];>;]];falsetrue;$message[1]];$message[2];yes] added with the name -> **$message[2]**
 $onlyIf[$charCount[$message[2]]>=2;⛔ **Tu no puedes poner un nombre menor a  \`2 caracteres\`**]
 $onlyIf[$message[2]!=;**Como se Usa**: \`$getServerVar[prefix]addemoji <emoji | emojiID> <nombre del emoji>\`]
$onlyPerms[manageemojis;**<:Avisar:841076954668728330>Tu no tienes permiso de usar este comando**]
$onlyBotPerms[manageemojis;**<:Avisar:841076954668728330>No tengo permiso de usar ese comando**]
$suppressErrors`
})

bot.command({
name: "stats",
code:  `$color[8700D9]$description[CPU usada: $cpu

RAM usada: $ram

Tiempo Online: $uptime

Libreria

<:node:841219021973618718>[Node.js v16.3.0](https://nodejs.org) 

<:aoijs:841218705064722452>[Aoi.js v 4.0.1](https://aoi.leref.ga) 

❤️Soci@s
Awita_awada#0744
chaツ 亗#8851 

⚙️Developer
const Yoli = require("HuberUwU")#1656 

[Soporte](https://discord.gg/phonyx) | [Invitar](https://dsc.gg/phonyx)`
})

bot.command({
name: "nuke", 
code: `$title[CANAL NUKEADO]
$image[https://media.tenor.com/images/fc0790727d0845b40d688b19f7cf5231/tenor.gif]
$clear[9999999]$onlyPerms[managemessages;**Tu no tienes permiso de borrar mensajes ]$deletecommand` 
})

bot.command({
name: "buscar-spotify",
code: `$color[03FF00]
$author[Busqueda de Spotify ;https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-brands-logo-34.png]
$description[
🔎 Buscar : **$toUppercase[$message]**
👤 Autor : **$username#$discriminator[$authorID]**
🔗 Link: [Click Aqui\\](https://open.spotify.com/search/$replaceText[$message; ;_;-1])]
$onlyIf[$message[1]!=;**🔍 Tu necesitas buscar una cancion*]`
})

bot.command({
name: "setnick",
code:  `
Apodo cambiado **Correctamente** a $username
$changeNickname[$findUser[$message[1]];$messageSlice[1]]
$if[$message[2]==]
$changeNickname[$findUser[$message[1]];$username[$findUser[$message[1]]]]
$endif
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**<:Avisar:841076954668728330> Este usuario está en una posición mayor que tu**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**<:Avisar:841076954668728330> No mencionaste a nadie o Este Usuario está en una posición más alta que yo**]
$suppressErrors[<:Avisar:841076954668728330>Necesitas poner un apodo
ejemplo: $getServerVar[prefix]setnick @usuario <apodo>] `
})

bot.command({
name: "kill", 
code: `$title[🔪 kill 🔪]
$argsCheck[>1;Tu debes mencionar a alguien, El suicidó no es bueno..]
$thumbnail[$authorAvatar]
$description[Tu Asesinaste a <@$mentioned[1]> $image[$randomText[https://media.giphy.com/media/iQ23jO6ItXO12/giphy.gif;https://media.giphy.com/media/BTV1vUcOWht2U/giphy.gif;https://media.giphy.com/media/3F9duvK4t9hzW/giphy.gif;https://media.giphy.com/media/eLsxkwF5BRtlK/giphy.gif;https://media.giphy.com/media/MeqbLwSjebeO4/giphy.gif]]
$footer[kill]
$addTimestamp
$color[8700D9] 
$onlyIf[$mentioned[1]!=$authorID;No te mates si quieres te puedo dar un abrazo.]` 
})

bot.deletedCommand({
 channel: "$channelID",
 code: `$setChannelVar[snipe_msg;$message]
 $setChannelVar[snipe_author;$authorID]
 $setChannelVar[snipe_channel;$channelID]
 $setChannelVar[snipe_date;$day $month $year - $hour:$minute]`
});
bot.onMessageDelete();
 
bot.command({
name: "snipe",
code: `$color[8700D9]
$author[$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]
$description[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]]
$footer[#$channelName[$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]] | $getServerVar[snipe_date;$mentionedChannels[1;yes]$addTimestamp Hora de tu pais]]
$onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=;No hay nada para hacer snipe en <#$mentionedChannels[1;yes]>]`
})
 
bot.updateCommand({
 channel: "$channelID",
 code: `$setChannelVar[msgEditorID;$authorID]
 $setChannelVar[esnipeOldMsg;$oldMessage]`
})
bot.onMessageUpdate();
 
bot.command({
 name: "editsnipe",
 aliases: ["esnipe"],
 code: `$author[$username[$getChannelVar[msgEditorID]]#$discriminator[$getChannelVar[msgEditorID]];$userAvatar[$getChannelVar[msgEditorID]]]
$description[$getChannelVar[esnipeOldMsg]]
$addTimestamp
$color[8700D9]
$onlyIf[$getChannelVar[esnipeOldMsg]!=undefinied;{description: No se a podido hacer snipe}{color: RED}]
$onlyIf[$getChannelVar[msgEditorID]!=undefinied;{description: No se puede hacer snipe}{color: RED}]
$suppressErrors[No hay nada para hacer snipe]`
})

bot.variables({
snipe_msg: "",
 snipe_author: "",
 snipe_channel: "",
 snipe_date: "",
msgEditorID: "undefined",
esnipeOldMsg: "undefined"
})

bot.command({
name: "work", 
code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[45;100]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[30;90]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Work]
$description[
$username, $randomText[it looks like you'd do anything for money 😳.;Diseñaste una aplicación de mensajeria y te fue bien y ganaste !;Trabajaste en una empresa y te pagaron la semana has ganado !;Fuiste a un antro como DJ y te pagaron ! Ayudaste a un vagabundo pero era un millonario y te regalo ;fuiste el empleado del mes en un restaurante ganaste ;hackeaste a una compañia que robaba dinero a las personas y te dieron ]
]
$footer[💵 +$$random[96;3628] | 🔢 +$random[30;90]xp]
$globalCooldown[60s;Try again in %time%]`
})
 
bot.command({
name: "beg", 
code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[121;400]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[25;80]];$authorID]
$title[Beg]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$username, $randomText[Begging is for the weak so here;Here, take this and go;Here, don't let this be a habit;I take you for a well put together human being, why are you begging?;Why can't you just get a job?]
]
$footer[💵 +$$random[121;400] | 🔢 +$random[25;80]xp]
$globalCooldown[300s;Espera %time% para usar este comando de nuevo]`
})
 
bot.command({
name: "bal", 
code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;Discord bots dont have a balance]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[RANDOM]
$title[$username[$mentioned[1;yes]]'s Balance]
$description[
$addField[🔢 Xp;
$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]]xp
]
$addField[💵 Cartera;
$$numberSeparator[$getGlobalUserVar[Wallet;$mentioned[1;yes]]]
]
$addField[🏧 Banco;
$$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]
]
$addField[ Dinero Total;
$$numberSeparator[$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]
]]`
})

bot.command({
name: "profile",
code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔  Los bots no tienen perfil en economia**]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$title[Perfil de Economia]
$color[RANDOM]
$description[
**__User/ID__**:
<@$mentioned[1;yes]>
$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]
(\`$mentioned[1;yes]\`)
 
**__Economia__**:
\`💵\` **$$numberSeparator[$getGlobalUserVar[Wallet;$mentioned[1;yes]]]**
\`🏦\` **$$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]**
\`📊\` **$$numberSeparator[$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]**
\`🗡\` **$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]]**xp
 
**__Assets__**:
\`💼\` ($getGlobalUserVar[duffle;$mentioned[1;yes]]) Bags
\`📺\` ($getGlobalUserVar[tv;$mentioned[1;yes]]) TVs
\`📱\` ($getGlobalUserVar[smartphone;$mentioned[1;yes]]) Smartphones
\`💻\` ($getGlobalUserVar[laptop;$mentioned[1;yes]]) Laptops
\`🚗\` ($getGlobalUserVar[car;$mentioned[1;yes]]) Cars
\`🚚\` ($getGlobalUserVar[truck;$mentioned[1;yes]]) Trucks
\`🚁\` ($getGlobalUserVar[helicopter;$mentioned[1;yes]]) Helicopters
\`🏫\` ($getGlobalUserVar[apartment;$mentioned[1;yes]]) Apartments
\`🏡\` ($getGlobalUserVar[house;$mentioned[1;yes]]) Houses
\`🏰\` ($getGlobalUserVar[mansion;$mentioned[1;yes]]) Mansions
]`
})
 
 
bot.command({
name: "deposit", 
aliases: 'dep',
code: `$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank;$authorID];$message];$authorID]
$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];$message];$authorID]
$title[Deposited]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, you deposited $$numberSeparator[$message] into your bank!]
$footer[💵 $$numberSeparator[$sub[$getGlobalUserVar[Wallet;$authorID];$message]] | 🏦 $$numberSeparator[$sum[$getGlobalUserVar[Bank;$authorID];$message]] | 📊 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$getGlobalUserVar[Bank;$authorID]]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[Wallet;$authorID];Cannot deposit more than what's in your wallet!]
$argsCheck[>1;How much are you depositing? Try this: \`$getServerVar[prefix]dep <amount>\`]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>0;There's nothing to deposit!]`
})
 
 
bot.command({
  name: 'withdraw',
  aliases: 'with',
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$message];$authorID]
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank;$authorID];$message];$authorID]
$title[Withdrew]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, you withdrew $$numberSeparator[$message] from your bank!]
$footer[💵 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$message]] | 🏦 $$numberSeparator[$sub[$getGlobalUserVar[Bank;$authorID];$message]] | 📊 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$getGlobalUserVar[Bank;$authorID]]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[Bank;$authorID];Cannot withdraw more than what's in your bank!]
$argsCheck[>1;How much are you withdrawing?]
$onlyIf[$getGlobalUserVar[Bank;$authorID]>0;There's nothing to withdraw!]`
})

	
bot.command({
 name: "tsetup",
 code: `
 $awaitMessages[$authorID;30s;everything;tsp2;Comando cancelado]
 $sendMessage[**En que categoría quieres crear el sistema de tickets?.
 Porfavor dame la id. 
 Este comando sera cancelado despues de ** \`30 segundos\`.;no]
 $onlyPerms[admin;Solo miembros con permisos de \`ADMIN\` pueden usar este comando {delete:10s}]
 $suppressErrors[]`
})
 
bot.awaitedCommand({
 name: "tsp2",
 code: `
*✅  Ticket Setup completo*
 $setServerVar[ticketchannel;$message]
 $onlyIf[$channelExists[$message]==true;Provided Category Doesn't Exist{delete:10s}]
 $onlyIf[$isNumber[$message]==true;Please provide Category ID{delete:10s}]`
})
 
bot.command({
 name: "ticket",
 code: `
$newTicket[ticket-$username[$authorID];{title:Ticket Abierto!}{description:Hola, <@$authorID>. Este es tu ticket!:tickets: Porfavor danos Informacion de tu problema. 
Porfavor se paciente en lo que te atienden}{footer:Usa $getServerVar[prefix]close para cerrar tu ticket};$getServerVar[ticketchannel];no;<@$authorID>, I failed to create your ticket! Try again]
$sendMessage[Ticket Creado Correctamente! Hola, <@$authorID>. Ve a **$toLowercase[#$username$discriminator]** Para describir tu problema!;Gracias de antemano por ser paciente]`
})
 
bot.command({
 name: "close",
 code: `
$closeTicket[Este no es un ticket]
$onlyIf[$checkContains[$channelName;ticket]==true;Este comando solo puede ser usado en tickets{delete:10s}]
$suppressErrors`
})
 
 
bot.variables({
 ticketchannel: "",
})

bot.command({
name: "buscar-twitch",
code:  `$title[busqueda de twitch]
$description[🔗Link [Click Aqui](https://m.twitch.tv/search?term=$replaceText[$message; ;_;-1])
$onlyIf[$message[1]!=;**🔍 Tu necesitas poner el nombre de un Streamer*]]$color[8700D9]`
})

bot.command({
name: "lock",
code:  `$title[:lock: Canal bloqueado!]
$argsCheck[>1;Tienes que escribir la razón para bloquearlo!]
$description[ 🔒 <#$channelID> Fue bloqueado!]
$addTimestamp
$footer[Razón: $noMentionMessage]
$color[ab0061]
$modifyChannelPerms[$channelID;-sendmessages;$guildID]
$onlyPerms[admin;No tienes suficientes permisos!] `
})

bot.command({
name: "unlock",
code:  `$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$onlyPerms[managemessages;No tiene el permiso necesario para ejecutar este comando. Requiere: administrar mensajes.]
$title[Unlock]
$description[Canal desbloqueado por $username]
$footer[desbloqueado a las $addTimestamp]
$color[00FF27]`
})

bot.command({
name: "logro",
code:  `$image[https://minecraftskinstealer.com/achievement/$random[1;39]/Logro+obtenido%21/$message[1]+$message[2]+$message[3]+$message[4]+$message[5]+$message[6]+$message[7]+$message[8]+$message[9]+$message[10]]
$color[1]
$argsCheck[>1;No has conseguido ningún logro?]
$suppressErrors[Ha ocurrido un error. Intenta de nuevo!]
$deletecommand`
})

bot.command({
name: "lyrics",
code: `$onlyIf[$message!=;*Escriba el nombre de la canción para mostrar la letra*]
$title[**:page_with_curl: $message Lyrics**]
$description[**Letra de $message**
$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;No se encontró la letra/No escribio el nombre de la canción]] `
})

bot.command({
name: "google",
code:  `$deletecommand
$title[Google Search]
$description[ Busqueda [link](https://www.google.com/search?q=$message)
Palabra buscada en la web: $message]
$image[https://apiflash.com/v1/urltoimage?access_key=9c70a0cb2d8f4dc98b0604fa94319ea3&url=https://google.com.ar/search?q=$replaceText[$message; ;+;-1]] $color[GREEN]`
})

bot.command({
name: "id-emote",
code:  `
$argsCheck[>1;Porfavor dame el nombre del emoji recuerda que debe estar en este servidor ejemplo de uso: $getServerVar[prefix]id-emote mod]
\`$customEmoji[$message[1]]\` `
})

bot.command({
	name: 'eval',
	code: `
$if[$message[1]==eval]
$eval[$replaceText[$message;$message[1];]]
$endif
$if[$message[1]==djs]
$djsEval[$replaceText[$message;$message[1];]]
$endif
  $onlyForIDs[457686961151410176;Sorry but only the developer can use it.]`
});

bot.command({
name: "help2",
code:  `$reactionCollector[$splitText[1];$authorID;1h;🏡,<:Music:848680751218032662>,<:mod:841890283113283596>,😹,📖,📩,⚙️,<:extra:841894145470496768>,🚧;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4,awaitReaction5,awaitReaction6,awaitReaction7,awaitReaction8,awaitReaction9;yes]
$textSplit[$sendMessage[{title: Lista de Comandos} {description:**Reacciona Para obtener info de los Comandos**:
🏡 - Para Volver Aqui
<:Music:848680751218032662> - Musica
<:mod:841890283113283596> - Moderacion
😹 - Diversion  
📖 - Utilidad 
📩 - Tickets
⚙️ - Configurables
<:extra:841894145470496768> - Extras
[Invitame Si quieres](https://dsc.gg/phonyx)🥺 | [Servidor de Soporte](https://discord.gg/phonyx) | [Votar](https://bots.discordthings.com/bot/837140986743750656)  } {color:RANDOM};yes];] `
  
}) 

bot.awaitedCommand({
 name: "awaitReaction1",
 code:  `$editMessage[$message[1];{title:Lista de Comandos} {description:**Reacciona Para obtener info de los Comandos**:
🏡 - Para Volver Aqui
<:Music:848680751218032662> - Musica
<:mod:841890283113283596> - Moderacion
😹 - Diversion
📖 - Utilidad 
📩 - Tickets 
⚙️ - Configurables
<:extra:841894145470496768> - Extras
🚧 - Desarrolladores
[Invitame Si quieres](https://dsc.gg/phonyx)🥺 | [Servidor de Soporte](https://discord.gg/phonyx) | [Votar](https://bots.discordthings.com/bot/837140986743750656) } {color:RANDOM}
] `
})

bot.awaitedCommand({
 name: "awaitReaction2",
 code:  `
 $editMessage[$message[1];{title:Musica[13]} {description: $getServerVar[prefix]play $getServerVar[prefix]join $getServerVar[prefix]leave $getServerVar[prefix]nowplaying $getServerVar[prefix]volume $getServerVar[prefix]queue $getServerVar[prefix]pause $getServerVar[prefix]resume $getServerVar[prefix]skip $getServerVar[prefix]stop $getServerVar[prefix]loop $getServerVar[prefix]resume $getServerVar[prefix]clearqueue $getServerVar[prefix]lyrics

 } {color:RANDOM}
] `
 
})

bot.awaitedCommand({
 name: "awaitReaction3",
 code:  `
 $editMessage[$message[1];{title: Moderacion [15]}
 {description:
 $getServerVar[prefix]ban $getServerVar[prefix]unban $getServerVar[prefix]kick $getServerVar[prefix]temprole $getServerVar[prefix]giverole $getServerVar[prefix]removerole $getServerVar[prefix]clear $getServerVar[prefix]id $getServerVar[prefix]setlogs $getServerVar[prefix]warn $getServerVar[prefix]unwarn $getServerVar[prefix]warns $getServerVar[prefix]nuke $getServerVar[prefix]lock $getServerVar[prefix]unlock
} {color:RANDOM} 
] `
 
})

bot.awaitedCommand({
 name: "awaitReaction4",
 code:  `
 $editMessage[$message[1];{title: Diversion[3]} {description:
 $getServerVar[prefix]decir $getServerVar[prefix]kill $getServerVar[prefix]logro
} {color:RANDOM} 
] `
 
})

bot.awaitedCommand({
 name: "awaitReaction5",
 code:  `
 $editMessage[$message[1];{title: Utilidad[15]} {description:$getServerVar[prefix]avatar $getServerVar[prefix]serverinfo $getServerVar[prefix]traducir $getServerVar[prefix]jumbo $getServerVar[prefix]ping $getServerVar[prefix]ayuda $getServerVar[prefix]userinfo $getServerVar[prefix]stats $getServerVar[prefix]buscar-spotify $getServerVar[prefix]botinfo $getServerVar[prefix]setnick $getServerVar[prefix]addemoji $getServerVar[prefix]snipe $getServerVar[prefix]editsnipe $getServerVar[prefix]id-emote
} {color:RANDOM} 
] `

})

bot.awaitedCommand({
 name: "awaitReaction6",
 code:  `
 $editMessage[$message[1];
{title: Tickets[3]} {description:$getServerVar[prefix]tsetup $getServerVar[prefix]ticket $getServerVar[prefix]close
} {color:RANDOM} 
] ` 

})

bot.awaitedCommand({
 name: "awaitReaction7",
 code:  `
 $editMessage[$message[1];{title: Configurables[1]} {description:$getServerVar[prefix]setprefix
} {color:RANDOM} 
] `
})

bot.awaitedCommand({
 name: "awaitReaction8",
 code:  `
 $editMessage[$message[1];{title: Extras[1]} {description:$getServerVar[prefix]invite
} {color:RANDOM} 
] `
})

bot.awaitedCommand({
 name: "awaitReaction9",
 code:  `
 $editMessage[$message[1];{title: Desarrolladores} $onlyForIDs[457686961151410176;Solo mis Desarrolladores Pueden usar este comando] {description: Estadísticas Owner 
 Servidores: $serverCount
 Miembros totales: $allMembersCount
 $getServerVar[prefix]eval
Ejemplo de uso $getServerVar[prefix]eval eval $serverCount
} {color:RANDOM} 
] `
})

bot.variables({
 wchannel: "",
 wmessage: "",
})


bot.command({
 name: "setwelcomedesc",
 code:  `$setServerVar[wmessage;$message] 
 Mensaje de bienvenida establecido a : \`$message\`  `
})

bot.joinCommand({
	channel: '$getServerVar[WelcomeCh]',
	code: `<@$authorID> $attachment[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]?size=2048&middle=Welcome&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[We are now $membersCount members; ;%20;-1]&background=https://cdn.discordapp.com/attachments/773658804570685470/823393854795284490/welcomeimg1.jpg&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3;welcome.png] 

$suppressErrors`
})

bot.leaveCommand({
	channel: '$getServerVar[LeaveCh]',
	code: `<@$authorID> $attachment[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]?size=2048&middle=Goodbye&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[We are now $membersCount members; ;%20;-1]&background=https://cdn.discordapp.com/attachments/773658804570685470/823393854676926474/leaveimage1.jpg&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3;welcome.png] 

$suppressErrors`
})

bot.command({
name: "reportar-bug",
code:  `
$dm[457686961151410176]

$title[Reporte Enviado Por $username]
$description[Bug: $message
Channel: $channelID
Server members (Miembros Del Servidor): $membersCount]
$deletecommand `
})

bot.command({
name: "votar",
code:  `$title[Nuestras Opciones de votar son]
$description[
[DiscordThings](https://bots.discordthings.com/bot/837140986743750656)
Top.GG(https://top.gg/bot/837140986743750656)] `
})

bot.command({
name: "buscar-youtube",
code:  `$argsCheck[>1;Que vas a buscar?]
$httpGet[https://api.ducke.cf/api/search/youtube?search=$message[1]+$message[2]+$message[3]+$message[4]+$message[5]+$message[5]+$message[6]+$message[7]+$message[8]+$message[9]+$message[10]+$message[11]]
$title[<:youtube:847567634560057385> BUSCADOR DE YOUTUBE <:youtube:847567634560057385>]
$description[
━━━━━━━━ :sparkler: ━━━━━━━━

¡Hola, $username! Esto es lo que encontré.

━━━━━━━━ INFORMACION DE TU BUSQUEDA ━━━━━━━━
:carousel_horse: Titulo de tu busqueda: "$httpResult[title]"

:alarm_clock: Duración del video: "$httpResult[duration]"

:eyes: Vistas del video: $httpResult[views]

🖼 Cargado: $httpResult[upload_time]

:thread: Canal: $httpResult[uploader]

:roller_coaster: Mira aquí el video de tu busqueda: $httpResult[url]]

$footer[Sea más específico si no encuentra lo que busca]
$thumbnail[$httpResult[thumbnail]]

$color[e45a5a]`
})

bot.command({
		name: "channelinfo",
		aliases: ["ci"],
		code: `
$reply[$messageID;
{title:Informacion de canal}
{field:Nombre:<#$channel[$findChannel[$message];id]> **\`$channel[$findChannel[$message];name]\`**}
{field:ID:$channel[$findChannel[$message];id]}
{field:Topic:$replaceText[$channel[$findChannel[$message];topic];null;No topic.]}
{field:Tipo de canal:$replaceText[$replaceText[$replaceText[$replaceText[$channel[$findChannel[$message];type];text;Text Channel];voice;Voice Channel];category;Category Channel];news;News Channel]}
{field:Categoría:<#$channel[$findChannel[$message];parentid]>}
{field:Position:$channel[$findChannel[$message];position]}
{field:Creado:$channel[$findChannel[$message];created]}
{timestamp:ms}
{color:RANDOM}]
`
})

bot.command({
name: "off",
code: `

$djsEval[

setTimeout(() => {process.exit()} , 1000)

const discord = require('discord.js')

let LynxPro = new discord.MessageEmbed()

.setTitle('Apagando')

.setColor('fcfc96')

message.channel.send(LynxPro)]

 $onlyForIDs[457686961151410176;You Are Not My Ownet]`
})

bot.variables({
WelcomeCh: "",
LeaveCh: "",
})

bot.command({
	name: "setleave",
	code: `$title[:white_check_mark: | Task completed]
 $description[The goodbye channel has been changed to <$mentionedChannel[1]>]
 $addtimestamp
 $color[RANDOM]
 $setServerVar[LeaveCh;$mentionedChannel[1]]
 $onlyIf[$mentionedChannel[1]!=;Mention a channel]
 $onlyPerms[manageserver;Only manage server perms!]`
})

bot.command({
	name: "setwelcome",
	code: `$title[:white_check_mark: | Task completed]
 $description[The welcome channel has been changed to $message]
 $addtimestamp
 $color[RANDOM]
 $setServerVar[WelcomeCh;$mentionedChannel[1]]
 $onlyIf[$mentionedChannel[1]!=;Mention a channel]
 $onlyPerms[manageserver;Only manage server perms!]`
})

bot.command({
name: "fshop",
code:  `
$color[RANDOM]
$description[🌺Tienda de Fortnite🌺]
$image[https://images-ext-1.discordapp.net/external/koFBcFdUJ9Aw5USUkKPH_o-Zhq4Y3RZarGgxznxP7bU/%3Fheader%3DGalaxy%2520Bot%26textcolor%3D000000%26background%3Dhttps%3A%2F%2Fi.pinimg.com%2F736x%2F22%2F8c%2F05%2F228c055bd2b65715762045e03377779c.jpg%26format%3Djpg%26footer%3Ddiscord.link%2Fneutr0/https/api.nitestats.com/v1/shop/image] `
})

bot.channelCreateCommand({ 
 channel: "$getServerVar[logs]", 
 code: `$title[💬 | Canal Creado]
 $description[
 💿 | Nombre: $newChannel[name] ]
 $footer[Logs]
 Creado por <@$authorID>`
 })
bot.onChannelCreate()

bot.channelDeleteCommand({ 
 channel: "$getServerVar[logs]", 
 code: `$title[🌩️ | Canal eliminado]
 $description[
 💳 | Nombre: $oldChannel[name] ]
 $footer[Logs]
 Eliminado Por <@$authorID>`
 })
bot.onChannelDelete()

bot.channelUpdateCommand({ 
 channel: "$getServerVar[logs]", 
 code: `$title[💬 | Canal editado]
 $description[
 💿 | Nombre ant: $oldChannel[name]
 📀 | Nombre nuevo: $newChannel[name]]
 $footer[Logs]
 Editado Por`
 })
bot.onChannelUpdate()


bot.updateCommand({
 channel: "$getServerVar[logs]", 
 code: `$title[🛑 | Mensaje Editado]
 $description[💬 | Mensaje editado por $username en <#$channelUsed>
💽 | Mensaje nuevo: $message
💬 | Mensaje anterior: $oldMessage]`
})
bot.onMessageUpdate()


bot.deletedCommand({
 channel: "$getServerVar[logs]",
 code: `$title[:x: | Mensaje Eliminado]
 $description[🌑 | Mensaje eliminado por: $username
 🚩 | Eliminado en: <#$channelUsed>
 💬 | Mensaje borrado: $message]`
})
bot.onMessageDelete()


bot.command({
 name: "setlogs",
 code: `$setServerVar[logs;$mentionedChannels[1]]
$description[ | **Se a seleccionado <#$mentionedChannels[1]> Como canal de logs.**]
$argsCheck[>1;❗ | Menciona un canal para establecerlo como de logs.]
$onlyPerms[admin;:amal: | **No tienes permisos de adminitracion]`
})

bot.variables({
logs: "",
})

bot.command({
    name: "slash",
    code: `$createSlashCommand[$guildID;play;Reproduce la canción que quieras :3]`
})

bot.interactionCommand({
    name: "play", 
    code: `$interactionReply[$title[Cancion Agregada a la cola: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title;]]
 $addField[Duracion:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration;];no]
 $addField[Agregada por :;$userTag[$authorID];no]
 $addField[URL:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url;];no]
 $thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail;]]
 $playSong[$message;❌** | No se encontro la cancion**]
 $footer[comando de musica | $getServerVar[prefix]play comando]
 $addTimestamp
 $onlyIf[voiceID!=; Necesitas estar en un canal para usar el comando]
 $color[RANDOM]]`
})
bot.onInteractionCreate()

bot.variables({
modlogs: "",
})

bot.command({
  name: "help",
  code: `
$let[e;$apiMessage[;{title:Lista de Comandos}
{thumbnail:$authorAvatar}
$description[
<:Music:848680751218032662> - Musica:Click en el Boton
<:mod:841890283113283596> - Moderacion:Click en el Boton
😹 - Diversion:Click en el Boton  
📖 - Utilidad:Click en el Boton 
📩 - Tickets:Click en el Boton
⚙️ - Configurables:Click en el Boton
<:extra:841894145470496768> - Extras
[Invitame Si quieres](https://dsc.gg/phonyx)🥺 | [Servidor de Soporte](https://discord.gg/phonyx) | [Votar](https://bots.discordthings.com/bot/837140986743750656)]
{color:#5865F2};{actionRow:Musica,2,1,musicaButton,:Moderacion,2,1,moderacionButton,:Diversion,2,1,diversionButton,:Utilidad,2,1,utilidadButton,:Tickets,2,1,ticketsButton};;yes]]`
})
 
bot.onInteractionCreate()
bot.interactionCommand({
 name: "musicaButton",
 prototype:"button",
 code:`
$interactionDelete
$wait[30s]
$interactionEdit[;{color:#2f3136}{title:Musica[13]}{description:$getServerVar[prefix]play $getServerVar[prefix]join $getServerVar[prefix]leave $getServerVar[prefix]nowplaying $getServerVar[prefix]volume $getServerVar[prefix]queue $getServerVar[prefix]pause $getServerVar[prefix]resume $getServerVar[prefix]skip $getServerVar[prefix]stop $getServerVar[prefix]loop $getServerVar[prefix]resume $getServerVar[prefix]clearqueue $getServerVar[prefix]lyrics}]
$wait[3s]
$color[RANDOM]
$interactionReply[Cargando los comandos de musica;;;0;4]`
})
 
bot.interactionCommand({
 name: "moderacionButton",
 prototype:"button",
 code:`$interactionDelete
$wait[30s]
$interactionEdit[;{color:#2f3136}{title:Moderacion[15]}{description:$getServerVar[prefix]ban $getServerVar[prefix]unban $getServerVar[prefix]kick $getServerVar[prefix]temprole $getServerVar[prefix]giverole $getServerVar[prefix]removerole $getServerVar[prefix]clear $getServerVar[prefix]id $getServerVar[prefix]setlogs $getServerVar[prefix]warn $getServerVar[prefix]unwarn $getServerVar[prefix]warns $getServerVar[prefix]nuke $getServerVar[prefix]lock $getServerVar[prefix]unlock}]
$wait[3s]
$color[RANDOM]
$interactionReply[I'm loading economy commands;;;0;4]`
})
 
bot.interactionCommand({
 name: "diversionButton",
 prototype:"button",
 code:`$interactionDelete
$wait[30s]
$interactionEdit[;{color:#2f3136}{title:  Diversion[3]}{description:$getServerVar[prefix]decir $getServerVar[prefix]kill $getServerVar[prefix]logro}]
$wait[3s]
$color[RANDOM]
$interactionReply[I'm loading fun commands;;;0;4]`
})
 
bot.interactionCommand({
 name: "utilidadButton",
 prototype:"button",
 code:`$interactionDelete
$wait[30s]
$interactionEdit[;{color:#2f3136}{title: Utilidad[15]}{description:$getServerVar[prefix]avatar $getServerVar[prefix]serverinfo $getServerVar[prefix]traducir $getServerVar[prefix]jumbo $getServerVar[prefix]ping $getServerVar[prefix]ayuda $getServerVar[prefix]userinfo $getServerVar[prefix]stats $getServerVar[prefix]buscar-spotify $getServerVar[prefix]botinfo $getServerVar[prefix]setnick $getServerVar[prefix]addemoji $getServerVar[prefix]snipe $getServerVar[prefix]editsnipe $getServerVar[prefix]id-emote}]
$wait[3s]
$color[RANDOM]
$interactionReply[Cargando los comandos de Utilidad;;;0;4]`
})
 
bot.interactionCommand({
 name: "ticketsButton",
 prototype: "button",
 code:`$interactionDelete
$wait[30s]
$interactionEdit[;{color:#2f3136}{title:Tickets[3]}{description:$getServerVar[prefix]tsetup $getServerVar[prefix]ticket $getServerVar[prefix]close}]
$wait[3s]
$color[RANDOM]
$interactionReply[Estoy Cargando los Comandos de los Tickets;;;0;4]`
})
//////FIN DE COMANDOS
keepAlive()