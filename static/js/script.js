const secretBox = document.getElementById("secretBox");
const loveButton = document.getElementById("loveButton");

window.addEventListener("load", () => {
    setTimeout(() => {
        secretBox.classList.add("open");
    }, 700);

    createBackgroundHearts();
});

loveButton.addEventListener("click", () => {
    createEmojiBurst();
});

function createEmojiBurst() {
    const emojis = ["❤️", "💕", "💖", "💘", "🥰", "😍"];

    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement("div");
        emoji.classList.add("floating-heart");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.top = Math.random() * 75 + 15 + "vh";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 2200);
    }
}

function createBackgroundHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("bg-heart");
        heart.textContent = "❤";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 4 + 5 + "s";
        heart.style.fontSize = Math.random() * 18 + 14 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 9000);
    }, 500);
} 