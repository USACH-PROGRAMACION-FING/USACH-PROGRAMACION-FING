function definirEstilos(){
	var link = document.createElement("link");
	link.href = 'estilo.css';
	link.id = 'estilo';
	link.rel = 'stylesheet';
	link.type = 'text/css';
	
	document.head.appendChild(link);
}

/*
function llamarFuente(){
	var enlace = document.createElement("LINK");
	enlace.setAttribute("rel","stylesheet");
	enlace.setAttribute("href","https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
	document.head.appendChild(enlace);
}
*/
