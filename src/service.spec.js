import {add} from './service';

describe("Add service", () => {
    it("will add two numbers correctly", () => {
        expect(add(2,3)).to.equal(5)
    })
});