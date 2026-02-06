// 💖 Reasons
const reasons = [
    "The way you love me so purely ❤️",
    "You make me feel chosen",
    "Your care feels like home",
    "You understand me without words",
    "Being loved by you is my favorite feeling",
    "You love me in ways I didn’t know I needed"
];

function showReason() {
    const random = Math.floor(Math.random() * reasons.length);
    document.getElementById("reason").innerText = reasons[random];
}

// ⏳ Countdown
const meetDate = new Date("2025-10-21");

function updateCountdown() {
    const now = new Date();
    const diff = now - meetDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText =
        `${days} days of loving you 💑`;
}
setInterval(updateCountdown, 1000);

// 🔒 Unlock Heart
function askPassword() {
    const password = prompt("What do I call you? 💌");
    if (password && password.toLowerCase() === "monty") {
        window.location.href = "secret.html";
    } else {
        alert("Wrong 😝 Try again!");
    }
}

// 💘 YES button
function yesClicked() {
    document.getElementById("valentineMsg").innerText =
        "You already were my Valentine ❤️ Forever.";

    explodeHearts();
    confetti();
}

// 😈 NO button runs away
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// 💥 Heart explosion
function explodeHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }
}

// 🎉 Confetti
function confetti() {
    for (let i = 0; i < 30; i++) {
        const conf = document.createElement("div");
        conf.className = "heart";
        conf.innerText = "🎉";
        conf.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(conf);

        setTimeout(() => conf.remove(), 3000);
    }
}
