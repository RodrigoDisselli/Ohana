var form = document.getElementById("form");
var steper = document.getElementById("steper");
var btnStart = document.getElementById("btn-start");

inputPrimaryColor.addEventListener("click", () => {
    markStep(1);
});

inputBackgroundColor.addEventListener("click", () => {
    markStep(2);
});

inputTextColor.addEventListener("click", () => {
    markStep(3);
});

inputBorderRadius.addEventListener("click", () => {
    markStep(4);
});


btnStart.addEventListener("click", () => {

    document.getElementById("start").style.opacity = 0;
    document.getElementById("start").style.transition = "all .3s";

    setTimeout(() => {
        form.classList.remove("display-none");
        steper.classList.remove("display-none");
        document.getElementById("start").classList.add("display-none");

        steper.textContent = "1/4";
    }, 600)

    
});

function markStep(step){
    if(step != 'finish'){
        steper.textContent = step + "/4";
    }else{
        steper.textContent = "";
        
    }
    
}