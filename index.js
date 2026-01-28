const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.NDQ5Nzc4MTg1NjM5NTU5MTY4.GCZ-JY.jDarSeqzYK5lcvsJ2WRmubnkrrMzfuLKnl9hzg");

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
