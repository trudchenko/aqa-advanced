import { GetObject } from "../Endpoints";

const getObject = new GetObject('https://api.restful-api.dev/objects');

describe('GetObject endpoints tests', () => {

    test('GET: Check get all objects', async() => {
        const resp = await getObject.listObjects();
        expect(resp.status).toBe(200);
        const objectArray = Array.from(resp.data);
        expect(objectArray.length).toBe(13);
        expect(objectArray[12].name).toBe('Apple iPad Air');
    });

    test('GET: Check get object by id', async() => {
        const resp = await getObject.getObjectById('13');
        expect(resp.status).toBe(200);
        const testObject =  {id: '13', name: 'Apple iPad Air'};
        const testObject1 =  {
            id: '13',
            name: 'Apple iPad Air',
            data: { Generation: '4th', Price: '519.99', Capacity: '256 GB' }
        };

        expect(resp.data).toMatchObject(testObject);
        expect(resp.data).toEqual(testObject1);
    });

    test('GET: Check list objects by ids', async() => {

        const ids = new URLSearchParams();
        ids.append("id", 3);
        ids.append("id", 5);
        ids.append("id", 10);

        const resp = await getObject.listObjectsByIds(ids);
        expect(resp.status).toBe(200);
        const objectArray = Array.from(resp.data);
        expect(objectArray.length).toBe(3);

        const testObject = {
            id: '5',
            name: 'Samsung Galaxy Z Fold2',
            data: { price: 689.99, color: 'Brown' }
        };
       
        expect(objectArray[1]).toEqual(testObject);
    });
});