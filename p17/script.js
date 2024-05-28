function shuffle() {
    const img = document.getElementById("img");
    let random = Math.floor(Math.random() * 6) + 1; // Added '=' and ';' to complete the statement
    img.setAttribute("src", `assets/${random}.png`); // Used template literals for string interpolation
}

function anim() {
    const img = document.getElementById("img");
    img.setAttribute("src", "assets/dice-roll.gif");
    setTimeout(shuffle, 500); // Moved setTimeout call to the end of the function body
}
