var floating = document.getElementsByClassName("floating-drop");
var floatingDropList = document.getElementsByClassName("floating-button-droplist-item");

window.onload = () => { 
    hoverFloatingBuntton();
}

function hoverFloatingBuntton() {
    for(var i = 0; i < floating.length; i++){
        floating[i].addEventListener("mouseover", () => {
            openFloatingDrop();
        })
        floating[i].addEventListener("mouseout", () => {
            closeFloatingDrop();
        })
    }  
}

function openFloatingDrop() {
    for(var i = 0; i < floatingDropList.length; i++){
        floatingDropList[i].style.display = "flex";
        floatingDropList[i].style.opacity = "1";
        floatingDropList[i].style.transform = "scale(-1)";
        floatingDropList[i].style.transform = "translate(-120px,-40px)";
        floatingDropList[i].style.transitionTimeFunction = "cubic-bezier(.17,.67,.83,.67)";
        floatingDropList[i].style.WebkitTransition = "all .3s"; 
    }
}

function closeFloatingDrop() {
    document.addEventListener("click", () => {
        for(var i = 0; i < floatingDropList.length; i++){
            floatingDropList[i].style.opacity = "0";
            floatingDropList[i].style.transform = "translate(120px, 40px)";
            floatingDropList[i].style.transform = "scale(-1)";
            floatingDropList[i].style.transitionTimeFunction = "cubic-bezier(.17,.67,.83,.67)";
            floatingDropList[i].style.WebkitTransition = "all .3s";
        }
    });
}
