const leaderCard = document.getElementsByClassName("leader-card");

for (let i = 0; i < leaderCard.length; i++) {
  leaderCard[i].addEventListener("mouseenter", () => {
    leaderCard[i].children[3].style.display = "flex";
  });
  leaderCard[i].addEventListener("mouseleave", () => {
    leaderCard[i].children[3].style.display = "none";
  });
}
