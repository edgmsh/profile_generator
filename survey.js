const readline = require("readline");

let profile = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name? ', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
      profile['name'] = name;
      profile['activity'] = activity;
      console.log(`Profile is ${profile.name}, ${profile.activity}`);
      rl.close();
  });
});





