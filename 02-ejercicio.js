
const helloKitty ={ 
    "nickname": "ValivaliCR7",
    "Npersonajes": 4,
    "personajes": ["My melody","Pochaco","Pompompuri","Choco Cat"],
    "Mymelody": true,
    "tipo": "kawai",
}

console.log(helloKitty);

console.log ('mi nombre de usuario es ' + helloKitty.nickname);

console.log('tengo  ' +  helloKitty.Npersonajes + ' personajes');

console.log('los personajes que tengo son   ' +  helloKitty.personajes );

console.log('estoy activo? ' + helloKitty.Mymelody)

console.log('tipo ' + helloKitty.tipo);

console.table(helloKitty);