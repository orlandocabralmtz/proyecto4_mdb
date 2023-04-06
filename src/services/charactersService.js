require('../database/connectDB'); // importa el archivo de conexión a la base de datos
// const Character = require('../database/models/characterSchema'); // importa el modelo de personajes
const Character = require('./../database/connectDB'); 



const getAllCharacter = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const allCharacters = Character.getAllCharacter();
            console.log(allCharacters);
            resolve(allCharacters);
        }, 2000);
    });
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