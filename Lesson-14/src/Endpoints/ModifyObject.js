import { RestClient } from "../restClient";

export default class ModifyObject extends RestClient {

    constructor(baseUrl, configOverrids) {
        super(baseUrl, configOverrids)
        this.headers = {};
    }

    async createObject(object) {
        return this.sendPost({data: object});
    }

    async updateObject(id, object) {
        return this.sendPut({url: id, data: object});
    }

    async partiallyUpdateObject(id, object) {
        return this.sendPatch({url: id, data: object});
    }

    async deleteObject(id) {
        return this.sendDelete({url: id});
    }
}