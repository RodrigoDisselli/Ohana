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
        floatingDropList[i].classList.add("drop-active");
    }
}

function closeFloatingDrop() {
    document.addEventListener("click", () => {
        for(var i = 0; i < floatingDropList.length; i++){
            floatingDropList[i].classList.remove("drop-active");
        }
    });
}
