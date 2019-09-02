document.documentElement.style.setProperty('--primary-color-sample', "#0590FF");

function primaryColorSample(color) {

    if(String(color).includes("#")){
        if(String(color).length == 1){
            color += "000000"
        }if(String(color).length == 2){
            color += "00000"
        }if(String(color).length == 3){
            color += "0000"
        }if(String(color).length == 4){
            color += "000"
        }if(String(color).length == 5){
            color += "00"
        }if(String(color).length == 6){
            color += "0"
        }
    }

    document.documentElement.style
        .setProperty('--primary-color-sample', color);
}

function borderRadiusSample(border) {
    document.documentElement.style
        .setProperty('--border-radius-sample', (border + "px"));
}

function backgroundColorSample(color) {

    if(String(color).includes("#")){
        if(String(color).length == 1){
            color += "000000"
        }if(String(color).length == 2){
            color += "00000"
        }if(String(color).length == 3){
            color += "0000"
        }if(String(color).length == 4){
            color += "000"
        }if(String(color).length == 5){
            color += "00"
        }if(String(color).length == 6){
            color += "0"
        }
    }

    document.documentElement.style
        .setProperty('--background-color-sample', color);
}

function textColorSample(color) {

    if(String(color).includes("#")){
        if(String(color).length == 1){
            color += "000000"
        }if(String(color).length == 2){
            color += "00000"
        }if(String(color).length == 3){
            color += "0000"
        }if(String(color).length == 4){
            color += "000"
        }if(String(color).length == 5){
            color += "00"
        }if(String(color).length == 6){
            color += "0"
        }
    }

    document.documentElement.style
        .setProperty('--text-color-sample', color);
}

function scrollStyleSample(color, width) {
    document.documentElement.style
        .setProperty('--scroll-color-sample', color);
    document.documentElement.style
        .setProperty('--scroll-width-sample', (width + "px"));
}