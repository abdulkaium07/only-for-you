const secretBox = document.getElementById("secretBox");
const loveButton = document.getElementById("loveButton");

const isMobile = window.matchMedia("(max-width: 600px)").matches;

window.addEventListener("load", () => {
    setTimeout(() => {
        secretBox.classList.add("open");
    }, 900);

    createBackgroundHearts();
});

if (loveButton) {
    loveButton.addEventListener("pointerdown", () => {
        createEmojiBurst();

        loveButton.classList.add("tap-effect");

        setTimeout(() => {
            loveButton.classList.remove("tap-effect");
        }, 300);
    });
}

function createEmojiBurst() {
    const emojis = ["❤️", "💕", "💖", "💘", "🥰", "✨"];
    const count = isMobile ? 18 : 36;

    for (let i = 0; i < count; i++) {
        const emoji = document.createElement("div");
        emoji.classList.add("floating-heart");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.top = Math.random() * 100 + "vh";
        emoji.style.animationDelay = Math.random() * 0.35 + "s";
        emoji.style.fontSize = Math.random() * 14 + 20 + "px";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 2400);
    }
}

function createBackgroundHearts() {
    const intervalTime = isMobile ? 2200 : 1300;
    const maxHearts = isMobile ? 8 : 16;

    setInterval(() => {
        const currentHearts = document.querySelectorAll(".bg-heart").length;

        if (currentHearts >= maxHearts) {
            return;
        }

        const heart = document.createElement("div");
        heart.classList.add("bg-heart");
        heart.textContent = "❤";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 6 + "s";
        heart.style.fontSize = Math.random() * 14 + 12 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 9000);
    }, intervalTime);
} 