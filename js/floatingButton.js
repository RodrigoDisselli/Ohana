var floating = document.getElementsByClassName("floating-drop");
var floatingDropList = document.getElementsByClassName("floating-button-droplist-item");

console.log("float-start");

window.onload = () => { 
    hoverFloatingBuntton();
}



function hoverFloatingBuntton() {
    for(var i = 0; i < floating.length; i++){
        floating[i].addEventListener("mouseover", () => {
            console.log("float-hover");
            openFloatingDrop();
        })
        floating[i].addEventListener("mouseout", () => {
            console.log("float-hover");
            closeFloatingDrop();
        })
    }
    
}

function openFloatingDrop() {
    console.log("float-function");

    for(var i = 0; i < floatingDropList.length; i++){
        floatingDropList[i].style.display = "block";
        floatingDropList[i].style.opacity = "1";
        floatingDropList[i].style.transform = "scale(1)";
        floatingDropList[i].style.transform = "translate(-120px,-40px)";
        floatingDropList[i].style.transitionTimeFunction = "cubic-bezier(.17,.67,.83,.67)";
        floatingDropList[i].style.WebkitTransition = "all .3s";
        
    }
}

function closeFloatingDrop() {
    console.log("mouse out");

    // for(var i = 0; i < floating.length; i++){
    //     floating[i].addEventListener("click", () => {
    //         for(var i = 0; i < floatingDropList.length; i++){
    //             floatingDropList[i].style.display = "none";
    //             floatingDropList[i].style.opacity = "0";
    //             floatingDropList[i].style.transition = "all .3s";
    //         }
    //     });
    // }

    document.addEventListener("click", () => {
        for(var i = 0; i < floatingDropList.length; i++){
            floatingDropList[i].style.display = "none";
            floatingDropList[i].style.opacity = "0";
            floatingDropList[i].style.transitionTimeFunction = "cubic-bezier(.17,.67,.83,.67)";
            floatingDropList[i].style.WebkitTransition = "all .3s";
            floatingDropList[i].style.transform = "translate(0px, 0px)";
            floatingDropList[i].style.transform = "scale(0)";
        }
    });

}
