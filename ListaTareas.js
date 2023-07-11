const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tareas = [];

function agregarTarea() {
  rl.question("Indicador: ", (indicador) => {
    rl.question("Descripción: ", (descripcion) => {
      tareas.push({ indicador, descripcion, completada: false });
      console.log("Tarea agregada exitosamente.");
      mostrarMenu();
    });
  });
}

function eliminarTarea() {
  rl.question("Índice de la tarea a eliminar: ", (indice) => {
    if (indice >= 0 && indice < tareas.length) {
      tareas.splice(indice, 1);
      console.log("Tarea eliminada exitosamente.");
    } else {
      console.log("Índice inválido.");
    }
    mostrarMenu();
  });
}

function completarTarea() {
  rl.question("Índice de la tarea completada: ", (indice) => {
    if (indice >= 0 && indice < tareas.length) {
      tareas[indice].completada = true;
      console.log("Tarea completada.");
    } else {
      console.log("Índice inválido.");
    }
    mostrarMenu();
  });
}

function mostrarTareas() {
  console.log("Lista de tareas:");
  tareas.forEach((tarea, indice) => {
    console.log(
      `${indice}: [${tarea.completada ? "x" : " "}] ${tarea.indicador} - ${
        tarea.descripcion
      }`
    );
  });
  mostrarMenu();
}

function mostrarMenu() {
  console.log("\n== Menú ==");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Completar tarea");
  console.log("4. Mostrar tareas");
  console.log("5. Salir");

  rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        agregarTarea();
        break;
      case "2":
        eliminarTarea();
        break;
      case "3":
        completarTarea();
        break;
      case "4":
        mostrarTareas();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Opción inválida.");
        mostrarMenu();
        break;
    }
  });
}

mostrarMenu();
