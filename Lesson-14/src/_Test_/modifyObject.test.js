import { GetObject } from "../Endpoints";
import { ModifyObject } from "../Endpoints";

const modifyObject = new ModifyObject('https://api.restful-api.dev/objects');
const getObject = new GetObject('https://api.restful-api.dev/objects');
let createdObject;

describe('ModifyObject endpoints tests', () => {

    test('Post: Check create object', async() => {
        const objectToCreate = {
            "name": "Lenovo ThinkPad",
            "data": {
                "year": 2022,
               "price": 71000
             }
        };
        createdObject = await modifyObject.createObject(objectToCreate);

        expect(createdObject.status).toBe(200);
        expect(createdObject.data).toMatchObject(objectToCreate);
    });

    test('PUT: Check update object', async() => {
        const objectToUpdate = {
            "name": createdObject.data.name,
            "data": {
                "year": createdObject.data.data.year,
                "price": createdObject.data.data.price,
                "CPU model": "Intel Core i7",
                "Hard disk size": "512 Mb"
            }
        };

        const updatedObject = await modifyObject.updateObject(createdObject.data.id, objectToUpdate);
        expect(updatedObject.status).toBe(200);
        expect(updatedObject.data).toMatchObject(objectToUpdate);
    });

    test('PATCH: Check partial update object', async() => {
        const partyallyUpdateObject = await modifyObject.partiallyUpdateObject(createdObject.data.id, {
            "name": "Lenovo ThinkPadTest"
        });

        expect(partyallyUpdateObject.status).toBe(200);
        expect(partyallyUpdateObject.data.name).toBe('Lenovo ThinkPadTest');
    });

    test('DELETE: Check delete object', async() => {
        
        const deletedObject =  await modifyObject.deleteObject(createdObject.data.id);
        
        expect(deletedObject.status).toBe(200);
        expect(deletedObject.data.message).toBe(`Object with id = ${createdObject.data.id} has been deleted.`);

        const resp = await getObject.getObjectById(createdObject.data.id);
        expect(resp.status).toBe(404);
        expect(resp.data.error).toBe(`Oject with id=${createdObject.data.id} was not found.`);
    });
});