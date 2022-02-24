import { describe } from 'mocha';
import { expect } from 'chai';

import CryptoService from '../src/service/CryptoService.js';
import cryptos from './mocks/cryptos.js';
import Sinon from 'sinon';
import CryptoRepository from '../src/repository/CryptoRepository.js';

const mock = cryptos;
const service = new CryptoService({ repository: new CryptoRepository() });

// const stub = Sinon.stub(service, service.list.name);
// stub.resolves(mock);

const generator = service.list();

describe('CryptoService Suite Tests', () => {
    it('Should call the repository list to page 1', async () => {
        let { value, done } = await generator.next();

        while (!done) {
            console.log('generator', value.length, done);
            ({ value, done } = await generator.next());
        }

        // console.log('generator', value.length, done);

        // // console.log('User =>', String(user));

        // expect(String(user)).to.be.deep.equal(userId)
    })
})