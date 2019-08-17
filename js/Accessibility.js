// adiciona title automaticamente a todos os links na tela
Array.from(document.getElementsByTagName("a")).forEach(links => {links.title = links.textContent});