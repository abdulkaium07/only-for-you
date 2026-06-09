const secretBox = document.getElementById("secretBox");

const isMobile = window.matchMedia("(max-width: 600px)").matches;

if (secretBox) {
    secretBox.addEventListener("click", () => {
        openBox();
    });

    secretBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            openBox();
        }
    });
}

function openBox() {
    secretBox.classList.add("open");
    createCelebration();
}

function createCelebration() {
    const emojis = ["❤️", "💕", "💖", "💘", "🌸", "🌷", "✨", "🥰"];
    const count = isMobile ? 18 : 38;

    for (let i = 0; i < count; i++) {
        const emoji = document.createElement("div");
        emoji.classList.add("celebration-emoji");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;

        const moveX = Math.random() * 260 - 130;
        const moveY = -(Math.random() * 220 + 90);

        emoji.style.left = startX + "px";
        emoji.style.top = startY + "px";
        emoji.style.setProperty("--move-x", moveX + "px");
        emoji.style.setProperty("--move-y", moveY + "px");
        emoji.style.animationDelay = Math.random() * 0.25 + "s";
        emoji.style.fontSize = Math.random() * 12 + 20 + "px";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 2700);
    }
} 