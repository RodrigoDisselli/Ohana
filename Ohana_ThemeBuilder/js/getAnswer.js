// var inputData = document.getElementsByClassName("input-data");

// Array.from(inputData).forEach(() => {
//     addEventListener("keypress", (event) => {
//         if(event.keyCode == 13){
//             event.preventDefault();
//             console.log("preenchido");
//         }else{
//             console.log("nada");
//         }
//     });
// });

var inputPrimaryColor = document.getElementById("input-primary-color");
var inputBackgroundColor = document.getElementById("input-background-color");
var inputTextColor = document.getElementById("input-text-color");
var inputBorderRadius = document.getElementById("input-border-radius");

inputPrimaryColor.addEventListener("keypress", (event) => {
    getKeyPress(event, "color", "input-primary-color", "background-color");
    setTimeout(() => { primaryColor(inputPrimaryColor.value) }, 650);
});

inputBackgroundColor.addEventListener("keypress", (event) => {
    getKeyPress(event, "color", "input-background-color", "text-color");
    setTimeout(() => { backgroundColor(inputBackgroundColor.value) }, 650);
});

inputTextColor.addEventListener("keypress", (event) => {
    getKeyPress(event, "color", "input-text-color", "border-radius");
    setTimeout(() => { textColor(inputTextColor.value) }, 650);
});

inputBorderRadius.addEventListener("keypress", (event) => {
    getKeyPress(event, "number", "input-border-radius", "border-radius");
    setTimeout(() => { borderRadius(inputBorderRadius.value) }, 650);
});

function fieldValidation(type, field, target){
    if(type == "color"){
        var value = document.getElementById(field).value;
        if(String(value).includes("#") || String(value).includes("rgb(")){
            goToScroll(target);
            console.log("valido");
        }
        console.log("invalido")
    }if(type == "number"){
        if(value >= 0){
            goToScroll(target);
            console.log("valido");
        }
    }
}

function getKeyPress(event, type, field, target){
    if(event.keyCode == 13){
        event.preventDefault();
        fieldValidation(type, field, target);
        console.log("enter = " + field);
    }else{
    }
}

function goToScroll(elementTarget){
    var inputTarget = "input-" + elementTarget
    document.getElementById(elementTarget).scrollIntoView({behavior: "smooth"});
    setTimeout(() => { document.getElementById(inputTarget).focus(); }, 650);

    console.log("focus");
}