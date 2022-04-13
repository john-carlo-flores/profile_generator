const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generateProfile = () => {
  
  rl.question("What's your name? (Nicknames are also acceptable ^_^) ", (name) => {
    profile["name"] = name;

    rl.question("What's an activity you like doing? ", (hobby) => {
      profile["hobby"] = hobby;

      rl.question("What do you listen to while doing that? ", (music) => {
        profile["music"] = music;

        rl.question("Which meal is your favourite (updateProfile, eg: dinner, brunch, etc.) ", (mealtime) => {
          profile["mealtime"] = mealtime;

          rl.question("What's your favourite thing to eat for that meal? ", (food) => {
            profile["food"] = food;

            rl.question("Which sport is your absolute favourite? ", (sport) => {
              profile["sport"] = sport;

              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (power) => {
                profile["power"] = power;
                
                console.log(`${profile.name} loves listening to ${profile.music} while ${profile.hobby}, devouring ${profile.food} for ${profile.mealtime}, prefers ${profile.sport} over any other sport, and is amazing at ${profile.power}.`);
                
                rl.close();
              });
            });
          });
        });
      });
    });
      
  });

}

const profile = {};
generateProfile();

