const secretBox = document.getElementById("secretBox");
const isMobile = window.matchMedia("(max-width: 600px)").matches;

if (secretBox) {
    secretBox.addEventListener("pointerdown", () => {
        openBox();
    });

    secretBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            openBox();
        }
    });
}

function openBox() {
    if (!secretBox) return;

    secretBox.classList.add("open");
    createCelebration();
}

function createCelebration() {
    const emojis = ["❤️", "💕", "💖", "💘", "✨", "🥰"];
    const count = isMobile ? 10 : 22;

    for (let i = 0; i < count; i++) {
        const emoji = document.createElement("div");
        emoji.classList.add("celebration-emoji");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;

        const moveX = Math.random() * 220 - 110;
        const moveY = -(Math.random() * 190 + 80);

        emoji.style.left = startX + "px";
        emoji.style.top = startY + "px";
        emoji.style.setProperty("--move-x", moveX + "px");
        emoji.style.setProperty("--move-y", moveY + "px");
        emoji.style.animationDelay = Math.random() * 0.2 + "s";
        emoji.style.fontSize = Math.random() * 10 + 20 + "px";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 2700);
    }
} 