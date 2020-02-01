import {add} from '../../src/service';
// import App from '../../src/App'
describe("First test", () => {
    it("will pass", () => {
        expect(true).to.equal(true);
    });

    // it("App will be defined", () => {
    //     expect(1).to.exist
    // });

    it("will correctly add numbers", () => {
        expect(add(2,3)).to.equal(5);
    })
});