// require('../database/connectDB'); // importa el archivo de conexión a la base de datos
// const Character = require('../database/models/characterSchema'); // importa el modelo de personajes
const { Character } = require('./../database/connectDB');
const mongoose = require('mongoose'); // importa mongoose para poder usar el metodo de busqueda de la base de datos



// para hacer la busqueda de todos los personajes en la base de datos
const getAllCharacter = async () => {

    const getAllCharacters = await Character.find({}); // busca todos los personajes en la base de datos
    // console.log(getAllCharacters);
    return getAllCharacters;
}


const getOneCharacter = async (id) => {
    const userById = await Character.findById(id)// busca un personaje por id en la base de datos con el metodo findById de mongoose
    return userById;
}
const createCharacter = (data) => {
    const newCharacter = new Character(data); // crea un nuevo personaje con los datos que se le pasan y usando el esquema de personajes de la base de datos
    newCharacter.save();  // guarda el nuevo personaje en la base de datos con el metodo save de mongoose
    return newCharacter;
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