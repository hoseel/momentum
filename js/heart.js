const hearts = [
  "🩷",
  "❤️",
  "🧡",
  "💛",
  "💚",
  "🩵",
  "💙",
  "💜",
  "🖤",
  "🩶",
  "🩵",
  "🤎",
];
const heart = document.querySelector("#heart");

const moodHeart = hearts[Math.floor(Math.random() * hearts.length)];
console.log(moodHeart);
heart.innerHTML = `Now Mood #${moodHeart}`;
