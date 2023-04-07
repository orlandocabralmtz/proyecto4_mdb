// const characterService = require('../services/charactersService'); // importa el servicio de personajes
const { Character } = require('./../database/connectDB');
const characterService = require('../services/charactersService'); // importa la función de obtener todos los personajes



const getAllCharacters = async (req, res) => {
    try { // un try catch para manejar los errores
        const allCharacters = await characterService.getAllCharacters();  // esta función se importa  desde el servicio de characters 
        res.status(200).json({ message: 'OK', data: allCharacters });  // envía un mensaje y los datos de todos los personajes
    } catch { // si hay un error
        res.status(500).json({ message: 'Internal Server Error' });  // envía un mensaje de error si no se pueden obtener los personajes
    }
}


const getCharacterById = async (req, res) => {
    try {
        const { id } = req.params; // obtiene el id del personaje que se quiere obtener
        const characterById = await characterService.getCharacterById(id); // esta función se importa desde el servicio de characters

        if (!characterById) { // si no se encuentra el personaje con el id que se le pasa 
            return res.status(404).json({ message: 'Character not found' }); // envía un mensaje de error
        }

        res.status(200).json({ message: 'OK by Id', data: characterById }); // envía un mensaje y los datos del personaje con el id que se le pasa
    } catch {
        res.status(500).json({ message: 'Internal Server Error' }); // envía un mensaje de error si no se puede obtener el personaje
    }
}



const newCharacter = async (req, res) => {
    try {
        const data = req.body;

        if (data.name === undefined || data.race === undefined || data.gender === undefined ||
            data.bio === undefined || data.health === undefined || data.attack === undefined ||
            data.defense === undefined || data.kiRestoreSpeed === undefined || data.ability === undefined) { // una validación por si no ingresan  todos los datos del personaje ....
            return res.status(400).json({ message: 'Bad Request' }); // envía un mensaje de error
        }

        await characterService.createCharacter(data); // esta función se importa desde el servicio de characters
        res.status(201).json({ message: 'Created', data: data }); // el status 201 es para cuando se crea un nuevo personaje
    } catch {
        res.status(500).json({ message: 'Internal Server Error' }); // envía un mensaje de error si no se puede crear el personaje
    }
}


const updateCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const character = await characterService.getCharacterById(id); // hace la busqueda del personaje por id para ver si existe

        if (!character) { // si no existe el personaje con el id que se le pasa
            return res.status(404).json({ message: 'Character not found' }); // envía un mensaje de error
        }

        const updateOneCharacter = await characterService.updateCharacter(id, data); // actualiza el personaje con el id que se le pasa y los datos que se le pasan
        res.status(200).json({ message: 'Updated', data: updateOneCharacter });
    } catch {
        res.status(500).json({ message: 'Internal Server Error' }); // envía un mensaje de error si no se puede actualizar el personaje
    }
}


const deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await characterService.getCharacterById(id);

        if (!character) {
            return res.status(404).json({ message: 'Character not found' });
        }

        await characterService.deleteCharacter(id); // elimina el personaje con el id que se le pasa
        res.status(204).json({ message: 'Deleted' }); // el status 204 es para cuando se elimina un personaje
    } catch {
        res.status(500).json({ message: 'Internal Server Error' }); // envía un mensaje de error si no se puede eliminar el personaje   
    }
}


const patchCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const character = await characterService.getCharacterById(id);

        if (!character) {
            return res.status(404).json({ message: 'Character not found' });
        }

        const updateOneCharacter = await characterService.patchCharacter(id, data); // actualiza el personaje con el id que se le pasa y los datos que se le pasan
        res.status(200).json({ message: 'Updated', data: updateOneCharacter });
    } catch {
        res.status(500).json({ message: 'Internal Server Error' });

    }
}





module.exports = {  // exporta las funciones para que puedan ser usadas en otros archivos en este caso en el router de la versión 1
    getAllCharacters,
    getCharacterById,
    newCharacter,
    updateCharacter,
    deleteCharacter,
    patchCharacter
}
