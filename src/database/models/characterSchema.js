// const {Schema, model} = require('mongoose'); // importa schema y model de mongoose 

// const characterSchema = new Schema({ // crea un esquema para los personajes. el esquema es la estructura de los datos que se guardarán en la base de datos en este caso en la colección characters
//     name: String, // nombre del personaje
//     race: String, // raza del personaje
//     gender: String, // género del personaje
//     bio: String, // biografía del personaje
//     health: Number, // salud del personaje
//     attack: Number, // ataque del personaje
//     defense: Number, // defensa del personaje
//     kiRestoreSpeed: Number, // velocidad de restauración de ki del personaje
//     ability: String, // habilidad especial del personaje
//     created: Date // fecha de creación del personaje
// });


// const Character = model('Character', characterSchema); // crea un modelo de personaje a partir del esquema de personaje. character es el nombre del modelo y characterSchema es el esquema que se usará para crear el modelo




// // const character = new Character({ // crea una instancia de personaje a partir del modelo de personaje
// //     name: 'Goku', 
// //     race: 'Saiyan', 
// //     gender: 'Male', 
// //     bio: 'Goku is a Saiyan from planet Vegeta, and the main protagonist of the Dragon Ball series. He is the husband of Chi-Chi, the father of Gohan and Goten, the grandfather of Pan, and the adoptive grandfather of Trunks. Goku is the strongest fighter on the planet and is widely considered the most powerful being on Earth. He is also the deuteragonist of the Dragon Ball Z series, and the protagonist of Dragon Ball Super. Goku is a Saiyan originally sent to Earth as an infant with the mission to destroy it, but was instead raised by Grandpa Gohan and became Earth\'s greatest defender. He is the husband of Chi-Chi, the father of Gohan and Goten, the grandfather of Pan, and the adoptive grandfather of Trunks. Goku is the strongest fighter on the planet and is widely considered the most powerful being on Earth. He is also the deuteragonist of the Dragon Ball Z series, and the protagonist of Dragon Ball Super. Goku is a Saiyan originally sent to Earth as an infant with the mission to destroy it, but was instead raised by Grandpa Gohan and became Earth\'s greatest defender.', // biografía del personaje
// //     health: 100,
// //     attack: 100, 
// //     defense: 100,
// //     kiRestoreSpeed: 100, 
// //     ability: 'Kamehameha',
// //     created: new Date()
// // });

// // character.save() // guarda el personaje en la base de datos
// //     .then(result => { // si la operación es exitosa ejecuta el código dentro del then
// //         console.log(result); // muestra el resultado de la operación en la consola
// //         mongoose.connection.close(); // cierra la conexión a la base de datos
// //     }).catch(err => { // si la operación falla ejecuta el código dentro del catch   
// //         console.error(err);
// //     });


// // // para hacer la busqueda de todos los personajes en la base de datos
// // Character.find({}).then(result => { // busca todos los personajes en la base de datos)
// //     console.log(result) // muestra los resultados en la consola
// //     // mongoose.connection.close() // cierra la conexión a la base de datos
// // }).catch(err => { // si hay un error
// //     console.error(err) // muestra el error en la consola
// // });



// module.exports = Character; // exporta el modelo de personaje