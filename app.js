// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); 
    const nombre = input.value.trim(); 

    // Validar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido."); 
        return; 
    }

    const listaAmigos = document.getElementById("listaAmigos"); 

    // Crear un nuevo elemento de lista (<li>) con el nombre ingresado
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombre;
    
    // Agregar el nuevo nombre a la lista
    listaAmigos.appendChild(nuevoAmigo);

    input.value = ""; 
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos"); 
    const amigos = listaAmigos.getElementsByTagName("li"); 
    // Validar si hay nombres en la lista
    if (amigos.length === 0) {
        alert("Por favor, agrega al menos un nombre antes de sortear."); 
        return;
    }

    const resultado = document.getElementById("resultado"); // Obtener el contenedor de resultados
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    // Seleccionar un nombre aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio].textContent;

    // Mostrar el resultado del sorteo
    const resultadoElemento = document.createElement("li");
    resultadoElemento.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    resultado.appendChild(resultadoElemento);
}
