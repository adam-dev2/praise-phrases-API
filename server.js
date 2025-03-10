const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const praises = [
  "You're an absolute rockstar!",
  "Your kindness makes the world a better place!",
  "You have an incredible sense of humor!",
  "Your intelligence is truly impressive!",
  "You're a natural leader!",
  "You radiate positivity and light!",
  "Your creativity knows no bounds!",
  "You're making a real difference in the world!",
  "Your determination is inspiring!",
  "You're a joy to be around!",
  "You bring out the best in others!",
  "Your ideas are innovative and brilliant!",
  "You have an amazing work ethic!",
  "You handle challenges with such grace!",
  "You're a fantastic listener!",
  "You have a heart of gold!",
  "You're an inspiration to many!",
  "Your smile brightens up the room!",
  "You make even the hardest tasks look easy!",
  "You're a fast learner with great insights!",
  "Your dedication is unmatched!",
  "You're a true problem solver!",
  "You uplift those around you!",
  "You have a great sense of style!",
  "Your energy is contagious!",
  "You're full of wisdom and knowledge!",
  "You're a fantastic team player!",
  "You always know how to make people feel special!",
  "You're someone people can always count on!",
  "You turn challenges into opportunities!",
  "You're fearless in the face of difficulties!",
  "Your kindness is truly admirable!",
  "You're incredibly resourceful!",
  "You always bring fresh ideas to the table!",
  "You have a unique perspective on things!",
  "You're proof that hard work pays off!",
  "You're making a positive impact wherever you go!",
  "You spread so much happiness and warmth!",
  "You have an amazing ability to see the best in people!",
  "You're a wonderful and supportive friend!",
  "Your confidence is inspiring!",
  "You have a magnetic personality!",
  "You're excellent at what you do!",
  "You're one of a kind—truly special!",
  "You always go the extra mile!",
  "You make people feel valued and appreciated!",
  "You're an amazing storyteller!",
  "You make the world a brighter place!",
  "You're unstoppable when you set your mind to something!",
  "You turn ordinary moments into extraordinary ones!"
];

app.get("/praise", (req, res) => {
  const randomPraise = praises[Math.floor(Math.random() * praises.length)];
  res.json({ message: randomPraise });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

