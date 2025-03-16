import axios from 'axios';

export default class RestClient {

   #axiosInstance;
 
   constructor(baseUrl,configOverrids) {
      this.baseUrl = baseUrl;
      this.#axiosInstance = axios.create({baseURL: this.baseUrl, validateStatus: () => true, ...configOverrids });
   }

   async sendPost ({url, data, headers, params}) {
      return this.#sendRequest({url, method: 'POST', data, headers, params});
   }

   async sendGet ({url,headers, params}) {
      return this.#sendRequest({url, method: 'GET', headers, params});
   }

   async sendPut ({url, data, headers, params}) {
      return this.#sendRequest({url, method: 'PUT', data, headers, params});
   }

   async sendPatch ({url, data, headers, params}) {
      return this.#sendRequest({url, method: 'PATCH', data, headers, params});
   }

   async sendDelete ({url,data, headers, params}) {
      return this.#sendRequest({url, method: 'DELETE', data, headers, params});
   }

   async #sendRequest({url, method, data, headers, params}) {
      return this.#axiosInstance.request({url, method, data, headers, params});
   }
}