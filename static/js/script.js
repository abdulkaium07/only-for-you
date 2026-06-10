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

    const boxOpenHint = document.getElementById("boxOpenHint");
    if (boxOpenHint) {
        boxOpenHint.classList.add("hide");
    }

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
/* =========================
   FINAL OPEN BOX TIMING FIX
   Paste at VERY BOTTOM of script.js
========================= */

function openBox() {
    if (!secretBox) return;

    secretBox.classList.add("open");

    const boxOpenHint = document.getElementById("boxOpenHint");

    if (boxOpenHint && !boxOpenHint.classList.contains("hide")) {
        setTimeout(() => {
            boxOpenHint.classList.add("hide");
        }, 1200);
    }

    createCelebration();
} 
/* =========================
   FINAL HINT LOVE BURST OPEN EFFECT
========================= */

function openBox() {
    if (!secretBox) return;

    secretBox.classList.add("open");

    const boxOpenHint = document.getElementById("boxOpenHint");

    if (boxOpenHint && !boxOpenHint.classList.contains("love-burst-mode")) {
        boxOpenHint.classList.remove("hide");
        boxOpenHint.classList.add("love-burst-mode");

        boxOpenHint.innerHTML = `<span class="hint-mail-emoji">💌</span>`;

        createHintLoveBurst(boxOpenHint);
    }

    createCelebration();
}

function createHintLoveBurst(target) {
    const hearts = ["❤️", "💕", "💖", "💘", "💗", "✨"];
    const count = 16;

    for (let i = 0; i < count; i++) {
        const love = document.createElement("span");
        love.className = "hint-love";
        love.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        const angle = (Math.PI * 2 * i) / count;
        const distance = Math.random() * 42 + 34;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance - 18;

        love.style.setProperty("--love-x", `${x}px`);
        love.style.setProperty("--love-y", `${y}px`);
        love.style.animationDelay = `${Math.random() * 0.18}s`;

        target.appendChild(love);

        setTimeout(() => {
            love.remove();
        }, 1700);
    }
} 
/* =========================
   Secret Name + Message Popup
========================= */

const secretPopup = document.getElementById("secretPopup");
const secretCloseBtn = document.getElementById("secretCloseBtn");

const visitorNameInput = document.getElementById("visitorNameInput");
const visitorNextBtn = document.getElementById("visitorNextBtn");

const visitorMessageInput = document.getElementById("visitorMessageInput");
const visitorDoneBtn = document.getElementById("visitorDoneBtn");

const secretNameStep = document.getElementById("secretNameStep");
const secretMessageStep = document.getElementById("secretMessageStep");
const secretThanksStep = document.getElementById("secretThanksStep");

const visitorGreeting = document.getElementById("visitorGreeting");
const visitorFinalText = document.getElementById("visitorFinalText");

let visitorName = "";

if (boxOpenHint && secretPopup) {
    boxOpenHint.addEventListener("click", (event) => {
        event.stopPropagation();

        secretPopup.classList.add("show");

        secretNameStep.style.display = "block";
        secretMessageStep.classList.remove("show");
        secretThanksStep.classList.remove("show");

        visitorNameInput.value = "";
        visitorMessageInput.value = "";

        setTimeout(() => {
            visitorNameInput.focus();
        }, 250);
    });
}

if (visitorNextBtn) {
    visitorNextBtn.addEventListener("click", () => {
        visitorName = visitorNameInput.value.trim();

        if (visitorName.length < 2) {
            visitorNameInput.focus();
            return;
        }

        secretNameStep.style.display = "none";
        secretMessageStep.classList.add("show");

        visitorGreeting.textContent = `${visitorName}, Write Your Message 💗`;

        setTimeout(() => {
            visitorMessageInput.focus();
        }, 200);
    });
}

if (visitorDoneBtn) {
    visitorDoneBtn.addEventListener("click", () => {
        const message = visitorMessageInput.value.trim();

        if (message.length < 2) {
            visitorMessageInput.focus();
            return;
        }

        secretMessageStep.classList.remove("show");
        secretThanksStep.classList.add("show");

        visitorFinalText.textContent = `Thank you, ${visitorName}. Your message is kept like a secret under this moonlight.`;
    });
}

if (secretCloseBtn && secretPopup) {
    secretCloseBtn.addEventListener("click", () => {
        secretPopup.classList.remove("show");
    });
} 
/* =========================
   FINAL CLICKABLE SECRET POPUP
========================= */

(function () {
    const hintBtn = document.getElementById("boxOpenHint");

    if (!hintBtn) return;

    let popup = document.getElementById("secretFinalPopup");

    if (!popup) {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="secret-final-popup" id="secretFinalPopup">
                <div class="secret-final-card">

                    <button class="secret-final-close" id="secretFinalClose">×</button>

                    <div class="secret-final-step" id="secretFinalNameStep">
                        <h3>What Is Your Name? 💌</h3>
                        <input type="text" id="finalVisitorName" placeholder="Write Your Name">
                        <button id="finalNameNext">Next</button>
                    </div>

                    <div class="secret-final-step secret-final-hidden" id="secretFinalMessageStep">
                        <h3 id="finalGreeting">Write Your Message 💗</h3>
                        <textarea id="finalVisitorMessage" placeholder="Write Your Message Here..."></textarea>
                        <button id="finalMessageDone">Done</button>
                    </div>

                    <div class="secret-final-step secret-final-hidden" id="secretFinalThanksStep">
                        <h3>Thank You 💖</h3>
                        <p id="finalThanksText"></p>
                    </div>

                </div>
            </div>
        `);

        popup = document.getElementById("secretFinalPopup");
    }

    const closeBtn = document.getElementById("secretFinalClose");
    const nameStep = document.getElementById("secretFinalNameStep");
    const messageStep = document.getElementById("secretFinalMessageStep");
    const thanksStep = document.getElementById("secretFinalThanksStep");

    const nameInput = document.getElementById("finalVisitorName");
    const nameNext = document.getElementById("finalNameNext");

    const messageInput = document.getElementById("finalVisitorMessage");
    const messageDone = document.getElementById("finalMessageDone");

    const greeting = document.getElementById("finalGreeting");
    const thanksText = document.getElementById("finalThanksText");

    let visitorName = "";

    function openSecretPopup(event) {
        event.preventDefault();
        event.stopPropagation();

        popup.classList.add("show");

        nameStep.classList.remove("secret-final-hidden");
        messageStep.classList.add("secret-final-hidden");
        thanksStep.classList.add("secret-final-hidden");

        nameInput.value = "";
        messageInput.value = "";

        setTimeout(() => {
            nameInput.focus();
        }, 250);
    }

    hintBtn.addEventListener("click", openSecretPopup);

    hintBtn.addEventListener("pointerdown", function (event) {
        event.stopPropagation();
    });

    nameNext.addEventListener("click", function () {
        visitorName = nameInput.value.trim();

        if (visitorName.length < 2) {
            nameInput.focus();
            return;
        }

        nameStep.classList.add("secret-final-hidden");
        messageStep.classList.remove("secret-final-hidden");

        greeting.textContent = `${visitorName}, A Note From You 💌`; 

        setTimeout(() => {
            messageInput.focus();
        }, 200);
    });

    messageDone.addEventListener("click", function () {
        const message = messageInput.value.trim();

        if (message.length < 2) {
            messageInput.focus();
            return;
        }

        messageStep.classList.add("secret-final-hidden");
        thanksStep.classList.remove("secret-final-hidden");

        thanksText.textContent = `Thank you, ${visitorName}. Your message will stay like a secret under this moonlight.`;
    });

    closeBtn.addEventListener("click", function () {
        popup.classList.remove("show");
    });
})(); 
/* =========================
   FINAL LETTER CLICK AFTER BOX OPEN ONLY
========================= */

function openBox() {
    const secretBox = document.getElementById("secretBox");
    const boxOpenHint = document.getElementById("boxOpenHint");

    if (!secretBox) return;

    secretBox.classList.add("open");

    if (boxOpenHint && !boxOpenHint.classList.contains("love-burst-mode")) {
        boxOpenHint.classList.remove("hide");
        boxOpenHint.classList.add("love-burst-mode");

    boxOpenHint.classList.remove("show-hint");

setTimeout(() => {
    boxOpenHint.innerHTML = `
        <span class="hint-tap-text">Tap Me</span>
        <span class="hint-mail-emoji">💌</span>
    `;
    
    boxOpenHint.classList.add("love-burst-mode");
    boxOpenHint.classList.add("show-hint");
}, 3000); 

        if (typeof createHintLoveBurst === "function") {
            createHintLoveBurst(boxOpenHint);
        }
    }

    if (typeof createCelebration === "function") {
        createCelebration();
    }
}

/* guide text-e click korle kaj korbe na, emoji howar por kaj korbe */
(function () {
    const hintBtn = document.getElementById("boxOpenHint");

    if (!hintBtn) return;

    hintBtn.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        if (!hintBtn.classList.contains("love-burst-mode")) {
            return;
        }

        openSecretLetterPopup();
    }, true);
})();

function openSecretLetterPopup() {
    let popup = document.getElementById("secretFinalPopup");

    if (!popup) {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="secret-final-popup" id="secretFinalPopup">
                <div class="secret-final-card">

                    <button class="secret-final-close" id="secretFinalClose">×</button>

                    <div class="secret-final-step" id="secretFinalNameStep">
                        <h3>What Is Your Name? 💌</h3>
                        <input type="text" id="finalVisitorName" placeholder="Write Your Name">
                        <button id="finalNameNext">Next</button>
                    </div>

                    <div class="secret-final-step secret-final-hidden" id="secretFinalMessageStep">
                        <h3 id="finalGreeting">A Note From You 💌</h3>
                        <textarea id="finalVisitorMessage" placeholder="Write Your Message Here..."></textarea>
                        <button id="finalMessageDone">Done</button>
                    </div>

                    <div class="secret-final-step secret-final-hidden" id="secretFinalThanksStep">
                        <h3>Thank You 💖</h3>
                        <p id="finalThanksText"></p>
                    </div>

                </div>
            </div>
        `);

        popup = document.getElementById("secretFinalPopup");
    }

    const closeBtn = document.getElementById("secretFinalClose");
    const nameStep = document.getElementById("secretFinalNameStep");
    const messageStep = document.getElementById("secretFinalMessageStep");
    const thanksStep = document.getElementById("secretFinalThanksStep");

    const nameInput = document.getElementById("finalVisitorName");
    const nameNext = document.getElementById("finalNameNext");

    const messageInput = document.getElementById("finalVisitorMessage");
    const messageDone = document.getElementById("finalMessageDone");

    const greeting = document.getElementById("finalGreeting");
    const thanksText = document.getElementById("finalThanksText");

    popup.classList.add("show");

    nameStep.classList.remove("secret-final-hidden");
    messageStep.classList.add("secret-final-hidden");
    thanksStep.classList.add("secret-final-hidden");

    nameInput.value = "";
    messageInput.value = "";

    setTimeout(() => {
        nameInput.focus();
    }, 250);

    if (!popup.dataset.ready) {
        let visitorName = "";

        nameNext.addEventListener("click", function () {
            visitorName = nameInput.value.trim();

            if (visitorName.length < 2) {
                nameInput.focus();
                return;
            }

            nameStep.classList.add("secret-final-hidden");
            messageStep.classList.remove("secret-final-hidden");

            greeting.textContent = `${visitorName}, A Note From You 💌`;

            setTimeout(() => {
                messageInput.focus();
            }, 200);
        });

        messageDone.addEventListener("click", function () {
            const message = messageInput.value.trim();

            if (message.length < 2) {
                messageInput.focus();
                return;
            }

            messageStep.classList.add("secret-final-hidden");
            thanksStep.classList.remove("secret-final-hidden");

            thanksText.textContent = `Thank you, ${visitorName}. Your message will stay like a secret under this moonlight.`;
        });

        closeBtn.addEventListener("click", function () {
            popup.classList.remove("show");
        });

        popup.dataset.ready = "yes";
    }
} 
/* =========================
   FINAL 5 SECOND TAP ME DELAY
========================= */

function openBox() {
    const secretBox = document.getElementById("secretBox");
    const boxOpenHint = document.getElementById("boxOpenHint");

    if (!secretBox) return;

    secretBox.classList.add("open");

    if (boxOpenHint && !boxOpenHint.classList.contains("love-burst-mode")) {
        boxOpenHint.classList.remove("hide", "show-hint", "pulse-ready", "show-countdown");
        boxOpenHint.classList.add("love-burst-mode");

        /* first show countdown instead of Tap Me */
        let timeLeft = 7;

        boxOpenHint.innerHTML = `
            <span class="countdown-text">${timeLeft}<span>s</span></span>
        `;

        /* countdown bubble smoothly appear */
        requestAnimationFrame(() => {
            boxOpenHint.classList.add("show-countdown");
        });

        const countdownInterval = setInterval(() => {
            timeLeft--;

            if (timeLeft > 0) {
                boxOpenHint.innerHTML = `
                    <span class="countdown-text">${timeLeft}<span>s</span></span>
                `;
            } else {
                clearInterval(countdownInterval);

                /* countdown disappear smoothly */
                boxOpenHint.classList.remove("show-countdown");

                setTimeout(() => {
                    /* now show Tap Me */
                    boxOpenHint.innerHTML = `
                        <span class="hint-tap-text">Tap Me</span>
                        <span class="hint-mail-emoji">💌</span>
                    `;

                    if (typeof createHintLoveBurst === "function") {
                        createHintLoveBurst(boxOpenHint);
                    }

                    requestAnimationFrame(() => {
                        boxOpenHint.classList.add("show-hint");
                    });

                    setTimeout(() => {
                        boxOpenHint.classList.add("pulse-ready");
                    }, 1200);

                }, 350);
            }
        }, 1000);
    }

    if (typeof createCelebration === "function") {
        createCelebration();
    }
} 
/* =========================
   FINAL 5 SECOND SMOOTH TAP ME
========================= */

function openBox() {
    const secretBox = document.getElementById("secretBox");
    const boxOpenHint = document.getElementById("boxOpenHint");

    if (!secretBox) return;

    secretBox.classList.add("open");

    if (boxOpenHint && !boxOpenHint.classList.contains("love-burst-mode")) {
        boxOpenHint.classList.remove("hide");
        boxOpenHint.classList.remove("show-hint");
        boxOpenHint.classList.remove("pulse-ready");

        boxOpenHint.classList.add("love-burst-mode");

        boxOpenHint.innerHTML = `
            <span class="hint-tap-text">Tap Me</span>
            <span class="hint-mail-emoji">💌</span>
        `;

        if (typeof createHintLoveBurst === "function") {
            createHintLoveBurst(boxOpenHint);
        }

        /* 5 seconds wait, then smooth fade-in */
        setTimeout(() => {
            requestAnimationFrame(() => {
                boxOpenHint.classList.add("show-hint");

                /* fade-in finish howar por soft pulse start */
                setTimeout(() => {
                    boxOpenHint.classList.add("pulse-ready");
                }, 1300);
            });
        }, 5000);
    }

    if (typeof createCelebration === "function") {
        createCelebration();
    }
} 
/* =========================
   FINAL 7 SECOND TIMER THEN TAP ME
========================= */

function openBox() {
    const secretBox = document.getElementById("secretBox");
    const boxOpenHint = document.getElementById("boxOpenHint");

    if (!secretBox) return;

    secretBox.classList.add("open");

    if (boxOpenHint && !boxOpenHint.classList.contains("timer-started")) {
        boxOpenHint.classList.remove("hide", "show-hint", "pulse-ready");
        boxOpenHint.classList.add("love-burst-mode", "countdown-mode", "timer-started");

        let timeLeft = 7;

        boxOpenHint.innerHTML = `
            <span class="countdown-text">${timeLeft}<span>s</span></span>
        `;

        const timer = setInterval(() => {
            timeLeft--;

            if (timeLeft > 0) {
                boxOpenHint.innerHTML = `
                    <span class="countdown-text">${timeLeft}<span>s</span></span>
                `;
            } else {
                clearInterval(timer);

                boxOpenHint.classList.remove("countdown-mode");

                boxOpenHint.innerHTML = `
                    <span class="hint-tap-text">Tap Me</span>
                    <span class="hint-mail-emoji">💌</span>
                `;

                setTimeout(() => {
                    boxOpenHint.classList.add("show-hint");

                    if (typeof createHintLoveBurst === "function") {
                        createHintLoveBurst(boxOpenHint);
                    }
                }, 250);
            }
        }, 1000);
    }

    if (typeof createCelebration === "function") {
        createCelebration();
    }
}

/* popup only Tap Me show howar por kaj korbe */
document.addEventListener("click", function (event) {
    const hintBtn = document.getElementById("boxOpenHint");

    if (!hintBtn) return;

    if (hintBtn.contains(event.target)) {
        if (!hintBtn.classList.contains("show-hint")) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return;
        }
    }
}, true); 
/* =========================
   SEND SECRET MESSAGE TO EMAIL
========================= */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgklpwe";

document.addEventListener("click", async function (event) {
    const doneBtn = event.target.closest("#finalMessageDone");

    if (!doneBtn) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const nameInput = document.getElementById("finalVisitorName");
    const messageInput = document.getElementById("finalVisitorMessage");

    const messageStep = document.getElementById("secretFinalMessageStep");
    const thanksStep = document.getElementById("secretFinalThanksStep");
    const thanksText = document.getElementById("finalThanksText");

    const visitorName = nameInput ? nameInput.value.trim() : "";
    const visitorMessage = messageInput ? messageInput.value.trim() : "";

    if (visitorName.length < 2) {
        nameInput.focus();
        return;
    }

    if (visitorMessage.length < 2) {
        messageInput.focus();
        return;
    }

    doneBtn.disabled = true;
    doneBtn.textContent = "Sending...";

    const formData = new FormData();
    formData.append("Name", visitorName);
    formData.append("Secret Message", visitorMessage);
    formData.append("_subject", "New Secret Message From Romantic Website");

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            if (messageStep) {
                messageStep.classList.add("secret-final-hidden");
            }

            if (thanksStep) {
                thanksStep.classList.remove("secret-final-hidden");
            }

            if (thanksText) {
                thanksText.textContent = `Thank you, ${visitorName}. Your secret message has been sent under the moonlight 💌`;
            }

            if (messageInput) {
                messageInput.value = "";
            }
        } else {
            alert("Message send hoy nai. Formspree setup check koro.");
        }
    } catch (error) {
        alert("Internet problem. Please try again.");
    }

    doneBtn.disabled = false;
    doneBtn.textContent = "Done";
}, true); 