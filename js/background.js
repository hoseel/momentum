const colors = [
  "#FD8A8A",
  "#F1F7B5",
  "#A8D1D1",
  "#9EA1D4",
  "#FFB3B3",
  "#FFDBA4",
  "#FFE9AE",
  "#C1EFFF",
  "#B4E4FF",
  "#95BDFF",
  "#FAAB78",
  "#FCF9BE",
];

const changeColor = colors[Math.floor(Math.random() * colors.length)];

document.body.style.backgroundColor = changeColor;
