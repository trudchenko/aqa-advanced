import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.restful-api.dev/objects',
  validateStatus: function (status) {
    return true;
  }, 
});

const callAxiosInstance = async () => {  
    const listObjects = await axiosInstance.get();
    console.log(listObjects.data);

    const createObject = await axiosInstance.post('',
        {
            "name": "Lenovo ThinkPad",
            "data": {
               "year": 2022,
               "price": 71000
            }
         }
    );
    console.log(createObject.data);

    const myObjectId = createObject.data.id;
    const getMyObject = await axiosInstance.get(myObjectId);
    console.log(getMyObject.data);

    const myObject = getMyObject.data;
    const partiallyUpdateObject = await axiosInstance.patch(myObjectId, 
        {
            "data": {
                "year": myObject.data.year,
                "price": myObject.data.price,
                "CPU model": "Intel Core i7",
                "Hard disk size": "512 Mb"
            }
        }
    );
    console.log(partiallyUpdateObject.data);

    const deleteObject = await axiosInstance.delete(myObjectId);
    console.log(deleteObject.data);
} 

callAxiosInstance();