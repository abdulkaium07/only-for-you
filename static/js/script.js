const secretBox = document.getElementById("secretBox");
const loveButton = document.getElementById("loveButton");

window.addEventListener("load", () => {
    setTimeout(() => {
        secretBox.classList.add("open");
    }, 700);

    createBackgroundHearts();
});

if (loveButton) {
    loveButton.addEventListener("pointerdown", (event) => {
        createEmojiBurst(event.clientX, event.clientY);

        loveButton.classList.add("tap-effect");

        setTimeout(() => {
            loveButton.classList.remove("tap-effect");
        }, 300);
    });
}

function createEmojiBurst() {
    const emojis = ["💌", "💕", "💖", "💘", "🥰", "😍", "❤️", "🌸", "✨"];

    for (let i = 0; i < 45; i++) {
        const emoji = document.createElement("div");
        emoji.classList.add("floating-heart");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.top = Math.random() * 100 + "vh";

        emoji.style.animationDelay = Math.random() * 0.4 + "s";
        emoji.style.fontSize = Math.random() * 18 + 22 + "px";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 2500);
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
    }, 700);
} 