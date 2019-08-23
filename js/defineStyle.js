function primaryColor(color) {
    document.documentElement.style
    .setProperty('--primary-color', color);
}

function borderRadius(border){
    document.documentElement.style
    .setProperty('--border-radius', (border + "px"));
}

function background(color){
    document.documentElement.style
    .setProperty('--background-color', color);
}

function textColor(color){
    document.documentElement.style
    .setProperty('--text-color', color);
}

function scrollStyle(color, width){
    document.documentElement.style
    .setProperty('--scroll-color', color);
    document.documentElement.style
    .setProperty('--scroll-width', (width + "px"));
}

function defineStyle(primaryColor, borderRadius, backgroundColor, textColor, scrollStyleColor, scrollStyleWidth){
    primaryColor(primaryColor); //default = #0590FF
    borderRadius(borderRadius); //default = 4
    backgroundColor(backgroundColor); //default = #FFFFFF
    textColor(textColor); //default = #333333
    scrollStyleColor(scrollStyleColor); //default = #AAAAAA
    scrollStyleWidth(scrollStyleWidth); //default = 10
}