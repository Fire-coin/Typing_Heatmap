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
        box.textContent = layout[letter];
        
        box.style.left = `${col * (2 * width + padding) + offsets[row]}px`;
        box.style.top = `${row * (30 + 45)}px`
        
        container.appendChild(box);
        letter++;
    }
}


// for (let i = 0; i < 5; i++) {
//     const box = document.createElement("div");
//     box.classList.add("key");
//     container.appendChild(box);
// }