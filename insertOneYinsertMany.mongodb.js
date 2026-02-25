use('mi_base_de_datos_vrl')

db.createCollection('productos');

//El metodo insertOne sirve para registrar un doc en la coleccion
db.productos.insertOne({
    nombre:"Audifonos",
    precio:1999.99,
    categoria:"electronica",
    stock:20,
    enOferta:true,
    fechaIngreso: new Date ("2026-02-25")

})

use('mi_base_de_datos_vrl')

//Valeria Rivera Lara
db.productos.insertMany([
    {
        nombre:"Mause inalambrico",
        precio:648.59,
        categoria:"accesorios",
        stock:156,
        enOferta:false,
        descuento:10,

        especificaciones:{
            conexion:"Bluetooth 5.0",
            bateria:"recargable",
            dpi:2400,
            botones:6
        },

        colores:["Negro", "Rojo", "Rosa"],

        provedores:[
            {
                nombre:"red Dragon",
                precio:500,
                ciudad:"china"
            }
            
        ]
    },
    {
        nombre:"Teclado mecanico RGB",
        precio:2999.99,
        categoria:"accesorios",
        stock:150,
        enOferta:false,

        especificaciones:{
            switches:"Cherry MX red",
            retroiluminacion:"RGB",
            teclado:"español",
            conexion:"USB C",
            teclas:104,
            soporte:{
                windows:true,
                mac:true,
                linux:true,

            }
        },

        garantia:{
            duracion:24,
            tipo:"internacional",
            cobertura:["defectos de fabricacion", "retroiluminacion"]
        }
    },

 {
        nombre:"Monitores",
        precio:1500.59,
        categoria:"Tecnologia",
        stock:50,
        enOferta:false,
        descuento:10,

        especificaciones:{
            Taza:"60Hz"
        },

        colores:["Negro", "Gris", "Colores"],

       
    }
    
])