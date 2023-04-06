// const characterService = require('../services/charactersService'); // importa el servicio de personajes
const { Character } = require('./../database/connectDB');
const { getAllCharacter, getOneCharacter, createCharacter } = require('../services/charactersService'); // importa la función de obtener todos los personajes



const getAllCharacters = async (req, res) => {
    try {
        const allCharacters = await getAllCharacter();  // esta función se importa  desde el servicio de characters 
        res.status(200).json({ message: 'OK', data: allCharacters });
    } catch {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getOneCharacterById = async (req, res) => {
    const { id } = req.params;
    const userById = await getOneCharacter(id);
    res.status(200).json({ message: 'OK by Id', data: userById });
}


const newCharacter = async (req, res) => {
    const newCharacter = await createCharacter(req.body); // esta función se importa desde el servicio de characters
    res.status(201).json({ message: 'Created', data: newCharacter });
}


const updateCharacter = (req, res) => {
    const updatedCharacter = characterService.updateCharacter(req.params.characterId);
    res.send(`Update character with id ${req.params.characterId}`);
}


const deleteCharacter = (req, res) => {
    const deletedCharacter = characterService.deleteCharacter(req.params.characterId);
    res.send(`Delete character with id ${req.params.characterId}`);
}


module.exports = {  // exporta las funciones para que puedan ser usadas en otros archivos en este caso en el router de la versión 1
    getAllCharacters,
    getOneCharacterById,
    newCharacter,
    updateCharacter,
    deleteCharacter
}
