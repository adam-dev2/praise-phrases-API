const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const praises = [
  { id: 1, message: "You're an absolute rockstar!" },
  { id: 2, message: "Your kindness makes the world a better place!" },
  { id: 3, message: "You have an incredible sense of humor!" },
  { id: 4, message: "Your intelligence is truly impressive!" },
  { id: 5, message: "You're a natural leader!" },
  { id: 6, message: "You radiate positivity and light!" },
  { id: 7, message: "Your creativity knows no bounds!" },
  { id: 8, message: "You're making a real difference in the world!" },
  { id: 9, message: "Your determination is inspiring!" },
  { id: 10, message: "You're a joy to be around!" },
  { id: 11, message: "You bring out the best in others!" },
  { id: 12, message: "Your ideas are innovative and brilliant!" },
  { id: 13, message: "You have an amazing work ethic!" },
  { id: 14, message: "You handle challenges with such grace!" },
  { id: 15, message: "You're a fantastic listener!" },
  { id: 16, message: "You have a heart of gold!" },
  { id: 17, message: "You're an inspiration to many!" },
  { id: 18, message: "Your smile brightens up the room!" },
  { id: 19, message: "You make even the hardest tasks look easy!" },
  { id: 20, message: "You're a fast learner with great insights!" },
  { id: 21, message: "Your dedication is unmatched!" },
  { id: 22, message: "You're a true problem solver!" },
  { id: 23, message: "You uplift those around you!" },
  { id: 24, message: "You have a great sense of style!" },
  { id: 25, message: "Your energy is contagious!" },
  { id: 26, message: "You're full of wisdom and knowledge!" },
  { id: 27, message: "You're a fantastic team player!" },
  { id: 28, message: "You always know how to make people feel special!" },
  { id: 29, message: "You're someone people can always count on!" },
  { id: 30, message: "You turn challenges into opportunities!" },
  { id: 31, message: "You're fearless in the face of difficulties!" },
  { id: 32, message: "Your kindness is truly admirable!" },
  { id: 33, message: "You're incredibly resourceful!" },
  { id: 34, message: "You always bring fresh ideas to the table!" },
  { id: 35, message: "You have a unique perspective on things!" },
  { id: 36, message: "You're proof that hard work pays off!" },
  { id: 37, message: "You're making a positive impact wherever you go!" },
  { id: 38, message: "You spread so much happiness and warmth!" },
  { id: 39, message: "You have an amazing ability to see the best in people!" },
  { id: 40, message: "You're a wonderful and supportive friend!" },
  { id: 41, message: "Your confidence is inspiring!" },
  { id: 42, message: "You have a magnetic personality!" },
  { id: 43, message: "You're excellent at what you do!" },
  { id: 44, message: "You're one of a kind—truly special!" },
  { id: 45, message: "You always go the extra mile!" },
  { id: 46, message: "You make people feel valued and appreciated!" },
  { id: 47, message: "You're an amazing storyteller!" },
  { id: 48, message: "You make the world a brighter place!" },
  { id: 49, message: "You're unstoppable when you set your mind to something!" },
  { id: 50, message: "You turn ordinary moments into extraordinary ones!" }
];

app.get("/praise", (req, res) => {
  const randomPraise = praises[Math.floor(Math.random() * praises.length)];
  res.json(randomPraise);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

