const Discord = require('discord.js');
const client = new Discord.Client();
const token = (''); // Put your Discord token between the quotes
var i = 0

const status = ['1', '2', '3']; // Array of status'

function statusnum() {

    client.user.setActivity(status[i], { // Sets current status
        type: "PLAYING" // STREAMING, PLAYING, LISTENING
    });

  i++; // Adds to the counter
}

client.on('ready', () => {

  console.log('Client ready');

    setInterval(() => {

        if (i == status.length) { // When the counter is equal to number of status' it resets the counter

            i = 0;

        }

        statusnum(); // Calls status change function

    }, 7000) // I found 7000-10000 to work well with discord rate limits

});

client.login(token);
