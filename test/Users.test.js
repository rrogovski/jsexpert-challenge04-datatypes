import { describe } from 'mocha';
import { expect } from 'chai';
import Users from './../src/entity/Users.js';
import User from './../src/entity/User.js';

let user = {};
let users = {};
const userId = 'user-id-01';
describe('Users Suite Tests', () => {
    it('Should have a empty Set of User on a new instantce', () => {
        users = new Users();

        expect(users.hasUsers()).to.be.false
    })

    it('Should be able to add a new user', () => {
        user = new User({ id: userId });
        // console.log('user === user => ', user === user)
        users = new Users();
        users.add(user)
        // console.log('Users => ', users)
        
        expect(users.hasUsers()).to.be.true
    })

    it('Should be iterable', () => {
        users = new Users();
        const createdUsers = [];
        for (let i = 0; i < 10; i++) {
            user = new User({ id: `user-id-${i}` });
            createdUsers.push(user);
            users.add(user);            
        }
        // console.log('createdUsers => ', createdUsers)
        // console.log('Array.from(users) => ', Array.from(users))
        
        expect(Array.from(users)).to.be.deep.equal(createdUsers)
    })
})