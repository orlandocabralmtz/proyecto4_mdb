const mongoose = require('mongoose'); // importa mongoose para usarlo en el proyecto
const { Schema, model } = require('mongoose');
require('dotenv').config(); // importa dotenv para usarlo en el proyecto
const connectionDB = process.env.DB_CONNECTION // obtiene la cadena de conexión de la base de datos desde el archivo .env

// conexion a la base de datos mongoDB
mongoose.connect(connectionDB) // conecta a la base de datos
    .then(() => {
        console.log('🚀 Database connected') // muestra un mensaje en la consola si la conexión es exitosa
    }).catch((err) => {
        console.log(err) // muestra un mensaje en la consola si la conexión falla
    });



//*************************************************************************************************************/



const characterSchema = new Schema({ // crea un esquema para los personajes. el esquema es la estructura de los datos que se guardarán en la base de datos en este caso en la colección characters
    name: {
        type: String, // nombre del personaje
        required: true // el nombre del personaje es requerido
    },
    race: String, // raza del personaje
    gender: String, // género del personaje
    bio: String, // biografía del personaje
    health: Number, // salud del personaje
    attack: Number, // ataque del personaje
    defense: Number, // defensa del personaje
    kiRestoreSpeed: Number, // velocidad de restauración de ki del personaje
    ability: String, // habilidad especial del personaje
    created: Date // fecha de creación del personaje
});


// este codigo es para que el id que se muestre en la base de datos sea el id que se genera automaticamente por mongoDB y eliminar los campos __v y _id que se generan automaticamente por mongoDB
characterSchema.set('toJSON', { // se le aplica al esquema de personaje en este caso es el characterSchema
    transform: (document, returnedObject) => { // transforma el documento en un objeto
        returnedObject.id = returnedObject._id; // cambia el id por el _id que se genera automaticamente por mongoDB
        delete returnedObject._id; // eliminar el _id que se genera automaticamente por mongoDB
        delete returnedObject.__v; // eliminar el __v que se genera automaticamente por mongoDB
    }
})


const Character = model('Character', characterSchema); // crea un modelo de personaje a partir del esquema de personaje. character es el nombre del modelo y characterSchema es el esquema que se usará para crear el modelo

// // para hacer la busqueda de todos los personajes en la base de datos
// const getAllCharacter = () => {
//     const getAllCharacter = Character.find({}).then(result => { // busca todos los personajes en la base de datos)
//         // console.log(result) // muestra los resultados en la consola
//         // // mongoose.connection.close() // cierra la conexión a la base de datos
//     }).catch(err => { // si hay un error
//         console.error(err) // muestra el error en la consola
//     });
//     return getAllCharacter;
// }


// model.exports = {
//     getAllCharacter
// }














// const character = new Character({ // crea una instancia de personaje a partir del modelo de personaje
//     name: 'Vegeta', 
//     race: 'Saiyan', 
//     gender: 'Male', 
//     bio: " prince of the Saiyan race and is one of the main characters of the series. Vegeta is known for his arrogant and prideful personality, as well as his obsession with becoming stronger. Throughout the series, Vegeta undergoes significant character development, going from being a villain to a hero and ally of the main characters. He is a very popular character among fans of the series.",
//     health: 100,
//     attack: 100, 
//     defense: 100,
//     kiRestoreSpeed: 100, 
//     ability: 'Kamehameha',
//     created: new Date()
// });

// character.save() // guarda el personaje en la base de datos
//     .then(result => { // si la operación es exitosa ejecuta el código dentro del then
//         console.log(result); // muestra el resultado de la operación en la consola
//         mongoose.connection.close(); // cierra la conexión a la base de datos
//     }).catch(err => { // si la operación falla ejecuta el código dentro del catch   
//         console.error(err);
//     });


// // para hacer la busqueda de todos los personajes en la base de datos
// Character.find({}).then(result => { // busca todos los personajes en la base de datos)
//     console.log(result) // muestra los resultados en la consola
//     mongoose.connection.close() // cierra la conexión a la base de datos
// }).catch(err => { // si hay un error
//     console.error(err) // muestra el error en la consola
// });


module.exports = {
    Character, // exporta el modelo de personaje
    // //     getAllCharacter // exporta la función para obtener todos los personajes
}
