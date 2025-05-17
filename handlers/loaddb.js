//Este handler se conecta a las bases de datos como cliente
const { remoteCacheClient } = require("remote-sqlite-database");
module.exports = async client => {

  client.stats = loadDB("CDev", "CDevDB", "localhost", 4040)
  client.musicsettings = loadDB("CDev", "CDevDB", "localhost", 4044)
  client.autoresume = loadDB("CDev", "CDevDB", "localhost", 4044)
  client.settings = loadDB("CDev", "CDevDB", "localhost", 4041)
  client.queuesaves = loadDB("CDev", "CDevDB", "localhost", 4042)
  client.premium = loadDB("CDev", "CDevDB", "localhost", 4043)

function loadDB(username, password, host, port) {
  client.database = new remoteCacheClient({
      username,
      password,
      host,
      port,
      tls: true,
      keyPathing: false
  })
  return client.database;
}
    
          const DbPing = await client.database.ping();
          
          console.log(`[x] :: `.magenta + `LOADED THE DATABASE        :x: Database got a ${DbPing}ms ping`.green)

  await client.premium.ensure("global", {
    guilds: [],
  });

  await client.stats.ensure("global", {
    commands: 0,
    songs: 0,
    setups: 0
  });
}
