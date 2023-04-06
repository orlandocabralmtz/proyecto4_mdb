const characterService = require('../services/charactersService'); // importa el servicio de personajes
// const {Character} = require('./../database/connectDB');
const { getAllCharacter } = require('../services/charactersService'); // importa la función de obtener todos los personajes



const getAllCharacters = async (req, res, next) => {
        const allCharacters = await  getAllCharacter();  // Esto debe ir a services
        console.log(allCharacters)
        res.status(200).json(allCharacters);

}
const getOneCharacter = (req, res) => {
    const character = characterService.getOneCharacter(req.params.characterId);
    res.send(`Get character with id ${req.params.characterId}`);
}
const createCharacter = (req, res) => {
    const createdCharacter = characterService.createCharacter(req.params.characterId);
    res.send(`Create a new character`);
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
    getOneCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
}
