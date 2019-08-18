function color(color) {
    document.documentElement.style
    .setProperty('--primary-color', color);
}

function border(border){
    border = border + "px";
    document.documentElement.style
    .setProperty('--border-radius', border);
}

function background(color){
    document.documentElement.style
    .setProperty('--background-color', color);
}

function textColor(color){
    document.documentElement.style
    .setProperty('--text-color', color);
}