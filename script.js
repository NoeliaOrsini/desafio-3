document.getElementById('iniciar').addEventListener('click', iniciarJuego);

function iniciarJuego() {
    alert("Bienvenido al juego de decisiones de programación!");

    // Elección inicial entre Front-End y Back-End
    let area = prompt("¿Quieres seguir hacia el área de Front-End o hacia el área de Back-End?");

    if (area.toLowerCase() === "front-end") {
        // Elección en Front-End
        let frontEnd = prompt("¿Quieres aprender React o aprender Vue?");
        if (frontEnd.toLowerCase() === "react") {
            alert("¡Genial! React es una biblioteca poderosa para construir interfaces de usuario.");
        } else if (frontEnd.toLowerCase() === "vue") {
            alert("¡Excelente! Vue es un framework progresivo para construir interfaces de usuario.");
        } else {
            alert("Opción no reconocida.");
        }
    } else if (area.toLowerCase() === "back-end") {
        // Elección en Back-End
        let backEnd = prompt("¿Quieres aprender C# o aprender Java?");
        if (backEnd.toLowerCase() === "c#") {
            alert("¡Perfecto! C# es un lenguaje versátil y poderoso desarrollado por Microsoft.");
        } else if (backEnd.toLowerCase() === "java") {
            alert("¡Muy bien! Java es un lenguaje de programación orientado a objetos muy popular.");
        } else {
            alert("Opción no reconocida.");
        }
    } else {
        alert("Opción no reconocida.");
        return;
    }

    // Elección para especialización o Fullstack
    let especializacion = prompt("¿Quieres seguir especializándote en el área elegida o desarrollarte para convertirte en Fullstack?");
    if (especializacion.toLowerCase() === "especializarse") {
        alert("¡Perfecto! Seguirás profundizando en tu área de especialización.");
    } else if (especializacion.toLowerCase() === "fullstack") {
        alert("¡Excelente decisión! Te convertirás en un desarrollador Fullstack.");
    } else {
        alert("Opción no reconocida.");
        return;
    }

    // Ingreso de tecnologías adicionales
    let tecnologias = [];
    let tecnologia = "";

    while (true) {
        tecnologia = prompt("¿Qué tecnologías te gustaría aprender? Ingresa el nombre de la tecnología o escribe 'fin' para terminar.");

        if (tecnologia.toLowerCase() === "fin") {
            break;
        }

        tecnologias.push(tecnologia);
        alert("¡Genial! " + tecnologia + " es una tecnología muy interesante.");
    }

    // Mostrar lista de tecnologías aprendidas
    if (tecnologias.length > 0) {
        alert("Las tecnologías que has ingresado son: " + tecnologias.join(", "));
    } else {
        alert("No has ingresado ninguna tecnología.");
    }
}
