use ('mi_base_de_datos_vrl');

db.usuarios.insertOne({
    nombre:"Valeria Lara",
    edad:16,
    email:"valeria-lara@ejemplo.com",
    insActive:false,
    saldo:1631285.1255,
    fechaRegistro: new Date(),
    genero:"femenino",
    ciudad:"paris",
    idiomas: ["Español", "ingles"],
    numerosTelefono:["81 82 93 8283", "81 64 67 8343"]
});