const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");
const okButton = document.querySelector(".okay-button");
const modalEl = document.querySelector(".modal");
const responseModalEl = document.querySelector(".response");
const userNameEl = document.querySelector(".username");
const notifyEl = document.querySelector(".notify");
let timeRan = 0;

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * innerWidth - noButton.offsetWidth;
  const y = Math.random() * innerHeight - noButton.offsetHeight;

  if (timeRan % 3 === 0) {
    displayRandomMessage();
  }
  timeRan++;
  noButton.style.position = "absolute";
  noButton.style.left = `${Math.max(0, x)}px`;
  noButton.style.top = `${Math.max(0, y)}px`;
});

okButton.addEventListener("click", () => {
  if (!userNameEl.value.trim()) return;
  S;

  const name = userNameEl.value;

  document.querySelector(".text").innerText = `Do you love me, ${name}?`;
  modalEl.style.display = "none";
});

yesButton.addEventListener("click", () => {
  responseModalEl.style.display = "flex";

  noButton.style.display = "none";
});

function showMessage(message) {
  notifyEl.style.display = "flex";
  document.querySelector(".notification-text").innerText = message;

  setTimeout(() => {
    notifyEl.style.display = "none";
  }, 1500);
}

function displayRandomMessage() {
  const messages = [
    "Ha ha, you can't catch me!",
    "Oops, missed it!",
    "Not fast enough!",
    "Better luck next time!",
    "I'm too quick for you!",
    "Nope, try again!",
    "Almost had it!",
    "You gotta be quicker than that!",
    "So close, yet so far!",
    "Nice try, but no!",
    "Catch me if you can!",
    "Whoops, too slow!",
    "You'll never click me!",
    "I'm outta here!",
    "Nice try, but still no!",
    "Come on, is that your best?",
    "You're really trying, huh?",
    "I'm untouchable!",
    "Too slow, maybe next time?",
    "Keep trying, maybe one day!",
    "Am I too fast for you?",
    "Getting tired yet?",
    "Whoops, missed it again!",
    "You're getting warmer... or not!",
    "Not today, friend!",
    "Did you really think that would work?",
    "Close, but no cigar!",
    "Missed me, missed me, now you gotta try again!",
    "Nuh-uh, not happening!",
    "I could do this all day!",
    "You think you can catch me?",
    "Good reflexes! But not good enough.",
    "Oops, I'm over here now!",
    "Nope, I’m too quick for you!",
    "Wanna give up yet?",
    "Just give up, you can't win!",
    "Maybe try the other button?",
    "Try again... or don’t!",
    "Don't worry, everyone misses at first!",
    "Are you even trying?",
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  showMessage(messages[randomIndex]);
}
