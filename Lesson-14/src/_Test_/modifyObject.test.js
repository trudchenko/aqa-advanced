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

    test('Post: Negative check create object', async() => {
        const badObject = await modifyObject.createObject(null);

        expect(badObject.status).toBe(415);
        expect(badObject.data.error).toBe('415 Unsupported Media Type. The 415 status code indicates that the origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource. One of the examples of getting 415 would be sending a request with a Content-Type header which is not equal to application/json');
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

    test('PUT: Negative check update object', async() => {
        const objectToUpdate = {
            "name1": "reerer"
        };

        const updatedObject = await modifyObject.updateObject(createdObject.data.id, objectToUpdate);
        
        expect(updatedObject.status).toBe(200);
        expect(updatedObject.data.name1).toBeUndefined();
    });

    test('PATCH: Check partial update object', async() => {
        const partyallyUpdateObject = await modifyObject.partiallyUpdateObject(createdObject.data.id, {
            "name": "Lenovo ThinkPadTest"
        });

        expect(partyallyUpdateObject.status).toBe(200);
        expect(partyallyUpdateObject.data.name).toBe('Lenovo ThinkPadTest');
    });

    test('PATCH: Negative check partial update object', async() => {
        const badId = '-2';
        const partyallyUpdateObject = await modifyObject.partiallyUpdateObject(badId, {
            "name": "Lenovo ThinkPadTest"
        });

        expect(partyallyUpdateObject.status).toBe(404);
        expect(partyallyUpdateObject.data.error).toBe(`The Object with id = ${badId} doesn't exist. Please provide an object id which exists or generate a new Object using POST request and capture the id of it to use it as part of PATCH request after that.`);
    });

    test('DELETE: Check delete object', async() => {
        
        const deletedObject =  await modifyObject.deleteObject(createdObject.data.id);
        
        expect(deletedObject.status).toBe(200);
        expect(deletedObject.data.message).toBe(`Object with id = ${createdObject.data.id} has been deleted.`);

        const resp = await getObject.getObjectById(createdObject.data.id);
        expect(resp.status).toBe(404);
        expect(resp.data.error).toBe(`Oject with id=${createdObject.data.id} was not found.`);
    });

    test('DELETE: Negative check delete object', async() => {
        const badId = '-1';
        const deletedObject = await modifyObject.deleteObject(badId);
        
        expect(deletedObject.status).toBe(404)
        expect(deletedObject.data.error).toBe(`Object with id = ${badId} doesn't exist.`);
    });
});