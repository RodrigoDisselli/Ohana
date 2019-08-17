// adiciona title automaticamente a todos os links na tela
Array.from(document.getElementsByTagName("a")).forEach(links => {links.title = links.textContent});

Array.from(document.getElementsByClassName("input")).forEach(inputs => {
    console.log(inputs.innerHTML)
    // inputs.innerHTML.from(document.getElementsByTagName("label")).forEach(addIdInput); console.log("rodou")});
});
// Array.from(document.getElementsByClassName("input")).forEach((inputs) => {
//     inputs.from(document.getElementsByTagName("label")[this]).forEach(() => { console.log("inputs:" + inputs)})
// })

function addIdInput() {
    console.log("Adiciona input");
}