const container = document.querySelector(".container");
container.style.position = "relative";

let width = 30;
let padding = 25;

let cols = [10, 9, 7];
let offsets = [0, width + padding / 2, 2 * width + padding + 20];

let letter = 0;
let layout = "QWERTYUIOPASDFGHJKLZXCVBNM";

for (let row = 0; row < 3; row++) {
    for (let col = 0; col < cols[row]; col++) {
        const box = document.createElement("div");
        box.classList.add("key");
        box.id = letter;
        box.textContent = layout[letter];
        
        box.style.left = `${col * (2 * width + padding) + offsets[row]}px`;
        box.style.top = `${row * (30 + 45)}px`
        
        container.appendChild(box);
        letter++;
    }
}

function animateColor(startRGB, endRGB, element, duration = 2000) {
    let startTime = null;
    let flag = false;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Interpolate each RGB channel
        const r = Math.round(startRGB[0] + (endRGB[0] - startRGB[0]) * progress);
        const g = Math.round(startRGB[1] + (endRGB[1] - startRGB[1]) * progress);
        const b = Math.round(startRGB[2] + (endRGB[2] - startRGB[2]) * progress);

        element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        if (progress < 1) {
            requestAnimationFrame(step); // continue animation
        } else if (!flag) {
            flag = true;
            startTime = null;
            startRGB = endRGB;
            endRGB = [128, 128, 128];
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}


document.addEventListener("keydown", (event) => {
    if (document.activeElement.id != "Text1") return;
    let pressedKey = event.code.slice(3);
    if (pressedKey.length != 1) return;

    let index = layout.indexOf(pressedKey);
    const box = document.getElementById(String(index));

    animateColor([0, 255, 0], [180, 100, 0], box);
});


function clearTextEntry() {
    document.getElementById("Text1").value = "";
}



document.getElementById("ClearButton").onclick = clearTextEntry;