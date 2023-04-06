// require('../database/connectDB'); // importa el archivo de conexión a la base de datos
// const Character = require('../database/models/characterSchema'); // importa el modelo de personajes
const { Character } = require('./../database/connectDB');



// para hacer la busqueda de todos los personajes en la base de datos
const getAllCharacter = async () => {
    const getAllCharacters = await Character.find({});
    // console.log(getAllCharacters);
    return getAllCharacters;
}


const getOneCharacter = () => {
    return;
}
const createCharacter = () => {
    return;
}
const updateCharacter = () => {
    return;
}
const deleteCharacter = () => {
    return;
}


module.exports = {   // exporta las funciones para que se puedan usar en otros archivos. en este caso en el controlador de characters
    getAllCharacter,
    getOneCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
}