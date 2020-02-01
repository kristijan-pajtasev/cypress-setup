import {add} from '../../src/service';
import TestComponent from '../../src/TestComponent'
describe("First test", () => {
    it("will pass", () => {
        expect(true).to.equal(true);
    });

    it("TestComponent will be defined", () => {
        expect(TestComponent).to.exist
    });

    it("will correctly add numbers", () => {
        expect(add(2,3)).to.equal(5);
    })
});