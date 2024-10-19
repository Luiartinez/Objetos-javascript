let alumno = {
   nombre: "luis martinez",
   calificaciones: {
    ingles: 9.0 ,
    programacion: 8.0,
    matematica: 7.0

   }
};

let promedio = (
   (alumno.calificaciones.ingles+
    alumno.calificaciones.programacion+
    alumno.calificaciones.matematica
   )/3

).toFixed(2);

console.log(`nobre del alumno: ${alumno.nombre}`)
console.log(`calificaciones: ${promedio}`)