import { RestClient } from "../restClient";

export default class GetObject extends RestClient {

    constructor(baseUrl, configOverrids) {
        super(baseUrl, configOverrids)
        this.headers = {};
    }

    async listObjects() {
        return this.sendGet({});
    }

    async getObjectById(id) {
        return this.sendGet({url: id});
    }

    async listObjectsByIds(ids) {
        return this.sendGet({params: ids});
    }
}