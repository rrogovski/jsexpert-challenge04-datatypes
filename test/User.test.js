import { describe } from 'mocha';
import { expect } from 'chai';
import User from '../src/entity/User.js';

let user = {};
const userId = 'user-id-01';
describe('User Suite Tests', () => {
    it('Should able to convert User to string', () => {
        user = new User({ id: userId })

        // console.log('User =>', String(user));

        expect(String(user)).to.be.deep.equal(userId)
    })
})