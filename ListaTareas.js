const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tareas = [];

function agregarTarea() {
  return new Promise((resolve) => {
    rl.question("Indicador: ", (indicador) => {
      rl.question("Descripción: ", (descripcion) => {
        tareas.push({ indicador, descripcion, completada: false });
        console.log("Tarea agregada exitosamente.");
        resolve();
      });
    });
  });
}

function eliminarTarea() {
  return new Promise((resolve) => {
    rl.question("Índice de la tarea a eliminar: ", (indice) => {
      if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
        console.log("Tarea eliminada exitosamente.");
      } else {
        console.log("Índice inválido.");
      }
      resolve();
    });
  });
}

function completarTarea() {
  return new Promise((resolve) => {
    rl.question("Índice de la tarea completada: ", (indice) => {
      if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log("Tarea completada.");
      } else {
        console.log("Índice inválido.");
      }
      resolve();
    });
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
}

async function mostrarMenu() {
  console.log("\n== Menú ==");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Completar tarea");
  console.log("4. Mostrar tareas");
  console.log("5. Salir");

  const opcion = await new Promise((resolve) => {
    rl.question("Seleccione una opción: ", (input) => {
      resolve(input);
    });
  });

  switch (opcion) {
    case "1":
      await agregarTarea();
      break;
    case "2":
      await eliminarTarea();
      break;
    case "3":
      await completarTarea();
      break;
    case "4":
      mostrarTareas();
      break;
    case "5":
      rl.close();
      return;
    default:
      console.log("Opción inválida.");
  }

  await mostrarMenu();
}

mostrarMenu();
