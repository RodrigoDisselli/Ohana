var inputData = document.getElementsByClassName("input-data");

Array.from(inputData).forEach(() => {
    addEventListener("keypress", (event) => {
        if(event.keyCode == 13){
            event.preventDefault();
            console.log("preenchido");
        }else{
            console.log("nada");
        }
    });
});

function getKeyPress(){

}