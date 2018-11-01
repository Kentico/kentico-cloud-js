import { ViewContentItemResponse } from '../../lib';
import * as viewContentItemJson from '../fake-responses/content-items/view-content-item.json';
import { getTestClientWithJson } from '../setup';

describe('View content item', () => {
    let response: ViewContentItemResponse;

    beforeAll((done) => {
        getTestClientWithJson(viewContentItemJson).viewContentItem().byCodename(viewContentItemJson.codename)
            .getObservable()
            .subscribe(result => {
                response = result;
                done();
            });
    });

    it(`response should be instance of ViewContentItemResponse class`, () => {
        expect(response).toEqual(jasmine.any(ViewContentItemResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`item properties should be mapped`, () => {
        expect(response.data.codename).toEqual(viewContentItemJson.codename);
        expect(response.data.externalId).toEqual(viewContentItemJson.external_id);
        expect(response.data.id).toEqual(viewContentItemJson.id);
        expect(response.data.lastModified).toEqual(jasmine.any(Date));
        expect(response.data.lastModified).toEqual(new Date(viewContentItemJson.last_modified));
        expect(response.data.name).toEqual(viewContentItemJson.name);
        expect(response.data.type).toEqual(viewContentItemJson.type);
    });

});

