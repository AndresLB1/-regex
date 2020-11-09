//Consultas


//El campo "nombre" acaba en "l"
db.personas.find({nombre: {$regex: /l$/}})

//El campo "ocupaciones" empieza por "p" (independiente de mayúsculas o minúsculas)
db.personas.find({ ocupaciones: {$regex: /^p/i}})

//Documentos en cuyo campo "localidad" haya una "g" entre carácteres
db.personas.find({ localidad: {$regex: /\Bg/}})

//Campos localidad en los que hay una "S", cualquier carácter, y una "v"
db.personas.find({ localidad: {$regex: /S.v/}})

//Campos "edad" mayor que "19", menor que "76" y diferente de "32"
db.personas.find({ $and: [{edad: {$gt:18}}, {edad: {$lt:76}}, {edad: {$ne: 32}} ]})

//Campos "edad" mayores o iguales que "18" y menores o iguales que "40"
db.personas.find({ $and: [{edad: {$gte:18}}, {edad: {$lte:40}} ]})

//Muestra los campos "ocupaciones" en los que esté "pensionista", o los que el campo "nombre" es Jesus
db.personas.find({$or: [{ocupaciones: { $in: ["pensionista"] } }, {nombre: "Jesus"} ] })

//Muestra campos edad que no son iguales a los indicados
db.personas.find({edad:{$nin: [76,32,40,18]}})

//Muestra campos "ocupaciones" y "nombre" distinto a los indicado
db.personas.find({$nor: [{ocupaciones: "programador"}, {nombre: "Ezequiel"}]})