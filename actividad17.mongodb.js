use ('escuela')
db.createCollection('estudiantes');

db.estudiantes.insertMany([
  {
    nombre: "Valeria Lara",
    edad: 16,
    activo: true,
    cursos: ["Programación", "Bases de Datos", "Matematicas"],
    contacto: {
      email: "Valeria@escuela.com",
      telefono: "555-1234"
    },
    promedio: 8.7
  },
  {
    nombre: "Laura Gómez",
    edad: 22,
    activo: false,
    cursos: ["Literatura", "Historia del Arte"],
    contacto: {
      email: "laura.gomez@escuela.com",
      telefono: "555-5678"
    },
    promedio: 9.3
  },
  {
    nombre: "Miguel Sánchez",
    edad: 19,
    activo: true,
    cursos: ["Física", "Cálculo", "Química"],
    contacto: {
      email: "miguel.sanchez@escuela.com",
      telefono: "555-8765"
    },
    promedio: 8.9
  },
  {
    nombre: "Sofía Ramírez",
    edad: 21,
    activo: true,
    cursos: ["Economía", "Estadística"],
    contacto: {
      email: "sofia.ramirez@escuela.com",
      telefono: "555-4321"
    },
    promedio: 9.6
  },
  {
    nombre: "Diego Herrera",
    edad: 23,
    activo: false,
    cursos: ["Psicología", "Sociología", "Antropología"],
    contacto: {
      email: "diego.herrera@escuela.com",
      telefono: "555-2468"
    },
    promedio: 7.8
  }
]);


