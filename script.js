
harvey dodman-edwards <harveydodman@gmail.com>
12:17 PM (0 minutes ago)
to me

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const btnRow = document.getElementById("btnRow");
const card = document.getElementById("card");

let yesScale = 1;
let dodges = 0;

// Make "No" able to move inside the button area
noBtn.style.position = "absolute";
positionNoRandomly();

// Desktop: dodge on hover
noBtn.addEventListener("mouseenter", dodge);
// Mobile: dodge on touch
noBtn.addEventListener("touchstart", (e) => {
e.preventDefault();
dodge();
}, { passive: false });

function dodge(){
dodges++;
positionNoRandomly();

// make YES bigger each dodge
yesScale = Math.min(yesScale + 0.12, 2.2);
yesBtn.style.transform = `scale(${yesScale})`;

// playful subtext changes
const sub = document.getElementById("subtext");
const lines = [
"No seems a bit shy 😈",
"Nice try 😌",
"You’re not catching it 😂",
"Just press YES, princess 👑",
"Okayyyy stop bullying the button 😭"
];
sub.textContent = lines[Math.min(dodges, lines.length-1)];
}

function positionNoRandomly(){
const pad = 8;
const area = btnRow.getBoundingClientRect();

// keep it within the btnRow area
const maxX = area.width - noBtn.offsetWidth - pad;
const maxY = area.height - noBtn.offsetHeight - pad;

const x = Math.max(pad, Math.random() * maxX);
const y = Math.max(pad, Math.random() * maxY);

noBtn.style.left = `${x}px`;
noBtn.style.top = `${y}px`;
}

// Landing page on YES
yesBtn.addEventListener("click", () => {
card.classList.add("landing");
card.innerHTML = `
<div class="cat" aria-hidden="true">🐱💘</div>
<h1>YAY! 🎉</h1>
<p class="sub">See you on Valentine’s, Zof. I love you.</p>
<div class="media">
<img src="us.jpg" alt="Us"/>
</div>
`;
});
